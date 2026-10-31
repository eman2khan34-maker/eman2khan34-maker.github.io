
const CACHE_NAME = "glovix-v10";
const FILES_TO_CACHE = ["./","./index.html","./manifest.json"];
self.addEventListener("install",(event)=>{
event.waitUntil(caches.open(CACHE_NAME).then((cache.addAll(FILES_TO_CACHE)));
self.skipWaiting();
});
self. addEventListener("activate",(event)=>{
  even.waitUntil9caches.keys().then((keys)=>promise.all(keys.filter((key)=>key!==CACHE_NAME).map((key)=>caches.delete(key)))));
});
self.addEventListener("fetch",(event)=>{
if(event.request.url.includes("firebase")||event.request.url.includes("google")||event.request.url.includes("identitytoolkit")||event.reqest.url.include("gstatic)||event.request.url.includes("firestore")){
  return;
}
if(event.request.method!=="GET) return;
event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});
