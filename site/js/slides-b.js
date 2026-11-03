/* Slides for chapters 6–9. Words come from content/story.md; change them there first.
   Loads after steps.js, which provides D.promptBox, D.ui, D.arrow and D.link. */

(function () {
  var D = window.DECK;
  function add(ch, steps, html, opts) { D.add(ch, steps, html, opts); }
  var ui = D.ui, arrow = D.arrow, link = D.link, box = D.promptBox;

  /* 6 · Build it: the invitation, the shape, three ways, the dashboard (steps.js) */
  D.insertSteps(add);

  /* 7 · Before you build: for you, and for your school */
  add(7, 0,
    '<div class="practical wide care-slide"><p class="big" style="font-size:clamp(2rem,4.4vw,3.8rem);max-width:none">Build boldly. Not <span class="strike auto">carelessly</span>.</p>' +
    '<div class="care"><section><h3>For you</h3><ul class="checklist">' +
    "<li>No student names, grades or work in a prompt or an app unless your school has approved the tool.</li>" +
    "<li>Check the content yourself. AI-built tools can be confidently wrong.</li>" +
    "<li>Name an owner. Who fixes it in June? If nobody, keep it small.</li>" +
    "<li>Leave your gradebook and LMS where they are. Build the small things around them.</li>" +
    '</ul></section><section><h3>For your school</h3><p class="care-lede">A paid, school-managed account lets the school see the data, review it, and decide together.</p><ol class="questions">' +
    "<li>Who owns the account?</li><li>Where does the data live?</li><li>Who reviews it?</li><li>How do we decide what we keep?</li>" +
    "</ol></section></div></div>", { scroll: true });

  /* 8 · Your turn: everyone builds in Gemini, from a ready prompt, and leaves with a link */
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

  add(8, 1,
    '<p class="big huge">One small tool. Built in&nbsp;Gemini.</p>' +
    '<p class="kicker-line" data-step="1">Everyone builds at once. You’ll leave with a link that works on your phone.</p>');
  add(8, 0,
    '<div class="practical"><h2>Five steps</h2><p class="sub">Use a Google account, school or personal.</p><ol class="big-steps">' +
    "<li>Go to " + link("https://gemini.google.com") + " and sign in.</li>" +
    "<li>In the prompt bar, choose " + ui("Canvas") + ". It may sit under " + ui("Tools") + " or the " + ui("+") + " menu.</li>" +
    "<li>Pick a prompt on the next slide. Copy it, fill in the brackets, and send it.</li>" +
    "<li>Try it in the preview, like a student would. Ask for one change: “Make the buttons bigger.”</li>" +
    "<li>Choose " + ui("Share") + ", copy the link, and open it on your phone.</li></ol>" +
    '<p class="slide-note"><b>A shared link is a snapshot: after you change it, share again.</b> Anyone with the link can open it, so keep student information out.</p>' +
    '<p class="slide-note">If Gemini or sharing is blocked on your school account, use a personal account, or pair up with a neighbor who can. On a school account you may also see ' + ui("Share to Classroom") + ".</p></div>",
    { scroll: true, id: "gemini" });
  /* Four on the slide so it fits one screen; all seven are in the guide (#prompts). */
  var FEATURED = [0, 1, 2, 4].map(function (i) { return PROMPTS[i]; });
  add(8, 0,
    '<div class="practical wide"><h2>Pick a prompt</h2><p class="sub">Copy one, fill in the brackets, paste it into Gemini with Canvas on.</p><div class="prompt-menu">' +
    FEATURED.map(function (p) { return "<section><h3>" + p[0] + "</h3>" + box(p[1]) + "</section>"; }).join("") +
    '</div><p class="slide-note">Three more are in <a href="guide.html#prompts" target="_blank" rel="noopener">the guide</a>: a slider simulation, a sheet you keep (Apps Script), and changing an HTML file.</p></div>',
    { scroll: true, id: "prompts" });
  add(8, 0,
    '<div class="practical swap"><h2>Swap</h2><ol class="big-steps">' +
    "<li>Send your link to a neighbor. Open theirs.</li>" +
    "<li>Use it like a student. Try to break it.</li>" +
    "<li>Tell them one thing that would make it work in a real class.</li>" +
    "<li>They type that fix in, in one sentence, watch it change, and share again.</li></ol></div>", { scroll: true });
  add(8, 1,
    '<p class="big">You just did what we ask students to do: try something, get feedback, revise.</p>' +
    '<p class="big soft" data-step="1">Build first. Then revise.</p>');

  /* 9 · Keep building */
  add(9, 1,
    '<p class="big huge">Start small. It lives with&nbsp;you.</p>' +
    '<p class="kicker-line" data-step="1">One annoyance. One prompt. One colleague to test it. Then revise it next month, and the month after that.</p>');
  var mine = [["tracker", "The counseling tracker"], ["screenplay", "The screenplay tool"], ["reader", "The reader"]]
    .filter(function (t) { return D.SITES[t[0]]; })
    .map(function (t) { return "<li>" + link(D.SITES[t[0]], t[1]) + "</li>"; }).join("");
  add(9, 0,
    '<div class="practical wide"><h2>Everything in one place</h2><div class="place-grid"><section><h3>Build</h3><ul class="linklist">' +
    "<li>" + link("https://gemini.google.com", "Google Gemini (Canvas)") + "</li>" +
    "<li>" + link("https://aistudio.google.com", "Google AI Studio") + "</li>" +
    "<li>" + link("https://chatgpt.com/features/sites/", "ChatGPT Sites") + "</li>" +
    "<li>" + link("https://script.google.com", "Google Apps Script") + "</li>" +
    "<li>" + link("https://developers.google.com/apps-script/guides/web", "Apps Script web apps, Google’s guide") + "</li>" +
    "<li>" + link("https://github.com", "GitHub") + "</li><li>" + link("https://vercel.com", "Vercel") + "</li></ul></section>" +
    '<section><h3>The guide</h3><ul class="linklist"><li><a href="guide.html" target="_blank" rel="noopener">Build it: the guide</a></li><li><a href="guide.html#chatgpt" target="_blank" rel="noopener">All in ChatGPT</a></li>' +
    '<li><a href="guide.html#google" target="_blank" rel="noopener">Inside Google Workspace</a></li><li><a href="guide.html#own-it" target="_blank" rel="noopener">Own it end to end</a></li><li><a href="guide.html#prompts" target="_blank" rel="noopener">All seven prompts</a></li></ul></section>' +
    '<section><h3>The tools from the talk</h3><ul class="linklist"><li><a href="demos/tracker.html" target="_blank" rel="noopener">Meeting tracker</a></li><li><a href="demos/screenplay.html" target="_blank" rel="noopener">Script Room</a></li>' +
    '<li><a href="demos/reader.html" target="_blank" rel="noopener">Reader</a></li><li><a href="demos/dashboard.html" target="_blank" rel="noopener">Assessment Calendar</a></li></ul>' +
    (mine ? '<h3>What I built</h3><ul class="linklist">' + mine + "</ul>" : "") + "</section>" +
    '<section><h3>Keep in touch</h3><p>David Tran<br>AI Learning and Teaching Specialist<br>Gulliver Prep, Miami, FL</p><p>' + link("https://www.linkedin.com/in/david-t-04864734", "Connect with me on LinkedIn") + "</p></section></div></div>",
    { scroll: true });
})();
