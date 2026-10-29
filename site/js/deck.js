/* The deck engine. Next: right arrow, down, space, Page Down (clickers), or swipe left.
   Back: left arrow, up, Page Up, or swipe right. Home and End jump. M opens the slide list. F is full screen. */

(function () {
  "use strict";
  var D = window.DECK;
  var deck = document.getElementById("deck");
  var track = document.getElementById("track");
  var bdTrack = document.getElementById("backdrop-track");
  var menu = document.getElementById("menu");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cur = 0, step = 0, slides = [];

  /* ---------- Build ---------- */
  function todo(html) {
    return html.replace(/\[DAVID:[^\]]*\]/g, function (m) { return '<span class="todo">' + m + "</span>"; });
  }

  D.chapters.forEach(function (c) {
    var w = document.createElement("div");
    w.className = "bd-word";
    w.textContent = c.word;
    bdTrack.appendChild(w);
  });

  D.slides.forEach(function (s, i) {
    var el = document.createElement("section");
    el.className = "slide" + (s.scroll ? " scrolls" : "") + (s.center ? " centered" : "");
    el.setAttribute("role", "group");
    el.setAttribute("aria-roledescription", "slide");
    el.setAttribute("aria-label", (i + 1) + " of " + D.slides.length + ": " + D.chapters[s.ch].title);
    el.tabIndex = -1;
    if (s.id) el.dataset.name = s.id;
    el.innerHTML = '<div class="slide-inner">' + todo(s.html) + "</div>";
    track.appendChild(el);
    slides.push(el);
  });

  /* Mockup links get a small picture once the mockup provides demos/<name>/thumb.png */
  document.querySelectorAll(".mockup-link").forEach(function (a) {
    var img = new Image();
    img.alt = "";
    img.className = "thumb";
    img.onload = function () { a.classList.add("has-thumb"); a.insertBefore(img, a.firstChild); };
    img.src = a.getAttribute("href").replace(/index\.html$/, "") + "thumb.png";
  });

  /* Progress: one segment per chapter */
  var prog = document.getElementById("progress");
  prog.innerHTML = D.chapters.map(function () { return "<span></span>"; }).join("");

  /* Slide list */
  var list = document.getElementById("menu-list");
  list.innerHTML = D.chapters.map(function (c, ci) {
    var first = D.slides.findIndex(function (s) { return s.ch === ci; });
    return '<li><a href="#' + (first + 1) + '" data-go="' + first + '"><span>' + ci + "</span>" + c.title + "</a></li>";
  }).join("");

  /* ---------- Live mockups: load when their slide is shown, scaled to fit ---------- */
  var LIVE_W = 1440, LIVE_H = 900;
  function fitLive(frame) {
    var f = frame.querySelector("iframe");
    if (f) f.style.transform = "scale(" + (frame.clientWidth / LIVE_W) + ")";
  }
  function wakeLive(slide) {
    if (window.matchMedia("(max-width: 760px)").matches) return;
    slide.querySelectorAll(".live-frame").forEach(function (frame) {
      if (!frame.querySelector("iframe")) {
        var f = document.createElement("iframe");
        f.src = frame.dataset.src;
        f.title = frame.dataset.title + " (live mockup)";
        f.width = LIVE_W; f.height = LIVE_H;
        f.addEventListener("load", function () { frame.classList.add("loaded"); });
        frame.appendChild(f);
      }
      fitLive(frame);
    });
  }
  /* On phones the picture opens the mockup full screen */
  track.addEventListener("click", function (e) {
    var frame = e.target.closest(".live-frame");
    if (frame && !frame.querySelector("iframe")) window.open(frame.dataset.src, "_blank", "noopener");
  });

  function indexFromHash() {
    var h = (location.hash || "").replace("#", "");
    if (!h) return 0;
    var n = parseInt(h, 10);
    if (!isNaN(n) && String(n) === h) return n - 1;
    var k = D.slides.findIndex(function (s) { return s.id === h; });
    return k < 0 ? 0 : k;
  }

  /* ---------- Show ---------- */
  function apply(el, n) {
    el.querySelectorAll("[data-step],[data-at]").forEach(function (x) {
      var k = parseInt(x.getAttribute("data-step") || x.getAttribute("data-at"), 10);
      x.classList.toggle("on", k <= n);
    });
  }

  function countUp(el) {
    el.querySelectorAll("[data-count]").forEach(function (n) {
      var end = parseInt(n.getAttribute("data-count"), 10);
      if (reduce) { n.textContent = end; return; }
      var t0 = null;
      function frame(t) {
        if (!t0) t0 = t;
        var p = Math.min(1, (t - t0) / 1100);
        n.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(frame);
      }
      n.textContent = "0";
      requestAnimationFrame(frame);
    });
  }

  function show(i, s, fromNav) {
    var changed = i !== cur;
    /* Jumping (start-up, the slide list, a link back from a mockup) lands instantly instead of sliding past every slide */
    if (fromNav === "jump") {
      deck.classList.add("jumping");
      requestAnimationFrame(function () { requestAnimationFrame(function () { deck.classList.remove("jumping"); }); });
    }
    cur = Math.max(0, Math.min(slides.length - 1, i));
    var max = D.slides[cur].steps;
    step = s === "all" ? max : Math.max(0, Math.min(max, s));

    track.style.transform = "translateX(" + (-cur * 100) + "vw)";
    var ch = D.slides[cur].ch;
    var firstOf = D.slides.findIndex(function (x) { return x.ch === ch; });
    bdTrack.style.transform = "translateX(" + (-ch * 100 - (cur - firstOf) * 9) + "vw)";

    slides.forEach(function (el, k) {
      var active = k === cur;
      el.classList.toggle("is-active", active);
      el.classList.toggle("seen", k < cur);
      if (active) el.removeAttribute("inert"); else el.setAttribute("inert", "");
      apply(el, k < cur ? 99 : k > cur ? -1 : step);
    });

    if (changed || fromNav === "jump") {
      wakeLive(slides[cur]);
      countUp(slides[cur]);
      slides[cur].scrollTop = 0;
      if (!slides[cur].contains(document.activeElement)) slides[cur].focus({ preventScroll: true });
    }

    document.getElementById("where-num").textContent = ch;
    document.getElementById("where-title").textContent = D.chapters[ch].title;
    document.getElementById("count").textContent = (cur + 1) + " / " + slides.length;
    prog.querySelectorAll("span").forEach(function (sp, k) {
      sp.className = k < ch ? "done" : k === ch ? "now" : "";
    });
    list.querySelectorAll("a").forEach(function (a, k) {
      if (k === ch) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
    if (history.replaceState) history.replaceState(null, "", "#" + (cur + 1));
  }

  function next() {
    if (step < D.slides[cur].steps) show(cur, step + 1);
    else if (cur < slides.length - 1) show(cur + 1, 0);
  }
  function prev() {
    if (step > 0) show(cur, step - 1);
    else if (cur > 0) show(cur - 1, "all");
  }

  /* ---------- Menu ---------- */
  function openMenu() { menu.hidden = false; (list.querySelector('[aria-current="true"]') || list.querySelector("a")).focus(); }
  function closeMenu() { menu.hidden = true; document.getElementById("menu-open").focus(); }
  document.getElementById("menu-open").addEventListener("click", openMenu);
  document.getElementById("menu-close").addEventListener("click", closeMenu);
  list.addEventListener("click", function (e) {
    var a = e.target.closest("[data-go]");
    if (!a) return;
    e.preventDefault();
    menu.hidden = true;
    show(parseInt(a.dataset.go, 10), 0, "jump");
  });

  document.getElementById("prev").addEventListener("click", prev);
  document.getElementById("next").addEventListener("click", next);
  document.getElementById("full").addEventListener("click", toggleFull);
  function toggleFull() {
    if (!document.fullscreenElement) { if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen(); }
    else if (document.exitFullscreen) document.exitFullscreen();
  }

  /* ---------- Keyboard ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target, tag = t && t.tagName ? t.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select") return;
    if (!menu.hidden) { if (e.key === "Escape") { e.preventDefault(); closeMenu(); } return; }
    var onControl = tag === "button" || tag === "a";
    var k = e.key;
    if (k === "ArrowRight" || k === "PageDown" || (k === " " && !onControl)) { e.preventDefault(); next(); }
    else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); prev(); }
    else if ((k === "ArrowDown" || k === "ArrowUp") && !D.slides[cur].scroll) { e.preventDefault(); k === "ArrowDown" ? next() : prev(); }
    else if (k === "Home") { e.preventDefault(); show(0, 0, "jump"); }
    else if (k === "End") { e.preventDefault(); show(slides.length - 1, "all", "jump"); }
    else if (k === "m" || k === "M") { e.preventDefault(); openMenu(); }
    else if (k === "f" || k === "F") { e.preventDefault(); toggleFull(); }
  });

  /* ---------- Swipe, with the slide following your finger ---------- */
  var sx = null, sy = null, dx = 0, horizontal = null;
  deck.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "mouse" || e.target.closest("input,textarea,select,button,a,pre")) return;
    sx = e.clientX; sy = e.clientY; dx = 0; horizontal = null;
  });
  deck.addEventListener("pointermove", function (e) {
    if (sx === null) return;
    var mx = e.clientX - sx, my = e.clientY - sy;
    if (horizontal === null && (Math.abs(mx) > 8 || Math.abs(my) > 8)) horizontal = Math.abs(mx) > Math.abs(my);
    if (!horizontal) return;
    dx = mx;
    deck.classList.add("dragging");
    track.style.transform = "translateX(calc(" + (-cur * 100) + "vw + " + dx + "px))";
  });
  function endSwipe() {
    if (sx === null) return;
    deck.classList.remove("dragging");
    var moved = horizontal ? dx : 0;
    sx = null;
    if (moved < -50) next(); else if (moved > 50) prev(); else show(cur, step);
  }
  deck.addEventListener("pointerup", endSwipe);
  deck.addEventListener("pointercancel", endSwipe);

  /* ---------- Copy buttons ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]");
    if (!b) return;
    var done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy prompt"; }, 1800); };
    var box = b.closest(".prompt-box");
    var text = box && box.querySelector("pre") ? box.querySelector("pre").textContent : D.prompt;
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (err) { b.textContent = "Select the text to copy"; }
      document.body.removeChild(ta);
    }
  });

  /* ---------- Start ---------- */
  show(indexFromHash(), 0, "jump");
  window.addEventListener("resize", function () {
    show(cur, step);
    document.querySelectorAll(".live-frame").forEach(fitLive);
  });
  window.addEventListener("hashchange", function () {
    var n = indexFromHash();
    if (n !== cur) show(n, 0, "jump");
  });
})();
