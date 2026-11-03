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

    /* Slide 19: this is one evolving chat, not a three-slide prompting lesson.
       Presenter swipes reveal additional messages in the same history.
       The right column changes its explanation in sync with each swipe.
       Canvas is selected before the last instruction asks Gemini to build. */
    add(6, 2,
      '<div class="conversation-scene">' +
      '<div class="conversation-left">' +
      '<div class="conversation-browser"><span class="conversation-eyebrow">AN EXAMPLE CONVERSATION</span>' +
      '<span class="conversation-brand"><span class="conversation-sparkle" aria-hidden="true">✦</span> Gemini</span>' +
      '<span class="conversation-progress">A conversation, not a formula</span></div>' +
      '<div class="conversation-history" aria-label="A simulated Gemini conversation built up with presenter swipes">' +
      '<div class="conversation-message conversation-user conversation-turn--idea"><span class="conversation-speaker">YOU</span>' +
      '<p>I want a futuristic interface with a moving particle shape. I want to move it with my mouse and see computer panels around it.</p></div>' +
      '<div class="conversation-message conversation-user conversation-turn--self" data-step="1"><span class="conversation-speaker">YOU</span>' +
      '<p>Turn what I just described into a detailed prompt for yourself. Include the design, motion, interactions and anything I missed.</p></div>' +
      '<div class="conversation-message conversation-gemini conversation-turn--response" data-step="1">' +
      '<span class="conversation-speaker">GEMINI · ILLUSTRATIVE RESPONSE</span>' +
      '<p>Here’s a build prompt based on your idea:</p>' +
      '<div class="conversation-response-summary"><span>Interactive particle core</span><span>Mouse movement and click response</span><span>Futuristic information panels</span><span>Responsive layout</span></div></div>' +
      '<div class="conversation-canvas-choice" data-step="2" aria-label="Canvas mode selected before building">' +
      '<span class="conversation-canvas-icon" aria-hidden="true">▦</span> Canvas <span class="conversation-selected">SELECTED</span></div>' +
      '<div class="conversation-message conversation-user conversation-turn--build" data-step="2"><span class="conversation-speaker">YOU</span>' +
      '<p>Now use the prompt you created. Build it in Canvas.</p></div>' +
      '<div class="conversation-message conversation-gemini conversation-turn--building" data-step="2"><span class="conversation-speaker">GEMINI / CANVAS</span>' +
      '<p>Creating your first version…</p><span class="conversation-activity" aria-hidden="true"><i></i><i></i><i></i></span></div>' +
      '</div><div class="conversation-footer"><span>ILLUSTRATIVE CHAT · NO LIVE MODEL CONNECTION</span><span>BUILDING TOGETHER</span></div></div>' +
      '<div class="conversation-right">' +
      '<p class="conversation-right-kicker">FROM IDEA TO A BUILD</p>' +
      '<div class="conversation-explanation conversation-explanation--idea">' +
      '<span class="conversation-section-number">01 / JUST ASK</span>' +
      '<h2>Start with what you want.</h2>' +
      '<p>Describe the idea in your own words. You do not need to know how to code or how to write a technical prompt.</p></div>' +
      '<div class="conversation-explanation conversation-explanation--self">' +
      '<span class="conversation-section-number">02 / LET IT WORK OUT THE DETAILS</span>' +
      '<h2>Ask Gemini to prompt itself.</h2>' +
      '<p>Gemini translates your idea into a more detailed build request. Read it, correct anything it misunderstood, and keep moving.</p></div>' +
      '<div class="conversation-explanation conversation-explanation--build">' +
      '<span class="conversation-section-number">03 / BUILD IN CANVAS</span>' +
      '<h2>Select Canvas. Then build.</h2>' +
      '<p>Use the prompt Gemini just wrote. It starts building the first version in Canvas. You can test it and ask for changes.</p></div>' +
      '<div class="conversation-takeaway">You bring the idea. <span>AI helps work out the implementation.</span></div>' +
      '</div></div>',
      { id:"gemini-conversation" });

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
