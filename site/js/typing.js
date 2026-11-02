/* Slide 11: code that keeps typing itself off to the right, just for the feeling of it.
   It types only while its slide is showing, and loops. Under reduced motion it simply sits there, already typed. */

(function () {
  "use strict";
  var CODE = [
    "<!DOCTYPE html>",
    "<html lang=\"en\">",
    "<head>",
    "  <meta charset=\"UTF-8\">",
    "  <title>Meeting Tracker</title>",
    "  <style>",
    "    body { font-family: system-ui; margin: 0; }",
    "    .card { border: 1px solid #d6dad2; border-radius: 8px; }",
    "    .prep { background: #fbf7df; padding: 1rem; }",
    "  </style>",
    "</head>",
    "<body>",
    "  <h1>Today's meetings</h1>",
    "  <ul id=\"schedule\"></ul>",
    "  <section class=\"prep\" id=\"prep\"></section>",
    "  <textarea id=\"notes\" placeholder=\"Notes\"></textarea>",
    "  <button id=\"save\">Save and go to next</button>",
    "<script>",
    "  const meetings = load() || [];",
    "",
    "  function load() {",
    "    return JSON.parse(localStorage.getItem(\"tracker\"));",
    "  }",
    "",
    "  function save() {",
    "    localStorage.setItem(\"tracker\", JSON.stringify(meetings));",
    "  }",
    "",
    "  function showToday() {",
    "    const today = new Date().toDateString();",
    "    schedule.innerHTML = meetings",
    "      .filter(m => m.date === today)",
    "      .map(m => `<li>${m.time} ${m.student}</li>`)",
    "      .join(\"\");",
    "  }",
    "",
    "  function prepFor(student) {",
    "    const last = meetings.filter(m => m.student === student).pop();",
    "    prep.textContent = last ? last.next : \"First meeting.\";",
    "  }",
    "",
    "  document.getElementById(\"save\").onclick = () => {",
    "    current.notes = notes.value;",
    "    current.done = true;",
    "    save();",
    "    showToday();",
    "  };",
    "",
    "  showToday();",
    "</" + "script>",
    "</body>",
    "</html>",
    "",
    ""
  ].join("\n");

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var timer = null;
  // Enter with a substantial draft already on screen, rather than a blank editor.
  var START = CODE.indexOf("  function showToday()");

  function run(box) {
    var pre = box.querySelector("pre"), i = START;
    if (reduce) { pre.textContent = CODE; return; }
    if (timer) return;
    pre.textContent = CODE.slice(0, i);
    box.scrollTop = box.scrollHeight;
    (function tick() {
      i += 1 + (Math.random() < 0.3 ? 1 : 0);
      if (i > CODE.length) {
        i = START;
        pre.textContent = CODE.slice(0, i);
        box.scrollTop = box.scrollHeight;
        timer = setTimeout(tick, 900);
        return;
      }
      pre.textContent = CODE.slice(0, i);
      box.scrollTop = box.scrollHeight;
      var ch = CODE.charAt(i - 1);
      timer = setTimeout(tick, ch === "\n" ? 140 + Math.random() * 220 : 12 + Math.random() * 30);
    })();
  }
  function stop() { clearTimeout(timer); timer = null; }

  document.addEventListener("deckstep", function (e) {
    var box = e.detail.slide.querySelector("[data-typing]");
    if (box) run(box); else stop();
  });
  /* If the deck opens straight onto this slide */
  var active = document.querySelector(".slide.is-active [data-typing]");
  if (active) run(active);
})();
