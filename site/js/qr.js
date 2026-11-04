/* The cover QR always points to the canonical production presentation.
   Do not derive it from location: preview and immutable deployment URLs can
   remain accessible after newer versions have been published. */

(function () {
  "use strict";
  var box = document.querySelector("[data-qr]");
  if (!box || typeof qrcode !== "function") return;

  var online = location.protocol === "https:" || location.protocol === "http:";
  if (!online) {
    box.innerHTML = '<p class="qr-note">The QR code appears here once the deck is online.</p>';
    return;
  }

  var url = "https://fcis2026.vercel.app/#1";
  var qr = qrcode(0, "M");
  qr.addData(url);
  qr.make();

  var n = qr.getModuleCount(), q = 2, size = n + q * 2, d = "";
  for (var r = 0; r < n; r++) {
    for (var c = 0; c < n; c++) {
      if (qr.isDark(r, c)) d += "M" + (c + q) + " " + (r + q) + "h1v1h-1z";
    }
  }
  var shown = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  box.innerHTML =
    '<svg viewBox="0 0 ' + size + " " + size + '" role="img" aria-label="QR code for ' + shown + '" shape-rendering="crispEdges">' +
    '<rect width="' + size + '" height="' + size + '" fill="#fff"/><path d="' + d + '" fill="#1d2430"/></svg>' +
    '<p class="qr-url">' + shown + "</p>";
})();
