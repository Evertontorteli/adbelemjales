/**
 * POST /api/push-subscribe
 * Recebe a PushSubscription do frontend e grava no Supabase.
 * Body: { subscription: PushSubscriptionJSON } ou { endpoint, keys: { p256dh, auth } }
 */

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getSupabase() {
  if (!supabaseUrl || !supabaseServiceKey) return null;
  return createClient(supabaseUrl, supabaseServiceKey);
}

function parseSubscription(body) {
  if (!body || typeof body !== 'object') return null;
  const sub = body.subscription || body;
  const endpoint = sub.endpoint || body.endpoint;
  const keys = sub.keys || body.keys;
  if (!endpoint || !keys || !keys.p256dh || !keys.auth) return null;
  return { endpoint, p256dh: keys.p256dh, auth: keys.auth };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return res.status(503).json({ error: 'Push não configurado. Configure SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY.' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Body JSON inválido' });
  }

  const subscription = parseSubscription(body);
  if (!subscription) {
    return res.status(400).json({ error: 'Inscrição inválida. Envie subscription com endpoint e keys (p256dh, auth).' });
  }

  try {
    const { error } = await supabase
      .from('push_subscriptions')
      .upsert(
        {
          endpoint: subscription.endpoint,
          p256dh: subscription.p256dh,
          auth: subscription.auth,
        },
        { onConflict: 'endpoint' }
      );

    if (error) {
      console.error('push-subscribe supabase error:', error);
      return res.status(500).json({ error: 'Erro ao salvar inscrição' });
    }
    return res.status(200).json({ ok: true, message: 'Inscrição ativada. Você receberá lembretes 1h antes dos eventos.' });
  } catch (err) {
    console.error('push-subscribe error:', err);
    return res.status(500).json({ error: 'Erro interno' });
  }
};
