/* Slides for chapters 6–9. Words come from content/story.md; change them there first.
   Loads after steps.js, which provides D.promptBox, D.ui, D.arrow and D.link. */

(function () {
  var D = window.DECK;
  function add(ch, steps, html, opts) { D.add(ch, steps, html, opts); }
  var ui = D.ui, arrow = D.arrow, link = D.link, box = D.promptBox;

  /* 6 · Build it: brief choices, one Gemini demo, Sheets and optional advanced routes (steps.js) */
  D.insertSteps(add);

  /* 7 · Before you build: for you, and for your school */
  add(7, 0,
    '<div class="practical wide"><p class="big" style="font-size:clamp(2rem,4.4vw,3.8rem);max-width:none">Build boldly. Not <span class="strike auto">carelessly</span>.</p>' +
    '<div class="care"><section><h3>For you</h3><ul class="checklist">' +
    "<li>No student names, grades or work in a prompt or an app unless your school has approved that tool for it.</li>" +
    "<li>Check the content yourself. AI-built tools can be confidently wrong.</li>" +
    "<li>Name an owner. Who fixes it in June? If nobody, keep it small.</li>" +
    "<li>Keep the systems of record (LMS, gradebook, student information system) where they are. Build the small things around them.</li>" +
    '</ul></section><section><h3>For your school</h3><p class="care-lede">A school-managed account can provide oversight, but data access and protections depend on the provider, plan and school settings. Review them before sharing.</p><ol class="questions">' +
    "<li>Who owns the account?</li><li>Where does the data live?</li><li>Who reviews it?</li><li>How do we decide what we keep?</li>" +
    "</ol></section></div></div>", { scroll: true });

  /* 8 · Your turn: examples first, one optional hands-on build, no repeated tutorial. */
  add(8, 0,
    '<div class="build-simple"><p class="said-line">What could you build for your classroom?</p>' +
    '<div class="build-paths">' +
    '<section><b>English and languages</b><span>Read-along companion</span><small>Listening, text controls and comprehension.</small></section>' +
    '<section><b>Math and science</b><span>Explore a concept</span><small>Sliders, models and immediate feedback.</small></section>' +
    '<section><b>Humanities and arts</b><span>Explore and organize</span><small>Timelines, comparisons and creative practice.</small></section>' +
    '</div><p class="build-quiet">Adapt each example for your age group and your students.</p></div>', { id: "examples" });

  add(8, 0,
    '<div class="build-simple"><p class="said-line">Pick a small thing. Build a first version.</p>' +
    '<p class="build-quiet">Choose a classroom prompt. Try the result. Ask for one change.</p>' +
    '<p class="build-actions"><a href="prompt-library.html" target="_blank" rel="noopener">Open the copyable prompt library</a></p>' +
    '<p class="build-quiet">Not building today? Open the sample Reader, try it, and decide on one change.</p>' +
    '<p class="build-actions"><a href="demos/reader.html" target="_blank" rel="noopener">Try the sample Reader</a> · <a href="guide.html#gemini" target="_blank" rel="noopener">Follow the build steps</a></p></div>', { id: "prompts" });

  add(8, 1,
    '<p class="big">Try it. Get feedback. Revise.</p>' +
    '<p class="big soft" data-step="1">Build first. Then revise.</p>');

  /* 9 · Keep building */
  add(9, 1,
    '<p class="big huge">Start small. Keep changing it.</p>' +
    '<p class="kicker-line" data-step="1">One annoyance. One prompt. One colleague to test it. Then revise it next month, and the month after that.</p>');
  var mine = [["tracker", "The counseling tracker"], ["screenplay", "The screenplay tool"], ["reader", "The reader"]]
    .filter(function (t) { return D.SITES[t[0]]; })
    .map(function (t) { return "<li>" + link(D.SITES[t[0]], t[1]) + "</li>"; }).join("");
  add(9, 0,
    '<div class="practical"><h2>Everything in one place</h2><h3>Build</h3><ul class="linklist">' +
    "<li>" + link("https://gemini.google.com", "Google Gemini (Canvas)") + "</li>" +
    "<li>" + link("https://aistudio.google.com", "Google AI Studio") + "</li>" +
    "<li>" + link("https://chatgpt.com/features/sites/", "ChatGPT Sites") + "</li>" +
    "<li>" + link("https://script.google.com", "Google Apps Script") + "</li>" +
    "<li>" + link("https://developers.google.com/apps-script/guides/web", "Apps Script web apps, Google’s guide") + "</li>" +
    "<li>" + link("https://github.com", "GitHub") + "</li><li>" + link("https://vercel.com", "Vercel") + "</li></ul>" +
    '<h3>The guide</h3><ul class="linklist"><li><a href="guide.html" target="_blank" rel="noopener">Build it: the guide</a></li><li><a href="guide.html#chatgpt" target="_blank" rel="noopener">All in ChatGPT</a></li>' +
    '<li><a href="guide.html#sheets" target="_blank" rel="noopener">Inside Google Workspace</a></li><li><a href="guide.html#advanced" target="_blank" rel="noopener">Own it end to end</a></li><li><a href="prompt-library.html" target="_blank" rel="noopener">Classroom prompts by grade and subject</a></li></ul>' +
    '<h3>The tools from the talk</h3><ul class="linklist"><li><a href="demos/tracker.html" target="_blank" rel="noopener">Meeting tracker</a></li><li><a href="demos/screenplay.html" target="_blank" rel="noopener">Script Room</a></li>' +
    '<li><a href="demos/reader.html" target="_blank" rel="noopener">Reader</a></li><li><a href="demos/dashboard.html" target="_blank" rel="noopener">Assessment Calendar</a></li></ul>' +
    (mine ? '<h3>What I built</h3><ul class="linklist">' + mine + "</ul>" : "") +
    '<h3>Keep in touch</h3><p>David Tran, AI Learning and Teaching Specialist, Gulliver Prep, Miami, FL<br>' + link("https://www.linkedin.com/in/david-t-04864734", "Connect with me on LinkedIn") + "</p></div>",
    { scroll: true });
})();
