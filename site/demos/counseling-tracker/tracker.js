(function () {
  "use strict";

  var initialData = window.COUNSELING_MOCK_DATA || [];
  var students = [];
  var selectedId = "";
  var selectedDraftIdx = 0;
  var activeFilter = "all";
  var searchQuery = "";

  var scheduleStripEl = document.getElementById("schedule-strip");
  var studentListEl = document.getElementById("student-list");
  var searchInputEl = document.getElementById("student-search");
  var filterChipEls = document.querySelectorAll(".filter-chip");
  var resetBtnEl = document.getElementById("reset-btn");
  var nextMeetingBtnEl = document.getElementById("next-meeting-btn");

  var detailApptEl = document.getElementById("detail-appt");
  var detailPronounsEl = document.getElementById("detail-pronouns");
  var detailNameEl = document.getElementById("detail-name");
  var detailSchoolsEl = document.getElementById("detail-schools");
  var stageSelectEl = document.getElementById("stage-select");
  var detailDeadlineEl = document.getElementById("detail-deadline");
  var detailPrepFocusEl = document.getElementById("detail-prep-focus");
  var detailChecklistEl = document.getElementById("detail-checklist");
  var detailPromptEl = document.getElementById("detail-prompt");
  var draftTabsEl = document.getElementById("draft-tabs");
  var draftDateEl = document.getElementById("draft-date");
  var draftWordsEl = document.getElementById("draft-words");
  var draftExcerptEl = document.getElementById("draft-excerpt");
  var draftTakeawayEl = document.getElementById("draft-takeaway");
  var notesCountEl = document.getElementById("notes-count");
  var noteFormEl = document.getElementById("note-form");
  var noteInputEl = document.getElementById("note-input");
  var notesTimelineEl = document.getElementById("notes-timeline");
  var stampBtns = document.querySelectorAll(".stamp-btn");

  function cloneData(source) {
    return JSON.parse(JSON.stringify(source));
  }

  function resetState() {
    students = cloneData(initialData);
    selectedId = students.length > 0 ? students[0].id : "";
    selectedDraftIdx = students.length > 0 ? students[0].drafts.length - 1 : 0;
    activeFilter = "all";
    searchQuery = "";
    searchInputEl.value = "";
    updateFilterChips();
    renderAll();
  }

  function getSelectedStudent() {
    for (var i = 0; i < students.length; i++) {
      if (students[i].id === selectedId) {
        return students[i];
      }
    }
    return students[0] || null;
  }

  function getFilteredStudents() {
    var q = searchQuery.trim().toLowerCase();
    return students.filter(function (s) {
      if (activeFilter === "today" && !s.isToday) return false;
      if (activeFilter === "needs-eyes" && !s.needsEyes) return false;
      if (activeFilter === "ready" && s.stage !== "Ready to Send") return false;

      if (!q) return true;
      var hay = (
        s.name +
        " " +
        s.topicShort +
        " " +
        s.schools +
        " " +
        s.stage
      ).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  function selectStudent(id) {
    selectedId = id;
    var s = getSelectedStudent();
    if (s) {
      selectedDraftIdx = s.drafts.length - 1;
    }
    renderAll();
  }

  function renderScheduleStrip() {
    scheduleStripEl.innerHTML = "";
    var todayStudents = students.filter(function (s) {
      return s.isToday;
    });

    todayStudents.forEach(function (s) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "slot-pill" + (s.id === selectedId ? " is-selected" : "");
      btn.setAttribute(
        "aria-label",
        s.todaySlot + " appointment with " + s.name
      );

      var timeSpan = document.createElement("span");
      timeSpan.className = "slot-time";
      timeSpan.textContent = s.todaySlot;

      var nameSpan = document.createElement("span");
      nameSpan.className = "slot-name";
      nameSpan.textContent = s.name.replace(/\s*\(Student [A-Z]\)/, "");

      var stageSpan = document.createElement("span");
      stageSpan.className = "slot-stage";
      stageSpan.textContent = s.stage;

      btn.appendChild(timeSpan);
      btn.appendChild(nameSpan);
      btn.appendChild(stageSpan);

      btn.addEventListener("click", function () {
        selectStudent(s.id);
      });

      scheduleStripEl.appendChild(btn);
    });
  }

  function renderRoster() {
    studentListEl.innerHTML = "";
    var filtered = getFilteredStudents();

    if (filtered.length === 0) {
      var emptyLi = document.createElement("li");
      emptyLi.className = "student-row";
      emptyLi.style.padding = "1rem";
      emptyLi.style.color = "var(--ink-soft)";
      emptyLi.textContent = "No students match that filter.";
      studentListEl.appendChild(emptyLi);
      return;
    }

    filtered.forEach(function (s) {
      var li = document.createElement("li");
      li.className = "student-row";
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", s.id === selectedId ? "true" : "false");

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "student-row-btn" + (s.id === selectedId ? " is-active" : "");

      var top = document.createElement("div");
      top.className = "row-top";

      var nameSpan = document.createElement("span");
      nameSpan.className = "row-name";
      nameSpan.textContent = s.name;

      var slotSpan = document.createElement("span");
      slotSpan.className = "row-slot";
      slotSpan.textContent = s.todaySlot;

      top.appendChild(nameSpan);
      top.appendChild(slotSpan);

      var topicP = document.createElement("p");
      topicP.className = "row-topic";
      topicP.textContent = s.topicShort;

      var badges = document.createElement("div");
      badges.className = "row-badges";

      var stageBadge = document.createElement("span");
      stageBadge.className = "badge-stage";
      stageBadge.dataset.stage = s.stage;
      stageBadge.textContent = s.stage;
      badges.appendChild(stageBadge);

      if (s.needsEyes && s.stage !== "Ready to Send") {
        var eyesBadge = document.createElement("span");
        eyesBadge.className = "badge-eyes";
        eyesBadge.textContent = "Needs eyes";
        badges.appendChild(eyesBadge);
      }

      btn.appendChild(top);
      btn.appendChild(topicP);
      btn.appendChild(badges);

      btn.addEventListener("click", function () {
        selectStudent(s.id);
      });

      li.appendChild(btn);
      studentListEl.appendChild(li);
    });
  }

  function renderDossier() {
    var s = getSelectedStudent();
    if (!s) return;

    detailApptEl.textContent = s.isToday
      ? "Today · " + s.todaySlot
      : "Next slot · " + s.todaySlot;
    detailPronounsEl.textContent = s.pronouns;
    detailNameEl.textContent = s.name;
    detailSchoolsEl.textContent = s.schools;
    stageSelectEl.value = s.stage;
    detailDeadlineEl.textContent = s.deadline;
    detailPrepFocusEl.textContent = s.prepFocus;
    detailPromptEl.textContent = s.prompt;

    // Checklist
    detailChecklistEl.innerHTML = "";
    s.checklist.forEach(function (item) {
      var label = document.createElement("label");
      label.className = "check-item" + (item.done ? " is-done" : "");

      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!item.done;
      cb.addEventListener("change", function () {
        item.done = cb.checked;
        renderDossier();
      });

      var span = document.createElement("span");
      span.textContent = item.text;

      label.appendChild(cb);
      label.appendChild(span);
      detailChecklistEl.appendChild(label);
    });

    // Draft tabs
    draftTabsEl.innerHTML = "";
    if (selectedDraftIdx >= s.drafts.length) {
      selectedDraftIdx = s.drafts.length - 1;
    }

    s.drafts.forEach(function (d, idx) {
      var tab = document.createElement("button");
      tab.type = "button";
      tab.className = "draft-tab";
      tab.setAttribute("role", "tab");
      tab.setAttribute(
        "aria-selected",
        idx === selectedDraftIdx ? "true" : "false"
      );
      tab.textContent = d.label;
      tab.addEventListener("click", function () {
        selectedDraftIdx = idx;
        renderDossier();
      });
      draftTabsEl.appendChild(tab);
    });

    var activeDraft = s.drafts[selectedDraftIdx] || s.drafts[0];
    if (activeDraft) {
      draftDateEl.textContent = activeDraft.label;
      draftWordsEl.textContent = activeDraft.words;
      draftExcerptEl.textContent = "“" + activeDraft.excerpt + "”";
      draftTakeawayEl.textContent = activeDraft.takeaway;
    }

    // Notes
    notesCountEl.textContent =
      s.notes.length + (s.notes.length === 1 ? " entry" : " entries");
    notesTimelineEl.innerHTML = "";

    s.notes.forEach(function (n) {
      var li = document.createElement("li");
      li.className = "note-card";

      var dateSpan = document.createElement("span");
      dateSpan.className = "note-date";
      dateSpan.textContent = n.date;

      var textP = document.createElement("p");
      textP.className = "note-text";
      textP.textContent = n.text;

      li.appendChild(dateSpan);
      li.appendChild(textP);
      notesTimelineEl.appendChild(li);
    });
  }

  function renderAll() {
    renderScheduleStrip();
    renderRoster();
    renderDossier();
  }

  function updateFilterChips() {
    filterChipEls.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.filter === activeFilter);
    });
  }

  // Event listeners
  searchInputEl.addEventListener("input", function () {
    searchQuery = searchInputEl.value;
    renderRoster();
  });

  filterChipEls.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activeFilter = btn.dataset.filter;
      updateFilterChips();
      var filtered = getFilteredStudents();
      var stillVisible = filtered.some(function (s) {
        return s.id === selectedId;
      });
      if (!stillVisible && filtered.length > 0) {
        selectStudent(filtered[0].id);
      } else {
        renderRoster();
      }
    });
  });

  stageSelectEl.addEventListener("change", function () {
    var s = getSelectedStudent();
    if (!s) return;
    s.stage = stageSelectEl.value;
    if (s.stage === "Ready to Send") {
      s.needsEyes = false;
    }
    renderAll();
  });

  nextMeetingBtnEl.addEventListener("click", function () {
    var list = getFilteredStudents();
    if (list.length === 0) return;
    var idx = list.findIndex(function (s) {
      return s.id === selectedId;
    });
    var nextIdx = (idx + 1) % list.length;
    selectStudent(list[nextIdx].id);
  });

  stampBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var stamp = btn.dataset.stamp;
      var current = noteInputEl.value.trim();
      noteInputEl.value = current ? current + " " + stamp : stamp;
      noteInputEl.focus();
    });
  });

  noteFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = noteInputEl.value.trim();
    if (!text) return;
    var s = getSelectedStudent();
    if (!s) return;
    s.notes.unshift({
      date: "Today · Just logged",
      text: text
    });
    noteInputEl.value = "";
    renderDossier();
  });

  resetBtnEl.addEventListener("click", function () {
    resetState();
  });

  // Keyboard shortcuts: / focuses search, J/K step through students, 1/2/3 switch drafts
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select") {
      if (e.key === "Escape") {
        e.target.blur();
      }
      return;
    }

    if (e.key === "/") {
      e.preventDefault();
      searchInputEl.focus();
    } else if (e.key === "j" || e.key === "J") {
      e.preventDefault();
      nextMeetingBtnEl.click();
    } else if (e.key === "k" || e.key === "K") {
      e.preventDefault();
      var list = getFilteredStudents();
      if (list.length === 0) return;
      var idx = list.findIndex(function (s) {
        return s.id === selectedId;
      });
      var prevIdx = (idx - 1 + list.length) % list.length;
      selectStudent(list[prevIdx].id);
    } else if (e.key === "1" || e.key === "2" || e.key === "3") {
      var s = getSelectedStudent();
      var n = parseInt(e.key, 10) - 1;
      if (s && s.drafts[n]) {
        selectedDraftIdx = n;
        renderDossier();
      }
    }
  });

  resetState();
})();
