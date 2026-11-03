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


    /* Slide 18 — keep the architecture from the earlier version, but animate the three actual parts.
       The three nouns deliberately separate visual UI, saved data, and how people open the tool. */
    add(6, 0,
      '<div class="architecture-scene"><p class="arch-eyebrow">WHAT MAKES A TOOL WORK?</p>' +
      '<h2 class="arch-heading">Three parts. One idea.</h2>' +
      '<div class="architecture-lane" aria-label="Interface connects to storage and hosting">' +
      '<div class="arch-part"><b>Interface</b><span>What people see and use</span></div>' +
      '<i class="arch-link" aria-hidden="true"></i>' +
      '<div class="arch-part"><b>Storage</b><span>What the tool remembers</span></div>' +
      '<i class="arch-link" aria-hidden="true"></i>' +
      '<div class="arch-part"><b>Hosting</b><span>Where people open it</span></div>' +
      '</div><p class="arch-after">Some tools handle all three. Others let you choose.</p></div>',
      { id: "architecture" });

    /* Slide 19 — the three groups should travel, branch, then settle. Not three more static cards. */
    add(6, 0,
      '<div class="path-scene"><p class="arch-eyebrow">SAME IDEA. DIFFERENT ROUTES.</p>' +
      '<h2 class="path-heading">Choose how you want to build.</h2>' +
      '<div class="path-map">' +
      '<div class="path-lane path-lane--gemini"><b>Gemini</b><div class="path-steps"><span>Canvas</span><i>→</i><span>Export to Google Sites</span></div><small>Our live example</small></div>' +
      '<div class="path-lane path-lane--sites"><b>ChatGPT Sites</b><div class="path-steps"><span>Describe it</span><i>→</i><span>Build and publish</span></div><small>One place, with an eligible subscription</small></div>' +
      '<div class="path-lane path-lane--code"><b>More control</b><div class="path-steps"><span>AI Studio · Claude Code · Codex · Antigravity</span><i>→</i><span>GitHub</span><i>→</i><span>Vercel</span></div><small>Code, version history, then hosting</small></div>' +
      '</div><div class="path-focus"><span>For today, we will build in</span><strong>Gemini Canvas.</strong></div></div>',
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

  };
})();
