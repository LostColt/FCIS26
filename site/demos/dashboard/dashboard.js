(function () {
  "use strict";

  var STAGES = [
    { name: "Brainstorming", color: "#b45309", bg: "#fef3c7" },
    { name: "First Draft", color: "#c2410c", bg: "#ffedd5" },
    { name: "Structural Revision", color: "#1d4ed8", bg: "#dbeafe" },
    { name: "Line Polish", color: "#0f766e", bg: "#ccfbf1" },
    { name: "Ready to Send", color: "#15803d", bg: "#dcfce7" }
  ];

  var FIRST_NAMES = [
    "Mina", "Devon", "Priya", "Lucas", "Hannah", "Marcus", "Elena", "Samir",
    "Zoe", "Caleb", "Nadia", "Julian", "Tessa", "Omar", "Clara", "Xavier",
    "Sienna", "Leo", "Amara", "Jonah", "Iris", "Mateo", "Nora", "Isaac",
    "Lila", "Gavin", "Keira", "Elias", "ruby", "Miles", "Anya", "Dante",
    "Phoebe", "Micah", "Esme", "Rowan", "Talia", "Ezra", "vera", "Soren"
  ];

  var LAST_INITIALS = [
    "L.", "B.", "N.", "O.", "C.", "V.", "R.", "P.", "K.", "M.",
    "T.", "S.", "H.", "W.", "G.", "D.", "F.", "J.", "Z.", "Y."
  ];

  var TOPICS = [
    "Fixing clocks with her grandfather & learning when not to force a gear",
    "Closing shift at his aunt's bakery & translating recipes from memory",
    "Mapping feral parakeet flocks across suburban power lines",
    "Switching from varsity striker to refereeing U-10 Saturday games",
    "Running the school theater soundboard where nobody notices unless you miss a cue",
    "Teaching chess at the senior living center on Wednesdays",
    "Restoring thrift-store typewriters and cleaning sticky 'e' keys",
    "Building an automated rain-barrel gauge for his grandmother's hibiscus garden",
    "Cataloging vinyl records at the community radio station",
    "Learning ASL to chat with the regular customer at the hardware counter",
    "Why the worst cross-country course in the county is her favorite race",
    "Folding 500 paper cranes with the pediatric waiting room volunteers",
    "Keeping a field log of lightning bugs behind the retention pond",
    "Repairing donated violins for the middle school strings lending library",
    "What a burned batch of sourdough taught him about chemistry lab notes"
  ];

  var students = [];
  var activeCohort = "all";
  var activeStage = "all";
  var selectedStudentId = 1;

  var kpiTotalEl = document.getElementById("kpi-total");
  var kpiTotalSubEl = document.getElementById("kpi-total-sub");
  var kpiReadyEl = document.getElementById("kpi-ready");
  var kpiReadySubEl = document.getElementById("kpi-ready-sub");
  var kpiStalledEl = document.getElementById("kpi-stalled");
  var kpiUrgentEl = document.getElementById("kpi-urgent");

  var pipelineWrapEl = document.getElementById("svg-pipeline-wrap");
  var stageLegendEl = document.getElementById("stage-legend");
  var clearStageBtnEl = document.getElementById("clear-stage-btn");
  var waffleGridEl = document.getElementById("waffle-grid");
  var triageListEl = document.getElementById("triage-list");
  var velocitySvgEl = document.getElementById("velocity-svg");

  var inspIdEl = document.getElementById("insp-id");
  var inspCohortEl = document.getElementById("insp-cohort");
  var inspNameEl = document.getElementById("insp-name");
  var inspTopicEl = document.getElementById("insp-topic");
  var inspDaysEl = document.getElementById("insp-days");
  var inspStageEl = document.getElementById("insp-stage");
  var inspAdvanceBtn = document.getElementById("insp-advance-btn");
  var inspCheckinBtn = document.getElementById("insp-checkin-btn");
  var resetBtnEl = document.getElementById("reset-btn");
  var cohortBtns = document.querySelectorAll(".cohort-btn");

  function buildInitialCaseload() {
    var list = [];
    for (var i = 0; i < 152; i++) {
      var id = i + 1;
      var fn = FIRST_NAMES[i % FIRST_NAMES.length];
      fn = fn.charAt(0).toUpperCase() + fn.slice(1);
      var ln = LAST_INITIALS[(i * 3) % LAST_INITIALS.length];
      var name = fn + " " + ln + " (Senior #" + id + ")";

      var cohort;
      if (i < 64) cohort = "Nov 1 EA/ED";
      else if (i < 102) cohort = "Nov 15 Priority";
      else cohort = "Jan 1 RD";

      // Stage distribution across 152 students
      var stageIdx;
      var mod = (i * 7 + 3) % 100;
      if (cohort === "Nov 1 EA/ED") {
        if (mod < 6) stageIdx = 0;
        else if (mod < 15) stageIdx = 1;
        else if (mod < 42) stageIdx = 2;
        else if (mod < 72) stageIdx = 3;
        else stageIdx = 4;
      } else if (cohort === "Nov 15 Priority") {
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

      // Pin first 6 to match the counseling tracker's featured students
      if (i === 0) {
        name = "Mina Chen (Student A)";
        cohort = "Nov 1 EA/ED";
        stageIdx = 2;
      } else if (i === 1) {
        name = "Devon Brooks (Student B)";
        cohort = "Nov 1 EA/ED";
        stageIdx = 1;
      } else if (i === 2) {
        name = "Priya Nair (Student C)";
        cohort = "Nov 1 EA/ED";
        stageIdx = 3;
      } else if (i === 3) {
        name = "Lucas Ortega (Student D)";
        cohort = "Nov 15 Priority";
        stageIdx = 0;
      } else if (i === 4) {
        name = "Hannah Cho (Student E)";
        cohort = "Nov 1 EA/ED";
        stageIdx = 2;
      } else if (i === 5) {
        name = "Marcus Vance (Student F)";
        cohort = "Nov 1 EA/ED";
        stageIdx = 4;
      }

      var daysSince = ((i * 5 + 2) % 14) + 1;
      if (stageIdx === 4) daysSince = (i % 5) + 1;
      if (i === 1 || i === 3 || i === 11 || i === 18 || i === 27) {
        daysSince = 12 + (i % 4);
      }

      list.push({
        id: id,
        code: String(id).padStart(3, "0"),
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
    if (activeStage !== "all" && s.stage !== activeStage) return false;
    return true;
  }

  function getCohortSubset() {
    return students.filter(function (s) {
      return activeCohort === "all" || s.cohort === activeCohort;
    });
  }

  function renderKPIs() {
    var sub = getCohortSubset();
    var total = sub.length;
    var readyOrPolish = sub.filter(function (s) {
      return s.stageIndex >= 3;
    }).length;
    var stalled = sub.filter(function (s) {
      return s.daysSince >= 10 && s.stageIndex < 4;
    }).length;
    var urgent = sub.filter(function (s) {
      return s.cohort === "Nov 1 EA/ED" && s.stageIndex <= 1;
    }).length;

    var pct = total > 0 ? Math.round((readyOrPolish / total) * 100) : 0;

    kpiTotalEl.textContent = String(total);
    kpiTotalSubEl.textContent =
      activeCohort === "all"
        ? "All 152 seniors across 6 sections"
        : "Filtered to " + activeCohort;
    kpiReadyEl.textContent = String(readyOrPolish);
    kpiReadySubEl.textContent = pct + "% of selected cohort on track";
    kpiStalledEl.textContent = String(stalled);
    kpiUrgentEl.textContent = String(urgent);
  }

  function renderPipeline() {
    var sub = getCohortSubset();
    var total = sub.length || 1;
    var counts = [0, 0, 0, 0, 0];
    sub.forEach(function (s) {
      counts[s.stageIndex] += 1;
    });

    // Build SVG stacked horizontal bar
    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 1000 44");
    svg.setAttribute("preserveAspectRatio", "none");

    var xOffset = 0;
    STAGES.forEach(function (st, idx) {
      var count = counts[idx];
      var w = (count / total) * 1000;
      if (w <= 0) return;

      var g = document.createElementNS(svgNS, "g");
      g.setAttribute("class", "pipeline-seg");

      var rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("x", String(xOffset));
      rect.setAttribute("y", "0");
      rect.setAttribute("width", String(Math.max(w - 2, 1)));
      rect.setAttribute("height", "44");
      rect.setAttribute("fill", st.color);
      if (activeStage !== "all" && activeStage !== st.name) {
        rect.setAttribute("opacity", "0.28");
      }

      var title = document.createElementNS(svgNS, "title");
      title.textContent = st.name + ": " + count + " students";
      g.appendChild(title);
      g.appendChild(rect);

      if (w > 70) {
        var text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", String(xOffset + 12));
        text.setAttribute("y", "27");
        text.setAttribute("fill", "#ffffff");
        text.setAttribute("font-family", "IBM Plex Sans, sans-serif");
        text.setAttribute("font-size", "13");
        text.setAttribute("font-weight", "600");
        text.textContent = count + " · " + st.name;
        g.appendChild(text);
      }

      g.addEventListener("click", function () {
        toggleStageFilter(st.name);
      });

      svg.appendChild(g);
      xOffset += w;
    });

    pipelineWrapEl.innerHTML = "";
    pipelineWrapEl.appendChild(svg);

    // Legend buttons
    stageLegendEl.innerHTML = "";
    STAGES.forEach(function (st, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "stage-pill" + (activeStage === st.name ? " is-active" : "");

      var swatch = document.createElement("span");
      swatch.className = "stage-swatch";
      swatch.style.backgroundColor = st.color;

      var nameSpan = document.createElement("span");
      nameSpan.textContent = st.name;

      var countSpan = document.createElement("span");
      countSpan.className = "stage-count";
      countSpan.textContent = "(" + counts[idx] + ")";

      btn.appendChild(swatch);
      btn.appendChild(nameSpan);
      btn.appendChild(countSpan);

      btn.addEventListener("click", function () {
        toggleStageFilter(st.name);
      });

      stageLegendEl.appendChild(btn);
    });

    clearStageBtnEl.hidden = activeStage === "all";
  }

  function toggleStageFilter(stageName) {
    activeStage = activeStage === stageName ? "all" : stageName;
    renderAll();
  }

  function renderWaffle() {
    waffleGridEl.innerHTML = "";
    students.forEach(function (s) {
      var visible = matchesFilters(s);
      var isOverdue = s.daysSince >= 10 && s.stageIndex < 4;

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "student-tile" +
        (s.id === selectedStudentId ? " is-selected" : "") +
        (!visible ? " is-dimmed" : "") +
        (isOverdue ? " is-overdue" : "");
      btn.dataset.stage = s.stage;
      btn.dataset.id = String(s.id);
      btn.textContent = String(s.id);
      btn.title =
        s.name + " · " + s.stage + " (" + s.daysSince + "d since check-in)";
      btn.setAttribute(
        "aria-label",
        s.name + ", " + s.stage + ", " + s.daysSince + " days since check-in"
      );

      btn.addEventListener("click", function () {
        selectedStudentId = s.id;
        renderWaffle();
        renderInspector();
      });

      waffleGridEl.appendChild(btn);
    });
  }

  function renderInspector() {
    var s =
      students.find(function (item) {
        return item.id === selectedStudentId;
      }) || students[0];
    if (!s) return;

    inspIdEl.textContent = "Tile #" + s.code;
    inspCohortEl.textContent = s.cohort;
    inspNameEl.textContent = s.name;
    inspTopicEl.textContent = "Topic: " + s.topic;
    inspDaysEl.textContent =
      s.daysSince === 0
        ? "Checked in today"
        : s.daysSince + (s.daysSince === 1 ? " day ago" : " days ago");
    inspStageEl.textContent = s.stage;
    inspAdvanceBtn.disabled = s.stageIndex >= STAGES.length - 1;
    inspAdvanceBtn.textContent =
      s.stageIndex >= STAGES.length - 1
        ? "Ready to Send ✓"
        : "Advance stage →";
  }

  function renderTriageQueue() {
    triageListEl.innerHTML = "";
    var urgentList = students
      .filter(function (s) {
        return matchesFilters(s) && s.stageIndex < 4 && s.daysSince >= 9;
      })
      .sort(function (a, b) {
        if (a.cohort === "Nov 1 EA/ED" && b.cohort !== "Nov 1 EA/ED") return -1;
        if (b.cohort === "Nov 1 EA/ED" && a.cohort !== "Nov 1 EA/ED") return 1;
        return b.daysSince - a.daysSince;
      })
      .slice(0, 6);

    if (urgentList.length === 0) {
      var empty = document.createElement("li");
      empty.style.fontSize = "0.85rem";
      empty.style.color = "var(--ink-soft)";
      empty.textContent = "No overdue students in this filter view.";
      triageListEl.appendChild(empty);
      return;
    }

    urgentList.forEach(function (s) {
      var li = document.createElement("li");
      li.className = "triage-item";
      li.tabIndex = 0;

      var left = document.createElement("div");
      var nameSpan = document.createElement("span");
      nameSpan.className = "triage-name";
      nameSpan.textContent = s.name;

      var metaSpan = document.createElement("span");
      metaSpan.className = "triage-meta";
      metaSpan.textContent = s.cohort + " · " + s.stage;

      left.appendChild(nameSpan);
      left.appendChild(metaSpan);

      var gapSpan = document.createElement("span");
      gapSpan.className = "triage-gap";
      gapSpan.textContent = s.daysSince + "d ago";

      li.appendChild(left);
      li.appendChild(gapSpan);

      li.addEventListener("click", function () {
        selectedStudentId = s.id;
        renderWaffle();
        renderInspector();
      });
      li.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectedStudentId = s.id;
          renderWaffle();
          renderInspector();
        }
      });

      triageListEl.appendChild(li);
    });
  }

  function renderVelocityChart() {
    var weeks = [
      { label: "Sep 15", count: 18 },
      { label: "Sep 22", count: 24 },
      { label: "Sep 29", count: 31 },
      { label: "Oct 6", count: 39 },
      { label: "Oct 13", count: 46 },
      { label: "Oct 20", count: 54 },
      { label: "Oct 27", count: 62 }
    ];

    var svgNS = "http://www.w3.org/2000/svg";
    velocitySvgEl.innerHTML = "";

    weeks.forEach(function (w, i) {
      var x = 8 + i * 44;
      var barH = Math.round((w.count / 68) * 72);
      var y = 84 - barH;

      var rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("x", String(x));
      rect.setAttribute("y", String(y));
      rect.setAttribute("width", "30");
      rect.setAttribute("height", String(barH));
      rect.setAttribute("rx", "3");
      rect.setAttribute("fill", i === weeks.length - 1 ? "#1d4ed8" : "#94a3b8");

      var numText = document.createElementNS(svgNS, "text");
      numText.setAttribute("x", String(x + 15));
      numText.setAttribute("y", String(y - 4));
      numText.setAttribute("text-anchor", "middle");
      numText.setAttribute("font-family", "ui-monospace, monospace");
      numText.setAttribute("font-size", "10");
      numText.setAttribute("fill", "#131c2e");
      numText.textContent = String(w.count);

      var lblText = document.createElementNS(svgNS, "text");
      lblText.setAttribute("x", String(x + 15));
      lblText.setAttribute("y", "100");
      lblText.setAttribute("text-anchor", "middle");
      lblText.setAttribute("font-family", "IBM Plex Sans, sans-serif");
      lblText.setAttribute("font-size", "9.5");
      lblText.setAttribute("fill", "#48556a");
      lblText.textContent = w.label;

      velocitySvgEl.appendChild(rect);
      velocitySvgEl.appendChild(numText);
      velocitySvgEl.appendChild(lblText);
    });
  }

  function renderAll() {
    renderKPIs();
    renderPipeline();
    renderWaffle();
    renderInspector();
    renderTriageQueue();
  }

  cohortBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activeCohort = btn.dataset.cohort;
      cohortBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      renderAll();
    });
  });

  clearStageBtnEl.addEventListener("click", function () {
    activeStage = "all";
    renderAll();
  });

  inspAdvanceBtn.addEventListener("click", function () {
    var s = students.find(function (item) {
      return item.id === selectedStudentId;
    });
    if (!s || s.stageIndex >= STAGES.length - 1) return;
    s.stageIndex += 1;
    s.stage = STAGES[s.stageIndex].name;
    s.daysSince = 0;
    renderAll();
  });

  inspCheckinBtn.addEventListener("click", function () {
    var s = students.find(function (item) {
      return item.id === selectedStudentId;
    });
    if (!s) return;
    s.daysSince = 0;
    renderAll();
  });

  resetBtnEl.addEventListener("click", function () {
    students = buildInitialCaseload();
    activeCohort = "all";
    activeStage = "all";
    selectedStudentId = 1;
    cohortBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.cohort === "all");
    });
    renderAll();
  });

  students = buildInitialCaseload();
  renderAll();
  renderVelocityChart();
})();
