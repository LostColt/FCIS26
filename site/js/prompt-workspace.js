/* FCIS26 · one-screen classroom prompt workbench.
   All changes stay in this tab. No network requests or student records. */
(function () {
  "use strict";
  var data=window.FCIS_TOOLS;
  if(!data)return;
  var all=data.tools, core=all.filter(function(t){return t.level!=="support";});
  var grade=document.getElementById("grade"),subject=document.getElementById("subject");
  var title=document.getElementById("tool-title"),detail=document.getElementById("tool-detail");
  var context=document.getElementById("prompt-context"),prompt=document.getElementById("prompt");
  var status=document.getElementById("status"),count=document.getElementById("prompt-count");
  var primary=document.getElementById("primary-addons"),extra=document.getElementById("more-addons");
  var more=document.getElementById("more-toggle");
  var current="";var active=new Set();var drafts=new Map();var base="";
  var addons=[
    {id:"reading",label:"Reading support",text:"Include optional read-aloud with pause and replay, line focus, and adjustable text size and spacing when relevant. Keep the learning objective unchanged. When students are practicing decoding, do not substitute read-aloud for decoding."},
    {id:"language",label:"Language support",text:"Use concise directions, explain essential academic vocabulary, and include helpful visual cues. Do not simplify the underlying academic reasoning or provide the student's answer."},
    {id:"steps",label:"One step at a time",text:"Present one primary task at a time with predictable navigation, a clear restart and minimal distractions. Let students see where they are without adding needless animations."},
    {id:"design",label:"Thoughtful visual design",text:"Act as an expert graphic designer and educational UI/UX designer. Build for the selected grade and learning task; avoid traditional AI slop: decorative gradients, cluttered dashboards, excess cards and icons, and crowded layouts. Use clear typography and purposeful visuals. Make lower-school interactions concrete and spacious, middle-school interfaces mature and approachable, and high-school interfaces restrained with richer data only when needed. Keep teacher controls separate."},
    {id:"responses",label:"Response choices",text:"Where appropriate to the learning goal, allow students to respond by typing, selecting, arranging evidence or preparing an oral explanation. Keep equivalent keyboard access and avoid requiring speech recognition."},
    {id:"teacher",label:"Teacher controls",text:"Provide a small teacher-only setup to change passages, problems, prompts or examples without modifying the code. Keep teacher settings out of the student view."}
  ];
  function entry(id){return all.find(function(t){return t.id===id;});}
  function addon(id){return addons.find(function(a){return a.id===id;});}
  function segment(a){return "\n\n"+a.label+":\n"+a.text;}
  function baseFor(t){
    var original=t?t.prompt.trim():"I teach [grade and subject]. My students need help with [specific challenge]. I want a simple tool where students [meaningful action] so they practice [learning objective].";
    return original+"\n\n"+data.shared.trim();
  }
  function composed(t){
    var original=baseFor(t);
    var closing=data.shared.trim(),pos=original.lastIndexOf(closing);
    return original.slice(0,pos).trimEnd()+segment(addon("design"))+"\n\n"+original.slice(pos);
  }
  function updateCount(){count.textContent=prompt.value.trim()?prompt.value.trim().split(/\s+/).length+" words":"0 words";}
  function notify(message){status.textContent=message;}
  function refreshButtons(){
    document.querySelectorAll("[data-addon]").forEach(function(button){
      var selected=active.has(button.dataset.addon);
      button.setAttribute("aria-pressed",String(selected));
      button.classList.toggle("selected",selected);
      button.querySelector(".mark").textContent=selected?"✓":"+";
    });
  }
  function renderButtons(){
    addons.forEach(function(a,i){
      var button=document.createElement("button");
      button.type="button";button.className="option";button.dataset.addon=a.id;button.setAttribute("aria-pressed","false");
      var label=document.createElement("span");label.textContent=a.label;
      var mark=document.createElement("span");mark.className="mark";mark.setAttribute("aria-hidden","true");mark.textContent="+";
      button.append(label,mark);(i<4?primary:extra).append(button);
    });
  }
  function saveDraft(){
    if(current)drafts.set(current,{text:prompt.value,active:Array.from(active)});
  }
  function load(id){
    if(current===id)return;
    saveDraft();
    current=id;
    var t=entry(id),draft=drafts.get(id);
    active=new Set(draft?draft.active:["design"]);
    base=baseFor(t);
    prompt.value=draft?draft.text:composed(t);
    title.textContent=t?t.title:"Your own idea";
    detail.textContent=t?t.need:"Describe the learning need in your own words.";
    context.textContent=t?t.grade+" · "+t.subject:"Start from scratch";
    refreshButtons();updateCount();notify("");
    if(id==="scratch"){grade.value="lower";subject.value="scratch";}
    else if(t){grade.value=t.level;fillSubjects(t.subject,t.id);}
  }
  function fillSubjects(wanted,wantedId){
    var level=grade.value;
    var tools=level==="support"?all.filter(function(t){return t.level==="support";}):core.filter(function(t){return t.level===level;});
    subject.replaceChildren();
    tools.forEach(function(t){
      var opt=document.createElement("option");
      opt.value=t.id;opt.textContent=level==="support"?t.title:t.subject;
      subject.append(opt);
    });
    var match=tools.find(function(t){return t.id===wantedId;})||tools.find(function(t){return t.subject===wanted;});
    if(match)subject.value=match.id;
  }
  function selectGrade(){
    if(grade.value==="support"){fillSubjects();load(subject.value);return;}
    fillSubjects("Math");load(subject.value);
  }
  function addOrRemove(a){
    var s=segment(a);
    if(active.has(a.id)){
      if(prompt.value.includes(s)){
        prompt.value=prompt.value.replace(s,"");
        active.delete(a.id);
        notify(a.label+" removed.");
      }else{
        notify("This section was edited. To keep your changes safe, remove its wording directly in the prompt.");
      }
    }else{
      var closing=data.shared.trim();
      var point=prompt.value.lastIndexOf(closing);
      if(point!==-1)prompt.value=prompt.value.slice(0,point).trimEnd()+s+"\n\n"+prompt.value.slice(point);
      else prompt.value=prompt.value.trimEnd()+s;
      active.add(a.id);
      notify(a.label+" added.");
    }
    refreshButtons();updateCount();
    // Do not move focus or automatically select text: the prompt remains stationary.
  }
  grade.addEventListener("change",selectGrade);
  subject.addEventListener("change",function(){load(subject.value);});
  document.getElementById("scratch").addEventListener("click",function(){
    saveDraft();current="";
    var draft=drafts.get("scratch");
    current="scratch";
    active=new Set(draft?draft.active:["design"]);
    prompt.value=draft?draft.text:composed(null);
    base=baseFor(null);
    title.textContent="Your own idea";detail.textContent="Describe the learning need in your own words.";
    context.textContent="Start from scratch";
    refreshButtons();updateCount();notify("You can edit the example directly.");
    // Keep grade/subject selections available for a quick return to a curated tool.
  });
  document.getElementById("reset").addEventListener("click",function(){
    var t=entry(current);
    active=new Set(["design"]);
    base=baseFor(t);
    prompt.value=composed(t);drafts.delete(current);
    refreshButtons();updateCount();notify("Prompt reset.");
  });
  document.getElementById("copy").addEventListener("click",async function(){
    if(!prompt.value.trim()){notify("Add a prompt first.");return;}
    try{await navigator.clipboard.writeText(prompt.value);notify("Copied. Select Canvas in Gemini, then paste.");}
    catch(e){prompt.focus();prompt.select();notify("Select and copy this prompt using your device's copy command.");}
  });
  more.addEventListener("click",function(){
    var open=more.getAttribute("aria-expanded")!=="true";
    more.setAttribute("aria-expanded",String(open));extra.hidden=!open;
    more.querySelector("span").textContent=open?"−":"+";
  });
  [primary,extra].forEach(function(host){
    host.addEventListener("click",function(e){
      var button=e.target.closest("[data-addon]");
      if(button)addOrRemove(addon(button.dataset.addon));
    });
  });
  prompt.addEventListener("input",function(){updateCount();notify("");});
  renderButtons();
  var requested=new URLSearchParams(location.search).get("tool");
  var first=entry(requested)||entry("evidence-interpretation")||core[0];
  grade.value=first.level;
  fillSubjects(first.subject,first.id);
  load(first.id);
  if(requested==="scratch")document.getElementById("scratch").click();
})();
