self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request)));

let currentStatus = "未出勤";
