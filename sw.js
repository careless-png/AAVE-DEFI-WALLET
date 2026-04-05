const CACHE = 'dfw-v2';
const ASSETS = ['/', '/index.html', '/manifest.json', '/icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network-first for Binance API, cache-first for everything else
  if (e.request.url.includes('binance.com')) {
    e.respondWith(fetch(e.request).catch(() => new Response('{}', { headers: { 'Content-Type': 'application/json' } })));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
