'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "b64c545889f0215ead174dc751e0a7ca",
"icons/Icon-512.png": "bafe777b650e50a9233a319370c99144",
"icons/icon-19.png": "46b506445e32c6b3592c98071a70e7cb",
"icons/icon-869.png": "69c1bbe60a604250395fecc62bf9ba2a",
"version.json": "5a1321165f2b5a899906fdb378fe4a2c",
"manifest.json": "d7e1ac27a7b557c3b606853ace8ed432",
"main.dart.js": "ecf6b17687ad7323e899d168bb09e9ec",
"index.html": "3f1380389646a72e8c301c01313109e6",
"/": "3f1380389646a72e8c301c01313109e6",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "46b506445e32c6b3592c98071a70e7cb",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"assets/AssetManifest.bin.json": "6ad42b3f1ff93a2f8f5464eec066370b",
"assets/AssetManifest.json": "c4d2d917ffa40db3e040ad15bf1a664d",
"assets/NOTICES": "4ae6d3ade3cce1e8a1e66522d20824bd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "f2041221463e894edfb1847255d9a7c5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/icons/ic-js.png": "31a1ef284d7bff72474471ada3ddc8d8",
"assets/assets/icons/ic-git.png": "a7063f224b0ccbb70f78bf165813c538",
"assets/assets/icons/ic-redis.png": "ac0c519e56fa9f871f09f78ebc14d216",
"assets/assets/icons/ic_contact_linkedin.png": "d112bcc365a601f65aed660ce17aa50c",
"assets/assets/icons/ic-mongo.png": "271833ffcb30664a7754bbd1ad5ab89a",
"assets/assets/icons/ic-dart.png": "713c914d34c0606f6eabc39bea2d7db1",
"assets/assets/icons/ic-ios.png": "d38dedf5b639871cc1e7db9c7913612b",
"assets/assets/icons/ic-kubernetes.png": "f3c2eae4bd59a44e003b366faeca434c",
"assets/assets/icons/ic-elasticsearch.png": "7e1fb9693719d9f67c9bae7145f65366",
"assets/assets/icons/ic_contact_youtube.png": "03aee6817ab84e7f1a261adb694059b8",
"assets/assets/icons/ic-springboot.png": "9366300d4348e61fd6390980c0422518",
"assets/assets/icons/ic-openapi.png": "d1dfe9621770b89c2910683550c7b19d",
"assets/assets/icons/ic-mysql.png": "ab5919587d29acfcc2d926d48cb8d6ae",
"assets/assets/icons/ic-rabbitmq.png": "071c6417a025965003c3218c3bafdf24",
"assets/assets/icons/ic-firebase.png": "bcc75a29eef45bed61c3cb1454215b83",
"assets/assets/icons/scroll-down1.gif": "36a8300af89a18f085efe6c6c70d32a4",
"assets/assets/icons/ic-typesense.png": "59d9370711102c35534fc534a15f8d77",
"assets/assets/icons/ic_contact_gmail.png": "718d409cf2e2575c271b146b9baafcc6",
"assets/assets/icons/ic-html.png": "966bd5d608b7ccaa6c4e8ea609ae4b0d",
"assets/assets/icons/ic-go.png": "5a1d282757fd03052b9534cff5001f23",
"assets/assets/icons/ic-gcp.png": "f7cea26391c2a379f2fab69d2cb5451e",
"assets/assets/icons/ic-nats.png": "abc554f53bf5d6a82a9d51f12936e1ea",
"assets/assets/icons/ic-java.png": "293f568391fbb6a915e6dcad6c20ce5a",
"assets/assets/icons/ic-swagger.png": "9629cfc5c00bbfaf591289a25ce1cd31",
"assets/assets/icons/ic-postgre.png": "bea5007392600afa16d97ff7dc56f936",
"assets/assets/icons/ic_contact_wa.png": "5a629460c345f9d471603996b99ecb4b",
"assets/assets/icons/ic-flutter.png": "9ad6cee548afb26d544dbfd4fef2ae58",
"assets/assets/icons/ic-figma.png": "051503a6f461c28dafe5f6dff34499ae",
"assets/assets/icons/ic-kotlin.png": "c9337005ef896eff6d795b5248f9b270",
"assets/assets/icons/ic-kafka.png": "1960d79d2438c69e67a7261a24a795ab",
"assets/assets/icons/ic-react.png": "18e7b7aea8dc7b3c60be090fb7429c64",
"assets/assets/icons/ic-docker.png": "00f510c53c5cfbfa8681da59a48f1a94",
"assets/assets/icons/ic_contact_github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/icons/ic-android.png": "07b6a56dd54da1c77342ce716c954f96",
"assets/assets/images/Icon-192.png": "b64c545889f0215ead174dc751e0a7ca",
"assets/assets/images/bg_opannapo.jpg": "05a5284956a00694815e49537f84d9ba",
"assets/assets/images/people-opan.png": "684ec31e300c18b7a98682c947543ea2",
"assets/assets/images/opan.png": "684ec31e300c18b7a98682c947543ea2",
"assets/assets/images/Icon-512.png": "bafe777b650e50a9233a319370c99144",
"assets/assets/images/icon-19.png": "46b506445e32c6b3592c98071a70e7cb",
"assets/assets/images/icon-869.png": "69c1bbe60a604250395fecc62bf9ba2a",
"assets/AssetManifest.bin": "0b434086095bbc5e7716daadebbedb3b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
