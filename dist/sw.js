if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const o=e=>n(e,d),c={module:{uri:d},exports:f,require:o};i[d]=Promise.all(s.map((e=>c[e]||o(e)))).then((e=>(r(...e),f)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-6a91ef01.js",revision:null},{url:"assets/index-f787e4e8.css",revision:null},{url:"index.html",revision:"0c61b78eb578399fe0ae61c53ff4f4e3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"512.png",revision:"8662371a1a6fed8b1b2b2fd0758a0e50"},{url:"256.png",revision:"d446a2aef0d59408d8d2d5a1e451524a"},{url:"128.png",revision:"aafeae581272727f322acfa1f63d94b6"},{url:"64.png",revision:"9ca4fd3264709fdb2a110292c8b84eaf"},{url:"32.png",revision:"4bedeb18778bd618857e7cf1cb0c3b05"},{url:"24.png",revision:"7d4b51a7424325076dcc9452534edace"},{url:"16.png",revision:"708dc176e9f44069b3a758d61473247c"},{url:"manifest.webmanifest",revision:"6bcab2c0f5cedd39e74eb05fe37e70f2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
