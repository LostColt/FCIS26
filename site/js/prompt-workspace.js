/* FCIS 2026 classroom prompt builder.
   One editable prompt, optional instruction modules and no server storage. */
(function () {
  "use strict";
  var data = window.FCIS_TOOLS;
  if (!data) return;
  var all = data.tools;
  var core = all.filter(function (x) { return x.level !== "support"; });
  var support = all.filter(function (x) { return x.level === "support"; });
  var levels = [["lower","Lower School"],["middle","Middle School"],["high","High School"]];
  var subjects = ["Math","English","Science","History"];
  var matrix = document.getElementById("matrix");
  var needs = document.getElementById("needs");
  var needview = document.getElementById("needview");
  var needlist = document.getElementById("needlist");
  var supportlist = document.getElementById("supportlist");
  var explore = document.getElementById("explore");
  var editor = document.getElementById("editor");
  var prompt = document.getElementById("prompt");
  var meta = document.getElementById("selectedmeta");
  var status = document.getElementById("status");
  var addonHost = document.getElementById("addons");
  var chosen = null;
  var initialText = "";
  var active = new Set();

  var addons = [
    {id:"reading",name:"Reading access",detail:"Listen, reread, focus on one line",text:"Include optional read-aloud with pause and replay where supported, line focus, adjustable text size and spacing, and written directions alongside audio. Keep the underlying learning goal unchanged. Do not replace decoding work with audio when decoding is the lesson goal."},
    {id:"language",name:"Language support",detail:"Vocabulary, plain instructions and diagrams",text:"Write clear, concise student instructions. Define necessary academic vocabulary in context and add diagrams when they help understanding. Avoid simplifying the disciplinary thinking or giving away the answer."},
    {id:"steps",name:"One step at a time",detail:"Reduce distractions and support focus",text:"Organize the activity into a small number of predictable steps. Show one primary task at a time with clear progress, back, next and restart controls. Avoid needless animations and competing panels."},
    {id:"responses",name:"Response choices",detail:"Type, select or explain orally",text:"Where appropriate to the learning objective, let students type, select or arrange evidence visually, or prepare an oral explanation. Provide equivalent keyboard access and do not require speech recognition or accounts."},
    {id:"design",name:"Thoughtful visual design",detail:"Expert UI direction, age appropriate, no AI slop",text:"Act as an experienced graphic designer, educational product designer and UI/UX expert. Design for the specified age group, subject and learning activity. Avoid generic AI dashboard aesthetics, gratuitous gradients, oversized cards, excessive icons, visual noise and unnecessary information. Use purposeful color, strong typography, intuitive spacing and only essential controls. Separate teacher settings from the student activity. For lower school use concrete visuals, limited choices and large targets; for middle school use mature but approachable layouts; for high school use restrained design and richer information only when the task requires it. Prioritize clarity over decoration."},
    {id:"teacher",name:"Teacher controls",detail:"Change examples without editing code",text:"Include a simple teacher setup area to change sample passages, problems, questions or data without editing code. Keep these controls out of the student activity. Provide a reset to the original example."},
    {id:"privacy",name:"Privacy & classroom use",detail:"No logins or identifiable student data",text:"Do not require student logins or collect names, grades, student work or identifying information. Use fictional examples, keep the initial build self-contained and identify any permissions, storage or external services before proposing them."}
  ];
  function moduleText(item) {
    return "\n\n" + item.name + ":\n" + item.text;
  }
  function clearStatus() {status.textContent="";}
  function scrollTo(el) {
    el.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
  }
  function buttonFor(tool, className) {
    var button=document.createElement("button");
    button.type="button";button.className=className;button.dataset.tool=tool.id;
    button.setAttribute("aria-label",tool.grade+" "+tool.subject+": "+tool.title+". Edit prompt");
    var title=document.createElement("strong");title.textContent=tool.title;
    var need=document.createElement("small");need.textContent=tool.need;
    button.append(title,need);return button;
  }
  function renderMatrix() {
    var corner=document.createElement("div");corner.className="matrixcorner";corner.textContent="SUBJECT";matrix.append(corner);
    levels.forEach(function (pair) {
      var el=document.createElement("div");el.className="matrixhead";el.textContent=pair[1];matrix.append(el);
    });
    subjects.forEach(function (subject) {
      var label=document.createElement("div");label.className="matrixsubject";label.textContent=subject;matrix.append(label);
      levels.forEach(function (pair) {
        var tool=core.find(function (x) {return x.level===pair[0]&&x.subject===subject;});
        matrix.append(buttonFor(tool,"tooltile"));
      });
    });
  }
  function renderSupports() {support.forEach(function (x) {supportlist.append(buttonFor(x,"supporttile"));});}
  function renderNeeds() {
    var value=needs.value;
    needlist.replaceChildren();
    all.filter(function(x){return value==="all"||x.tags.includes(value);}).forEach(function(x){needlist.append(buttonFor(x,"needtile"));});
  }
  function updateCount() {
    document.getElementById("prompt-count").textContent=prompt.value.trim().split(/\s+/).filter(Boolean).length+" words";
  }
  function refreshAddonButtons() {
    addonHost.querySelectorAll("[data-addon]").forEach(function(button) {
      var enabled=active.has(button.dataset.addon);
      button.setAttribute("aria-pressed",String(enabled));
      button.classList.toggle("selected",enabled);
      button.querySelector(".addon-action").textContent=enabled?"Added ✓":"Add +";
    });
  }
  function renderAddons() {
    addons.forEach(function(item){
      var button=document.createElement("button");
      button.type="button";button.className="addon";button.dataset.addon=item.id;button.setAttribute("aria-pressed","false");
      var title=document.createElement("strong");title.textContent=item.name;
      var detail=document.createElement("small");detail.textContent=item.detail;
      var action=document.createElement("span");action.className="addon-action";action.textContent="Add +";
      button.append(title,detail,action);addonHost.append(button);
    });
  }
  function setTool(id, move) {
    chosen=all.find(function(t){return t.id===id;})||null;
    if(!chosen)return;
    active.clear();
    initialText=chosen.prompt.trim()+"\n\n"+data.shared.trim();
    prompt.value=initialText;
    meta.textContent=chosen.grade+" · "+chosen.subject+" · "+chosen.need;
    explore.hidden=true;editor.hidden=false;
    refreshAddonButtons();updateCount();clearStatus();
    if(move)scrollTo(editor);
  }
  function startBlank() {
    chosen=null;active.clear();
    initialText="I teach [grade and subject]. My students need help with [specific learning challenge]. I want a tool where students [action they perform], so they can practice [learning objective]. Keep the task age appropriate without giving away the answer.\n\n"+data.shared.trim();
    prompt.value=initialText;meta.textContent="Your own idea · Replace the brackets";
    explore.hidden=true;editor.hidden=false;
    refreshAddonButtons();updateCount();clearStatus();scrollTo(editor);
  }
  function showPicker() {
    editor.hidden=true;explore.hidden=false;clearStatus();
    scrollTo(explore);
  }
  function addOrRemove(item) {
    var block=moduleText(item);
    if(active.has(item.id)) {
      if(prompt.value.includes(block)) {
        prompt.value=prompt.value.replace(block,"");
        active.delete(item.id);
        status.textContent=item.name+" removed.";
      } else {
        status.textContent="You edited this instruction. To protect your changes, remove it directly in the prompt.";
      }
    } else {
      // Insert modular direction immediately before the standard Canvas build instructions
      // when that untouched paragraph is still present. Otherwise append without rewriting edits.
      var standard=data.shared.trim();
      var at=prompt.value.lastIndexOf(standard);
      if(at>=0)prompt.value=prompt.value.slice(0,at).trimEnd()+block+"\n\n"+prompt.value.slice(at);
      else prompt.value=prompt.value.trimEnd()+block;
      active.add(item.id);
      status.textContent=item.name+" added to your prompt.";
    }
    refreshAddonButtons();updateCount();
  }
  function switchView(name) {
    document.querySelectorAll("[data-view]").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.view===name));});
    matrix.hidden=name!=="grades";needview.hidden=name!=="needs";
  }
  addonHost.addEventListener("click",function(event) {
    var button=event.target.closest("[data-addon]");
    if(!button)return;
    var item=addons.find(function(x){return x.id===button.dataset.addon;});
    if(item)addOrRemove(item);
  });
  document.addEventListener("click",function(event){
    var button=event.target.closest("[data-tool]");
    if(button)setTool(button.dataset.tool,true);
  });
  document.querySelectorAll("[data-view]").forEach(function(button){
    button.addEventListener("click",function(){switchView(button.dataset.view);});
  });
  document.getElementById("scratch").addEventListener("click",startBlank);
  document.getElementById("back").addEventListener("click",showPicker);
  document.getElementById("reset").addEventListener("click",function() {
    if(chosen)setTool(chosen.id,false);
    else {prompt.value=initialText;active.clear();refreshAddonButtons();updateCount();clearStatus();}
    status.textContent="Prompt reset.";
  });
  needs.addEventListener("change",renderNeeds);
  prompt.addEventListener("input",function(){updateCount();clearStatus();});
  document.getElementById("copy").addEventListener("click",async function(){
    if(!prompt.value.trim()){status.textContent="Write a prompt before copying.";return;}
    try {
      await navigator.clipboard.writeText(prompt.value);
      status.textContent="Copied. Select Canvas in Gemini, then paste.";
    } catch(e) {
      prompt.focus();prompt.select();
      status.textContent="Prompt selected. Use your device's copy command.";
    }
  });
  renderMatrix();renderSupports();renderNeeds();renderAddons();
  var requested=new URLSearchParams(location.search).get("tool");
  if(requested==="scratch")startBlank();
  else if(requested&&all.some(function(x){return x.id===requested;}))setTool(requested,false);
})();
