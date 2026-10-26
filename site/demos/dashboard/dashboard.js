(function () {
  "use strict";

  var STAGES = [
    { name: "Brainstorming", swatch: "var(--stage-0)" },
    { name: "First draft", swatch: "var(--stage-1)" },
    { name: "Revision", swatch: "var(--stage-2)" },
    { name: "Polish", swatch: "var(--stage-3)" },
    { name: "Ready to send", swatch: "var(--stage-4)" }
  ];

  var FIRST_NAMES = [
    "Mina", "Devon", "Priya", "Lucas", "Hannah", "Marcus", "Elena", "Samir",
    "Zoe", "Caleb", "Nadia", "Julian", "Tessa", "Omar", "Clara", "Xavier",
    "Sienna", "Leo", "Amara", "Jonah", "Iris", "Mateo", "Nora", "Isaac",
    "Lila", "Gavin", "Keira", "Elias", "Ruby", "Miles", "Anya", "Dante",
    "Phoebe", "Micah", "Esme", "Rowan", "Talia", "Ezra", "Vera", "Soren"
  ];

  var LAST_NAMES = [
    "Chen", "Brooks", "Nair", "Ortega", "Cho", "Vance", "Rostova", "Patel",
    "Kowalski", "Morales", "Tanaka", "Sato", "Hayes", "Walker", "Griffin",
    "Delgado", "Foster", "Jensen", "Zimmerman", "Yates"
  ];

  var TOPICS = [
    "Fixing clocks with her grandfather and learning when not to force a gear",
    "Closing shift at his aunt's bakery and translating recipes from memory",
    "Mapping feral parakeet flocks across suburban power lines",
    "Switching from varsity striker to refereeing Saturday youth games",
    "Running the school theater soundboard where nobody notices unless you miss a cue",
    "Teaching chess at the senior living center on Wednesdays",
    "Restoring thrift-store typewriters and cleaning sticky keys",
    "Building a rain-barrel gauge for his grandmother's hibiscus garden",
    "Cataloging vinyl records at the community radio station",
    "Learning sign language to chat with a regular customer at the hardware store",
    "Why the muddiest cross-country course in the county is her favorite race",
    "Folding paper cranes with the pediatric waiting room volunteers",
    "Keeping a field log of fireflies behind the neighborhood retention pond",
    "Repairing donated violins for the middle school lending library",
    "What a burned batch of sourdough taught him about chemistry lab notes"
  ];

  var students = [];
  var activeCohort = "all";
  var activeStage = "all";
  var selectedStudentId = 2;

  var stageKeyEl = document.getElementById("stage-key");
  var waffleGridEl = document.getElementById("waffle-grid");
  var triageListEl = document.getElementById("triage-list");

  var inspNameEl = document.getElementById("insp-name");
  var inspMetaEl = document.getElementById("insp-meta");
  var inspTopicEl = document.getElementById("insp-topic");
  var inspAdvanceBtn = document.getElementById("insp-advance-btn");
  var inspCheckinBtn = document.getElementById("insp-checkin-btn");
  var resetBtnEl = document.getElementById("reset-btn");
  var cohortBtns = document.querySelectorAll(".filter-btn");

  function buildInitialCaseload() {
    var list = [];
    for (var i = 0; i < 152; i++) {
      var id = i + 1;
      var fn = FIRST_NAMES[i % FIRST_NAMES.length];
      var ln = LAST_NAMES[(i * 3) % LAST_NAMES.length];
      var name = fn + " " + ln;

      var cohort;
      if (i < 64) cohort = "Nov 1";
      else if (i < 102) cohort = "Nov 15";
      else cohort = "Jan 1";

      var stageIdx;
      var mod = (i * 7 + 3) % 100;
      if (cohort === "Nov 1") {
        if (mod < 6) stageIdx = 0;
        else if (mod < 16) stageIdx = 1;
        else if (mod < 44) stageIdx = 2;
        else if (mod < 74) stageIdx = 3;
        else stageIdx = 4;
      } else if (cohort === "Nov 15") {
        if (mod < 12) stageIdx = 0;
        else if (mod < 28) stageIdx = 1;
        else if (mod < 60) stageIdx = 2;
        else if (mod < 84) stageIdx = 3;
        else stageIdx = 4;
      } else {
        if (mod < 22) stageIdx = 0;
        else if (mod < 48) stageIdx = 1;
        else if (mod < 76) stageIdx = 2;
        else if (mod < 90) stageIdx = 3;
        else stageIdx = 4;
      }

      if (i === 0) { name = "Mina Chen"; cohort = "Nov 1"; stageIdx = 2; }
      else if (i === 1) { name = "Devon Brooks"; cohort = "Nov 1"; stageIdx = 1; }
      else if (i === 2) { name = "Priya Nair"; cohort = "Nov 1"; stageIdx = 3; }
      else if (i === 3) { name = "Lucas Ortega"; cohort = "Nov 15"; stageIdx = 0; }
      else if (i === 4) { name = "Hannah Cho"; cohort = "Nov 1"; stageIdx = 2; }
      else if (i === 5) { name = "Marcus Vance"; cohort = "Nov 1"; stageIdx = 4; }

      var daysSince = ((i * 5 + 2) % 9) + 1;
      if (stageIdx === 4) daysSince = (i % 4) + 1;
      if (i === 1 || i === 3 || i === 11 || i === 18 || i === 27 || i === 34 || i === 49 || i === 61) {
        daysSince = 11 + (i % 5);
      }

      list.push({
        id: id,
        name: name,
        cohort: cohort,
        stageIndex: stageIdx,
        stage: STAGES[stageIdx].name,
        daysSince: daysSince,
        topic: TOPICS[i % TOPICS.length]
      });
    }
    return list;
  }

  function matchesFilters(s) {
    if (activeCohort !== "all" && s.cohort !== activeCohort) return false;
    if (activeStage === "overdue") return s.daysSince >= 10 && s.stageIndex < 4;
    if (activeStage !== "all" && s.stage !== activeStage) return false;
    return true;
  }

  function renderStageKey() {
    stageKeyEl.innerHTML = "";

    STAGES.forEach(function (st) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "key-btn" + (activeStage === st.name ? " is-active" : "");

      var sw = document.createElement("span");
      sw.className = "key-swatch";
      sw.style.background = st.swatch;

      var lbl = document.createElement("span");
      lbl.textContent = st.name;

      btn.appendChild(sw);
      btn.appendChild(lbl);
      btn.addEventListener("click", function () {
        activeStage = activeStage === st.name ? "all" : st.name;
        renderAll();
      });
      stageKeyEl.appendChild(btn);
    });

    var overdueBtn = document.createElement("button");
    overdueBtn.type = "button";
    overdueBtn.className = "key-btn" + (activeStage === "overdue" ? " is-active" : "");

    var overdueSw = document.createElement("span");
    overdueSw.className = "key-swatch is-overdue";

    var overdueLbl = document.createElement("span");
    overdueLbl.textContent = "Not seen in 10+ days";

    overdueBtn.appendChild(overdueSw);
    overdueBtn.appendChild(overdueLbl);
    overdueBtn.addEventListener("click", function () {
      activeStage = activeStage === "overdue" ? "all" : "overdue";
      renderAll();
    });
    stageKeyEl.appendChild(overdueBtn);
  }

  function renderWaffle() {
    waffleGridEl.innerHTML = "";

    var sorted = students.slice().sort(function (a, b) {
      if (a.stageIndex !== b.stageIndex) return a.stageIndex - b.stageIndex;
      return b.daysSince - a.daysSince;
    });

    sorted.forEach(function (s, idx) {
      var tile = document.createElement("button");
      tile.type = "button";
      var isMatch = matchesFilters(s);
      var isOverdue = s.daysSince >= 10 && s.stageIndex < 4;

      tile.className =
        "waffle-tile" +
        (isOverdue ? " is-overdue" : "") +
        (!isMatch ? " is-dimmed" : "") +
        (s.id === selectedStudentId ? " is-selected" : "");

      tile.dataset.stage = String(s.stageIndex);
      tile.dataset.gridIdx = String(idx);
      tile.title = s.name + " (" + s.stage + ", " + s.daysSince + "d ago)";
      tile.setAttribute(
        "aria-label",
        s.name + ", " + s.stage + ", last seen " + s.daysSince + " days ago"
      );

      tile.addEventListener("click", function () {
        selectedStudentId = s.id;
        renderAll();
      });

      tile.addEventListener("keydown", function (e) {
        var nextIdx = -1;
        if (e.key === "ArrowRight") nextIdx = idx + 1;
        else if (e.key === "ArrowLeft") nextIdx = idx - 1;
        else if (e.key === "ArrowDown") nextIdx = idx + 19;
        else if (e.key === "ArrowUp") nextIdx = idx - 19;

        if (nextIdx >= 0 && nextIdx < sorted.length) {
          e.preventDefault();
          selectedStudentId = sorted[nextIdx].id;
          renderAll();
          var nextBtn = waffleGridEl.querySelector('[data-grid-idx="' + nextIdx + '"]');
          if (nextBtn) nextBtn.focus();
        }
      });

      waffleGridEl.appendChild(tile);
    });
  }

  function renderInspector() {
    var s = students[0];
    for (var i = 0; i < students.length; i++) {
      if (students[i].id === selectedStudentId) {
        s = students[i];
        break;
      }
    }
    if (!s) return;

    var isOverdue = s.daysSince >= 10 && s.stageIndex < 4;
    inspNameEl.textContent = s.name;
    var dayText = s.daysSince === 0 ? "seen today" : "seen " + s.daysSince + " days ago";
    inspMetaEl.textContent = s.stage + ", due " + s.cohort + " (" + dayText + ")";
    inspMetaEl.className = "strip-meta" + (isOverdue ? " is-overdue" : "");
    inspTopicEl.textContent = "Topic: " + s.topic;

    inspAdvanceBtn.disabled = s.stageIndex >= STAGES.length - 1;
    inspAdvanceBtn.textContent =
      s.stageIndex >= STAGES.length - 1
        ? "Essay ready to send"
        : "Move to " + STAGES[s.stageIndex + 1].name;
  }

  function renderNudgeList() {
    triageListEl.innerHTML = "";

    var urgent = students
      .filter(function (s) {
        return s.daysSince >= 10 && s.stageIndex < 4 && (activeCohort === "all" || s.cohort === activeCohort);
      })
      .sort(function (a, b) {
        return b.daysSince - a.daysSince;
      })
      .slice(0, 7);

    urgent.forEach(function (s) {
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nudge-row" + (s.id === selectedStudentId ? " is-selected" : "");

      var left = document.createElement("div");
      left.className = "nudge-left";

      var nameEl = document.createElement("span");
      nameEl.className = "nudge-name";
      nameEl.textContent = s.name;

      var subEl = document.createElement("span");
      subEl.className = "nudge-sub";
      subEl.textContent = s.stage + ", due " + s.cohort;

      left.appendChild(nameEl);
      left.appendChild(subEl);

      var daysEl = document.createElement("span");
      daysEl.className = "nudge-days";
      daysEl.textContent = s.daysSince + " days ago";

      btn.appendChild(left);
      btn.appendChild(daysEl);

      btn.addEventListener("click", function () {
        selectedStudentId = s.id;
        renderAll();
      });

      li.appendChild(btn);
      triageListEl.appendChild(li);
    });
  }

  function renderAll() {
    renderStageKey();
    renderWaffle();
    renderInspector();
    renderNudgeList();
  }

  cohortBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activeCohort = btn.dataset.cohort || "all";
      cohortBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      renderAll();
    });
  });

  inspAdvanceBtn.addEventListener("click", function () {
    for (var i = 0; i < students.length; i++) {
      if (students[i].id === selectedStudentId && students[i].stageIndex < STAGES.length - 1) {
        students[i].stageIndex += 1;
        students[i].stage = STAGES[students[i].stageIndex].name;
        students[i].daysSince = 0;
        renderAll();
        break;
      }
    }
  });

  inspCheckinBtn.addEventListener("click", function () {
    for (var i = 0; i < students.length; i++) {
      if (students[i].id === selectedStudentId) {
        students[i].daysSince = 0;
        renderAll();
        break;
      }
    }
  });

  resetBtnEl.addEventListener("click", function () {
    students = buildInitialCaseload();
    activeCohort = "all";
    activeStage = "all";
    selectedStudentId = 2;
    cohortBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.cohort === "all");
    });
    renderAll();
  });

  students = buildInitialCaseload();
  renderAll();
})();
