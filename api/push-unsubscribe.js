/**
 * POST /api/push-unsubscribe
 * Remove inscrição pelo endpoint.
 * Body: { endpoint: string } ou { subscription: { endpoint } }
 */

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getSupabase() {
  if (!supabaseUrl || !supabaseServiceKey) return null;
  return createClient(supabaseUrl, supabaseServiceKey);
}

function getEndpoint(body) {
  if (!body || typeof body !== 'object') return null;
  const endpoint = body.endpoint || body.subscription?.endpoint;
  return typeof endpoint === 'string' && endpoint.trim() ? endpoint.trim() : null;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return res.status(503).json({ error: 'Push não configurado.' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Body JSON inválido' });
  }

  const endpoint = getEndpoint(body);
  if (!endpoint) {
    return res.status(400).json({ error: 'Envie endpoint ou subscription.endpoint' });
  }

  try {
    const { error } = await supabase
      .from('push_subscriptions')
      .delete()
      .eq('endpoint', endpoint);

    if (error) {
      console.error('push-unsubscribe supabase error:', error);
      return res.status(500).json({ error: 'Erro ao remover inscrição' });
    }
    return res.status(200).json({ ok: true, message: 'Lembretes desativados.' });
  } catch (err) {
    console.error('push-unsubscribe error:', err);
    return res.status(500).json({ error: 'Erro interno' });
  }
};
