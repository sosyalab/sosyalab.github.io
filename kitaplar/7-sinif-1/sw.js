// Çevrimdışı önbellek: site bir kez açıldıktan sonra internetsiz de çalışır.
const CACHE = 'kitap-7-sinif-1-ogrenme-alani-2026-11-05-2';
const FILES = ["./", "index.html", "data.js", "panels.js", "cities.js", "offline.js", "manifest.webmanifest", "lib/jspdf.umd.min.js", "lib/jspdf.plugin.autotable.min.js", "fonts/fonts.css", "fonts/pdf-fonts.js", "icons/icon-192.png", "icons/icon-512.png", "fonts/lexend-latin-400-normal.woff2", "fonts/lexend-latin-ext-400-normal.woff2", "fonts/lexend-latin-500-normal.woff2", "fonts/lexend-latin-ext-500-normal.woff2", "fonts/lexend-latin-600-normal.woff2", "fonts/lexend-latin-ext-600-normal.woff2", "fonts/kalam-latin-400-normal.woff2", "fonts/kalam-latin-ext-400-normal.woff2", "fonts/kalam-latin-700-normal.woff2", "fonts/kalam-latin-ext-700-normal.woff2", "img/p-01.jpg", "img/p-02.jpg", "img/p-03.jpg", "img/p-04.jpg", "img/p-05.jpg", "img/p-06.jpg", "img/p-07.jpg", "img/p-08.jpg", "img/p-09.jpg", "img/p-10.jpg", "img/p-11.jpg", "img/p-12.jpg", "img/p-13.jpg", "img/p-14.jpg", "img/p-15.jpg", "img/p-16.jpg", "img/p-17.jpg", "img/p-18.jpg", "img/p-19.jpg", "img/p-20.jpg", "img/p-21.jpg", "img/p-22.jpg", "img/p-23.jpg", "img/p-24.jpg", "img/p-25.jpg", "img/p-26.jpg", "img/p-27.jpg", "img/p-28.jpg", "img/p-29.jpg", "img/p-30.jpg", "img/p-31.jpg", "img/p-32.jpg", "img/p-33.jpg", "img/p-34.jpg", "img/p-35.jpg", "img/p-36.jpg", "img/p-37.jpg", "img/p-38.jpg", "img/p-39.jpg", "img/p-40.jpg", "img/p-41.jpg", "img/p-42.jpg", "img/p-43.jpg", "img/p-44.jpg", "img/p-45.jpg", "img/p-46.jpg"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k.startsWith('kitap-7-sinif-1-')).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request).then(res => {
    if (res.ok && new URL(e.request.url).origin === location.origin) { const c = res.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); }
    return res;
  }).catch(() => caches.match('index.html'))));
});
