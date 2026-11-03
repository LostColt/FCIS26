/* Slides for chapters 6–9. Words come from content/story.md; change them there first.
   Loads after steps.js, which provides D.promptBox, D.ui, D.arrow and D.link. */

(function () {
  var D = window.DECK;
  function add(ch, steps, html, opts) { D.add(ch, steps, html, opts); }
  var ui = D.ui, arrow = D.arrow, link = D.link, box = D.promptBox;

  /* 6 · Build it: orientation, Gemini walkthrough, Sheets extension and other routes (steps.js) */
  D.insertSteps(add);

  /* 7 · Before you build: for you, and for your school */
  add(7, 0,
    '<div class="practical wide care-slide"><p class="big" style="font-size:clamp(2rem,4.4vw,3.8rem);max-width:none">Build boldly. Not <span class="strike auto">carelessly</span>.</p>' +
    '<div class="care"><section><h3>For you</h3><ul class="checklist">' +
    "<li>No student names, grades or work in a prompt or an app unless your school has approved the tool.</li>" +
    "<li>Check the content yourself. AI-built tools can be confidently wrong.</li>" +
    "<li>Name an owner. Who fixes it in June? If nobody, keep it small.</li>" +
    "<li>Leave your gradebook and LMS where they are. Build the small things around them.</li>" +
    '</ul></section><section><h3>For your school</h3><p class="care-lede">School oversight depends on the provider, plan and settings. Review them before sharing.</p><ol class="questions">' +
    "<li>Who owns the account?</li><li>Where does the data live?</li><li>Who reviews it?</li><li>How do we decide what we keep?</li>" +
    "</ol></section></div></div>", { scroll: true });

  /* 8 · Your turn: four fast starting points; the take-home library has twenty. */
  var RULES = "Large, readable text. Works on a phone and a Chromebook.\nNo login, no AI or API calls, and no student data collection.";
  var PROMPTS = [
    ["Flashcards", "Build a one-page flashcard app for [unit] vocabulary.\nShow the word; tap to flip to the definition. Add Shuffle and Next buttons.\n" + RULES + "\nStart with these words, one per line, as word – definition:\n[your words]"],
    ["Exit-ticket randomizer", "Build a one-page exit-ticket randomizer.\nI paste my questions, one per line. A big button shows one at random, with no repeats until every question has come up.\nBig enough to read on a projector, with a full-screen button.\n" + RULES],
    ["Rubric check", "Build a one-page checklist students use to check a draft against my rubric before they turn it in.\nEach criterion is a checkbox with one line on what it looks like. When everything is checked, show Ready to turn in. Nothing is saved or sent.\n" + RULES + "\nMy rubric:\n[paste your criteria]"],
    ["Your own idea", D.prompt]
  ];
  D.PROMPTS = PROMPTS;

  add(8, 0,
    '<div class="practical wide"><h2>Pick a prompt</h2><p class="sub">Choose one to try. <a href="prompt-library.html" target="_blank" rel="noopener">20 more by grade and subject</a>, including reading supports.</p><div class="prompt-menu">' +
    PROMPTS.map(function (p) { return "<section><h3>" + p[0] + "</h3>" + box(p[1]) + "</section>"; }).join("") +
    '</div><p class="slide-note">Make one change, then try it again. <a href="guide.html#gemini" target="_blank" rel="noopener">Steps</a></p></div>',
    { scroll: true, id: "prompts" });

  add(8, 0,
    '<div class="practical swap"><h2>Try it with a colleague</h2><ol class="big-steps">' +
    '<li>Choose a prompt or open the <a href="demos/reader.html" target="_blank" rel="noopener">sample Reader</a>.</li>' +
    '<li>Use the tool as a student would.</li>' +
    '<li>Tell a neighbor one thing you would change.</li>' +
    '<li>Ask the builder for that change, then test it again.</li></ol>' +
    '<p class="slide-note">If access is blocked, try the sample together. Nobody has to publish a tool today.</p></div>', { scroll: true, id: "swap" });

  add(8, 1,
    '<p class="big">You just did what we ask students to do: try something, get feedback, revise.</p>' +
    '<p class="big soft" data-step="1">Build first. Then revise.</p>');

  /* 9 · Keep building */
  add(9, 1,
    '<p class="big huge">Start small. Keep changing it.</p>' +
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
    '<li><a href="guide.html#sheets" target="_blank" rel="noopener">Inside Google Workspace</a></li><li><a href="guide.html#advanced" target="_blank" rel="noopener">Own it end to end</a></li><li><a href="prompt-library.html" target="_blank" rel="noopener">Classroom prompts by grade and subject</a></li></ul></section>' +
    '<section><h3>The tools from the talk</h3><ul class="linklist"><li><a href="demos/tracker.html" target="_blank" rel="noopener">Meeting tracker</a></li><li><a href="demos/screenplay.html" target="_blank" rel="noopener">Script Room</a></li>' +
    '<li><a href="demos/reader.html" target="_blank" rel="noopener">Reader</a></li><li><a href="demos/dashboard.html" target="_blank" rel="noopener">Assessment Calendar</a></li></ul>' +
    (mine ? '<h3>What I built</h3><ul class="linklist">' + mine + "</ul>" : "") + "</section>" +
    '<section><h3>Keep in touch</h3><p>David Tran<br>AI Learning and Teaching Specialist<br>Gulliver Prep, Miami, FL</p><p>' + link("https://www.linkedin.com/in/david-t-04864734", "Connect with me on LinkedIn") + "</p></section></div></div>",
    { scroll: true });
})();
