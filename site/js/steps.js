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

    /* Slide 18: show the choices, not a software lecture. */
    add(6, 0,
      '<div class="build-simple"><p class="said-line">There are a few ways to build it.</p>' +
      '<div class="build-paths">' +
      '<section><b>Start here</b><span>Gemini Canvas</span><small>Build, try, revise, share.</small></section>' +
      '<section><b>Another way</b><span>ChatGPT Sites</span><small>Build and host in one place.</small></section>' +
      '<section><b>When you want more</b><span>AI coding tools</span><small>GitHub keeps the code. Vercel hosts it.</small></section>' +
      '</div><p class="build-quiet">We’ll start with the simplest one.</p></div>', { id: "ways" });

    /* Slides 19-21: one continuous Gemini Canvas demonstration. */
    add(6, 0,
      '<div class="build-simple"><p class="said-line">Start with something your students need.</p>' +
      '<p class="build-problem">A student understands the story better when they can listen along.</p>' +
      '<p class="build-quiet">What if I could build a small reading companion?</p></div>', { id: "canvas-problem" });
    add(6, 0,
      '<div class="build-simple"><p class="said-line">Describe it. Try it.</p>' +
      '<div class="build-prompt">Build a one-page reading companion. Let me paste a short passage. Add read-aloud controls, large readable text and a clear place to start and pause. Use sample text. No login or student data.</div>' +
      '<p class="build-quiet">Open Gemini Canvas. Paste the prompt. Test the result as a student would.</p>' +
      '<p class="build-actions"><a href="https://gemini.google.com" target="_blank" rel="noopener">Open Gemini</a> · <a href="guide.html#gemini" target="_blank" rel="noopener">Steps to follow</a></p></div>', { id: "gemini" });
    add(6, 0,
      '<div class="build-simple"><p class="said-line">Then ask for one change.</p>' +
      '<div class="build-prompt">Keep everything that works. Add a control for text size and spacing, visible keyboard focus, and an optional distraction-reduced view. Leave the original passage unchanged.</div>' +
      '<p class="build-quiet">Try it again. Share only after you have checked what the link opens for someone else.</p>' +
      '<p class="build-actions"><a href="guide.html#share" target="_blank" rel="noopener">Sharing and Google Sites notes</a></p></div>', { id: "revise" });

    /* Slide 22: extension, not another full tutorial. */
    var rows = [["Date","Grade","Course","Type"],["Nov 3","10","Geometry","Test"],["Nov 3","10","English 10","Project"],["Nov 4","11","Physics","Test"]];
    add(6, 0,
      '<p class="said-line">You can build around information you already keep.</p>' +
      '<div class="sheet-to-dash"><div class="mini-sheet" aria-label="Fictional assessment spreadsheet"><div class="mini-sheet-bar">Sample assessments · Google Sheets</div><table>' +
      rows.map(function (r,k) { return "<tr>" + r.map(function(c){return (k?"<td>":"<th>")+c+(k?"</td>":"</th>");}).join("")+"</tr>";}).join("") +
      '</table></div><div class="to-arrow" aria-hidden="true">→</div><div class="late-card" style="--t:2s">' +
      D.tool("dashboard", "For a department", "Assessment Calendar", "The same information, easier to see. A Sheets canvas or a school-approved Apps Script can extend it.") +
      '</div></div><p class="build-footnote"><a href="guide.html#sheets" target="_blank" rel="noopener">How Sheets canvas and Apps Script differ</a></p>', { id: "dashboard" });

    /* Slide 23: optional paths remain optional. */
    add(6, 0,
      '<div class="build-simple"><p class="said-line">And when you are ready, you can go further.</p>' +
      '<div class="build-paths build-paths-two">' +
      '<section><b>ChatGPT Sites</b><span>Describe → preview → revise → publish</span><small>Build and host together. Check your sharing settings.</small></section>' +
      '<section><b>More complex builds</b><span>AI Studio / Codex / Claude Code / Antigravity</span><small>Keep source in GitHub. Deploy a compatible project through Vercel.</small></section>' +
      '</div><p class="build-quiet">The full instructions are in the guide, not on this slide.</p></div>', { id: "more-paths" });
  };
})();
