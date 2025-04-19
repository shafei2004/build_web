'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "154f3250fac9446a7ec059b8b872e12a",
"assets/AssetManifest.bin.json": "429d1044d8ea2df9952f4d3c57d38bd2",
"assets/AssetManifest.json": "7dae75a72d21cc24d70ddd19409094ba",
"assets/assets/images/azkar%25201.jpg": "c171358bc484e5df8455a27f7331a415",
"assets/assets/images/azkar%25202.jpg": "06b610123f13edbf2e899521e6f1aa40",
"assets/assets/images/azkar%25203.jpg": "0310f3ca79dbd3a65c0371811668512e",
"assets/assets/images/bookly%25201.png": "721433160725e9d0e43e521e23ebc20a",
"assets/assets/images/bookly%25202.png": "f8788f700931931c3059b31cddbf5ef1",
"assets/assets/images/bookly%25203.png": "8f92fa2a2ca266d670dc8260157a5c6c",
"assets/assets/images/chat%25201.jpg": "0e441949127cd6f00b08ebe729c4fbb3",
"assets/assets/images/chat%25202.jpg": "521d29b2f594a2a2d968f101e45f2039",
"assets/assets/images/chat%25203.jpg": "297209abf7fbf44cff0056ce73dbbec7",
"assets/assets/images/chat%25204.jpg": "5f9b2db5d40fa98716529dec0def26a4",
"assets/assets/images/myImage.webp": "744cc1686898be29faba6c259b212bba",
"assets/assets/images/notes%25201.jpg": "af3582b41e10c5c99511563a8beec6f9",
"assets/assets/images/notes%25202.jpg": "c6161ab5d41188db234dd5297493d9b7",
"assets/assets/images/notes%25203.jpg": "c73a55892da1d593335ff91085362410",
"assets/assets/images/notes%25204.jpg": "ad619c50da8e2d3c63d9afd576a5ca7e",
"assets/assets/images/portfolio%25201.png": "dd0cf2d4774d867cd79ea3934adc1555",
"assets/assets/images/portfolio%25202.png": "b1608121bd4bd10bbd224d8624a6ac37",
"assets/assets/images/portfolio%25203.png": "354886023718621c07284a72af3b2ab8",
"assets/assets/images/portfolio%25204.png": "d2ccb4aa05b655656bf091cb38a11d1b",
"assets/assets/images/portfolio%25205.png": "89bee1460f257d34a0aef2f7c4c1daf0",
"assets/assets/images/portfolio%2520app%25201.png": "3d7db86b351c832bdfcf7036db83077d",
"assets/assets/images/portfolio%2520app%25202.png": "53b2e78dcb768f0422954ed2008c547b",
"assets/assets/images/portfolio%2520app%25203.png": "e13c79f390eb1dcb6047448e02cfbb91",
"assets/assets/images/portfolio%2520app%25204.png": "db087be00f0e4a98a6a955af5406c505",
"assets/assets/images/portfolio%2520app%25205.png": "19ee06f34e3f2466cbaaaddc7559074b",
"assets/assets/images/simulation%25201.jpg": "725bf56c206d4c28ab3a921821c03373",
"assets/assets/images/simulation%25202.jpg": "7145de64262a03f323ec13f8dabebab8",
"assets/assets/images/simulation%25203.jpg": "685e56e4003c595613676117dfce4b1b",
"assets/assets/images/simulation%25204.jpg": "41addc576d79071f93c71c682b1eab0f",
"assets/assets/images/simulation%25205.jpg": "7ceb379840d64e00514bb8a9d6f5bc1f",
"assets/assets/images/simulation%25206.jpg": "b717d595816f0bf92df4420c3c5304db",
"assets/assets/images/weather%25201.jpg": "104e2e8c3bf9c73abfe3ca828f21a177",
"assets/assets/images/weather%25202.jpg": "de7feb999f7718af371ebc5ce6b0e011",
"assets/assets/images/weather%25203.jpg": "0558733299664ac86219ed41180a9482",
"assets/assets/images/weather%25204.jpg": "e2f3ed3f9e15c66783c4035b6bcb1b80",
"assets/assets/images/weather%25205.jpg": "8f9ffbd10a41ec11f0dc0c7a4586a9c9",
"assets/assets/images/weather%25206.jpg": "9d35ffaa44b157d8c429eae40868ae0d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "6ce9ff5ef7956f7c828ecccb8ad2ebcb",
"assets/NOTICES": "55263ebc61f092149bfe9b02a5599d29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27cfa127617ce10593433c073c1c3a58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "4875ae9debe0488da1c9f2db1a01a014",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fb9e63bfb281f9a23118afb01f756969",
"/": "fb9e63bfb281f9a23118afb01f756969",
"main.dart.js": "8b6942d52f45fd95702025991ed03c1c",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
