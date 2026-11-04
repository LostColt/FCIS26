/* Slides for chapters 6–9. Words come from content/story.md; change them there first.
   Loads after steps.js, which provides D.promptBox, D.ui, D.arrow and D.link. */

(function () {
  var D = window.DECK;
  function add(ch, steps, html, opts) { D.add(ch, steps, html, opts); }
  var ui = D.ui, arrow = D.arrow, link = D.link, box = D.promptBox;

  /* 6 · Build it: orientation, Gemini walkthrough, Sheets extension and other routes (steps.js) */
  D.insertSteps(add);

  /* The former slides 23–25 (safety checklist, prompt recap, colleague exercise)
     were removed at the presenter's request. The reflection now follows the
     slide 22 workshop invitation directly. */

  add(7, 1,
    '<p class="big">You just did what we ask students to do: try something, get feedback, revise.</p>' +
    '<p class="big soft" data-step="1">Build first. Then revise.</p>');

  /* 8 · Keep building */
  add(8, 1,
    '<p class="big huge">Start small. Keep changing it.</p>' +
    '<p class="kicker-line" data-step="1">One annoyance. One prompt. One colleague to test it. Then revise it next month, and the month after that.</p>');
  var mine = [["tracker", "The counseling tracker"], ["screenplay", "The screenplay tool"], ["reader", "The reader"]]
    .filter(function (t) { return D.SITES[t[0]]; })
    .map(function (t) { return "<li>" + link(D.SITES[t[0]], t[1]) + "</li>"; }).join("");
  add(8, 0,
    '<div class="practical wide"><h2>Everything in one place</h2><div class="place-grid"><section><h3>Build</h3><ul class="linklist">' +
    "<li>" + link("https://gemini.google.com", "Google Gemini (Canvas)") + "</li>" +
    "<li>" + link("https://aistudio.google.com", "Google AI Studio") + "</li>" +
    "<li>" + link("https://chatgpt.com/features/sites/", "ChatGPT Sites") + "</li>" +
    "<li>" + link("https://github.com", "GitHub") + "</li><li>" + link("https://vercel.com", "Vercel") + "</li></ul></section>" +
    '<section><h3>The guide</h3><ul class="linklist"><li><a href="guide.html" target="_blank" rel="noopener">Build it: the guide</a></li><li><a href="guide.html#chatgpt" target="_blank" rel="noopener">All in ChatGPT</a></li>' +
    '<li><a href="guide.html#advanced" target="_blank" rel="noopener">Own it end to end</a></li><li><a href="prompt-library.html" target="_blank" rel="noopener">Classroom prompts by grade and subject</a></li></ul></section>' +
    '<section><h3>The tools from the talk</h3><ul class="linklist"><li><a href="demos/tracker.html" target="_blank" rel="noopener">Meeting tracker</a></li><li><a href="demos/screenplay.html" target="_blank" rel="noopener">Script Room</a></li>' +
    '<li><a href="demos/reader.html" target="_blank" rel="noopener">Reader</a></li></ul>' +
    (mine ? '<h3>What I built</h3><ul class="linklist">' + mine + "</ul>" : "") + "</section>" +
    '<section><h3>Keep in touch</h3><p>David Tran<br>AI Learning and Teaching Specialist<br>Gulliver Prep, Miami, FL</p><p>' + link("https://www.linkedin.com/in/david-t-04864734", "Connect with me on LinkedIn") + "</p></section></div></div>",
    { scroll: true });
})();
