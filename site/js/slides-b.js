/* Slides for chapters 7–12. Words come from content/story.md; change them there first. */

(function () {
  var D = window.DECK;
  function add(ch, steps, html, opts) {
    D.slides.push({ ch: ch, steps: steps, html: html, scroll: !!(opts && opts.scroll) });
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
  add(7, 1,
    '<p class="big huge">People loved it.</p>' +
    '<p class="big huge" data-step="1">I stopped anyway.</p>');
  add(7, 1,
    '<div class="two"><div class="story">' +
    "<p>I wasn’t trying to ship a product. I was trying to build smaller things.</p>" +
    "<p>What it would mean to build something like that, to support it and maintain it, was too much at the time. Knowing when to stop is part of the skill.</p>" +
    '</div><div><p class="big" data-step="1">Build tools, not <span class="strike" data-at="1">products</span>.</p>' +
    '<div class="practical" data-step="1" style="margin-top:2rem"><div class="mockups"><a class="mockup-link" href="demos/locked-browser/index.html"><strong>Notes, test, locked browser</strong><span>Three stages of one tool.</span></a></div></div>' +
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
  add(9, 0,
    '<div class="practical"><h2>Own it</h2><p class="sub">Google AI Studio, then GitHub, then Vercel. For lessons and tools you want to keep and revise. Free to start.</p><ol>' +
    '<li>Go to <a href="https://aistudio.google.com">aistudio.google.com</a>, sign in with a Google account, and open <b>Build</b>.</li>' +
    "<li>Describe the tool (use the prompt in “Your turn”). Add: <i>“Make it work without any AI or API calls.”</i> That keeps your first tool simple to host.</li>" +
    "<li>Test it in the preview. Ask for changes in plain language.</li>" +
    "<li>In AI Studio, open <b>Settings → GitHub</b> and create a new repository for your app. (Or download it as a ZIP.)</li>" +
    '<li>Go to <a href="https://vercel.com">vercel.com</a>, sign in with GitHub, choose <b>Add New → Project</b>, import that repository, and click <b>Deploy</b>.</li>' +
    "<li>You get a link. Every time you push a change to GitHub, the site updates.</li></ol>" +
    "<p><b>Why this path:</b> the code is yours. It lives in your GitHub, with a history of every change.</p>" +
    '<p class="note">Watch out: if your app uses AI features, it needs an API key set on the host, and usage can cost money. Apps in AI Studio are private until you share them.</p>' +
    '<p class="note">[DAVID: recorded demo video link]</p></div>', { scroll: true });
  add(9, 0,
    '<div class="practical"><h2>Ship it fast</h2><p class="sub">ChatGPT Sites. For a page, dashboard or small app you want to share with a link today. Needs a paid ChatGPT plan.</p><ol>' +
    "<li>In ChatGPT, switch to <b>Work</b> and type <b>@Sites</b>, or simply ask it to build a website.</li>" +
    "<li>Describe what you want and who it’s for. You can attach files or reference images.</li>" +
    "<li>Review the preview and ask for changes.</li>" +
    "<li>Publish. A new site starts private; share it with specific people or with a link.</li></ol>" +
    "<p><b>Why this path:</b> it’s the fastest way from an idea to a live link.</p>" +
    '<p class="note">Watch out: the site and anything you put in it live on OpenAI’s servers. Keep student information out.</p>' +
    '<p class="note">[DAVID: recorded demo video link]</p></div>', { scroll: true });
  add(9, 0,
    '<div class="practical"><h2>Keep it protected</h2><p class="sub">Google Sheets, then a dashboard. For data your school already keeps in Google: hours, schedules, duties, rosters.</p><ol>' +
    "<li>Start with a Google Sheet in your school account.</li>" +
    "<li><b>Option A, Gemini in Sheets</b> (if your school’s Workspace includes it and it’s approved for this data): open the Gemini panel and ask it to summarize the sheet and build charts.</li>" +
    "<li><b>Option B, Apps Script:</b> in the sheet, open <b>Extensions → Apps Script</b>. Ask any AI to write a script that reads this sheet and shows a dashboard. Describe your column names; don’t paste the data itself. Paste the code it gives you.</li>" +
    "<li>Choose <b>Deploy → New deployment → Web app</b>. Set <i>Execute as</i> to <b>Me</b> and <i>Who has access</i> to <b>Only myself</b> or <b>anyone in your school</b>.</li>" +
    "<li>Open the link. Only people signed in with access can see it.</li></ol>" +
    "<p><b>Why this path:</b> the data never leaves your school’s Google account.</p>" +
    '<p class="note">[DAVID: recorded demo video link]</p></div>', { scroll: true });

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
    '<p class="note">[DAVID: link to recorded demos]</p><p class="note">[DAVID: contact]</p></div>', { scroll: true });
})();
