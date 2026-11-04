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

    /* Slide 21: three screenshot-informed CLOSE-UPS, not entire application screens.
       Presenter swipes pan focus 1 -> 2 -> 3 -> pull back to all three. */
    add(6, 3,
      '<div class="publish-closeups">' +
      '<div class="publish-closeups-heading"><p class="arch-eyebrow">05 / MAKE IT AVAILABLE</p>' +
      '<h2>From Canvas to a published page.</h2></div>' +
      '<div class="publish-closeups-stage">' +
      '<div class="publish-closeups-marker" data-step="1" aria-hidden="true"></div>' +
      '<div class="publish-closeups-marker" data-step="2" aria-hidden="true"></div>' +
      '<div class="publish-closeups-marker" data-step="3" aria-hidden="true"></div>' +
      '<div class="publish-closeups-rail">' +

      '<div class="publish-closeup publish-closeup--export">' +
      '<div class="publish-closeup-index">01 <span>GEMINI CANVAS</span></div>' +
      '<div class="publish-closeup-surface publish-closeup-surface--gemini">' +
      '<div class="publish-closeup-appbar"><span>Jarvis HUD</span><span class="publish-closeup-code">Code · Preview</span>' +
      '<span class="publish-closeup-export-button">Export <b>⌄</b></span></div>' +
      '<div class="publish-closeup-export-popover"><span class="publish-closeup-export-selected">▣ &nbsp; Google Sites</span>' +
      '<span>↓ &nbsp; Download code</span></div>' +
      '<div class="publish-closeup-pointer publish-closeup-pointer--export" aria-hidden="true"></div>' +
      '</div><p>Export → Google Sites</p></div>' +

      '<div class="publish-closeup publish-closeup--editor">' +
      '<div class="publish-closeup-index">02 <span>GOOGLE SITES</span></div>' +
      '<div class="publish-closeup-surface publish-closeup-surface--editor">' +
      '<div class="publish-closeup-sitesbar"><span class="publish-closeup-sites-logo">▦</span><span>JARVIS System HUD</span>' +
      '<span class="publish-closeup-publish-button">Publish</span></div>' +
      '<div class="publish-closeup-editorline"><span>JARVIS System HUD</span><span>Insert &nbsp; Themes</span></div>' +
      '<div class="publish-closeup-page-slice"><div class="publish-closeup-cyan-ring"></div></div>' +
      '<div class="publish-closeup-pointer publish-closeup-pointer--editor" aria-hidden="true"></div>' +
      '</div><p>Select Publish</p></div>' +

      '<div class="publish-closeup publish-closeup--menu">' +
      '<div class="publish-closeup-index">03 <span>PUBLISH MENU</span></div>' +
      '<div class="publish-closeup-surface publish-closeup-surface--menu">' +
      '<div class="publish-closeup-sitesbar"><span class="publish-closeup-sites-logo">▦</span><span>JARVIS System HUD</span>' +
      '<span class="publish-closeup-publish-button">Publish <b>⌄</b></span></div>' +
      '<div class="publish-closeup-publish-popover"><span>Publish settings…</span>' +
      '<span class="publish-closeup-review">Review changes and publish</span>' +
      '<span>View published site</span></div>' +
      '<div class="publish-closeup-pointer publish-closeup-pointer--menu" aria-hidden="true"></div>' +
      '</div><p>Review → Publish → View</p></div>' +

      '</div></div>' +
      '<div class="publish-closeups-foot">' +
      '<span>School Google Workspace: Google Sites, when enabled.</span>' +
      '<span>Other accounts: Download code is another option.</span>' +
      '<a href="guide.html#share" target="_blank" rel="noopener">Instructions</a>' +
      '</div></div>', { id:"publish" });

    /* Slide 22 is a presenter-facing invitation, not the interactive catalog.
       One visible action opens the standalone workshop with the 12-tool matrix. */
    add(6, 0,
      '<div class="workshop-invite">' +
      '<p class="arch-eyebrow">YOUR CLASSROOM / YOUR NEXT BUILD</p>' +
      '<h2>What would you build?</h2>' +
      '<p class="workshop-invite-sub">Start with your students. Find something worth making.</p>' +
      '<div class="workshop-invite-grades">' +
      '<div><span>01</span><strong>Lower School</strong><p>Explore and discover</p></div>' +
      '<div><span>02</span><strong>Middle School</strong><p>Connect and explain</p></div>' +
      '<div><span>03</span><strong>High School</strong><p>Analyze and evaluate</p></div>' +
      '</div>' +
      '<div class="workshop-invite-footer"><p>Math <span>·</span> English <span>·</span> Science <span>·</span> History <span>·</span> Learning support</p>' +
      '<a href="prompt-library.html" target="_blank" rel="noopener">Explore the tools <span aria-hidden="true">↗</span></a></div>' +
      '</div>', { id: "tool-ideas" });

  };
})();
