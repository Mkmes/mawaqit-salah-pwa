(function () {
  'use strict';
  const status = document.getElementById('offline-status');
  if (!status) return;

  function show(message, ready) {
    status.textContent = message;
    status.dataset.ready = String(ready);
    status.hidden = false;
    if (ready) setTimeout(() => { status.hidden = true; }, 6000);
  }

  if (!('serviceWorker' in navigator) || !window.isSecureContext) {
    show('لا يدعم هذا المتصفح الحفظ دون إنترنت. افتح الرابط عبر Safari وHTTPS.', false);
    return;
  }

  // Refresh an existing Flutter installation once the new full-offline worker
  // takes control, so the app itself also uses the freshly verified release.
  const previousController = navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (previousController &&
        navigator.serviceWorker.controller !== previousController) {
      window.location.reload();
    }
  });

  function ask(worker, type) {
    return new Promise((resolve, reject) => {
      const channel = new MessageChannel();
      const timeout = setTimeout(() => {
        channel.port1.close();
        reject(new Error('انتهت مهلة فحص الملفات'));
      }, 120000);
      channel.port1.onmessage = (event) => {
        clearTimeout(timeout);
        channel.port1.close();
        if (event.data && event.data.complete === true) resolve();
        else reject(new Error(event.data?.error || 'ملفات غير مكتملة'));
      };
      worker.postMessage({ type }, [channel.port2]);
    });
  }

  async function prepare() {
    try {
      // updateViaCache:none prevents a cached old worker from hiding a release.
      let registration = await navigator.serviceWorker.getRegistration(document.baseURI);
      if (!registration?.active?.scriptURL.endsWith('/offline-sw.js')) {
        registration = await navigator.serviceWorker.register('offline-sw.js', {
          updateViaCache: 'none',
        });
      } else if (navigator.onLine) {
        // A failed update must not invalidate a complete existing offline
        // release (for example, Wi-Fi is connected but has no internet).
        registration.update().catch(error => console.info('Update unavailable:', error));
      }
      // The first load may not yet be controlled. The active worker can still
      // verify its cache through a MessageChannel.
      if (!registration.active) {
        await new Promise((resolve, reject) => {
          const timer = setTimeout(() => reject(new Error('تعذر تثبيت الملفات')), 120000);
          const listener = () => {
            if (registration.active) {
              clearTimeout(timer);
              navigator.serviceWorker.removeEventListener('controllerchange', listener);
              resolve();
            }
          };
          navigator.serviceWorker.addEventListener('controllerchange', listener);
          listener();
        });
      }
      try {
        await ask(registration.active, 'VERIFY_OFFLINE');
      } catch (error) {
        if (!navigator.onLine) throw error;
        // Repair evicted or incomplete cache entries before claiming readiness.
        await ask(registration.active, 'REPAIR_OFFLINE');
      }
      if (navigator.storage?.persist) {
        navigator.storage.persist().catch(() => {});
      }
      show('اكتمل تجهيز التطبيق للعمل دون إنترنت.', true);
    } catch (error) {
      console.warn('Offline preparation incomplete:', error);
      show('لم يكتمل تنزيل ملفات العمل دون إنترنت. اتصل بالإنترنت وأعد فتح التطبيق.', false);
    }
  }

  window.addEventListener('load', prepare, { once: true });
})();
