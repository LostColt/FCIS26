/* Chapter 6: a short orientation, one Gemini Canvas reading companion demonstration,
   a Sheets example, and optional further paths. Full instructions live in guide.html. */

(function () {
  var D = window.DECK;

  /* The fill-in-the-brackets prompt, used in the workshop and in the guide */
  D.prompt =
    "I teach [grade and subject]. My students struggle with [the problem].\n" +
    "Build a one-page app where they [what they do].\n" +
    "It must work on a Chromebook, need no login, and use large, readable text.\n" +
    "Make it work without any AI or API calls.\n" +
    "Don’t collect names or any student data.";

  function ui(label) { return '<span class="ui">' + label + "</span>"; }
  function arrow() { return ' <span class="ui-arrow" aria-hidden="true">→</span> '; }
  function link(url, text) { return '<a href="' + url + '" target="_blank" rel="noopener">' + (text || url.replace(/^https?:\/\//, "")) + "</a>"; }
  D.ui = ui; D.arrow = arrow; D.link = link;
  D.promptBox = function (text) {
    return '<div class="prompt-box"><pre>' + text + '</pre><button type="button" class="btn copy" data-copy>Copy prompt</button></div>';
  };

  D.insertSteps = function (add) {
    /* Slide 17: preserve the eight-question reflection from David's Nov 2 review. */
    var questions = [
      "Where do my students get stuck?", "What takes my attention away?",
      "What do I keep forgetting?", "What am I doing over and over?",
      "What could work differently?", "What would help one student?",
      "What takes too much time?", "What can I simplify?"
    ];
    add(6, 0,
      '<div class="whiteboard"><div class="question-cards" aria-label="Questions to ask before building">' +
      questions.map(function (q, i) { return '<div class="question-card" style="--i:' + i + '">' + q + '</div>'; }).join('') +
      '</div><p class="whiteboard-bottom">What is one small thing worth fixing?</p></div>',
      { id: "build" });


    /* Slide 18: three elements gather at the bottom. Slide 19 carries the exact columns upward.
       Storage describes where project files or OPTIONAL app data live, not a universal database. */
    add(6, 0,
      '<div class="architecture-scene architecture-scene--handoff">' +
      '<p class="arch-eyebrow">WHAT MAKES A TOOL WORK?</p>' +
      '<h2 class="arch-heading">Three parts. One idea.</h2>' +
      '<div class="architecture-lane" aria-label="Three building elements: interface, storage, hosting">' +
      '<div class="arch-part"><b>Interface</b><span>What people use</span></div>' +
      '<i class="arch-link" aria-hidden="true"></i>' +
      '<div class="arch-part"><b>Storage</b><span>What gets kept</span></div>' +
      '<i class="arch-link" aria-hidden="true"></i>' +
      '<div class="arch-part"><b>Hosting</b><span>Where people open it</span></div>' +
      '</div><p class="arch-after">These parts can live together or in different places.</p></div>',
      { id: "architecture" });

    /* Slide 19: the previous three parts rise into a header and the tool examples STACK beneath.
       Rows appear together across the three columns, not as separate lists of brand names. */
    var toolStacks = [
      { label:"Gemini", cls:"gemini", ui:"Gemini Canvas", store:"Google Sites draft", host:"Google Sites",
        note:"Export creates a private draft. App data, if used, may be stored separately (for example in Firebase)." },
      { label:"ChatGPT Sites", cls:"chatgpt", ui:"ChatGPT Sites", store:"Managed with the site", host:"ChatGPT Sites",
        note:"Build, keep and publish in one place with an eligible subscription." },
      { label:"Coding tools", cls:"code", ui:"AI Studio · Claude Code · Codex · Antigravity", store:"GitHub · code",
        host:"Vercel", note:"Code has version history. Add separate storage only if the tool needs persistent data." }
    ];
    add(6, 0,
      '<div class="stack-scene"><p class="arch-eyebrow">THE SAME THREE PARTS, DIFFERENT TOOLS</p>' +
      '<div class="stack-columns" role="table" aria-label="How three different build approaches handle interface, storage, and hosting">' +
      '<div class="stack-column-headings" role="row"><div role="columnheader">Interface<small>What people use</small></div>' +
      '<div role="columnheader">Storage<small>What gets kept</small></div>' +
      '<div role="columnheader">Hosting<small>Where it opens</small></div></div>' +
      '<div class="stack-rows">' + toolStacks.map(function (t, i) {
        return '<div class="stack-row stack-row--' + t.cls + '" role="row" style="--stack:' + i + '">' +
          '<div class="stack-cell" role="cell"><small>' + t.label + '</small><b>' + t.ui + '</b></div>' +
          '<div class="stack-cell" role="cell"><b>' + t.store + '</b></div>' +
          '<div class="stack-cell" role="cell"><b>' + t.host + '</b></div>' +
          '<p class="stack-description">' + t.note + '</p></div>';
      }).join('') + '</div></div>' +
      '<p class="stack-focus">We’ll build the first example in <strong>Gemini Canvas.</strong></p></div>',
      { id: "ways" });

    /* Slide 20: David's ordinary first request. We intentionally do not teach prompt templates. */
    add(6, 0,
      '<div class="gemini-scene gemini-scene--ask">' +
      '<p class="arch-eyebrow">01 / SAY WHAT YOU WANT</p>' +
      '<h2 class="scene-heading">Start with an idea.</h2>' +
      '<div class="gemini-chat"><span class="gemini-speaker">You, to Gemini</span>' +
      '<p class="gemini-user-words">“I want a futuristic interface with a moving particle shape in the middle. I want to move it with my mouse. Put some computer panels around it.”</p></div>' +
      '<p class="scene-quiet">That is enough to start. No technical vocabulary required.</p></div>',
      { id: "gemini-idea" });

    /* Slide 21: explicitly ask Gemini to prompt itself. Model-generated example is labeled illustrative. */
    add(6, 0,
      '<div class="gemini-scene gemini-scene--prompt">' +
      '<p class="arch-eyebrow">02 / ASK GEMINI TO WRITE THE PROMPT</p>' +
      '<h2 class="scene-heading">Let it do the technical thinking.</h2>' +
      '<div class="gemini-direct"><span class="gemini-speaker">You, to Gemini</span>' +
      '<p>“Turn what I described into a detailed build prompt for yourself. Include the design, motion, interactions, and things I might have missed.”</p></div>' +
      '<div class="gemini-draft" aria-label="Illustrative prompt Gemini might produce"><span class="gemini-speaker">Illustrative expanded prompt</span>' +
      '<div class="draft-lines"><span>Full-screen, dark futuristic HUD</span><span>Animated interactive particle core</span><span>Mouse drag and click reactions</span><span>Readable status panels and responsive layout</span></div></div>' +
      '</div>', { id: "gemini-self-prompt" });

    /* Slide 22: activate Canvas; this is a staged illustration rather than an actual Gemini call. */
    add(6, 0,
      '<div class="gemini-scene gemini-scene--canvas">' +
      '<p class="arch-eyebrow">03 / USE THE PROMPT IT WROTE</p>' +
      '<h2 class="scene-heading">Now build it.</h2>' +
      '<div class="canvas-workflow"><div class="canvas-chat"><span class="gemini-speaker">You, to Gemini</span><p>“Use the prompt you created. Build it in Canvas.”</p></div>' +
      '<div class="canvas-arrow" aria-hidden="true">→</div>' +
      '<div class="canvas-result"><div class="canvas-topline">Canvas <span>Preview</span></div><div class="canvas-wireframe"><span></span><div class="canvas-ring"></div><span></span></div><small>First version · try it, then ask for a change</small></div></div>' +
      '<p class="scene-quiet">We are not writing code. We are describing, trying, and revising.</p></div>',
      { id: "gemini" });

    /* Slide 23: the actual user-supplied HTML is shown, not a mock image or an invented Gemini output.
       The preview starts only when this slide is active (see hud-preview.js). */
    add(6, 0,
      '<div class="hud-scene"><div class="hud-story"><p class="arch-eyebrow">04 / TRY THE RESULT</p>' +
      '<h2 class="scene-heading">This is what an idea can become.</h2>' +
      '<p class="scene-quiet">An interactive particle HUD. Move the cursor. Click the core. Ask for a change.</p>' +
      '<div class="hud-actions"><a href="demos/jarvis-hud.html" target="_blank" rel="noopener">Open the interactive HUD</a>' +
      '<a href="guide.html#gemini" target="_blank" rel="noopener">How the build works</a></div>' +
      '<small>Example built from an existing HTML file; not a live Gemini generation.</small></div>' +
      '<div class="hud-frame-shell"><div class="hud-frame-header"><span>INTERACTIVE PREVIEW</span><span>JARVIS / DEMO</span></div>' +
      '<iframe class="hud-preview" title="Interactive particle HUD demo" data-hud-preview data-src="demos/jarvis-hud.html" loading="lazy"></iframe></div></div>',
      { id: "hud-result" });

    /* Slide 24: verified new 2026 pathway, export directly to a private Google Sites draft, then publish. */
    add(6, 0,
      '<div class="publish-scene"><p class="arch-eyebrow">05 / MAKE IT AVAILABLE</p>' +
      '<h2 class="scene-heading">From Canvas to a published site.</h2>' +
      '<div class="publish-flow"><div class="publish-node"><span class="publish-icon">01</span><b>Canvas</b><small>Try it. Revise it.</small></div>' +
      '<i class="publish-connector" aria-hidden="true"></i>' +
      '<div class="publish-node"><span class="publish-icon">02</span><b>Export → Google Sites</b><small>Creates a private draft</small></div>' +
      '<i class="publish-connector" aria-hidden="true"></i>' +
      '<div class="publish-node"><span class="publish-icon">03</span><b>Publish</b><small>Review who can open it</small></div></div>' +
      '<div class="publish-browser"><div class="publish-browser-bar"><span></span><span></span><span></span><strong>YOUR SITE · PUBLISHED</strong></div>' +
      '<div class="publish-browser-inside"><div class="publish-mini-ring" aria-hidden="true"></div><div><strong>Open the link.</strong><small>See what your audience sees.</small></div></div></div>' +
      '<p class="scene-quiet publish-note">Google Sites must be enabled for your account. Check publishing permissions before sharing.</p>' +
      '<p class="build-actions"><a href="https://gemini.google.com" target="_blank" rel="noopener">Open Gemini</a> · ' +
      '<a href="guide.html#share" target="_blank" rel="noopener">Export and publishing steps</a></p></div>',
      { id: "publish" });

    /* An existing practical example: keep the assessment dashboard for later review. */
    var rows = [["Date","Grade","Course","Type"],["Nov 3","10","Geometry","Test"],["Nov 3","10","English 10","Project"],["Nov 4","11","Physics","Test"]];
    add(6, 0,
      '<p class="said-line">You can build around information you already keep.</p>' +
      '<div class="sheet-to-dash"><div class="mini-sheet" aria-label="Fictional assessment spreadsheet"><div class="mini-sheet-bar">Sample assessments · Google Sheets</div><table>' +
      rows.map(function (r,k) { return "<tr>" + r.map(function(c){return (k?"<td>":"<th>")+c+(k?"</td>":"</th>");}).join("")+"</tr>";}).join("") +
      '</table></div><div class="to-arrow" aria-hidden="true">→</div><div class="late-card" style="--t:2s">' +
      D.tool("dashboard", "For a department", "Assessment Calendar", "The same information, easier to see. A Sheets canvas or a school-approved Apps Script can extend it.") +
      '</div></div><p class="build-footnote"><a href="guide.html#sheets" target="_blank" rel="noopener">How Sheets canvas and Apps Script differ</a></p>',
      { id: "dashboard" });

  };
})();
