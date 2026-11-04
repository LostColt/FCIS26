/* Final presentation chapters: recap answers and one combined resource/contact finale.
   The workshop invitation is in steps.js (now slide 23). */
(function () {
  var D=window.DECK;
  function add(ch,steps,html,opts){D.add(ch,steps,html,opts);}
  D.insertSteps(add);

  /* Slide 24: bookend to the exact three questions posed on slide 2.
     The answers are drawn from the personal story, working demos, and take-home paths. */
  add(7,0,
    '<div class="question-bookend question-bookend--answers">' +
    '<p class="arch-eyebrow">TODAY / THREE ANSWERS</p>' +
    '<h2>What did we learn?</h2>' +
    '<div class="question-bookend-grid">' +
    '<section><span class="question-bookend-number">01</span>' +
    '<h3>Why build your own tools?</h3>' +
    '<p>Because sometimes the tool you need doesn\'t exist—or doesn\'t fit the way you work.</p></section>' +
    '<section><span class="question-bookend-number">02</span>' +
    '<h3>What does building actually look like?</h3>' +
    '<p>Describe an idea. Make a first version. Test it, then ask for a change.</p></section>' +
    '<section><span class="question-bookend-number">03</span>' +
    '<h3>Where can you go from here?</h3>' +
    '<p>Start with your students. Adapt a prompt or take the code and keep building.</p></section>' +
    '</div></div>', {id:"recap"});

  /* Slide 25 — single resource handoff and contact finale. Keep the working QR,
     the direct resource link and LinkedIn; no private-repository links. */
  add(8,0,
    '<div class="closing-resources closing-resources--final">' +
    '<div class="closing-final-main">' +
    '<div class="closing-resources-copy">' +
    '<p class="arch-eyebrow">EVERYTHING FROM THE SESSION</p>' +
    '<h2>Keep building.</h2>' +
    '<p class="closing-lede">The examples, prompts, and HTML downloads are yours to explore, adapt, and use for educational and other noncommercial purposes.</p>' +
    '<div class="closing-resource-items">' +
    '<div><strong>Build</strong><span>Classroom prompt workbench</span></div>' +
    '<div><strong>Try</strong><span>Working tools, including the particle HUD</span></div>' +
    '<div><strong>Keep</strong><span>HTML downloads and companion guide</span></div>' +
    '</div>' +
    '<a class="closing-primary-link" href="resources.html" target="_blank" rel="noopener">Open all resources <span aria-hidden="true">↗</span></a>' +
    '</div><div class="closing-resources-qr">' +
    '<div data-resource-qr aria-label="QR code to the public resource page"></div>' +
    '<p>fcis2026.vercel.app/resources.html</p></div>' +
    '</div>' +
    '<footer class="closing-final-contact">' +
    '<div><strong>David Tran</strong><span>Gulliver Prep · Miami, Florida</span></div>' +
    '<a href="https://www.linkedin.com/in/david-t-04864734" target="_blank" rel="noopener">Connect on LinkedIn <span aria-hidden="true">↗</span></a>' +
    '</footer>' +
    '</div>', {id:"resources"});

})();