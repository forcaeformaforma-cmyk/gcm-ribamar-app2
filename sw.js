// ============================================================
// GCM RIBAMAR — Service Worker v2.0
// Cache-first com fallback para offline total
// ============================================================

const CACHE_NAME = 'gcm-ribamar-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Syne:wght@600;700;800&family=Source+Sans+3:wght@300;400;600&display=swap'
];

// ── INSTALL: pré-carrega os assets principais ──
self.addEventListener('install', event => {
  console.log('[SW] Instalando cache:', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        ASSETS.map(url =>
          cache.add(url).catch(err => console.warn('[SW] Falha ao cachear:', url, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: remove caches antigos ──
self.addEventListener('activate', event => {
  console.log('[SW] Ativando e limpando caches antigos...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Removendo cache antigo:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: Cache-first, fallback para rede, depois offline ──
self.addEventListener('fetch', event => {
  // Ignora requisições não-GET e extensões de browser
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request.clone()).then(response => {
        // Só cacheia respostas válidas
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        // Cacheia fontes do Google e outros recursos externos
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(() => {
        // Offline: retorna o index.html para navegação
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
        // Retorna uma resposta vazia para outros recursos
        return new Response('', { status: 408, statusText: 'Offline' });
      });
    })
  );
});

// ── PUSH: suporte básico a notificações ──
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'Hora de estudar para a GCM! 📚',
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [100, 50, 100],
    data: { url: './index.html' }
  };
  event.waitUntil(
    self.registration.showNotification(
      data.title || 'GCM Ribamar — Estudos',
      options
    )
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || './index.html')
  );
});
