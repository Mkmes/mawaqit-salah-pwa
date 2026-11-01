// Browser-only install UI. No caching, permissions, audio or saved-data changes.
(function () {
  'use strict';
  const displayMode = window.matchMedia('(display-mode: standalone)');
  const fullscreenMode = window.matchMedia('(display-mode: fullscreen)');
  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const android = /Android/i.test(navigator.userAgent);
  const installed = () => navigator.standalone === true ||
    displayMode.matches || fullscreenMode.matches;
  let promptEvent = null;
  let busy = false;
  let completed = false;
  let previousFocus = null;

  const banner = document.createElement('div');
  banner.id = 'app-install';
  banner.lang = 'ar';
  banner.hidden = true;
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'تثبيت التطبيق';
  button.setAttribute('aria-haspopup', 'dialog');
  banner.appendChild(button);
  document.body.appendChild(banner);

  const help = document.createElement('div');
  help.id = 'app-install-help';
  help.lang = 'ar';
  help.hidden = true;
  help.innerHTML = '<section class="install-card" role="dialog" aria-modal="true" ' +
    'aria-labelledby="install-title" tabindex="-1">' +
    '<h2 id="install-title">تثبيت مواقيت الصلاة</h2>' +
    '<div id="install-instructions"></div>' +
    '<p class="install-note">بعد الإضافة افتح التطبيق من أيقونته على الشاشة الرئيسية. ' +
    'هذه نسخة ويب وليست ملف APK، وتتطلب اتصالًا بالإنترنت.</p>' +
    '<button type="button" id="install-close">حسنًا</button></section>';
  document.body.appendChild(help);
  const close = help.querySelector('#install-close');
  const card = help.querySelector('.install-card');
  const instructions = help.querySelector('#install-instructions');

  function sync() {
    banner.hidden = completed || installed() || !(android || ios || promptEvent);
    if (installed() || completed) hideHelp();
  }
  function hideHelp() {
    if (help.hidden) return;
    help.hidden = true;
    if (previousFocus && previousFocus.isConnected) previousFocus.focus();
  }
  function showHelp() {
    previousFocus = document.activeElement;
    instructions.innerHTML = ios
      ? '<p>على الآيفون والآيباد:</p><ol>' +
        '<li>افتح هذا الرابط في متصفح <b>Safari</b>، وليس داخل تطبيق آخر.</li>' +
        '<li>اضغط زر <b>المشاركة</b> (مربع وسهم إلى الأعلى). ' +
        'قد تجده داخل قائمة المتصفح بحسب إصدار النظام.</li>' +
        '<li>اختر <b>إضافة إلى الشاشة الرئيسية</b>؛ مرّر قائمة المشاركة إن لم يظهر الخيار.</li>' +
        '<li>إن ظهر خيار <b>فتح كتطبيق ويب</b> فاتركه مفعّلًا، ثم اضغط <b>إضافة</b>.</li></ol>'
      : '<p>إذا لم تظهر نافذة التثبيت:</p><ol>' +
        '<li>افتح الرابط في <b>Chrome</b> على أندرويد، وليس داخل تطبيق آخر.</li>' +
        '<li>افتح قائمة المتصفح <b>⋮</b>.</li>' +
        '<li>اختر <b>تثبيت التطبيق</b> أو <b>إضافة إلى الشاشة الرئيسية</b>، ثم أكّد الإضافة.</li></ol>' +
        '<p>إذا كان التطبيق مثبتًا بالفعل، افتحه من أيقونته. ' +
        'قد تختلف الخيارات أو لا تتاح حسب المتصفح والجهاز.</p>';
    help.hidden = false;
    close.focus();
  }

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    promptEvent = event;
    sync();
  });
  window.addEventListener('appinstalled', () => {
    completed = true;
    promptEvent = null;
    sync();
  });
  displayMode.addEventListener?.('change', sync);
  fullscreenMode.addEventListener?.('change', sync);
  window.addEventListener('pageshow', sync);
  button.addEventListener('click', async () => {
    if (busy) return;
    if (!promptEvent) return showHelp();
    const event = promptEvent;
    promptEvent = null; // Each native event is usable only once.
    busy = true;
    button.disabled = true;
    try {
      await event.prompt(); // Must run within the user's click.
      const choice = await event.userChoice;
      if (choice.outcome === 'accepted') {
        completed = true;
        sync();
      }
    } catch (error) {
      console.warn('Install prompt unavailable:', error);
      showHelp();
    } finally {
      busy = false;
      button.disabled = false;
    }
  });
  close.addEventListener('click', hideHelp);
  help.addEventListener('click', event => {
    if (event.target === help) hideHelp();
  });
  help.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      hideHelp();
    } else if (event.key === 'Tab') {
      // The only interactive element in this small dialog is the close button.
      event.preventDefault();
      close.focus();
    }
  });
  // Keep the dialog above Flutter's full-screen canvas without changing its size.
  card.setAttribute('aria-describedby', 'install-instructions');
  sync();
})();
