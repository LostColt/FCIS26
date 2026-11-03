/* Keep the growing slide-19 conversation in view after each presenter swipe.
   The deck exposes the active slide and step through its deckstep event. */
(function () {
  "use strict";
  function sync(e) {
    var slide = e.detail && e.detail.slide;
    if (!slide || !slide.querySelector(".conversation-scene")) return;
    var history = slide.querySelector(".conversation-history");
    var step = e.detail.step || 0;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        if (slide.classList.contains("is-active")) {
          history.scrollTo({ top: step === 0 ? 0 : history.scrollHeight,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }
      });
    });
  }
  document.addEventListener("deckstep", sync);
})();
