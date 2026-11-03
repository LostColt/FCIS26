/* Keep the actual HUD iframe live only on slide 20.
   During the fullscreen intro its shell is temporarily portalled to body, so
   use the active slide's identity instead of DOM containment. */
(function () {
  "use strict";
  var frame = document.querySelector("[data-hud-preview]");
  if (!frame) return;

  function sync(slide) {
    var active = !!(slide && slide.dataset.name === "hud-result");
    if (active && !frame.getAttribute("src")) frame.setAttribute("src", frame.dataset.src);
    if (!active && frame.getAttribute("src")) frame.removeAttribute("src");
  }

  document.addEventListener("deckstep", function (event) {
    sync(event.detail.slide);
  });
  sync(document.querySelector(".slide.is-active"));
})();
