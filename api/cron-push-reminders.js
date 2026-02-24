/**
 * Cron: envia notificações Web Push 1 hora antes de cada evento.
 * Chamado pelo Vercel Cron (ex.: a cada 15 min). Busca eventos do Google Calendar
 * que começam em ~55–65 min e envia um push para todas as inscrições no Supabase.
 */

const { createClient } = require('@supabase/supabase-js');
const webpush = require('web-push');

const SITE_ORIGIN = process.env.SITE_ORIGIN || process.env.VITE_SITE_ORIGIN || 'https://adbelemjales.com';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const vapidPublicKey = process.env.VAPID_PUBLIC_KEY || process.env.VITE_VAPID_PUBLIC_KEY;
const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;
const apiKey = process.env.VITE_GOOGLE_CALENDAR_API_KEY || process.env.GOOGLE_CALENDAR_API_KEY;
const calendarId = process.env.VITE_GOOGLE_CALENDAR_ID || process.env.GOOGLE_CALENDAR_ID;

function getSupabase() {
  if (!supabaseUrl || !supabaseServiceKey) return null;
  return createClient(supabaseUrl, supabaseServiceKey);
}

/** Janela de 1 hora: eventos que começam entre now+55min e now+65min */
function getTimeWindow() {
  const now = new Date();
  const from = new Date(now.getTime() + 55 * 60 * 1000);
  const to = new Date(now.getTime() + 65 * 60 * 1000);
  return {
    timeMin: from.toISOString(),
    timeMax: to.toISOString(),
  };
}

function formatEventTime(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false });
  } catch {
    return '';
  }
}

module.exports = async function handler(req, res) {
  // Vercel Cron envia um header secreto; opcionalmente exige CRON_SECRET
  const authHeader = req.headers.authorization || req.headers['x-vercel-cron-auth'];
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    const vercelCron = req.headers['x-vercel-cron'] === '1';
    if (!vercelCron) {
      return res.status(401).json({ error: 'Não autorizado' });
    }
  }

  if (!vapidPrivateKey || !apiKey || !calendarId) {
    return res.status(503).json({
      error: 'Configuração incompleta. Defina VAPID_PRIVATE_KEY, GOOGLE_CALENDAR_API_KEY e GOOGLE_CALENDAR_ID.',
    });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return res.status(503).json({ error: 'Supabase não configurado.' });
  }

  webpush.setVapidDetails(
    `mailto:${SITE_ORIGIN}`,
    vapidPublicKey || '',
    vapidPrivateKey
  );

  const { timeMin, timeMax } = getTimeWindow();
  const calIdEnc = encodeURIComponent(calendarId);
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calIdEnc}/events?` +
    `key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime&maxResults=20`;

  let events = [];
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error('Google Calendar error:', response.status, errData);
      return res.status(502).json({ error: 'Erro ao buscar eventos', details: errData });
    }
    const data = await response.json();
    events = (data.items || []).filter((e) => e.status !== 'cancelled');
  } catch (err) {
    console.error('cron-push-reminders fetch events error:', err);
    return res.status(502).json({ error: 'Erro ao buscar eventos' });
  }

  const { data: subscriptions, error: subError } = await supabase
    .from('push_subscriptions')
    .select('id, endpoint, p256dh, auth');

  if (subError || !subscriptions || subscriptions.length === 0) {
    return res.status(200).json({
      ok: true,
      events: events.length,
      sent: 0,
      message: subError ? 'Erro ao carregar inscrições' : 'Nenhuma inscrição',
    });
  }

  const toRemove = [];
  let sentCount = 0;

  for (const event of events) {
    const startStr = event.start?.dateTime || event.start?.date;
    const title = event.summary || 'Evento';
    const timeLabel = formatEventTime(startStr);
    const body = timeLabel ? `Às ${timeLabel} – ${event.location || ''}`.trim() : (event.location || 'Confira a programação.');
    const payload = JSON.stringify({
      title: `Em 1 hora: ${title}`,
      body,
      url: `${SITE_ORIGIN}/eventos?e=${encodeURIComponent(event.id || '')}`,
    });

    for (const row of subscriptions) {
      const subscription = {
        endpoint: row.endpoint,
        keys: { p256dh: row.p256dh, auth: row.auth },
      };
      try {
        await webpush.sendNotification(subscription, payload);
        sentCount++;
      } catch (err) {
        if (err.statusCode === 410 || err.statusCode === 404) {
          toRemove.push(row.endpoint);
        }
      }
    }
  }

  if (toRemove.length > 0) {
    const uniqueEndpoints = [...new Set(toRemove)];
    for (const endpoint of uniqueEndpoints) {
      await supabase.from('push_subscriptions').delete().eq('endpoint', endpoint);
    }
  }

  return res.status(200).json({
    ok: true,
    events: events.length,
    subscriptions: subscriptions.length,
    sent: sentCount,
    removed: toRemove.length,
  });
};
