/* Final presentation chapters: recap answers, open resources and contact.
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

  /* Slide 25 — a single public front door to code, demos, prompts and the guide. */
  add(8,0,
    '<div class="closing-resources">' +
    '<div class="closing-resources-copy">' +
    '<p class="arch-eyebrow">EVERYTHING FROM THE SESSION</p>' +
    '<h2>Take what you need.</h2>' +
    '<p class="closing-lede">The examples, the prompts, and the code. Use them, change them, and share them for educational and noncommercial purposes.</p>' +
    '<div class="closing-resource-items">' +
    '<div><strong>Build</strong><span>The classroom prompt workbench</span></div>' +
    '<div><strong>Try</strong><span>Working tools, including the particle HUD</span></div>' +
    '<div><strong>Keep</strong><span>Downloadable HTML and a practical guide</span></div>' +
    '</div>' +
    '<a class="closing-primary-link" href="resources.html" target="_blank" rel="noopener">Open all resources <span aria-hidden="true">↗</span></a>' +
    '</div><div class="closing-resources-qr">' +
    '<div data-resource-qr aria-label="QR code to the free resource page"></div>' +
    '<p>fcis2026.vercel.app/resources.html</p></div>' +
    '</div>', {id:"resources"});

  /* Slide 26 — contact: intentionally sparse, no unverified email. */
  add(8,0,
    '<div class="closing-contact">' +
    '<p class="arch-eyebrow">KEEP IN TOUCH</p>' +
    '<h2>Keep building.</h2>' +
    '<div class="closing-contact-bottom">' +
    '<div><h3>David Tran</h3><p>Gulliver Prep · Miami, Florida</p>' +
    '<a href="https://www.linkedin.com/in/david-t-04864734" target="_blank" rel="noopener">Connect on LinkedIn <span aria-hidden="true">↗</span></a></div>' +
    '<div class="closing-contact-resources"><p>Everything from today is yours to explore.</p>' +
    '<a href="resources.html" target="_blank" rel="noopener">Resources and code ↗</a></div>' +
    '</div></div>', {id:"contact"});
})();