// Keeps the slideshow working with no internet after the first visit.
var CACHE = 'nie-slideshow-v2';
var ASSETS = [
 "slideshow.html",
 "manifest.webmanifest",
 "apple-touch-icon.png",
 "favicon.svg",
 "full-n01.jpg",
 "full-n02.jpg",
 "full-n03.jpg",
 "full-n04.jpg",
 "full-n05.jpg",
 "full-n06.jpg",
 "full-n07.jpg",
 "full-n08.jpg",
 "full-n09.jpg",
 "full-n10.jpg",
 "full-n11.jpg",
 "full-n12.jpg",
 "full-2338.jpg",
 "full-2349.jpg",
 "full-2342.jpg",
 "full-2348.jpg",
 "full-2340.jpg",
 "full-2353.jpg",
 "full-2351.jpg",
 "full-2335.jpg",
 "full-2333.jpg",
 "full-2347.jpg",
 "full-2343.jpg",
 "full-2354.jpg",
 "full-2334.jpg",
 "full-2345.jpg",
 "full-2344.jpg",
 "full-2352.jpg"
];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.headers.has('range')) return;
  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(r).then(function (hit) {
      var net = fetch(r).then(function (res) { if (res && res.ok) c.put(r, res.clone()); return res; }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
