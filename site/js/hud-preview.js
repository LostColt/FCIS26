/* Load the user-supplied particle HUD only while its presentation slide is active.
   Removes the iframe src on navigation so its animation loop cannot run offscreen. */
(function () {
  "use strict";
  var frame = document.querySelector("[data-hud-preview]");
  if (!frame) return;
  function sync(slide) {
    var active = !!(slide && slide.contains(frame));
    if (active && !frame.getAttribute("src")) frame.setAttribute("src", frame.dataset.src);
    if (!active && frame.getAttribute("src")) frame.removeAttribute("src");
  }
  document.addEventListener("deckstep", function (event) { sync(event.detail.slide); });
  sync(document.querySelector(".slide.is-active"));
})();
