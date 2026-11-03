/* Editable classroom prompt workspace — no student data, network requests or account login. */
(function () {
  "use strict";
  var data = window.FCIS_TOOLS;
  if (!data) return;
  var all = data.tools, core = all.filter(function (x) { return x.level !== "support"; });
  var support = all.filter(function (x) { return x.level === "support"; });
  var levels = [["lower","Lower School"],["middle","Middle School"],["high","High School"]];
  var subjects = ["Math","English","Science","History"];
  var matrix = document.getElementById("matrix"), needs = document.getElementById("needs");
  var needlist = document.getElementById("needlist"), supportlist = document.getElementById("supportlist");
  var idea = document.getElementById("idea"), full = document.getElementById("full");
  var meta = document.getElementById("selectedmeta"), status = document.getElementById("status");
  var chosen = null, changedFinal = false;

  function compose(text) { return text.trim() + "\n\n" + data.shared; }
  function clearStatus() { status.textContent = ""; }
  function buttonFor(tool, className) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.dataset.tool = tool.id;
    button.setAttribute("aria-label", tool.grade + " " + tool.subject + ": " + tool.title + ". Edit prompt");
    var title = document.createElement("strong"); title.textContent = tool.title;
    var need = document.createElement("small"); need.textContent = tool.need;
    button.append(title,need);
    return button;
  }
  function renderMatrix() {
    var header = document.createElement("div");
    header.className = "matrixcorner"; header.textContent = "SUBJECT";
    matrix.append(header);
    levels.forEach(function (pair) {
      var label = document.createElement("div");
      label.className="matrixhead"; label.textContent=pair[1];matrix.append(label);
    });
    subjects.forEach(function (subj) {
      var heading=document.createElement("div");
      heading.className="matrixsubject";heading.textContent=subj;matrix.append(heading);
      levels.forEach(function (pair) {
        var t=core.find(function (x) {return x.subject===subj&&x.level===pair[0];});
        matrix.append(buttonFor(t,"tooltile"));
      });
    });
  }
  function renderSupports() {
    support.forEach(function (t) {supportlist.append(buttonFor(t,"supporttile"));});
  }
  function renderNeeds() {
    var n=needs.value;
    needlist.replaceChildren();
    var found=all.filter(function (t) {return n==="all"||t.tags.indexOf(n)!==-1;});
    found.forEach(function (t) {needlist.append(buttonFor(t,"needtile"));});
  }
  function markSelected() {
    document.querySelectorAll("[data-tool]").forEach(function (b) {
      var on=chosen&&chosen.id===b.dataset.tool;
      b.classList.toggle("selected",!!on);
      b.setAttribute("aria-pressed",String(!!on));
    });
  }
  function selectTool(id, scroll) {
    var t=all.find(function (x) {return x.id===id;});
    if (!t) return;
    chosen=t;changedFinal=false;
    idea.value=t.prompt;full.value=compose(idea.value);
    meta.textContent=t.grade+" · "+t.subject+" · "+t.need;
    document.getElementById("reset").disabled=false;
    markSelected();clearStatus();
    if(scroll)document.getElementById("editor").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
  }
  function startBlank() {
    chosen=null;changedFinal=false;
    idea.value="I teach [grade and subject]. My students need help with [specific learning challenge]. I want a tool where students [meaningful action or decision], so they can practice [learning goal]. Include [access supports appropriate to this activity] without giving away the answer.";
    full.value=compose(idea.value);
    meta.textContent="Start from your own idea · Replace the brackets";
    document.getElementById("reset").disabled=false;
    markSelected();clearStatus();
    document.getElementById("editor").scrollIntoView({behavior:"smooth",block:"start"});
  }
  function switchView(name) {
    document.querySelectorAll("[data-view]").forEach(function (b) {b.setAttribute("aria-pressed",String(b.dataset.view===name));});
    matrix.hidden=name!=="grades";needview.hidden=name!=="needs";
  }
  var needview=document.getElementById("needview");
  document.querySelectorAll("[data-view]").forEach(function (b) {b.addEventListener("click",function () {switchView(b.dataset.view);});});
  document.addEventListener("click",function (e) {
    var button=e.target.closest("[data-tool]");
    if(button)selectTool(button.dataset.tool,true);
  });
  document.getElementById("scratch").addEventListener("click",startBlank);
  needs.addEventListener("change",renderNeeds);
  idea.addEventListener("input",function () {
    if(!changedFinal)full.value=compose(idea.value);
    clearStatus();
  });
  full.addEventListener("input",function () {changedFinal=true;clearStatus();});
  document.getElementById("refresh").addEventListener("click",function () {
    changedFinal=false;full.value=compose(idea.value);status.textContent="Complete prompt refreshed.";
  });
  document.getElementById("reset").addEventListener("click",function () {
    if(chosen)selectTool(chosen.id,false);else startBlank();
  });
  document.getElementById("copy").addEventListener("click",async function () {
    if(!full.value.trim()){status.textContent="Add your prompt first.";return;}
    try {
      await navigator.clipboard.writeText(full.value);
      status.textContent="Copied. In Gemini, select Canvas and paste the prompt.";
    } catch(e) {
      full.focus();full.select();
      status.textContent="Select and copy the highlighted text with your device's copy command.";
    }
  });
  renderMatrix();renderSupports();renderNeeds();
  var query=new URLSearchParams(location.search).get("tool");
  if(query==="scratch")startBlank();
  else selectTool(all.some(function (x) {return x.id===query;})?query:"evidence-interpretation",false);
})();
