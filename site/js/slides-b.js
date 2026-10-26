/* Slides for chapters 7–12. Words come from content/story.md; change them there first. */

(function () {
  var D = window.DECK;
  function add(ch, steps, html, opts) {
    D.slides.push({ ch: ch, steps: steps, html: html, scroll: !!(opts && opts.scroll), id: opts && opts.id });
  }

  var PROMPT =
    "I teach [grade and subject]. My students struggle with [the problem].\n" +
    "Build a one-page app where they [what they do].\n" +
    "It must work on a Chromebook, need no login, and use large, readable text.\n" +
    "Make it work without any AI or API calls.\n" +
    "Don’t collect names or any student data.";
  D.prompt = PROMPT;
  var promptBox = '<div class="prompt-box"><pre>' + PROMPT + '</pre><button type="button" class="btn copy" data-copy>Copy prompt</button></div>';

  /* 7 · Build small */
  add(7, 3,
    '<p class="big" style="font-size:clamp(1.9rem,3.6vw,3.2rem)">One small tool kept growing.</p>' +
    '<ol class="steps" aria-label="How the note tool grew">' +
    '<li data-step="1"><div class="sketch" aria-hidden="true"><i class="dark"></i><i></i><i></i><i class="short"></i></div><h3>A classroom</h3><p>Students put in their notes.</p></li>' +
    '<li data-step="2"><div class="sketch" aria-hidden="true"><i class="dark"></i><i class="blue"></i><i class="blue"></i><i class="blue"></i></div><h3>Ready for tests</h3><p>Then it became ready for taking tests.</p></li>' +
    '<li data-step="3"><div class="sketch" aria-hidden="true"><i class="dark"></i><i></i><i></i><span class="lock">Locked</span></div><h3>A locked browser</h3><p>No copy and paste, no AI.</p></li>' +
    "</ol>");
  add(7, 0, D.live("locked-browser", "Notes, then a test, then a locked browser", "Switch between the three stages. In Locked, try to paste."), { id: "locked" });
  add(7, 1,
    '<p class="big huge">People loved it.</p>' +
    '<p class="big huge" data-step="1">I stopped anyway.</p>');
  add(7, 1,
    '<div class="two"><div class="story">' +
    "<p>I wasn’t trying to ship a product. I was trying to build smaller things.</p>" +
    "<p>What it would mean to build something like that, to support it and maintain it, was too much at the time. Knowing when to stop is part of the skill.</p>" +
    '</div><div><p class="big" data-step="1">Build tools, not <span class="strike" data-at="1">products</span>.</p>' +
    "</div></div>");

  /* 8 · Update your software */
  add(8, 0, '<p class="big">If we are edtech, we need to update our software too.</p>');
  add(8, 3,
    '<div class="two"><div class="story">' +
    "<p>I’ve seen teachers who aren’t willing to change, because the resources they built took so long to make. So the resources go stagnant.</p>" +
    "<p>But building also means revising and updating. If the system is failing or needs revision, you’re not stuck. You can change it. Add to it. Improve it constantly. It lives with you.</p>" +
    '</div><div class="revision"><h3>A resource that keeps changing</h3><p class="kicker">An example of revising when a change takes a sentence, not a summer.</p><ol>' +
    '<li><span class="v">First</span><span>Vocabulary flashcards for one unit.</span></li>' +
    '<li data-step="1"><span class="v">Next</span><span><del>Students type answers</del> <ins>Students hear each word read aloud</ins></span></li>' +
    '<li data-step="2"><span class="v">Then</span><span><ins>Works on the class Chromebooks</ins></span></li>' +
    '<li data-step="3"><span class="v">Now</span><span><ins>A second version for the next unit, in an afternoon</ins></span></li>' +
    "</ol></div></div>");
  add(8, 1,
    '<p class="big">With a subscription, you adapt to the tool.</p>' +
    '<p class="big" data-step="1">When you build, <span class="mark" data-at="1">the tool adapts to you</span>.</p>');
  add(8, 1,
    '<p class="big">Do you brush your teeth while you eat chocolate?</p>' +
    '<p class="big" data-step="1">No. You eat. Then you brush.</p>');

  /* 9 · Three ways in */
  add(9, 3,
    '<p class="big">Pick the path by the job.</p>' +
    '<div class="paths">' +
    '<div data-step="1"><h3>Own it</h3><p class="tools">Google AI Studio, GitHub, Vercel</p><dl><dt>Best for</dt><dd>Lessons and tools you keep and revise</dd><dt>Cost</dt><dd>Free to start</dd></dl></div>' +
    '<div data-step="2"><h3>Ship it fast</h3><p class="tools">ChatGPT Sites</p><dl><dt>Best for</dt><dd>A page or small app with a link today</dd><dt>Cost</dt><dd>Paid ChatGPT plan</dd></dl></div>' +
    '<div data-step="3"><h3>Keep it protected</h3><p class="tools">Google Sheets and Apps Script</p><dl><dt>Best for</dt><dd>Data your school already keeps in Google</dd><dt>Cost</dt><dd>Included in Workspace</dd></dl></div>' +
    "</div>");
  D.insertSteps && D.insertSteps(add);

  /* 10 · Before you build */
  add(10, 0,
    '<div class="two" style="align-items:start"><p class="big">Build boldly. Not <span class="strike auto">carelessly</span>.</p>' +
    '<ul class="checklist">' +
    "<li>No student names, grades or work in a prompt or an app unless your school has approved that tool for it.</li>" +
    "<li>Follow your school’s policy. Ask your tech lead before, not after.</li>" +
    "<li>Check the content yourself. AI-built tools can be confidently wrong.</li>" +
    "<li>Name an owner. Who fixes it in June? If nobody, keep it small.</li>" +
    "<li>Keep the systems of record (your LMS, gradebook, student information system) where they are. Build the small, specific things around them.</li>" +
    "</ul></div>", { scroll: true });

  /* 11 · Your turn */
  add(11, 0, '<div class="two"><p class="big">One small tool. 15&nbsp;minutes.</p><div data-figure="timer"></div></div>');
  add(11, 0,
    '<div class="practical" style="max-width:64rem"><h2>Pick one small annoyance</h2><p class="sub">Two minutes. A few to steal:</p><ul class="juggle ideas">' +
    "<li>An exit-ticket randomizer</li><li>Flashcards for this unit’s vocabulary</li>" +
    "<li>A rubric students check their draft against</li><li>A simulation with sliders that shows cause and effect</li>" +
    "<li>A tracker for your team’s dates, hours or duties</li><li><span class=\"mark on\">The thing you complained about this week</span></li></ul></div>", { scroll: true });
  add(11, 0,
    '<div class="practical"><h2>Paste the prompt. Build it.</h2><p class="sub">Nine minutes. Fill in the brackets, then paste it into Google AI Studio’s Build mode.</p>' +
    promptBox +
    "<p>Then refine it: “Make it…” “Add…” “When a student…”</p>" +
    '<p>No paid plan? Use <a href="https://aistudio.google.com">Google AI Studio</a>. It’s free.</p></div>', { scroll: true });
  add(11, 0,
    '<div class="practical"><h2>Swap</h2><p class="sub">Four minutes.</p><ol>' +
    "<li>Trade with a neighbor. Use their tool like a student. Try to break it.</li>" +
    "<li>Tell them one thing that would make it work in a real class.</li>" +
    "<li>They type that fix in, in one sentence, and watch it change.</li></ol></div>", { scroll: true });
  add(11, 1,
    '<p class="big">You just did what we ask students to do: try something, get feedback, revise.</p>' +
    '<p class="big soft" data-step="1">Eat, then brush.</p>');

  /* 12 · Keep building */
  add(12, 1,
    '<p class="big huge">Start small. It lives with&nbsp;you.</p>' +
    '<p class="kicker-line" data-step="1">One annoyance. One prompt. One colleague to test it. Then revise it next month, and the month after that.</p>');
  add(12, 0,
    '<div class="practical"><h2>Everything in one place</h2><ul class="linklist">' +
    '<li><a href="https://aistudio.google.com">Google AI Studio</a></li><li><a href="https://chatgpt.com/features/sites/">ChatGPT Sites</a></li>' +
    '<li><a href="https://script.google.com">Google Apps Script</a></li><li><a href="https://vercel.com">Vercel</a></li><li><a href="https://github.com">GitHub</a></li></ul>' +
    "<h3>The prompt</h3>" + promptBox +
    '<h3>Keep in touch</h3><p>David Tran, AI Learning and Teaching Specialist, Gulliver Prep, Miami, FL<br><a href="https://www.linkedin.com/in/david-t-04864734">Connect with me on LinkedIn</a></p></div>', { scroll: true });
})();
