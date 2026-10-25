(function () {
  "use strict";

  var INITIAL_QUOTES = [
    {
      cite: "Ch. 1, p. 21 · The Green Light",
      text: "He stretched out his arms toward the dark water in a curious way, and, far as I was from him, I could have sworn he was trembling."
    },
    {
      cite: "Ch. 5, p. 86 · The Mantle Clock",
      text: "His head leaned back so far that it rested against the face of a defunct mantelpiece clock, and from this position his distraught eyes stared down at Daisy."
    },
    {
      cite: "Ch. 5, p. 92 · The Imported Shirts",
      text: "He took out a pile of shirts and began throwing them, one by one, before us, shirts of sheer linen and thick silk and fine flannel."
    }
  ];

  var INITIAL_DRAFT =
    "When Gatsby reunites with Daisy in Nick's living room, he literally leans his head against a broken mantelpiece clock until it tilts off the shelf. Fitzgerald uses that stopped clock to show that Gatsby isn't really trying to win Daisy in 1922—he wants time itself to rewind five years to Louisville.\n\nEven when he catches the clock with trembling fingers and apologizes, the physical object betrays how fragile his illusion is.";

  var INITIAL_EVENTS = [
    {
      time: "10:14:02 AM",
      msg: "Kiosk session initialized · Fullscreen shield verified.",
      blocked: false
    },
    {
      time: "10:18:41 AM",
      msg: "BLOCKED: Clipboard paste attempt (148 chars from external source).",
      blocked: true
    },
    {
      time: "10:21:09 AM",
      msg: "BLOCKED: AI completion shortcut intercepted.",
      blocked: true
    }
  ];

  var STAGE_META = {
    notes: {
      sourceTag: "Editable Classroom Notebook",
      sourceHelper:
        "Stage 1 (Sept): Students collect quotes and page numbers during class discussions and insert them freely into their reflection notes.",
      editorTitle: "Daily Reading Journal · Open Classroom Mode",
      statusLine: "Stage 1 · Copy, paste, and note-adding enabled",
      costTitle: "Stage 1 Maintenance: Almost Zero",
      costBody:
        "A single-page classroom notebook for collecting reading quotes and notes during discussion."
    },
    test: {
      sourceTag: "Pinned Reference Notes",
      sourceHelper:
        "Stage 2 (Nov): Notes freeze into read-only reference cards while a 40-minute assessment timer and word counter run alongside the essay.",
      editorTitle: "Timed In-Class Essay · Assessment Mode",
      statusLine: "Stage 2 · Timer active · Notes read-only",
      costTitle: "Stage 2 Maintenance: Manageable",
      costBody:
        "Adding a countdown timer and word-target gauge made it ready for unit assessments—still a lightweight classroom tool."
    },
    locked: {
      sourceTag: "Read-Only Approved Quotes",
      sourceHelper:
        "Stage 3 (Jan): Clipboard paste is blocked, right-click and AI helpers are intercepted, and every focus loss logs a proctor flag.",
      editorTitle: "In-Class Analytical Response · Locked Kiosk",
      statusLine: "Stage 3 · Clipboard & AI blocked · Proctor telemetry armed",
      costTitle: "Stage 3 Maintenance: Why I Stopped",
      costBody:
        "“People loved it. But I wasn’t trying to ship a product. I was trying to build smaller things. What it would mean to build something like that, to support it and maintain it, was too much at the time.”"
    }
  };

  var currentStage = "locked";
  var quotes = [];
  var events = [];
  var secondsLeft = 34 * 60 + 18;
  var toastTimeout = null;

  var stageTabs = document.querySelectorAll(".stage-tab");
  var kioskBannerEl = document.getElementById("kiosk-banner");
  var sourceModeTagEl = document.getElementById("source-mode-tag");
  var sourceHelperEl = document.getElementById("source-helper");
  var quoteCardsEl = document.getElementById("quote-cards");
  var addNoteFormEl = document.getElementById("add-note-form");
  var newNoteInputEl = document.getElementById("new-note-input");

  var editorHeadingEl = document.getElementById("editor-heading");
  var timerBoxEl = document.getElementById("timer-box");
  var timerValEl = document.getElementById("timer-val");
  var wordCountValEl = document.getElementById("word-count-val");
  var interceptToastEl = document.getElementById("intercept-toast");
  var essayEditorEl = document.getElementById("essay-editor");
  var editorStatusLineEl = document.getElementById("editor-status-line");
  var submitBtnEl = document.getElementById("submit-btn");

  var flagCounterEl = document.getElementById("flag-counter");
  var telemetrySubEl = document.getElementById("telemetry-sub");
  var eventLogEl = document.getElementById("event-log");
  var costTitleEl = document.getElementById("cost-title");
  var costBodyEl = document.getElementById("cost-body");

  var simPasteBtn = document.getElementById("sim-paste-btn");
  var simAiBtn = document.getElementById("sim-ai-btn");
  var simTabBtn = document.getElementById("sim-tab-btn");
  var resetBtn = document.getElementById("reset-btn");

  function nowStamp() {
    var d = new Date();
    var h = d.getHours() % 12 || 12;
    var m = String(d.getMinutes()).padStart(2, "0");
    var s = String(d.getSeconds()).padStart(2, "0");
    return h + ":" + m + ":" + s + " AM";
  }

  function showInterceptToast(text) {
    interceptToastEl.textContent = text;
    interceptToastEl.hidden = false;
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      interceptToastEl.hidden = true;
    }, 4200);
  }

  function logEvent(msg, isBlocked) {
    events.unshift({
      time: nowStamp(),
      msg: msg,
      blocked: !!isBlocked
    });
    if (isBlocked) {
      showInterceptToast("🔒 " + msg);
    }
    renderTelemetry();
  }

  function countWords(str) {
    var trimmed = str.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }

  function renderQuotes() {
    quoteCardsEl.innerHTML = "";
    quotes.forEach(function (q) {
      var li = document.createElement("li");
      li.className = "quote-card";

      var top = document.createElement("div");
      top.className = "quote-cite";

      var citeSpan = document.createElement("span");
      citeSpan.textContent = q.cite;

      var insertBtn = document.createElement("button");
      insertBtn.type = "button";
      insertBtn.className = "btn-insert-quote";
      insertBtn.textContent = "+ Cite in essay";
      insertBtn.addEventListener("click", function () {
        var snippet = ' ("' + q.text + '")';
        essayEditorEl.value = essayEditorEl.value.trimEnd() + snippet;
        updateWordCount();
        essayEditorEl.focus();
      });

      top.appendChild(citeSpan);
      top.appendChild(insertBtn);

      var p = document.createElement("p");
      p.className = "quote-text";
      p.textContent = "“" + q.text + "”";

      li.appendChild(top);
      li.appendChild(p);
      quoteCardsEl.appendChild(li);
    });
  }

  function updateWordCount() {
    var w = countWords(essayEditorEl.value);
    wordCountValEl.textContent =
      currentStage === "notes" ? w + " words" : w + " / 250";
  }

  function renderTelemetry() {
    var blockedCount = events.filter(function (e) {
      return e.blocked;
    }).length;
    flagCounterEl.textContent =
      blockedCount + (blockedCount === 1 ? " flag" : " flags");

    eventLogEl.innerHTML = "";
    events.forEach(function (ev) {
      var li = document.createElement("li");
      li.className = "event-item" + (ev.blocked ? " is-blocked" : "");

      var tSpan = document.createElement("span");
      tSpan.className = "event-time";
      tSpan.textContent = ev.time;

      var msgSpan = document.createElement("span");
      msgSpan.textContent = ev.msg;

      li.appendChild(tSpan);
      li.appendChild(msgSpan);
      eventLogEl.appendChild(li);
    });
  }

  function renderStage() {
    document.body.dataset.stage = currentStage;
    var meta = STAGE_META[currentStage];

    stageTabs.forEach(function (tab) {
      var active = tab.dataset.stage === currentStage;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });

    kioskBannerEl.hidden = currentStage !== "locked";
    addNoteFormEl.hidden = currentStage !== "notes";
    timerBoxEl.hidden = currentStage === "notes";

    sourceModeTagEl.textContent = meta.sourceTag;
    sourceHelperEl.textContent = meta.sourceHelper;
    editorHeadingEl.textContent = meta.editorTitle;
    editorStatusLineEl.textContent = meta.statusLine;
    costTitleEl.textContent = meta.costTitle;
    costBodyEl.textContent = meta.costBody;

    telemetrySubEl.textContent =
      currentStage === "locked"
        ? "Live event stream recorded while Stage 3 Locked Browser is active."
        : "Switch to Stage 3 (Locked Browser) to test clipboard & AI interception.";

    submitBtnEl.textContent =
      currentStage === "notes" ? "Save Journal Entry" : "Submit Assessment";

    renderQuotes();
    updateWordCount();
    renderTelemetry();
  }

  function resetAll() {
    currentStage = "locked";
    quotes = JSON.parse(JSON.stringify(INITIAL_QUOTES));
    events = JSON.parse(JSON.stringify(INITIAL_EVENTS));
    secondsLeft = 34 * 60 + 18;
    essayEditorEl.value = INITIAL_DRAFT;
    interceptToastEl.hidden = true;
    renderStage();
  }

  // Stage tab clicks
  stageTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      currentStage = tab.dataset.stage;
      interceptToastEl.hidden = true;
      renderStage();
    });
  });

  // Add note in Stage 1
  addNoteFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var val = newNoteInputEl.value.trim();
    if (!val) return;
    quotes.unshift({
      cite: "Added in class · Just now",
      text: val
    });
    newNoteInputEl.value = "";
    renderQuotes();
  });

  // Editor input & paste interception in Stage 3
  essayEditorEl.addEventListener("input", updateWordCount);

  essayEditorEl.addEventListener("paste", function (e) {
    if (currentStage === "locked") {
      e.preventDefault();
      logEvent(
        "BLOCKED: Clipboard paste intercepted inside Locked Browser.",
        true
      );
    }
  });

  essayEditorEl.addEventListener("contextmenu", function (e) {
    if (currentStage === "locked") {
      e.preventDefault();
      logEvent("BLOCKED: Right-click context menu disabled in Kiosk mode.", true);
    }
  });

  // Simulation buttons
  simPasteBtn.addEventListener("click", function () {
    logEvent(
      "BLOCKED: Student pressed Ctrl+V to paste external text (210 chars rejected).",
      true
    );
  });

  simAiBtn.addEventListener("click", function () {
    logEvent(
      "BLOCKED: Browser extension / AI helper injection blocked by Kiosk policy.",
      true
    );
  });

  simTabBtn.addEventListener("click", function () {
    logEvent(
      "ALERT: Window focus lost for 4.2s (student attempted Alt+Tab switch).",
      true
    );
  });

  submitBtnEl.addEventListener("click", function () {
    logEvent(
      "Response submitted (" + countWords(essayEditorEl.value) + " words).",
      false
    );
    showInterceptToast("✓ Response recorded in session log.");
  });

  resetBtn.addEventListener("click", resetAll);

  // Countdown tick
  setInterval(function () {
    if (currentStage === "notes") return;
    if (secondsLeft > 0) {
      secondsLeft -= 1;
      var m = Math.floor(secondsLeft / 60);
      var s = String(secondsLeft % 60).padStart(2, "0");
      timerValEl.textContent = m + ":" + s;
    }
  }, 1000);

  resetAll();
})();
