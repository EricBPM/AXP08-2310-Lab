var TcHmi;!function(t){let n;!function(t){let n;!function(t){let n;!function(t){let n;!function(t){const n="0123456789abcdef";let a;!function(t){t.Gray="Gray",t.RGB="RGB",t.HSV="HSV",t.HLS="HLS"}(a=t.Space||(t.Space={})),t.convertHexStringToArray=function(t){t=t.toLocaleLowerCase().replace("#","");const a=[];for(let o=0;o<Math.floor(t.length/2);++o){const r=n.indexOf(t[2*o]),h=n.indexOf(t[2*o+1]);if(-1===r||-1===h)throw new Error(`non-hexadecimal character found: ${t[2*o]}, ${t[2*o+1]}`);a[o]=16*r+h}return a},t.convertArrayToHexString=function(t){return t.reduce(((t,a)=>t+n[Math.floor(a/16)]+n[a%16]),"#")},t.isValidColorHexString=function(t){return/^#([0-9a-fA-F]{2}){3,4}$/.test(t)},t.convertRgbToHls=function(t){const n=Math.min(Math.max(0,t[0]),255)/255,a=Math.min(Math.max(0,t[1]),255)/255,o=Math.min(Math.max(0,t[2]),255)/255,r=Math.max(n,a,o),h=r-Math.min(n,a,o),i=r-h/2;let m=0;return 0===h?m=0:r===n?m=60*(0+(a-o)/h):r===a?m=60*(2+(o-n)/h):r===o&&(m=60*(4+(n-a)/h)),[m/2,255*i,255*(0===i||1===i?0:h/(1-Math.abs(2*r-h-1)))]},t.convertRgbToHsv=function(t){const n=Math.min(Math.max(0,t[0]),255)/255,a=Math.min(Math.max(0,t[1]),255)/255,o=Math.min(Math.max(0,t[2]),255)/255,r=Math.max(n,a,o),h=r-Math.min(n,a,o);let i=0;return 0===h?i=0:r===n?i=60*(0+(a-o)/h):r===a?i=60*(2+(o-n)/h):r===o&&(i=60*(4+(n-a)/h)),[i/2,255*(0===r?0:h/r),255*r]},t.convertHlsToRgb=function(t){const n=2*Math.min(Math.max(0,t[0]),180),a=Math.min(Math.max(0,t[1]),255)/255,o=Math.min(Math.max(0,t[2]),255)/255,r=t=>{const r=(t+n/30)%12,h=o*Math.min(a,1-a);return a-h*Math.max(-1,Math.min(r-3,9-r,1))};return[255*r(0),255*r(8),255*r(4)]},t.convertHsvToRgb=function(t){const n=2*Math.min(Math.max(0,t[0]),180),a=Math.min(Math.max(0,t[1]),255)/255,o=Math.min(Math.max(0,t[2]),255)/255,r=t=>{const r=(t+n/60)%6;return o-o*a*Math.max(0,Math.min(r,4-r,1))};return[255*r(5),255*r(3),255*r(1)]},t.convertHlsToHsv=function(t){const n=2*Math.min(Math.max(0,t[0]),180),a=Math.min(Math.max(0,t[1]),255)/255,o=a+Math.min(Math.max(0,t[2]),255)/255*Math.min(a,1-a);return[n/2,255*(0===o?0:2*(1-a/o)),255*o]},t.convertHsvToHls=function(t){const n=2*Math.min(Math.max(0,t[0]),180),a=Math.min(Math.max(0,t[1]),255)/255,o=Math.min(Math.max(0,t[2]),255)/255,r=o*(1-a/2);return[n/2,255*r,255*(0===r||1===r?0:(o-r)/Math.min(r,1-r))]}}(n=t.Color||(t.Color={}))}(n=t.Vision||(t.Vision={}))}(n=t.Beckhoff||(t.Beckhoff={}))}(n=t.Controls||(t.Controls={}))}(TcHmi||(TcHmi={}));