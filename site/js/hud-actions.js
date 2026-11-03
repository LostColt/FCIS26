/* Copy the actual checked-in interactive demo source; do not invent export code. */
(function () {
  "use strict";
  document.addEventListener("click", async function (event) {
    var button = event.target.closest("[data-copy-hud]");
    if (!button) return;
    var slide = button.closest(".slide");
    var status = slide && slide.querySelector("[data-copy-hud-status]");
    var original = button.textContent;
    button.disabled = true;
    try {
      var response = await fetch("demos/jarvis-hud.html", {cache:"no-store"});
      if (!response.ok) throw new Error("Unable to retrieve demo HTML");
      var html = await response.text();
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error("Clipboard access is unavailable; use Download HTML instead");
      await navigator.clipboard.writeText(html);
      button.textContent = "Copied";
      if (status) status.textContent = "The full HTML source is on your clipboard.";
    } catch (error) {
      if (status) status.textContent = "Copy unavailable here. Use Download HTML to save the same code.";
    } finally {
      button.disabled = false;
      if (button.textContent === "Copied") button.textContent = original;
    }
  });
})();