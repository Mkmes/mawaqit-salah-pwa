// Compatibility filename: retire older offline installs, never prepare a new one.
(async function () {
  'use strict';
  if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
  try {
    const scope = new URL('./', document.baseURI).href;
    const registration = await navigator.serviceWorker.getRegistration(scope);
    if (registration && registration.scope === scope) {
      // Replace the old cache-first worker with a network-only retirement
      // worker. Removing a registration alone leaves open tabs controlled.
      await navigator.serviceWorker.register(new URL('offline-sw.js', scope), {
        scope, updateViaCache: 'none',
      });
    } else if ('caches' in window) {
      const names = await caches.keys();
      await Promise.all(names.filter(name => name.startsWith('mwaqit-offline-'))
        .map(name => caches.delete(name)));
    }
    // Deliberately do not touch localStorage/IndexedDB: settings stay intact.
  } catch (error) {
    console.warn('Could not retire the previous offline installation:', error);
  }
})();
