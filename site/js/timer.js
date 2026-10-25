/* Chapter 11: the workshop timer. Pick 2 minutes, build 9, swap 4. */

(function () {
  "use strict";
  var host = document.querySelector('[data-figure="timer"]');
  if (!host) return;

  var phases = [
    { name: "Pick", mins: 2, say: "Pick one small annoyance." },
    { name: "Build", mins: 9, say: "Paste the prompt. Build it. Refine it." },
    { name: "Swap", mins: 4, say: "Trade with a neighbor. Try to break it." }
  ];
  var total = phases.reduce(function (s, p) { return s + p.mins * 60; }, 0);

  host.innerHTML =
    '<div class="timer">' +
    "<h3>Workshop timer</h3>" +
    '<div class="timer-phases">' +
    phases.map(function (p) { return '<div class="timer-phase">' + p.name + ", " + p.mins + " min</div>"; }).join("") +
    "</div>" +
    '<p class="timer-clock" data-clock>2:00</p>' +
    '<p class="timer-label" data-label aria-live="polite">Ready when you are. Fifteen minutes in all.</p>' +
    '<div class="timer-controls">' +
    '<button type="button" class="btn btn-primary" data-start>Start</button>' +
    '<button type="button" class="btn" data-skip>Next step</button>' +
    '<button type="button" class="btn" data-reset>Reset</button>' +
    "</div></div>";

  var clock = host.querySelector("[data-clock]");
  var label = host.querySelector("[data-label]");
  var startBtn = host.querySelector("[data-start]");
  var bars = host.querySelectorAll(".timer-phase");
  var left = total, tick = null, lastPhase = -1;

  function phaseAt(remaining) {
    var elapsed = total - remaining, acc = 0;
    for (var i = 0; i < phases.length; i++) {
      acc += phases[i].mins * 60;
      if (elapsed < acc) return { i: i, inPhase: acc - elapsed };
    }
    return { i: phases.length, inPhase: 0 };
  }

  function draw() {
    var p = phaseAt(left);
    var shown = p.i < phases.length ? p.inPhase : 0;
    clock.textContent = Math.floor(shown / 60) + ":" + String(shown % 60).padStart(2, "0");
    bars.forEach(function (b, i) {
      b.classList.toggle("done", i < p.i);
      b.classList.toggle("now", i === p.i && tick !== null);
    });
    if (p.i !== lastPhase && (tick !== null || p.i === phases.length)) {
      label.textContent = p.i < phases.length ? phases[p.i].name + ": " + phases[p.i].say : "Time. What did you build?";
      lastPhase = p.i;
    }
  }

  function stop() { clearInterval(tick); tick = null; startBtn.textContent = left < total ? "Resume" : "Start"; }

  startBtn.addEventListener("click", function () {
    if (tick) { stop(); draw(); return; }
    if (left <= 0) left = total;
    startBtn.textContent = "Pause";
    tick = setInterval(function () {
      left -= 1;
      if (left <= 0) { left = 0; stop(); }
      draw();
    }, 1000);
    lastPhase = -1;
    draw();
  });

  host.querySelector("[data-skip]").addEventListener("click", function () {
    var p = phaseAt(left);
    left = Math.max(0, left - p.inPhase);
    lastPhase = -1;
    draw();
  });

  host.querySelector("[data-reset]").addEventListener("click", function () {
    stop(); left = total; lastPhase = -1;
    label.textContent = "Ready when you are. Fifteen minutes in all.";
    draw();
  });

  draw();
})();
