if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,o,n)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(o.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=n(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"image/iajh.128.png",revision:"9400d7aa4910f24b283bf8640f79d3dd"},{url:"image/iajh.192.png",revision:"3b81b1345ec8d0d7700c3e691c8d422b"},{url:"image/iajh.256.png",revision:"1d0499f92a68ea50ef572b3c91a75045"},{url:"image/iajh.384.png",revision:"8a2784c489bc87add4924003d9cc5736"},{url:"image/iajh.512.png",revision:"d029d7efdccdd68ee0d6d16e4a149fab"},{url:"image/iajh.80.png",revision:"ae23ac0e32430ac04c97905f2662a3af"},{url:"image/iajh.png",revision:"ae23ac0e32430ac04c97905f2662a3af"},{url:"image/jh.brown.128.png",revision:"cec037d96e71d00dfd451e7d154cd369"},{url:"image/jh.brown.192.png",revision:"732f904055f6fdae13cc18b42a39609d"},{url:"image/jh.brown.256.png",revision:"57940240fd70a0620081c17f047efab3"},{url:"image/jh.brown.384.png",revision:"41cb7a05e64b769cfe7ed0fc3ff82864"},{url:"image/jh.brown.512.png",revision:"656196b2c5c3a825db1c5cb2e699256d"},{url:"image/jh.brown.80.png",revision:"4e8b0be41e69e1973b0963da54b52e10"},{url:"vendor/img/index.jpg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"vendor/img/www.pexels.com/efdal-yildiz/flock-of-birds.jpg",revision:"a605f66e8ce1bc11528440bee48cdc53"},{url:"vendor/img/www.pexels.com/pixabay/reflection-tree.jpg",revision:"a1ce555c7fac205e829b2c7d718b1403"},{url:"vendor/img/www.pexels.com/pixabay/turned-on-computer-monitor-displaying-text-300.jpg",revision:"9010049f862311ed48995984423cc2af"},{url:"vendor/img/www.pexels.com/pixabay/turned-on-computer-monitor-displaying-text.jpg",revision:"77d1c35438963b499efef6ec402ff860"},{url:"vendor/img/www.pexels.com/pixabay/view-of-street-from-a-glass-window.jpg",revision:"aed77a7f0cbbda258977a3ad05eb4d9a"},{url:"vendor/img/www.pexels.com/roberto-shumski/scenic-photo-of-lake-surrounded-by-trees-300.jpg",revision:"f981cc8a3d9114c1528af30f1f1f230c"},{url:"vendor/img/www.pexels.com/roberto-shumski/scenic-photo-of-lake-surrounded-by-trees.jpg",revision:"b9fc359fd9c96aa54985d75ab2c1e211"},{url:"index.html",revision:"5b35c9af58d458edcc3eee760c569210"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map