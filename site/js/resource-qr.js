/* Resource-page QR, separate from the presentation-cover QR. */
(function () {
  "use strict";
  var target=document.querySelector("[data-resource-qr]");
  if(!target||typeof qrcode!=="function")return;
  var url="https://fcis2026.vercel.app/resources.html";
  var qr=qrcode(0,"M");
  qr.addData(url);qr.make();
  var n=qr.getModuleCount(),margin=2,size=n+margin*2,path="";
  for(var y=0;y<n;y++)for(var x=0;x<n;x++){
    if(qr.isDark(y,x))path+="M"+(x+margin)+" "+(y+margin)+"h1v1h-1z";
  }
  target.innerHTML='<svg viewBox="0 0 '+size+' '+size+'" role="img" aria-label="Scan to open fcis2026.vercel.app/resources.html" shape-rendering="crispEdges"><rect width="'+size+'" height="'+size+'" fill="#fff"/><path d="'+path+'" fill="#1d2430"/></svg>';
})();