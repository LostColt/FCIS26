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


    /* Slide 18 — one composed editorial slide.
       Three sculpted headings hold for the spoken explanation, then move up as a single unit.
       The comparison stays a table; the entire Gemini row sweeps yellow automatically
       two seconds after the final sentence finishes appearing. */
    add(6, 0,
      '<div class="anatomy-scene anatomy-editorial">' +
      '<header class="anatomy-intro"><span>WHAT MAKES A TOOL WORK?</span>' +
      '<h2>Three parts. <em>One idea.</em></h2></header>' +
      '<div class="anatomy-columns" role="group" aria-label="The three parts of a small tool">' +
      '<div class="anatomy-column"><span class="anatomy-number">01 / THE FRONT</span><strong>Interface</strong><small>What people use</small></div>' +
      '<div class="anatomy-column"><span class="anatomy-number">02 / WHAT REMAINS</span><strong>Storage</strong><small>What gets kept</small></div>' +
      '<div class="anatomy-column"><span class="anatomy-number">03 / THE LINK</span><strong>Hosting</strong><small>Where people open it</small></div>' +
      '</div>' +
      '<div class="anatomy-table" role="table" aria-label="Three ways to build and publish a tool">' +
      '<div class="anatomy-table-row anatomy-table-row--gemini" role="row">' +
      '<div role="cell"><small>01 / GEMINI</small><strong>Gemini Canvas</strong></div>' +
      '<div role="cell"><strong>Google Sites draft</strong><span>Exported project</span></div>' +
      '<div role="cell"><strong>Google Sites</strong><span>Published site</span></div></div>' +
      '<div class="anatomy-table-row anatomy-table-row--chatgpt" role="row">' +
      '<div role="cell"><small>02 / CHATGPT SITES</small><strong>ChatGPT Sites</strong></div>' +
      '<div role="cell"><strong>Managed with the site</strong></div>' +
      '<div role="cell"><strong>ChatGPT Sites</strong></div></div>' +
      '<div class="anatomy-table-row anatomy-table-row--advanced" role="row">' +
      '<div role="cell"><small>03 / MORE CONTROL</small><strong>AI Studio · Claude Code</strong><span>Codex · Antigravity</span></div>' +
      '<div role="cell"><strong>GitHub</strong><span>Code and version history</span></div>' +
      '<div role="cell"><strong>Vercel</strong><span>Web hosting</span></div></div>' +
      '</div>' +
      '<p class="anatomy-outro">Today, we’ll build in <strong>Gemini Canvas.</strong></p>' +
      '<p class="visually-hidden">Storage here means saved projects or source code. Some apps store their user data separately, and some need no persistent storage.</p>' +
      '</div>', { id:"architecture" });

    /* Slide 19: ONE prompt, not a simulation of Gemini answering.
       Presenter swipes reveal parts of the SAME user message, with the explanation alongside.
       Canvas selection is visibly animated first; each prompt paragraph types on demand. */
    add(6, 2,
      '<div class="conversation-scene conversation-scene--single-prompt">' +
      '<div class="conversation-left">' +
      '<div class="conversation-browser"><span class="conversation-eyebrow">ONE PROMPT · REVEALED IN PARTS</span>' +
      '<span class="conversation-brand"><span class="conversation-sparkle" aria-hidden="true">✦</span> Gemini</span>' +
      '<span class="conversation-progress"><span class="conversation-canvas-button" aria-label="Canvas selection illustrated">Canvas <span class="conversation-mode-on">SELECTED</span></span></span></div>' +
      '<div class="conversation-history" aria-label="One continuous user prompt; additional paragraphs appear with each presenter swipe">' +
      '<div class="conversation-message conversation-user conversation-single-message">' +
      '<span class="conversation-speaker">ONE MESSAGE · YOU TO GEMINI</span>' +
      '<p class="conversation-prompt-part conversation-prompt-part--idea" data-prompt-type>I want a futuristic interface with a moving particle shape in the middle. I want to move it with my mouse and see computer panels around it.</p>' +
      '<p class="conversation-prompt-part conversation-prompt-part--self" data-step="1" data-prompt-type>Turn what I just described into a detailed build prompt for yourself. Include the design, movement, interactions, and things I might have missed.</p>' +
      '<p class="conversation-prompt-part conversation-prompt-part--build" data-step="2" data-prompt-type>Then use that prompt to build the application in Canvas.</p>' +
      '</div></div>' +
      '<div class="conversation-footer"><span>ONE ILLUSTRATIVE USER PROMPT · NO GENERATED REPLY</span><span>CANVAS SELECTED FIRST</span></div>' +
      '</div>' +
      '<div class="conversation-right">' +
      '<p class="conversation-right-kicker">FROM IDEA TO A BUILD</p>' +
      '<div class="conversation-explanation conversation-explanation--idea">' +
      '<span class="conversation-section-number">01 / THE ASK</span><h2>Describe your idea.</h2>' +
      '<p>Start with what you want to see and do. You do not need the technical vocabulary to describe it.</p></div>' +
      '<div class="conversation-explanation conversation-explanation--self">' +
      '<span class="conversation-section-number">02 / EXPAND THE REQUEST</span><h2>Let Gemini work out the details.</h2>' +
      '<p>Within the same prompt, ask it to write the more precise instructions it needs. You can review and revise what it produces later.</p></div>' +
      '<div class="conversation-explanation conversation-explanation--build">' +
      '<span class="conversation-section-number">03 / USE CANVAS</span><h2>Ask it to build.</h2>' +
      '<p>Canvas is already selected. The final line tells Gemini to use those instructions to make a first version. There is no separate reply to send.</p></div>' +
      '<div class="conversation-takeaway">One message. <span>Shown a little at a time.</span></div>' +
      '</div></div>', { id:"gemini" });

    /* Slide 20: full viewport demo becomes its usual preview; explanatory text follows. */
    add(6, 0,
      '<div class="hud-scene hud-scene--cinematic"><div class="hud-story"><p class="arch-eyebrow">04 / TRY THE RESULT</p>' +
      '<h2 class="scene-heading">This is what an idea can become.</h2>' +
      '<p class="scene-quiet">An interactive particle HUD. Move the cursor. Click the core. Ask for a change.</p>' +
      '<div class="hud-actions hud-actions--practical"><button type="button" data-copy-hud>Copy code</button>' +
      '<a href="demos/jarvis-hud.html" download="jarvis-hud.html">Download HTML</a>' +
      '<a href="demos/jarvis-hud.html" target="_blank" rel="noopener">Open app</a></div>' +
      '<p class="hud-action-feedback" data-copy-hud-status role="status" aria-live="polite"></p>' +
      '</div>' +
      '<div class="hud-frame-shell"><div class="hud-frame-header"><span>INTERACTIVE PREVIEW</span><span>JARVIS / DEMO</span></div>' +
      '<iframe class="hud-preview" title="Interactive particle HUD demo" data-hud-preview data-src="demos/jarvis-hud.html" loading="lazy"></iframe></div></div>',
      { id: "hud-result" });

    /* Slide 21: screenshot-informed workflow, not a vague flowchart.
       Presenter advances through the actual menu placements shown in supplied images:
       Gemini Export -> Google Sites editor -> Publish menu. */
    add(6, 2,
      '<div class="publish-demo">' +
      '<div class="publish-demo-heading"><p class="arch-eyebrow">05 / MAKE IT AVAILABLE</p>' +
      '<h2>From Canvas to a published page.</h2></div>' +
      '<div class="publish-ui-window">' +
      '<div class="publish-ui-stage publish-ui-stage--gemini">' +
      '<div class="publish-gemini-bar"><span class="publish-gemini-name">Jarvis HUD</span>' +
      '<span class="publish-gemini-modes">Code <strong>Preview</strong></span>' +
      '<span class="publish-export-button">Export <span>⌄</span></span></div>' +
      '<div class="publish-export-menu"><div class="publish-export-target"><span aria-hidden="true">▣</span> Google Sites</div>' +
      '<div><span aria-hidden="true">↓</span> Download code</div></div>' +
      '<div class="publish-hud-screen"><div class="publish-hud-diagnostics">SYSTEM DIAGNOSTICS<small>CPU LOAD <b>14%</b></small><small>MEMORY ALLOC <b>3264 MB</b></small></div>' +
      '<div class="publish-hud-orb"><i></i><i></i><i></i></div>' +
      '<div class="publish-hud-right">ENVIRONMENT<small>SYSTEM ONLINE</small></div>' +
      '<div class="publish-hud-footer">PROTOCOL LOGS<small>ALL SYSTEMS NOMINAL</small></div></div>' +
      '<div class="publish-ui-target-label">EXPORT → GOOGLE SITES</div>' +
      '</div>' +
      '<div class="publish-ui-stage publish-ui-stage--sites" data-step="1">' +
      '<div class="publish-sites-toolbar"><span class="publish-sites-logo">▦</span>' +
      '<b>JARVIS System HUD</b><span class="publish-sites-status">All changes saved in Drive</span>' +
      '<span class="publish-sites-publish">Publish</span></div>' +
      '<div class="publish-sites-editor"><div class="publish-sites-page"><div class="publish-sites-site-name">JARVIS System HUD</div>' +
      '<div class="publish-sites-embed"><div class="publish-sites-mini-head">SYSTEM DIAGNOSTICS <span>ENVIRONMENT</span></div>' +
      '<div class="publish-hud-orb publish-hud-orb--small"><i></i><i></i><i></i></div></div></div>' +
      '<aside class="publish-sites-sidebar"><b>Insert</b><span>Embed</span><span>Drive</span><span>Text box</span><span>Images</span></aside></div>' +
      '<div class="publish-ui-target-label">GOOGLE SITES → PUBLISH</div>' +
      '</div>' +
      '<div class="publish-ui-stage publish-ui-stage--live" data-step="2">' +
      '<div class="publish-sites-toolbar"><span class="publish-sites-logo">▦</span>' +
      '<b>JARVIS System HUD</b><span class="publish-sites-status">All changes saved in Drive</span>' +
      '<span class="publish-sites-publish">Publish <span>⌄</span></span></div>' +
      '<div class="publish-sites-menu"><div>Publish settings…</div><div class="publish-menu-priority">Review changes and publish</div>' +
      '<div>View published site</div></div>' +
      '<div class="publish-sites-editor"><div class="publish-sites-page"><div class="publish-sites-site-name">JARVIS System HUD</div>' +
      '<div class="publish-sites-embed"><div class="publish-sites-mini-head">SYSTEM DIAGNOSTICS <span>ENVIRONMENT</span></div>' +
      '<div class="publish-hud-orb publish-hud-orb--small"><i></i><i></i><i></i></div></div></div>' +
      '<aside class="publish-sites-sidebar"><b>Insert</b><span>Embed</span><span>Drive</span><span>Text box</span><span>Images</span></aside></div>' +
      '<div class="publish-ui-target-label">REVIEW → PUBLISH → VIEW</div>' +
      '</div></div>' +
      '<div class="publish-demo-bottom">' +
      '<div class="publish-demo-explainer publish-demo-explainer--export"><span>01 / GEMINI CANVAS</span>' +
      '<p><strong>Export → Google Sites</strong></p></div>' +
      '<div class="publish-demo-explainer publish-demo-explainer--sites"><span>02 / GOOGLE SITES</span>' +
      '<p><strong>Review → Publish</strong></p></div>' +
      '<div class="publish-demo-explainer publish-demo-explainer--live"><span>03 / PUBLISH AND CHECK</span>' +
      '<p><strong>Publish → View site</strong></p></div>' +
      '<div class="publish-demo-context"><strong>School Google Workspace</strong> · Sites enabled' +
      '<small>Other accounts: look for Download code.</small>' +
      '<a href="guide.html#share" target="_blank" rel="noopener">Instructions</a></div>' +
      '</div></div>', { id:"publish" });

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
