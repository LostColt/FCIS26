/* Slide 19: select Canvas first, then type one continuous prompt in sections.
   The presenter controls the sections; no model replies or simulated Send action.
   Fit all visible prompt text before typing so projector-sized screens do not clip it. */
(function () {
  "use strict";
  var activeTimer = null, activeSlide = null, currentStep = -1;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var scene = document.querySelector(".conversation-scene--single-prompt");
  if (!scene) return;
  var paragraphs = Array.prototype.slice.call(scene.querySelectorAll("[data-prompt-type]"));
  var originals = paragraphs.map(function (p) { return p.textContent; });
  var history = scene.querySelector(".conversation-history");
  function stop() { if (activeTimer !== null) clearTimeout(activeTimer); activeTimer = null; }
  function fit() {
    // Measure the complete text for the current reveal, not its typing prefix.
    paragraphs.forEach(function (p) { p.style.fontSize = ""; });
    var size = parseFloat(window.getComputedStyle(paragraphs[0]).fontSize);
    var min = Math.max(13.5, size * .76);
    while (history.scrollHeight > history.clientHeight + 2 && size > min) {
      size -= .5;
      paragraphs.forEach(function (p) { p.style.fontSize = size + "px"; });
    }
    // Extremely short screens remain scrollable, rather than concealing content.
    history.scrollTop = 0;
  }
  function sync(e) {
    var slide = e.detail && e.detail.slide;
    if (!slide || !slide.contains(scene)) {
      if (activeSlide) { stop(); activeSlide = null; currentStep = -1; }
      return;
    }
    var step = Math.min(2, Math.max(0, e.detail.step || 0));
    if (activeSlide === slide && currentStep === step) return;
    stop(); activeSlide = slide; currentStep = step;
    paragraphs.forEach(function (p, i) { p.textContent = i <= step ? originals[i] : ""; });
    fit();
    if (reduce) return;
    var target = paragraphs[step], content = originals[step], index = 0;
    target.textContent = "";
    // On entering slide, the Canvas button visibly selects before typing begins.
    var initialDelay = step === 0 ? 1120 : 160;
    function tick() {
      if (activeSlide !== slide || currentStep !== step || !slide.classList.contains("is-active")) return;
      index = Math.min(content.length, index + 2);
      target.textContent = content.slice(0, index);
      if (index < content.length) {
        activeTimer = setTimeout(tick, 24);
      } else {
        activeTimer = null;
      }
    }
    activeTimer = setTimeout(tick, initialDelay);
  }
  document.addEventListener("deckstep", sync);
  window.addEventListener("resize", function () {
    if (!activeSlide) return;
    var step = currentStep;
    stop();
    paragraphs.forEach(function (p,i) { p.textContent = i <= step ? originals[i] : ""; });
    fit();
  });
  var current = document.querySelector(".slide.is-active");
  if (current && current.contains(scene)) sync({detail:{slide:current,step:0}});
})();