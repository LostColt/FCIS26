/* Chapter 1: tick what you pay for, type what it costs, see the year.
   Every number comes from the person using it. Nothing is saved or sent. */

(function () {
  "use strict";
  var host = document.querySelector('[data-figure="tally"]');
  if (!host) return;

  var items = [
    "Quiz or game maker",
    "Slides or presentation tool",
    "Video or screen recorder",
    "Worksheet or activity builder",
    "Rubric or feedback tool",
    "Comment bank or report writer",
    "Flashcards or study tool",
    "Forms or polling",
    "Plagiarism or AI checker",
    "An AI tool",
    "Something else"
  ];

  var rows = items.map(function (name, i) {
    return (
      '<li class="tally-row" data-i="' + i + '">' +
      '<label><input type="checkbox" data-check><span class="name">' + name + "</span></label>" +
      '<span class="money">$<input type="number" inputmode="decimal" min="0" step="0.01" placeholder="0" aria-label="' + name + ', cost per month in dollars" data-price></span>' +
      "</li>"
    );
  }).join("");

  host.innerHTML =
    '<div class="tally">' +
    "<h3>What\u2019s in your pile?</h3>" +
    "<p>Tick what you or your school pays for. Type what each one costs a month. Nothing here is saved or sent anywhere.</p>" +
    '<ul class="tally-list">' + rows + "</ul>" +
    '<p class="tally-staff"><label for="staff">Teachers at your school paying the same</label><input id="staff" type="number" inputmode="numeric" min="1" step="1" value="1"></p>' +
    '<div class="tally-total" aria-live="polite">' +
    '<div><span class="label">Per month</span><span class="num" data-month>$0</span></div>' +
    '<div><span class="label">Per year, for you</span><span class="num" data-year>$0</span></div>' +
    '<div><span class="label">Per year, across your school</span><span class="num" data-school>$0</span></div>' +
    "</div>" +
    '<p class="tally-foot">Hand up if you only use one feature of something on this list.</p>' +
    "</div>";

  var fmt = function (n) {
    return "$" + n.toLocaleString("en-US", { maximumFractionDigits: n < 100 ? 2 : 0 });
  };

  function update() {
    var month = 0;
    host.querySelectorAll(".tally-row").forEach(function (row) {
      var on = row.querySelector("[data-check]").checked;
      var price = parseFloat(row.querySelector("[data-price]").value) || 0;
      row.classList.toggle("on", on);
      if (on) month += Math.max(0, price);
    });
    var staff = Math.max(1, parseInt(host.querySelector("#staff").value, 10) || 1);
    host.querySelector("[data-month]").textContent = fmt(month);
    host.querySelector("[data-year]").textContent = fmt(month * 12);
    host.querySelector("[data-school]").textContent = fmt(month * 12 * staff);
  }

  /* Typing a price ticks the box, because that's what people mean */
  host.addEventListener("input", function (e) {
    if (e.target.matches("[data-price]") && e.target.value !== "") {
      e.target.closest(".tally-row").querySelector("[data-check]").checked = true;
    }
    update();
  });
  host.addEventListener("change", update);
  update();
})();
