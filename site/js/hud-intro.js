/* Slide 20: exact three-second viewport hold, then zoom to the original preview.
   The actual interactive iframe is temporarily moved to document.body because the
   transformed slide track creates a containing block for position:fixed. Moving
   only with transforms inside the track caused the previous off-screen entry. */
(function () {
  "use strict";

  var scene = document.querySelector(".hud-scene--cinematic");
  if (!scene) return;
  var shell = scene.querySelector(".hud-frame-shell");
  var frame = shell.querySelector("[data-hud-preview]");
  var slide = scene.closest(".slide");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var placeholder = document.createElement("div");
  placeholder.className = "hud-frame-placeholder";
  var holdTimer = null, endTimer = null;
  var active = false;

  function clearTimers() {
    clearTimeout(holdTimer);
    clearTimeout(endTimer);
    holdTimer = endTimer = null;
  }

  function resetInline() {
    shell.classList.remove("hud-portal", "hud-shrinking");
    ["left", "top", "width", "height", "margin", "transform", "transition"].forEach(function (key) {
      shell.style.removeProperty(key);
    });
    ["width", "height", "transform", "transform-origin"].forEach(function (key) {
      frame.style.removeProperty(key);
    });
  }

  function stop() {
    clearTimers();
    active = false;
    scene.classList.remove("hud-copy-visible");
    if (placeholder.parentNode) placeholder.replaceWith(shell);
    resetInline();
  }

  function returnHome() {
    if (!active || !placeholder.isConnected) return;
    // The slide track has finished its own entrance by this point, so this
    // destination is the real on-screen preview rather than an offscreen box.
    var target = placeholder.getBoundingClientRect();
    if (target.width < 10 || target.height < 10) {
      stop();
      scene.classList.add("hud-copy-visible");
      return;
    }
    shell.classList.add("hud-shrinking");
    shell.style.left = target.left + "px";
    shell.style.top = target.top + "px";
    shell.style.width = target.width + "px";
    shell.style.height = target.height + "px";
    endTimer = setTimeout(function () {
      if (!active) return;
      placeholder.replaceWith(shell);
      resetInline();
      scene.classList.add("hud-copy-visible");
    }, 1450);
  }

  function start() {
    stop();
    active = true;
    if (reduce) {
      scene.classList.add("hud-copy-visible");
      return;
    }

    // Reserve the current preview's grid position and move the SAME iframe,
    // without cloning or reloading it, into a true body-level viewport layer.
    var box = shell.getBoundingClientRect();
    placeholder.style.height = box.height + "px";
    placeholder.style.width = "100%";
    shell.replaceWith(placeholder);
    document.body.appendChild(shell);
    shell.classList.add("hud-portal");
    shell.style.left = "0px";
    shell.style.top = "0px";
    shell.style.width = window.innerWidth + "px";
    shell.style.height = window.innerHeight + "px";
    frame.style.width = "100%";
    frame.style.height = "100%";
    frame.style.transform = "none";
    frame.style.transformOrigin = "top left";
    // No entrance animation: the HUD is already fully visible and stationary.
    holdTimer = setTimeout(returnHome, 3000);
  }

  document.addEventListener("deckstep", function (event) {
    var showing = event.detail && event.detail.slide === slide;
    if (!showing) {
      if (active) stop();
      return;
    }
    if (!active) start();
  });

  window.addEventListener("resize", function () {
    if (!active || !shell.classList.contains("hud-portal")) return;
    if (shell.classList.contains("hud-shrinking")) {
      var r = placeholder.getBoundingClientRect();
      shell.style.left = r.left + "px";
      shell.style.top = r.top + "px";
      shell.style.width = r.width + "px";
      shell.style.height = r.height + "px";
    } else {
      shell.style.width = window.innerWidth + "px";
      shell.style.height = window.innerHeight + "px";
    }
  });

  if (slide.classList.contains("is-active")) start();
})();
