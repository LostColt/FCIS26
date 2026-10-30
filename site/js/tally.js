/* Chapter 1: tap the tools you pay for and watch the year add up.
   Prices are list prices for one teacher, billed yearly where offered, checked October 2026.
   Google AI Pro has no yearly plan in the US: $19.99 a month, so $239.88 a year.
   Nothing is saved or sent. */

(function () {
  "use strict";
  var host = document.querySelector('[data-figure="tally"]');
  if (!host) return;

  var apps = [
    { name: "ChatGPT Plus", plan: "Plus", year: 240 },
    { name: "Gemini", plan: "Google AI Pro", year: 239.88 },
    { name: "Nearpod", plan: "Gold", year: 159 },
    { name: "Notion", plan: "Plus", year: 144 },
    { name: "MagicSchool", plan: "Plus", year: 99.96 },
    { name: "Kahoot!", plan: "Plus Silver", year: 84 },
    { name: "Screencastify", plan: "Starter", year: 84 },
    { name: "Padlet", plan: "Gold", year: 83.88 },
    { name: "Trello", plan: "Standard", year: 60 },
    { name: "Gimkit", plan: "Pro", year: 59.88 },
    { name: "Blooket", plan: "Plus", year: 59.88 },
    { name: "Quizlet", plan: "Plus", year: 35.99 }
  ];
  var staffOptions = [1, 10, 25, 50, 100];
  var staff = 1;

  var money = function (n, whole) {
    return "$" + n.toLocaleString("en-US", { minimumFractionDigits: whole ? 0 : 0, maximumFractionDigits: whole ? 0 : 2 });
  };

  host.innerHTML =
    '<div class="tally">' +
    "<h3>What’s in your pile?</h3>" +
    "<p>Tap everything you or your school pays for.</p>" +
    '<div class="app-grid">' +
    apps.map(function (a, i) {
      return '<button type="button" class="app" aria-pressed="false" data-i="' + i + '">' +
        '<span class="app-name">' + a.name + '</span>' +
        '<span class="app-plan">' + a.plan + '</span>' +
        '<span class="app-price">' + money(Math.round(a.year), true) + " a year</span>" +
        "</button>";
    }).join("") +
    "</div>" +
    '<div class="staff"><span id="staff-label">Teachers at your school paying the same</span>' +
    '<div class="staff-opts" role="group" aria-labelledby="staff-label">' +
    staffOptions.map(function (n) {
      return '<button type="button" class="staff-btn" aria-pressed="' + (n === 1) + '" data-n="' + n + '">' + n + "</button>";
    }).join("") +
    "</div></div>" +
    '<div class="tally-total" aria-live="polite">' +
    '<div><span class="label">Per month</span><span class="num" data-month>$0</span></div>' +
    '<div><span class="label">Per year, for you</span><span class="num" data-year>$0</span></div>' +
    '<div><span class="label">Per year, across your school</span><span class="num" data-school>$0</span></div>' +
    "</div>" +
    '<p class="tally-foot">List prices for one teacher’s plan, billed yearly where that’s offered (Google AI Pro is $19.99 a month), checked October 2026. Your school may pay differently. Nothing here is saved or sent.</p>' +
    "</div>";

  function update() {
    var year = 0;
    host.querySelectorAll(".app").forEach(function (b) {
      if (b.getAttribute("aria-pressed") === "true") year += apps[+b.dataset.i].year;
    });
    host.querySelector("[data-month]").textContent = money(year / 12);
    host.querySelector("[data-year]").textContent = money(Math.round(year), true);
    host.querySelector("[data-school]").textContent = money(Math.round(year * staff), true);
  }

  host.addEventListener("click", function (e) {
    var app = e.target.closest(".app");
    if (app) {
      app.setAttribute("aria-pressed", app.getAttribute("aria-pressed") === "true" ? "false" : "true");
      update();
      return;
    }
    var s = e.target.closest(".staff-btn");
    if (s) {
      staff = +s.dataset.n;
      host.querySelectorAll(".staff-btn").forEach(function (b) { b.setAttribute("aria-pressed", String(b === s)); });
      update();
    }
  });
  update();
})();
