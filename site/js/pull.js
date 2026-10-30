/* Chapter 4: on the press, cards are pulled from one row into another.
   A card in the lower row (data-pull) starts where its twin sits in the top row (data-pull-src)
   and glides down; the twin stays behind, faded. */

(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function place(slide, on, animate) {
    slide.querySelectorAll("[data-pull]").forEach(function (t) {
      var src = slide.querySelector('[data-pull-src="' + t.getAttribute("data-pull") + '"]');
      if (!src) return;
      if (!on) {
        t.classList.remove("in"); src.classList.remove("left");
        t.style.transition = "none"; t.style.transform = "";
        return;
      }
      if (t.classList.contains("in")) return;
      src.classList.add("left");
      t.classList.add("in");
      if (!animate || reduce) { t.style.transition = "none"; t.style.transform = ""; return; }
      t.style.transition = "none"; t.style.transform = "";
      var a = src.getBoundingClientRect(), b = t.getBoundingClientRect();
      t.style.transform = "translate(" + (a.left - b.left) + "px," + (a.top - b.top) + "px) rotate(0deg)";
      void t.offsetWidth;
      t.style.transition = "transform 0.9s cubic-bezier(0.22, 0.7, 0.2, 1)";
      t.style.transform = "";
    });
  }

  document.addEventListener("deckstep", function (e) {
    var cur = e.detail.slide;
    document.querySelectorAll(".pull-slide").forEach(function (box) {
      var slide = box.closest(".slide");
      if (slide === cur) place(slide, e.detail.step >= 1, true);
      else place(slide, slide.classList.contains("seen"), false);
    });
  });
})();

/* Opening the deck partway through: slides already passed show their finished state */
document.querySelectorAll(".pull-slide").forEach(function (box) {
  var slide = box.closest(".slide");
  if (slide.classList.contains("seen")) {
    slide.querySelectorAll("[data-pull]").forEach(function (t) {
      t.classList.add("in");
      var src = slide.querySelector('[data-pull-src="' + t.getAttribute("data-pull") + '"]');
      if (src) src.classList.add("left");
    });
  }
});
