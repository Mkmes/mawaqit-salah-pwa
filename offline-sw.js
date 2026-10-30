'use strict';

// Keep the former worker URL available so existing installations can update.
// No fetch handler, pre-cache or offline response is installed.
self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name =>
      name.startsWith('mwaqit-offline-') ||
      ['flutter-app-cache', 'flutter-temp-cache', 'flutter-app-manifest'].includes(name)
    ).map(name => caches.delete(name)));
    await self.clients.claim();
    await self.registration.unregister();
    const windows = await self.clients.matchAll({ type: 'window' });
    await Promise.all(windows
      .filter(client => client.url.startsWith(self.registration.scope))
      .map(client => client.navigate(client.url)));
    // Settings and imported schedules are not in these file caches and remain.
  })());
});
