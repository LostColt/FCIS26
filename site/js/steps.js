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


    /* Slide 18 — one self-contained animated transformation.
       The architecture stays visible for ~3 seconds before becoming the grid header.
       Different shapes illustrate three different kinds of building:
       Gemini is a connected path, ChatGPT Sites one unified service, coding tools converging. */
    add(6, 0,
      '<div class="anatomy-scene">' +
      '<div class="anatomy-opening"><p class="anatomy-overline">WHAT MAKES A TOOL WORK?</p>' +
      '<h2>Three parts. <em>One idea.</em></h2></div>' +
      '<div class="anatomy-headings" aria-label="Interface, storage, and hosting">' +
      '<div class="anatomy-heading"><span>01 / THE FRONT</span><strong>Interface</strong><small>What people use</small></div>' +
      '<div class="anatomy-heading"><span>02 / WHAT REMAINS</span><strong>Storage</strong><small>What gets kept</small></div>' +
      '<div class="anatomy-heading"><span>03 / THE LINK</span><strong>Hosting</strong><small>Where people open it</small></div>' +
      '</div>' +
      '<div class="anatomy-examples">' +
      '<div class="anatomy-gemini"><span class="anatomy-row-label">A / GOOGLE GEMINI</span>' +
      '<div class="anatomy-row anatomy-row--gemini" aria-label="Gemini Canvas, a Google Sites draft, and Google Sites publishing">' +
      '<div class="anatomy-gemini-module"><span class="anatomy-gemini-dot"></span><strong>Gemini Canvas</strong></div>' +
      '<div class="anatomy-gemini-module"><span class="anatomy-gemini-dot"></span><strong>Sites draft</strong><small>Exported project</small></div>' +
      '<div class="anatomy-gemini-module"><span class="anatomy-gemini-dot"></span><strong>Google Sites</strong><small>Published address</small></div></div></div>' +
      '<div class="anatomy-chatgpt"><span class="anatomy-row-label">B / CHATGPT SITES</span>' +
      '<div class="anatomy-row anatomy-row--chatgpt" aria-label="ChatGPT Sites handles the interface, the project, and publication in one service">' +
      '<div class="anatomy-chatgpt-cell"><strong>Build in Sites</strong></div>' +
      '<div class="anatomy-chatgpt-cell"><strong>Kept in Sites</strong></div>' +
      '<div class="anatomy-chatgpt-cell"><strong>Published by Sites</strong></div>' +
      '</div><p class="anatomy-row-caption">One service, with an eligible subscription.</p></div>' +
      '<div class="anatomy-advanced"><span class="anatomy-row-label">C / MORE CONTROL</span>' +
      '<div class="anatomy-row anatomy-row--advanced" aria-label="Coding tools create the project, GitHub stores its code, and Vercel hosts it">' +
      '<div class="anatomy-coding"><span>AI Studio</span><span>Claude Code</span><span>Codex</span><span>Antigravity</span></div>' +
      '<div class="anatomy-destination"><strong>GitHub</strong><small>Source and version history</small></div>' +
      '<div class="anatomy-destination"><strong>Vercel</strong><small>Web hosting</small></div></div>' +
      '</div></div>' +
      '<p class="anatomy-landing">Today, we’ll build in <strong>Gemini Canvas.</strong></p>' +
      '<p class="visually-hidden">Some tools need separate data storage; these storage examples refer to the saved project or code. Gemini app data can use a different service.</p>' +
      '</div>',
      { id: "architecture" });

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
