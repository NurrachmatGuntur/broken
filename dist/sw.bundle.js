if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const c=e=>n(e,r),a={module:{uri:r},exports:s,require:c};i[r]=Promise.all(d.map((e=>a[e]||c(e)))).then((e=>(f(...e),s)))}}define(["./workbox-9dddfd68"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"164f44d2d3ea9c36c53529c14f14922b"},{url:"946.bundle.js",revision:"9335f1b086e603e762d4ba28dcc638e3"},{url:"app.webmanifest",revision:"5ba242d5bf44ae8db2f45354785a3ff2"},{url:"app~a51fa3f5.bundle.js",revision:"79fa174c6a7447a5bf87008223b1cd69"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"bbb7c9c9cbe9b3a790ad5d88b1d8f349"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"e60d09bfe5e857a7db5be282030f2feb"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"9d56cf15bf2940ff85798ed89d623652"},{url:"app~f6563343.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"burger.png",revision:"5c8b3531b6281249e74a2c424fc7be02"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"images/hero-image_2-large.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/hero-image_2-small.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"index.html",revision:"67f39b98722a22e66466f81918013c15"}],{}),e.registerRoute(/https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"Gunturr",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map