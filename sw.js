/*=============================================
 ENAFOL 4.0
 Service Worker
=============================================*/

const CACHE_NAME = "enafol-v1.0.0";

const FILES_TO_CACHE = [

    "./",
    "./index.html",

    "./manifest.json",

    "./css/style.css",

    "./js/app.js",

    "./assets/logo.png",

    "./assets/icons/icon-72.png",
    "./assets/icons/icon-96.png",
    "./assets/icons/icon-128.png",
    "./assets/icons/icon-144.png",
    "./assets/icons/icon-152.png",
    "./assets/icons/icon-192.png",
    "./assets/icons/icon-384.png",
    "./assets/icons/icon-512.png",

    "./assets/icons/facebook.png",
    "./assets/icons/instagram.png",
    "./assets/icons/tiktok.png",
    "./assets/icons/whatsapp.png",

    "./assets/images/hero.jpg",

    "./assets/images/galeria1.jpg",
    "./assets/images/galeria2.jpg",
    "./assets/images/galeria3.jpg",
    "./assets/images/galeria4.jpg",
    "./assets/images/galeria5.jpg",
    "./assets/images/galeria6.jpg"

];


/*=============================================
 INSTALACION
=============================================*/

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => {

                return cache.addAll(FILES_TO_CACHE);

            })

    );

    self.skipWaiting();

});


/*=============================================
 ACTIVACION
=============================================*/

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {

                        return caches.delete(key);

                    }

                })

            );

        })

    );

    self.clients.claim();

});


/*=============================================
 FETCH
=============================================*/

self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") return;

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                if (response) {

                    return response;

                }

                return fetch(event.request)

                    .then(networkResponse => {

                        if (!networkResponse || networkResponse.status !== 200) {

                            return networkResponse;

                        }

                        const responseClone = networkResponse.clone();

                        caches.open(CACHE_NAME)

                            .then(cache => {

                                cache.put(event.request, responseClone);

                            });

                        return networkResponse;

                    })

                    .catch(() => {

                        if (event.request.destination === "document") {

                            return caches.match("./index.html");

                        }

                    });

            })

    );

});