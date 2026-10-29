'use strict';

// The release builder replaces the two placeholders with a complete, hashed
// file list. All URLs are relative to this worker's scope (also on /repo/).
const VERSION = '87e1fd88b920d7be';
const FILES = [{"path":"assets/AssetManifest.bin","size":4327,"sha256":"e1952382689e75baf88d598411dc71342c05ff91365235bc3d7ee797a5445867"},{"path":"assets/AssetManifest.bin.json","size":5774,"sha256":"e7af59c15ddc3af8504b177d10604f1d00e1abb84f17eacccc1278a9c5c6d4af"},{"path":"assets/AssetManifest.json","size":3927,"sha256":"c326bc42a375009a2e732c710a1e17ae9ad9e642197170aaedcc5a042a7a9c31"},{"path":"assets/FontManifest.json","size":305,"sha256":"55378bf7dd9b76af5f6d236279406ef1543b997863e0ef9f636d51401285f3e5"},{"path":"assets/NOTICES","size":1695022,"sha256":"0c142e1ca008f435aa1259d55934938ee075ef892ed838d3e57dd4ccfc06d211"},{"path":"assets/assets/data/abu-hurayra-50-hadiths.json","size":25724,"sha256":"5e97059efe114ffff6ce021e6256032da2373151e9f80ec8c15f6e204358dce2"},{"path":"assets/assets/data/adhan-explanations.json","size":5633,"sha256":"6474fd8462ea6583c9114bcda01758c546af4d0942699840a45d95f00f7a2463"},{"path":"assets/assets/data/adhan-hadiths.json","size":4031,"sha256":"336bbc32817d2ab8e375838227c0697206a126a8f066446c7f3ea8bb55c83008"},{"path":"assets/assets/data/al-abbasi-prayer-times.json","size":92209,"sha256":"44342a4fc446a8fd288182506921f4c8e7d1555ea5e600c23efb8a8a2d1ae299"},{"path":"assets/assets/data/alam-prayer-times.json","size":92197,"sha256":"0754167a4c05f27874d4da4a617f89dce04ddb17ffe3a2aaa1a214df9c20186b"},{"path":"assets/assets/data/baggara-prayer-times.json","size":90377,"sha256":"a343d7a00f2d077ea3cffed865ad095c7e6de1dbe42006bbbfb2f8867be45353"},{"path":"assets/assets/data/daily-hadiths-from-images.json","size":42270,"sha256":"e84b6c64d6fba75fa0bfed1b185cd7a1a1c7f9863d517f904dba6833c3624661"},{"path":"assets/assets/data/dashboard-hadiths.json","size":79048,"sha256":"e4e4abfa28db594b64cfe05a7c3db1575dd632f6c818d437d346b25149ec8ed3"},{"path":"assets/assets/data/dhuwaib-prayer-times.json","size":92201,"sha256":"59e1b1cd7fafbcd90e791a14f80c9e6798cf6ce73dd8cf537b2af1958878feff"},{"path":"assets/assets/data/dua-ticker.json","size":13395,"sha256":"6c68e9caf46b7c5455995da7fca6329f3eab6adc996501aa7c1c29bb7b64c2b0"},{"path":"assets/assets/data/evening-adhkar.txt","size":11552,"sha256":"a773eac119ccdd3f00472f0ea39829db6a12add130781a8c3780d4f24948dbdd"},{"path":"assets/assets/data/hawd6-prayer-times.json","size":92201,"sha256":"5ea1f28f2f34333a83be4f698e73b05a4a5f42dc0881cb745799e5c9d4a43e12"},{"path":"assets/assets/data/hawija-prayer-times.json","size":92224,"sha256":"0f3342a48aaff08c20142c988dcc666904d5bdcf87c84d7185c9dd86f3eb0dfd"},{"path":"assets/assets/data/morning-adhkar.txt","size":10963,"sha256":"fe07ff527a4ee345cb3d39ef2e986ab3a4cad84af94563bd78764327d704090c"},{"path":"assets/assets/data/numaysa-prayer-times.json","size":92207,"sha256":"e654fbcf3122f3afa9fe9697c27784feb7c89e0fddd3503a20162c527426972d"},{"path":"assets/assets/data/pdf-hadiths-100.json","size":34067,"sha256":"ce5fc9e57baaa6265123ddd42729b79ea585857b632239c3ffdc4cee743f571f"},{"path":"assets/assets/data/pdf-hadiths-600.json","size":246027,"sha256":"6f563d3c9bca5fc5aab4b2901d7374fb4b7dc76d46bfe7f5913fd5d50136e5d2"},{"path":"assets/assets/data/post-prayer-adhkar.json","size":6574,"sha256":"cb43ec69ad220dddf97675a5e0c74c327efcb20a41e2dab87d2d92a9f84810e3"},{"path":"assets/assets/data/prayer-times-template.json","size":691,"sha256":"ae4128126028a1dd9b0db3edebc85dcf038bf986c8b8abf68a145c8bd18ffa2a"},{"path":"assets/assets/data/ramadan-hadiths.json","size":30178,"sha256":"4ca09a55c64592c6e304d6ece3e04f3bebfa44369008c89c8234b24fa1cf309e"},{"path":"assets/assets/data/shajara-prayer-times.json","size":90375,"sha256":"804c78d0db3ee7703482105d343b344b618bec2ee817f8ff58f2a3ea9d6e38a2"},{"path":"assets/assets/data/tikrit-prayer-times.json","size":92222,"sha256":"d23c58ebae4b8de58900fa7ce24c5639515e4c2086de65f102bcd961d77ed7a5"},{"path":"assets/assets/fonts/Amiri-Bold.ttf","size":413480,"sha256":"cfccb794268e7d573d857e6d6a67f89cf8a053e8ffd85dfa0c8ec1bb36fc4827"},{"path":"assets/assets/fonts/Amiri-Regular.ttf","size":431116,"sha256":"ab391c4147d054c48976e98322ad0eefe1427aa0e0502a12a4c75d80a70cfcd7"},{"path":"assets/assets/fonts/NotoNaskhArabic-Bold.ttf","size":184164,"sha256":"7432f2350487d9f784b47a24526d9fc48f2712bb6c2ff602898b104b0c26ee80"},{"path":"assets/assets/images/no-phone.png","size":13374,"sha256":"e358c771e279b0a5262595376933060392078af532d07c384613b638bcd106b8"},{"path":"assets/assets/themes/asr-01.webp","size":6306,"sha256":"a289359e02a679174a49d01b542624b141422eebecb4455a11954c5fb27381d2"},{"path":"assets/assets/themes/asr-02.webp","size":7488,"sha256":"57b2582794ffc60001ad0d83bfbbf1e1f0a35199d3e2b076cb87e4c5ee01e693"},{"path":"assets/assets/themes/asr-03.webp","size":6096,"sha256":"8eba60efc853f87d6605fa06fbb633c753e1c78c94d07f39b394314e1324713a"},{"path":"assets/assets/themes/asr-04.webp","size":19238,"sha256":"4d6b94c4e3ab17e7b5a534ae258d143735ec6510fbd0a92733856e7ff941d8c2"},{"path":"assets/assets/themes/asr-05.webp","size":8608,"sha256":"c19d83eec60084289907c5a9dfc2ef1cadc4e74b267341b7eb7e571486d24a8d"},{"path":"assets/assets/themes/dhuhr-01.webp","size":5424,"sha256":"4744a090b26cb60cc990ea836d277f0b9510139b48cad03524c1b344c9eeafc8"},{"path":"assets/assets/themes/dhuhr-02.webp","size":6040,"sha256":"3b887af532738ddf34aaf9bf2ddbe7b549d3c180a6bfa2ef5a400cd4fdae2cfe"},{"path":"assets/assets/themes/dhuhr-03.webp","size":5478,"sha256":"491f6af64f47831b6e776caffb5587e057146db7bbe144f3823f25da30cab4eb"},{"path":"assets/assets/themes/dhuhr-04.webp","size":25080,"sha256":"7db1c6e8c65701d3cc4cefd08c96decc9b742cfef9aeeb2020a7c5c3bd5e1cdb"},{"path":"assets/assets/themes/dhuhr-05.webp","size":7480,"sha256":"b2000454e87ff49595a45e48b97d2b4919f07775107b918fdf7524572702cf53"},{"path":"assets/assets/themes/fajr-01.webp","size":7872,"sha256":"ba35240e5dbfb5006405b03dea82ebad7bd2421c80a8b839ad772590724ede29"},{"path":"assets/assets/themes/fajr-02.webp","size":7714,"sha256":"4e820c6ac3b55136f09757dfa7f72529471b0c7f1c8709f6d99fbbe6680799ce"},{"path":"assets/assets/themes/fajr-03.webp","size":6490,"sha256":"595d73eb7bb6adf1fa595abfa31981737473595dee82d7dd57b7ac711565be97"},{"path":"assets/assets/themes/fajr-04.webp","size":26170,"sha256":"19edbdfa1a977a25b75cc4f423f3576a32da7d6a1a615a7f301ad963a555de02"},{"path":"assets/assets/themes/fajr-05.webp","size":8842,"sha256":"f3dce1e3b5a2ac9c281ab12a856bcbb0c49e45a90110d624236f705d37f8e77f"},{"path":"assets/assets/themes/isha-01.webp","size":6890,"sha256":"e92eba32e05dc46e50be321aaa2efebe89d6fcb723f82bc00ce8e60df47479f6"},{"path":"assets/assets/themes/isha-02.webp","size":7412,"sha256":"fd28a35bf109f1b697d65d7c767fe5c9b44738553ba47e0970f61e1ce49ab6f8"},{"path":"assets/assets/themes/isha-03.webp","size":6416,"sha256":"66382f2a6dcb6ce13a782fda2470f5cab76787e7b02a86178cc47e2a37d9e986"},{"path":"assets/assets/themes/isha-04.webp","size":34796,"sha256":"36ed38a31f2cf622df45e6a11213567aa0255d4d0e456010cecf073c4764ddd8"},{"path":"assets/assets/themes/isha-05.webp","size":7758,"sha256":"d9894998c397d4a29155c7931f6c8e73629245e7d115776a79492ecbcb310ae3"},{"path":"assets/assets/themes/maghrib-01.webp","size":8038,"sha256":"f46518b202f3f66a39e7115068ab01d6f199afa628aa1d998d6a1eb6595c0869"},{"path":"assets/assets/themes/maghrib-02.webp","size":8600,"sha256":"74df0af1fdb66e90ab50c41263afb8570c56080f3c2aaced959560e056f2fccc"},{"path":"assets/assets/themes/maghrib-03.webp","size":6886,"sha256":"ee2812a3c33d98c7912b36e68d2bb09d21846de740f3d83936d2c0efdb915600"},{"path":"assets/assets/themes/maghrib-04.webp","size":17144,"sha256":"73a1afdcfd78aa85d9e2089e4d6c60b364943975dcf80797899ba20d8bde0d8b"},{"path":"assets/assets/themes/maghrib-05.webp","size":10132,"sha256":"23d5f0895b4c9e90cfaf1649359bdb7a3dc166859231a114c61596cf283a99cc"},{"path":"assets/assets/themes/sunrise-01.webp","size":7240,"sha256":"b8996d5e56197457cd88ec1c886b38f68ec7f46ee5f720f5a2a8b4a9ffe1289a"},{"path":"assets/assets/themes/sunrise-02.webp","size":7738,"sha256":"ed5c05e283246d099fa85ae536b4ca5edbde1b245de871ec4b555b89e82ed78a"},{"path":"assets/assets/themes/sunrise-03.webp","size":5460,"sha256":"fe4b045170ce5880bc7a2e3130e1a793215dcaf2eb9cc12d2dd8c3109475a5df"},{"path":"assets/assets/themes/sunrise-04.webp","size":21134,"sha256":"de30707bc244aedb204114affa128bc2cc93d49c8baa7350d5422243f88e1384"},{"path":"assets/assets/themes/sunrise-05.webp","size":8952,"sha256":"d97d5e81b510b735677929c074eb4fca4a2a6e31b2f20981349ea91256e53d62"},{"path":"assets/fonts/MaterialIcons-Regular.otf","size":11236,"sha256":"0b7629d16782ce3457c17bb70b16811561b722fa4996e2cef90500c91470a7ec"},{"path":"assets/packages/wakelock_plus/assets/no_sleep.js","size":13344,"sha256":"dce4eef0b197b640ad6aaab2228ee1ee7dccf8bd6d6b5de5484dd1bd16430a78"},{"path":"assets/shaders/ink_sparkle.frag","size":8867,"sha256":"e01b61b394cf66a641bea87e3b4fe3787d372f636c8bc8a2a67438cdc29da6f6"},{"path":"canvaskit/canvaskit.js","size":86619,"sha256":"c456c3d30b6df8ac3b5f379eff5b76dd66df980ea6906c4852d5b51f80eb0768"},{"path":"canvaskit/canvaskit.wasm","size":7004972,"sha256":"46251452161a0750e1dd268bd7ccabd9297ce51dd90012b443e2faafb388ddb0"},{"path":"canvaskit/chromium/canvaskit.js","size":86256,"sha256":"012fdbbc7a6951d4da15600b46149a4fbdb4cdf7f317492cc24106a228b7be90"},{"path":"canvaskit/chromium/canvaskit.wasm","size":5627856,"sha256":"7db432ad708a0c154c93a027f777b62eee4a50bb2502d4a97b20955ba0ed5b2d"},{"path":"canvaskit/skwasm.js","size":59192,"sha256":"0defde04f70a121ecd85dc2a156ad44f3d98a1519f7118be025adf7f04423a54"},{"path":"canvaskit/skwasm.wasm","size":3427673,"sha256":"0a242f769b1caeab00851e179b5dc7a3140b32e04728847b14a2de17cbd1cf84"},{"path":"fallback-fonts/notosansarabic/v28/nwpxtLGrOAZMl5nJ_wfgRg3DrWFZWsnVBJ_sS6tlqHHFlhQ5l3sQWIHPqzCfyGyvvnCBFQLaig.woff2","size":66412,"sha256":"53251baf8845f9b2c35517a8d157b76aa80ab871fa9848ff2374c7f5f0e4ef97"},{"path":"fallback-fonts/notosansarabic-OFL.txt","size":4382,"sha256":"07fc70bfeb985cc1a87a8587d0a0c80bab11c86c9dc3fd95b6f0cb332f983e96"},{"path":"fallback-fonts/notosanssymbols/v43/rP2up3q65FkAtHfwd-eIS2brbDN6gxP34F9jRRCe4W3gfQ8gb_VFRkzrbQ.woff2","size":69116,"sha256":"08202e258ea583254c036cff46a7077bb5af4f82c41a6c0a6775f6e44d99f1aa"},{"path":"fallback-fonts/notosanssymbols-OFL.txt","size":4383,"sha256":"b118dd41337806a5d4797052c77caf3bd096aed783e5eb21b4d11154351e1ac0"},{"path":"fallback-fonts/roboto/v32/KFOmCnqEu92Fr1Me4GZLCzYlKw.woff2","size":63464,"sha256":"35b02ca266b79eb4996590f15817425a1ce9ebf48f84471843233ff614656bf2"},{"path":"fallback-fonts/roboto-LICENSE.txt","size":11357,"sha256":"c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4"},{"path":"favicon.png","size":5648,"sha256":"bd28d847e27e6589a5f2c065b64d1c79a3db228f49379d977885748d7a6f72cb"},{"path":"flutter.js","size":8535,"sha256":"271ae550aa155384ded81cd5bbe0f1b87cacd8e20892b25301bfcf65b512b4f5"},{"path":"flutter_bootstrap.js","size":9208,"sha256":"38acdea81087b48bff2ff542b4dd3beda8c7d4e7f00e6cad0de6e2a9a7884aa0"},{"path":"icons/Icon-192.png","size":68637,"sha256":"041e38fcf7c6de2c54e9cfa4858065108fbdb82e18a0c543eec0dc1e110b9929"},{"path":"icons/Icon-512.png","size":390769,"sha256":"25ab3512086218ff193e430c2f69635645024ff11c287673bd1b2c4146b53421"},{"path":"icons/Icon-maskable-192.png","size":68637,"sha256":"041e38fcf7c6de2c54e9cfa4858065108fbdb82e18a0c543eec0dc1e110b9929"},{"path":"icons/Icon-maskable-512.png","size":390769,"sha256":"25ab3512086218ff193e430c2f69635645024ff11c287673bd1b2c4146b53421"},{"path":"icons/apple-touch-icon.png","size":61174,"sha256":"9f36b1c9caeb76ccdc6f28e2255f2b5441cbb7ea31ad2a4b677d24933ff021ab"},{"path":"index.html","size":2093,"sha256":"040ecac18f35af89d1e84429112cffb4c4f55c0231e9f42f64285cf06d030001"},{"path":"main.dart.js","size":3522498,"sha256":"01d03784ab952c4bee3844de439b8e27f2079f962ec5cae889750f15fa8900ba"},{"path":"manifest.json","size":1017,"sha256":"cca3929a14b952d072ac99c7dbdcc09f19b869c91e358a04645479ea44865819"},{"path":"offline-setup.js","size":3775,"sha256":"6e72163e3ca315d309cfe158f655b73a7cee77047a4f6199e11b4a8e40aeb35d"},{"path":"version.json","size":94,"sha256":"f44728673f93c587a3215e7e52da074098c934b3de2899a9751ba0f5f27cc77e"}];
const CACHE_NAME = `mwaqit-offline-${VERSION}`;
const PREFIX = 'mwaqit-offline-';

async function digest(bytes) {
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(hash)]
    .map(byte => byte.toString(16).padStart(2, '0')).join('');
}

async function verifyCache() {
  const cache = await caches.open(CACHE_NAME);
  for (const file of FILES) {
    const response = await cache.match(new URL(file.path, self.registration.scope));
    if (!response || !response.ok) {
      throw new Error(`ملف غير محفوظ: ${file.path}`);
    }
    const bytes = await response.arrayBuffer();
    if (bytes.byteLength !== file.size || await digest(bytes) !== file.sha256) {
      throw new Error(`ملف تالف: ${file.path}`);
    }
  }
}

async function populateCache() {
  const cache = await caches.open(CACHE_NAME);
  // Bound concurrency and memory use on iPhone/iPad.
  for (let i = 0; i < FILES.length; i += 3) {
    await Promise.all(FILES.slice(i, i + 3).map(async file => {
      const url = new URL(file.path, self.registration.scope);
      const existing = await cache.match(url);
      if (existing) {
        const bytes = await existing.arrayBuffer();
        if (bytes.byteLength === file.size && await digest(bytes) === file.sha256) return;
      }
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok || response.type === 'opaque') {
        throw new Error(`تعذر تنزيل ${file.path}: ${response.status}`);
      }
      const bytes = await response.clone().arrayBuffer();
      if (bytes.byteLength !== file.size || await digest(bytes) !== file.sha256) {
        throw new Error(`فشل فحص ${file.path}`);
      }
      await cache.put(url, response);
    }));
  }
  await verifyCache();
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    try {
      await populateCache();
      await self.skipWaiting();
    } catch (error) {
      await caches.delete(CACHE_NAME);
      throw error;
    }
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await verifyCache();
    await self.clients.claim();
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
  })());
});

self.addEventListener('message', event => {
  if (!['VERIFY_OFFLINE', 'REPAIR_OFFLINE'].includes(event.data?.type) ||
      !event.ports?.[0]) return;
  const operation = event.data.type === 'REPAIR_OFFLINE' ? populateCache() : verifyCache();
  event.waitUntil(operation
    .then(() => event.ports[0].postMessage({ complete: true }))
    .catch(error => event.ports[0].postMessage({ complete: false, error: String(error) })));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin ||
      !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (request.mode === 'navigate') {
      const page = await cache.match(new URL('index.html', self.registration.scope));
      if (page) return page;
    }
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    // A URL not in the release is not silently treated as an offline asset.
    return fetch(request);
  })());
});
