(function () {
  "use strict";

  var initialData = window.COUNSELING_MOCK_DATA || [];
  var students = [];
  var selectedId = "";
  var selectedDraftIdx = 0;

  var scheduleStripEl = document.getElementById("schedule-strip");
  var nextMeetingBtnEl = document.getElementById("next-meeting-btn");
  var resetBtnEl = document.getElementById("reset-btn");

  var detailNameEl = document.getElementById("detail-name");
  var detailSchoolsEl = document.getElementById("detail-schools");
  var detailPrepFocusEl = document.getElementById("detail-prep-focus");
  var detailChecklistEl = document.getElementById("detail-checklist");

  var draftTabsEl = document.getElementById("draft-tabs");
  var draftExcerptEl = document.getElementById("draft-excerpt");
  var draftTakeawayEl = document.getElementById("draft-takeaway");

  var noteFormEl = document.getElementById("note-form");
  var noteInputEl = document.getElementById("note-input");
  var notesTimelineEl = document.getElementById("notes-timeline");

  function cloneData(source) {
    return JSON.parse(JSON.stringify(source));
  }

  function resetState() {
    students = cloneData(initialData);
    selectedId = students.length > 0 ? students[0].id : "";
    selectedDraftIdx = students.length > 0 ? students[0].drafts.length - 1 : 0;
    noteInputEl.value = "";
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

    students.forEach(function (s) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "slot-pill" + (s.id === selectedId ? " is-selected" : "");
      btn.setAttribute("aria-pressed", s.id === selectedId ? "true" : "false");

      var timeSpan = document.createElement("span");
      timeSpan.className = "slot-time";
      timeSpan.textContent = s.todaySlot.replace(" PM", "");

      var nameSpan = document.createElement("span");
      nameSpan.className = "slot-name";
      nameSpan.textContent = s.name;

      btn.appendChild(timeSpan);
      btn.appendChild(nameSpan);

      btn.addEventListener("click", function () {
        selectStudent(s.id);
      });

      scheduleStripEl.appendChild(btn);
    });
  }

  function renderDossier() {
    var s = getSelectedStudent();
    if (!s) return;

    detailNameEl.textContent = s.name;
    detailSchoolsEl.textContent = s.todaySlot + " — " + s.schools;
    detailPrepFocusEl.textContent = s.prepFocus;

    detailChecklistEl.innerHTML = "";
    s.checklist.forEach(function (item) {
      var label = document.createElement("label");
      label.className = "check-item" + (item.done ? " is-done" : "");

      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = Boolean(item.done);
      cb.addEventListener("change", function () {
        item.done = cb.checked;
        renderDossier();
      });

      var text = document.createElement("span");
      text.textContent = item.text;

      label.appendChild(cb);
      label.appendChild(text);
      detailChecklistEl.appendChild(label);
    });

    draftTabsEl.innerHTML = "";
    s.drafts.forEach(function (d, idx) {
      var tab = document.createElement("button");
      tab.type = "button";
      tab.className = "draft-tab" + (idx === selectedDraftIdx ? " is-active" : "");
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", idx === selectedDraftIdx ? "true" : "false");
      tab.textContent = d.label;

      tab.addEventListener("click", function () {
        selectedDraftIdx = idx;
        renderDossier();
      });

      draftTabsEl.appendChild(tab);
    });

    var activeDraft = s.drafts[selectedDraftIdx] || s.drafts[s.drafts.length - 1];
    if (activeDraft) {
      draftExcerptEl.textContent = "\u201C" + activeDraft.excerpt + "\u201D";
      draftTakeawayEl.textContent = "Note on this draft: " + activeDraft.takeaway;
    }

    notesTimelineEl.innerHTML = "";
    s.notes.forEach(function (n) {
      var li = document.createElement("li");
      li.className = "note-item";

      var dateSpan = document.createElement("span");
      dateSpan.className = "note-date";
      dateSpan.textContent = n.date;

      var textSpan = document.createElement("span");
      textSpan.textContent = n.text;

      li.appendChild(dateSpan);
      li.appendChild(textSpan);
      notesTimelineEl.appendChild(li);
    });
  }

  function renderAll() {
    renderScheduleStrip();
    renderDossier();
  }

  function advanceToNextMeeting() {
    if (students.length === 0) return;
    var idx = 0;
    for (var i = 0; i < students.length; i++) {
      if (students[i].id === selectedId) {
        idx = i;
        break;
      }
    }
    var next = students[(idx + 1) % students.length];
    selectStudent(next.id);
  }

  nextMeetingBtnEl.addEventListener("click", advanceToNextMeeting);
  resetBtnEl.addEventListener("click", resetState);

  noteFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var val = noteInputEl.value.trim();
    if (!val) return;
    var s = getSelectedStudent();
    if (!s) return;

    s.notes.unshift({
      date: "Today",
      text: val
    });
    noteInputEl.value = "";
    renderDossier();
  });

  document.addEventListener("keydown", function (e) {
    var tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
    var inInput = tag === "input" || tag === "textarea" || tag === "select";
    if (inInput || e.metaKey || e.ctrlKey || e.altKey) return;

    if (e.key === "j" || e.key === "J" || e.key === "ArrowRight") {
      e.preventDefault();
      advanceToNextMeeting();
    } else if (e.key === "k" || e.key === "K" || e.key === "ArrowLeft") {
      e.preventDefault();
      if (students.length === 0) return;
      var idx = 0;
      for (var i = 0; i < students.length; i++) {
        if (students[i].id === selectedId) {
          idx = i;
          break;
        }
      }
      var prev = students[(idx - 1 + students.length) % students.length];
      selectStudent(prev.id);
    } else if (e.key === "1" || e.key === "2" || e.key === "3") {
      var s = getSelectedStudent();
      var targetIdx = parseInt(e.key, 10) - 1;
      if (s && s.drafts[targetIdx]) {
        selectedDraftIdx = targetIdx;
        renderDossier();
      }
    }
  });

  resetState();
})();
