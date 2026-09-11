/* BahiaGo Service Worker — GitHub Pages PWA */
const CACHE = 'bahiago-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const fetched = fetch(req).then((res) => {
        // Cache successful same-origin responses
        try {
          const url = new URL(req.url);
          if (res.ok && url.origin === self.location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
        } catch (e) {}
        return res;
      }).catch(() => cached);

      // Network first for HTML; cache fallback offline
      if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
        return fetched.then((r) => r || cached || caches.match('./index.html'));
      }
      return cached || fetched;
    })
  );
});
