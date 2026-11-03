/* Slide 20: prepare a viewport-filling start state for the existing live HUD.
   Only the preview shell moves; it remains the same iframe before and after. */
(function () {
  "use strict";
  var scene = document.querySelector(".hud-scene--cinematic");
  if (!scene) return;
  var shell = scene.querySelector(".hud-frame-shell");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function measure(slide) {
    if (reduce) return;
    scene.classList.remove("hud-intro-ready");
    // Allow normal layout to settle before measuring its final preview destination.
    requestAnimationFrame(function () {
      if (!slide.classList.contains("is-active")) return;
      var box = shell.getBoundingClientRect();
      if (!box.width || !box.height) return;
      var vw = window.innerWidth, vh = window.innerHeight;
      var x = vw / 2 - (box.left + box.width / 2);
      var y = vh / 2 - (box.top + box.height / 2);
      shell.style.setProperty("--hud-start-x", x + "px");
      shell.style.setProperty("--hud-start-y", y + "px");
      shell.style.setProperty("--hud-start-sx", (vw / box.width).toFixed(4));
      shell.style.setProperty("--hud-start-sy", (vh / box.height).toFixed(4));
      requestAnimationFrame(function () {
        if (slide.classList.contains("is-active")) scene.classList.add("hud-intro-ready");
      });
    });
  }
  document.addEventListener("deckstep", function (event) {
    var slide = event.detail && event.detail.slide;
    if (slide && slide.contains(scene)) {
      if (!scene.classList.contains("hud-intro-ready")) measure(slide);
    } else {
      scene.classList.remove("hud-intro-ready");
    }
  });
  window.addEventListener("resize", function () {
    var slide = scene.closest(".slide");
    if (slide && slide.classList.contains("is-active")) measure(slide);
  });
  var active = scene.closest(".slide");
  if (active && active.classList.contains("is-active")) measure(active);
})();
