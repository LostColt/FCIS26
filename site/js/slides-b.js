/* Slides for chapters 6–10. Words come from content/story.md; change them there first.
   Loads after steps.js, which provides D.promptBox, D.ui, D.arrow and D.link. */

(function () {
  var D = window.DECK;
  function add(ch, steps, html, opts) { D.add(ch, steps, html, opts); }
  var ui = D.ui, arrow = D.arrow, link = D.link, box = D.promptBox;

  /* 6 · Update your software */
  /* The line on top, the story under it; one press and the revisions play by themselves */
  add(6, 1,
    '<p class="said-line">If we are edtech, we need to update our software too.</p>' +
    '<div class="two"><div class="story">' +
    "<p>I’ve seen teachers who aren’t willing to change, because the resources they built took so long to make. So the resources go stagnant.</p>" +
    "<p>But building also means revising and updating. If the system is failing or needs revision, you’re not stuck. You can change it. Add to it. Improve it constantly. It lives with you.</p>" +
    '</div><div class="revision play"><h3>Here’s what revising looks like</h3><p class="kicker">One resource. Each change took a sentence, not a summer.</p><ol>' +
    '<li><span class="v">First</span><span>Vocabulary flashcards for one unit.</span></li>' +
    '<li data-step="1" style="--i:0"><span class="v">Next</span><span><del>Students type answers</del> <ins>Students hear each word read aloud</ins></span></li>' +
    '<li data-step="1" style="--i:1"><span class="v">Then</span><span><ins>Works on the class Chromebooks</ins></span></li>' +
    '<li data-step="1" style="--i:2"><span class="v">Now</span><span><ins>A second version for the next unit, in an afternoon</ins></span></li>' +
    "</ol></div></div>");

  /* 7 · Three ways in */
  /* Holds a moment on the line, then the three paths pan out by themselves within two seconds */
  add(7, 0,
    '<p class="big">Pick the path by the job.</p>' +
    '<div class="paths auto-pan">' +
    '<div style="--i:0"><h3>Own it</h3><p class="tools">Google AI Studio, GitHub, Vercel</p><dl><dt>Best for</dt><dd>Lessons and tools you keep and revise</dd><dt>Cost</dt><dd>Free to start</dd></dl></div>' +
    '<div style="--i:1"><h3>Ship it fast</h3><p class="tools">ChatGPT Sites</p><dl><dt>Best for</dt><dd>A page or small app with a link today</dd><dt>Cost</dt><dd>Paid ChatGPT plan</dd></dl></div>' +
    '<div style="--i:2"><h3>Keep it protected</h3><p class="tools">Google Sheets and Apps Script</p><dl><dt>Best for</dt><dd>Data your school already keeps in Google</dd><dt>Cost</dt><dd>Included in Workspace</dd></dl></div>' +
    "</div>");
  D.insertSteps(add);

  /* 8 · Before you build */
  add(8, 1,
    '<div class="two" style="align-items:start"><p class="big">Build boldly. Not <span class="strike auto">carelessly</span>.</p>' +
    '<ul class="checklist" data-step="1">' +
    "<li>No student names, grades or work in a prompt or an app unless your school has approved that tool for it.</li>" +
    "<li>Follow your school’s policy. Ask your tech lead before, not after.</li>" +
    "<li>Check the content yourself. AI-built tools can be confidently wrong.</li>" +
    "<li>Name an owner. Who fixes it in June? If nobody, keep it small.</li>" +
    "<li>Keep the systems of record (your LMS, gradebook, student information system) where they are. Build the small, specific things around them.</li>" +
    "</ul></div>", { scroll: true });

  /* 9 · Your turn: everyone builds in Gemini, from a ready prompt, and leaves with a link */
  var RULES = "Large, readable text. Works on a phone and a Chromebook.\nNo login, no AI or API calls, and don’t collect names or any student data.";
  var PROMPTS = [
    ["Flashcards", "Build a one-page flashcard app for [unit] vocabulary.\nShow the word; tap to flip to the definition. Add Shuffle and Next buttons.\n" + RULES + "\nStart with these words, one per line, as word – definition:\n[your words]"],
    ["Exit-ticket randomizer", "Build a one-page exit-ticket randomizer.\nI paste my questions, one per line. A big button shows one at random, with no repeats until every question has come up.\nBig enough to read on a projector, with a full-screen button.\n" + RULES],
    ["Rubric check", "Build a one-page checklist students use to check a draft against my rubric before they turn it in.\nEach criterion is a checkbox with one line on what it looks like. When everything is checked, show “Ready to turn in.” Nothing is saved or sent.\n" + RULES + "\nMy rubric:\n[paste your criteria]"],
    ["Slider simulation", "Build a one-page simulation that shows [concept] in [subject].\nGive it sliders for [first variable] and [second variable], and a picture or chart that changes as they move, with one sentence saying what changed and why.\n" + RULES],
    ["Your own idea", D.prompt],
    ["A sheet you keep (Apps Script)", "I have a Google Sheet called [name] with these columns: [column names].\nWrite a Google Apps Script web app that shows it as [a board grouped by week / a sign-up list / a duty schedule].\nGive me two files, Code.gs and Index.html, and step-by-step instructions: where to paste each one under Extensions → Apps Script, and how to deploy it as a web app that only people in my school can open.\nDon’t ask me to paste any real data."],
    ["Change an HTML file", "Here is an HTML file. Keep everything that works, and change it so [your change].\nGive me the whole file back, ready to open.\n[paste the HTML]"]
  ];
  D.PROMPTS = PROMPTS;

  add(9, 1,
    '<p class="big huge">One small tool. Built in&nbsp;Gemini.</p>' +
    '<p class="kicker-line" data-step="1">Everyone builds at once. You’ll leave with a link that works on your phone.</p>');
  add(9, 0,
    '<div class="practical"><h2>Five steps</h2><p class="sub">Use a Google account, school or personal.</p><ol class="big-steps">' +
    "<li>Go to " + link("https://gemini.google.com") + " and sign in.</li>" +
    "<li>In the prompt bar, choose " + ui("Canvas") + ". It may sit under " + ui("Tools") + " or the " + ui("+") + " menu.</li>" +
    "<li>Pick a prompt on the next slide. Copy it, fill in the brackets, and send it.</li>" +
    "<li>Try it in the preview, like a student would. Ask for one change: “Make the buttons bigger.”</li>" +
    "<li>Choose " + ui("Share") + ", copy the link, and open it on your phone.</li></ol>" +
    '<p class="note">A shared link is a snapshot: after you change it, share again. Anyone with the link can open it, so keep student information out. If your school has turned sharing off, a personal account works for practice. On a school account you may also see ' + ui("Share to Classroom") + ".</p></div>",
    { scroll: true, id: "gemini" });
  add(9, 0,
    '<div class="practical wide"><h2>Pick a prompt</h2><p class="sub">Copy one, fill in the brackets, paste it into Gemini with Canvas on.</p><div class="prompt-menu">' +
    PROMPTS.map(function (p) { return "<section><h3>" + p[0] + "</h3>" + box(p[1]) + "</section>"; }).join("") +
    '</div><p class="note">The Apps Script prompt gets you the code; the tool runs in your sheet. Paste and deploy it as on the <a href="#keep-it">Keep it protected</a> slides.</p></div>',
    { scroll: true, id: "prompts" });
  add(9, 0,
    '<div class="practical"><h2>Swap</h2><ol class="big-steps">' +
    "<li>Send your link to a neighbor. Open theirs.</li>" +
    "<li>Use it like a student. Try to break it.</li>" +
    "<li>Tell them one thing that would make it work in a real class.</li>" +
    "<li>They type that fix in, in one sentence, watch it change, and share again.</li></ol></div>", { scroll: true });
  add(9, 1,
    '<p class="big">You just did what we ask students to do: try something, get feedback, revise.</p>' +
    '<p class="big soft" data-step="1">Build first. Then revise.</p>');

  /* 10 · Keep building */
  add(10, 1,
    '<p class="big huge">Start small. It lives with&nbsp;you.</p>' +
    '<p class="kicker-line" data-step="1">One annoyance. One prompt. One colleague to test it. Then revise it next month, and the month after that.</p>');
  var mine = [["tracker", "The counseling tracker"], ["screenplay", "The screenplay tool"], ["reader", "The reader"]]
    .filter(function (t) { return D.SITES[t[0]]; })
    .map(function (t) { return "<li>" + link(D.SITES[t[0]], t[1]) + "</li>"; }).join("");
  add(10, 0,
    '<div class="practical"><h2>Everything in one place</h2><h3>Build</h3><ul class="linklist">' +
    "<li>" + link("https://gemini.google.com", "Google Gemini (Canvas)") + "</li>" +
    "<li>" + link("https://aistudio.google.com", "Google AI Studio") + "</li>" +
    "<li>" + link("https://chatgpt.com/features/sites/", "ChatGPT Sites") + "</li>" +
    "<li>" + link("https://script.google.com", "Google Apps Script") + "</li>" +
    "<li>" + link("https://developers.google.com/apps-script/guides/web", "Apps Script web apps, Google’s guide") + "</li>" +
    "<li>" + link("https://github.com", "GitHub") + "</li><li>" + link("https://vercel.com", "Vercel") + "</li></ul>" +
    '<h3>In this deck</h3><ul class="linklist"><li><a href="#prompts">All the workshop prompts</a></li><li><a href="#start">Before you start: accounts and words</a></li>' +
    '<li><a href="#own-it">Own it</a></li><li><a href="#ship-it">Ship it fast</a></li><li><a href="#keep-it">Keep it protected</a></li></ul>' +
    (mine ? '<h3>What I built</h3><ul class="linklist">' + mine + "</ul>" : "") +
    '<h3>Keep in touch</h3><p>David Tran, AI Learning and Teaching Specialist, Gulliver Prep, Miami, FL<br>' + link("https://www.linkedin.com/in/david-t-04864734", "Connect with me on LinkedIn") + "</p></div>",
    { scroll: true });
})();
