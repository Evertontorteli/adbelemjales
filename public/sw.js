/* eslint-disable no-restricted-globals */
// Service Worker: recebe push e exibe notificação (lembrete 1h antes do evento)
self.addEventListener('push', function (event) {
  if (!event.data) return;
  let payload = { title: 'Lembrete', body: '', url: '/' };
  try {
    payload = event.data.json();
  } catch {
    payload.body = event.data.text();
  }
  const options = {
    body: payload.body || 'Confira a programação.',
    icon: '/static/LogoBleia.svg',
    badge: '/static/LogoBleia.svg',
    tag: payload.url || 'event-reminder',
    data: { url: payload.url || '/' },
    requireInteraction: false,
  };
  event.waitUntil(self.registration.showNotification(payload.title || 'AD Belém Jales', options));
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const url = event.notification.data?.url || '/eventos';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      if (clientList.length > 0 && clientList[0].url) {
        clientList[0].navigate(url).then(function (c) { return c?.focus(); });
      } else if (self.clients.openWindow) {
        self.clients.openWindow(new URL(url, self.location.origin).href);
      }
    })
  );
});
