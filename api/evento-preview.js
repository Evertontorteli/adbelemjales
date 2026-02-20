/**
 * Preview para compartilhamento: retorna HTML com og:image e dados do evento
 * para WhatsApp/Facebook mostrarem a foto e os dizeres ao compartilhar o link.
 * URL: /evento/:id (rewrite para este handler)
 */

// Sempre usar o domínio do site (adbelemjales.com). Não usar VERCEL_URL para evitar
// que o redirect no celular leve para xxx.vercel.app em vez do domínio próprio.
const SITE_ORIGIN = process.env.SITE_ORIGIN || process.env.VITE_SITE_ORIGIN || 'https://adbelemjales.com';

function isImageAttachment(att) {
  if (att.mimeType?.startsWith('image/')) return true;
  if (!att.fileUrl) return false;
  const path = (att.fileUrl || '').split('?')[0].toLowerCase();
  return /\.(jpg|jpeg|png|gif|webp|bmp)(\?|$)/i.test(path);
}

function toDirectImageUrl(att) {
  const fileId =
    att.fileId ??
    (att.fileUrl?.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)?.[1] ?? att.fileUrl?.match(/[?&]id=([a-zA-Z0-9_-]+)/)?.[1]);
  if (fileId) return `https://drive.google.com/uc?export=view&id=${fileId}`;
  if (att.fileUrl && !att.fileUrl.includes('drive.google.com')) return att.fileUrl;
  return null;
}

function getEventImageUrl(event) {
  const attachments = event?.attachments ?? [];
  for (const att of attachments) {
    if (!att.fileUrl && !att.fileId) continue;
    if (!isImageAttachment(att)) continue;
    const direct = toDirectImageUrl(att);
    if (direct) return direct;
    if (att.fileUrl && !att.fileUrl.includes('drive.google.com')) return att.fileUrl;
  }
  if (event?.description) {
    const imgMatch = event.description.match(/!\[[^\]]*\]\((https?:\/\/[^)]+)\)|<img[^>]+src=["'](https?:\/\/[^"']+)["']/i);
    if (imgMatch) return imgMatch[1] ?? null;
    const urlMatch = event.description.match(/(https?:\/\/[^\s<>"]+\.(?:jpg|jpeg|png|gif|webp))/i);
    if (urlMatch) return urlMatch[1];
  }
  return null;
}

function formatDateForMeta(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  } catch {
    return '';
  }
}

function buildPreviewHtml({ title, description, imageUrl, canonicalUrl }) {
  const safeTitle = escapeHtml(title || 'Evento');
  const safeDesc = escapeHtml(description || '');
  const safeImage = imageUrl ? escapeHtml(imageUrl) : '';
  const safeUrl = escapeHtml(canonicalUrl || SITE_ORIGIN + '/eventos');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${safeTitle}</title>
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${safeUrl}" />
  <meta property="og:title" content="${safeTitle}" />
  <meta property="og:description" content="${safeDesc}" />
  <meta property="og:image" content="${safeImage}" />
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:site_name" content="AD Belém Jales" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${safeTitle}" />
  <meta name="twitter:description" content="${safeDesc}" />
  <meta name="twitter:image" content="${safeImage}" />
  <meta http-equiv="refresh" content="0;url=${escapeHtml(canonicalUrl)}" />
  <link rel="canonical" href="${safeUrl}" />
</head>
<body>
  <p>Redirecionando… <a href="${safeUrl}">Abrir evento</a></p>
</body>
</html>`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async function handler(req, res) {
  const eventIdRaw = req.query.e || req.query.id || '';
  const eventId = decodeURIComponent(eventIdRaw).trim();
  const apiKey = process.env.VITE_GOOGLE_CALENDAR_API_KEY || process.env.GOOGLE_CALENDAR_API_KEY;
  const calendarId = process.env.VITE_GOOGLE_CALENDAR_ID || process.env.GOOGLE_CALENDAR_ID;

  if (!eventId || !apiKey || !calendarId) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(
      buildPreviewHtml({
        title: 'AD Belém Jales – Eventos',
        description: 'Confira a programação da igreja.',
        imageUrl: '',
        canonicalUrl: SITE_ORIGIN + '/eventos',
      })
    );
    return;
  }

  try {
    const calIdEnc = encodeURIComponent(calendarId);
    const eventIdEnc = encodeURIComponent(eventId);
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calIdEnc}/events/${eventIdEnc}?key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.status(200).send(
        buildPreviewHtml({
          title: 'AD Belém Jales – Eventos',
          description: 'Confira a programação da igreja.',
          imageUrl: '',
          canonicalUrl: SITE_ORIGIN + '/eventos',
        })
      );
      return;
    }
    const event = await response.json();
    const start = event.start?.dateTime || event.start?.date;
    const dateLabel = formatDateForMeta(start);
    const location = event.location || '';
    const descParts = [dateLabel, location].filter(Boolean);
    const metaDescription = descParts.join(' · ') || 'Evento da AD Belém Jales';
    const imageUrl = getEventImageUrl(event);
    const title = event.summary || 'Evento';
    const canonicalUrl = `${SITE_ORIGIN}/eventos?e=${encodeURIComponent(eventId)}`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    res.status(200).send(
      buildPreviewHtml({
        title,
        description: metaDescription,
        imageUrl: imageUrl || `${SITE_ORIGIN}/static/logo-og.png`,
        canonicalUrl,
      })
    );
  } catch (err) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(
      buildPreviewHtml({
        title: 'AD Belém Jales – Eventos',
        description: 'Confira a programação da igreja.',
        imageUrl: '',
        canonicalUrl: SITE_ORIGIN + '/eventos',
      })
    );
  }
}
