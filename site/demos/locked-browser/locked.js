(function () {
  "use strict";

  var INITIAL_DRAFT =
    "When Gatsby reunites with Daisy in Nick's living room, he leans his head back against a stopped mantelpiece clock until it tilts off the shelf. Fitzgerald uses that broken clock to show that Gatsby isn't really trying to win Daisy in 1922—he wants time itself to rewind five years to Louisville.\n\nEven when he catches the clock with trembling fingers and apologizes, the physical object gives away how fragile his wish is.";

  var STAGE_COPY = {
    classroom: {
      title: "Reading response: The Great Gatsby",
      summary: "Open daily writing",
      caption: "Notes and pasting are open during class discussion."
    },
    test: {
      title: "Timed essay: The Great Gatsby",
      summary: "40-minute assessment",
      caption: "Timer and word target are active."
    },
    locked: {
      title: "In-class essay: The Great Gatsby",
      summary: "Paste and tab switching turned off",
      caption: "Locked mode is active for this session."
    }
  };

  var currentStage = "locked";
  var secondsLeft = 34 * 60 + 18;
  var noticeTimer = null;

  var stageTabs = document.querySelectorAll(".stage-tab");
  var stageSummaryEl = document.getElementById("stage-summary");
  var editorHeadingEl = document.getElementById("editor-heading");
  var wordCountValEl = document.getElementById("word-count-val");
  var timerValEl = document.getElementById("timer-val");
  var lockNoticeEl = document.getElementById("lock-notice");
  var essayEditorEl = document.getElementById("essay-editor");
  var modeCaptionEl = document.getElementById("mode-caption");
  var submitBtnEl = document.getElementById("submit-btn");
  var resetBtnEl = document.getElementById("reset-btn");

  function countWords(str) {
    var trimmed = str.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }

  function showLockNotice(message) {
    if (currentStage !== "locked") return;
    lockNoticeEl.textContent = message;
    if (noticeTimer) clearTimeout(noticeTimer);
    noticeTimer = setTimeout(function () {
      lockNoticeEl.textContent = "";
    }, 4000);
  }

  function clearLockNotice() {
    if (noticeTimer) clearTimeout(noticeTimer);
    lockNoticeEl.textContent = "";
  }

  function updateMetrics() {
    var words = countWords(essayEditorEl.value);
    if (currentStage === "classroom") {
      wordCountValEl.textContent = words + " words";
    } else {
      wordCountValEl.textContent = words + " of 250 words";
    }

    var m = Math.floor(secondsLeft / 60);
    var s = String(secondsLeft % 60).padStart(2, "0");
    timerValEl.textContent = m + ":" + s + " left";
  }

  function renderStage() {
    document.body.setAttribute("data-stage", currentStage);
    var info = STAGE_COPY[currentStage] || STAGE_COPY.locked;

    stageTabs.forEach(function (tab) {
      var active = tab.dataset.stage === currentStage;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });

    stageSummaryEl.textContent = info.summary;
    editorHeadingEl.textContent = info.title;
    modeCaptionEl.textContent = info.caption;

    var isTimed = currentStage === "test" || currentStage === "locked";
    timerValEl.hidden = !isTimed;
    submitBtnEl.hidden = !isTimed;

    if (currentStage !== "locked") {
      clearLockNotice();
    }

    updateMetrics();
  }

  function setStage(stage) {
    currentStage = stage;
    renderStage();
  }

  stageTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      setStage(tab.dataset.stage);
    });
  });

  essayEditorEl.addEventListener("input", updateMetrics);

  essayEditorEl.addEventListener("paste", function (e) {
    if (currentStage === "locked") {
      e.preventDefault();
      showLockNotice("Pasting from outside is turned off in Locked mode.");
    }
  });

  essayEditorEl.addEventListener("contextmenu", function (e) {
    if (currentStage === "locked") {
      e.preventDefault();
      showLockNotice("Right-click menu is turned off in Locked mode.");
    }
  });

  window.addEventListener("blur", function () {
    if (currentStage === "locked") {
      showLockNotice("Please stay in this window until you turn in your essay.");
    }
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden && currentStage === "locked") {
      showLockNotice("Please stay in this window until you turn in your essay.");
    }
  });

  submitBtnEl.addEventListener("click", function () {
    submitBtnEl.textContent = "Turned in";
    setTimeout(function () {
      submitBtnEl.textContent = "Turn in essay";
    }, 2000);
  });

  resetBtnEl.addEventListener("click", function () {
    currentStage = "locked";
    secondsLeft = 34 * 60 + 18;
    essayEditorEl.value = INITIAL_DRAFT;
    clearLockNotice();
    renderStage();
  });

  setInterval(function () {
    if ((currentStage === "test" || currentStage === "locked") && secondsLeft > 0) {
      secondsLeft -= 1;
      updateMetrics();
    }
  }, 1000);

  essayEditorEl.value = INITIAL_DRAFT;
  renderStage();
})();
