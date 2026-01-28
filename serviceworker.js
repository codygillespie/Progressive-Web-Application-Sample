// (1) Name of cache - DO NOT CHANGE THIS 
var cacheName = 'epwa';

// (2) Files to cache offline for your PWA - ADD NEW FILES HERE
var filesToCache = [
  '/',
  'index.html',
  'serviceworker.js',
  'manifest.json',
];

// (3) Install boilerplate - DO NOT CHANGE THIS
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

// (4) Fetch bolerplate - DO NOT CHANGE THIS 
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});