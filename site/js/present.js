/* Reading mode navigation and present mode.
   Present: P or ?present. Right, Down, Space, Page Down = next line, then next chapter.
   Left, Up, Page Up = back. Home and End jump. Escape or P returns to reading. */

(function () {
  "use strict";
  var body = document.body;
  var main = document.getElementById("main");
  var slides = Array.prototype.slice.call(main.children);
  var contents = document.getElementById("contents");
  var contentsBtn = document.getElementById("contents-open");
  var progress = document.getElementById("progress");
  var hudStatus = document.getElementById("hud-status");
  var presenting = false, slideIdx = 0, beatIdx = 0;

  /* ---------- Contents panel ---------- */
  function openContents() {
    contents.dataset.open = "true";
    contentsBtn.setAttribute("aria-expanded", "true");
    var cur = contents.querySelector('[aria-current="true"]') || contents.querySelector("a");
    setTimeout(function () { if (cur) cur.focus(); }, 30);
  }
  function closeContents(returnFocus) {
    if (contents.dataset.open !== "true") return;
    contents.dataset.open = "false";
    contentsBtn.setAttribute("aria-expanded", "false");
    if (returnFocus) contentsBtn.focus();
  }
  contentsBtn.addEventListener("click", function () {
    contents.dataset.open === "true" ? closeContents(true) : openContents();
  });
  document.getElementById("contents-close").addEventListener("click", function () { closeContents(true); });
  contents.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-target]");
    if (!a) return;
    closeContents(false);
    if (presenting) {
      e.preventDefault();
      go(slides.findIndex(function (s) { return s.id === a.dataset.target; }), 0);
    }
  });
  document.addEventListener("click", function (e) {
    if (contents.dataset.open === "true" && !contents.contains(e.target) && e.target !== contentsBtn) closeContents(false);
  });

  /* ---------- Reading mode: where are we? ---------- */
  function currentReadingIndex() {
    var mark = window.innerHeight * 0.33, idx = 0;
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].getBoundingClientRect().top <= mark) idx = i; else break;
    }
    return idx;
  }
  function markContents(idx) {
    contents.querySelectorAll("a").forEach(function (a, i) {
      if (i === idx) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }
  function onScroll() {
    if (presenting) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    markContents(currentReadingIndex());
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Present mode ---------- */
  function beatsOf(slide) { return slide.querySelectorAll(".beat"); }

  function draw() {
    slides.forEach(function (s, i) { s.classList.toggle("is-current", i === slideIdx); });
    var beats = beatsOf(slides[slideIdx]);
    beats.forEach(function (b, i) {
      if (i <= beatIdx) b.removeAttribute("data-hidden"); else b.setAttribute("data-hidden", "true");
      b.setAttribute("aria-hidden", i <= beatIdx ? "false" : "true");
    });
    var title = slideIdx === 0 ? "Cover" : slideIdx + " of " + (slides.length - 1);
    hudStatus.textContent = title;
    markContents(slideIdx);
    /* Keep focus somewhere visible: if it was inside a slide that is now hidden, move it to the current one */
    var a = document.activeElement;
    if (a && a !== body && main.contains(a) && !slides[slideIdx].contains(a)) slides[slideIdx].focus({ preventScroll: true });
  }

  function go(s, b) {
    slideIdx = Math.max(0, Math.min(slides.length - 1, s));
    var n = beatsOf(slides[slideIdx]).length;
    beatIdx = b === "last" ? Math.max(0, n - 1) : Math.max(0, Math.min(Math.max(0, n - 1), b));
    draw();
  }
  function next() {
    var n = beatsOf(slides[slideIdx]).length;
    if (beatIdx < n - 1) { beatIdx++; draw(); } else if (slideIdx < slides.length - 1) go(slideIdx + 1, 0);
  }
  function prev() {
    if (beatIdx > 0) { beatIdx--; draw(); } else if (slideIdx > 0) go(slideIdx - 1, "last");
  }

  function enter(fromStart) {
    presenting = true;
    closeContents(false);
    body.classList.add("presenting");
    slides.forEach(function (s) { s.setAttribute("tabindex", "-1"); });
    go(fromStart ? 0 : currentReadingIndex(), 0);
    slides[slideIdx].focus({ preventScroll: true });
  }
  function exit() {
    presenting = false;
    body.classList.remove("presenting");
    slides.forEach(function (s) {
      s.classList.remove("is-current");
      s.removeAttribute("tabindex");
      beatsOf(s).forEach(function (b) { b.removeAttribute("data-hidden"); b.removeAttribute("aria-hidden"); });
    });
    slides[slideIdx].scrollIntoView({ block: "start" });
    document.getElementById("present-toggle").focus({ preventScroll: true });
  }

  document.getElementById("present-toggle").addEventListener("click", function () { enter(false); });
  document.getElementById("hud-prev").addEventListener("click", prev);
  document.getElementById("hud-next").addEventListener("click", next);
  document.getElementById("hud-exit").addEventListener("click", exit);

  /* ---------- Keyboard ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target, tag = t && t.tagName ? t.tagName.toLowerCase() : "";
    var typing = tag === "input" || tag === "textarea" || tag === "select" || (t && t.isContentEditable);

    if (e.key === "Escape") {
      if (contents.dataset.open === "true") { closeContents(true); e.preventDefault(); return; }
      if (presenting) { exit(); e.preventDefault(); return; }
    }
    if (typing) return;
    if (e.key === "p" || e.key === "P") { e.preventDefault(); presenting ? exit() : enter(false); return; }
    if (!presenting) return;

    var interactive = tag === "button" || tag === "a" || tag === "summary";
    if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !interactive)) { e.preventDefault(); next(); }
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); prev(); }
    else if (e.key === "Home") { e.preventDefault(); go(0, 0); }
    else if (e.key === "End") { e.preventDefault(); go(slides.length - 1, "last"); }
  });

  if (/(?:^\?|&)present(?:=|&|$)/i.test(window.location.search)) enter(true);
  else { slides[0].classList.remove("is-current"); onScroll(); }
})();
