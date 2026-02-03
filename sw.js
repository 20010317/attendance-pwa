self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request)));

let currentStatus = "未出勤";

function updateStatus(t){
  const time = new Date().toLocaleTimeString();
  document.getElementById("status").innerText = time+" "+t;

  const li = document.createElement("li");
  li.innerText = time+" "+t;
  document.getElementById("log").appendChild(li);
}
