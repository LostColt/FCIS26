/* Final presentation chapter: three quiet closing slides and public take-home resources.
   Slide 22 remains in steps.js and opens the prompt workbench. */
(function () {
  var D=window.DECK;
  function add(ch,steps,html,opts){D.add(ch,steps,html,opts);}
  D.insertSteps(add);

  /* 23 — recap: the work, rather than a catalog of products. */
  add(7,0,
    '<div class="closing-recap">' +
    '<p class="arch-eyebrow">WHAT WE DID / WHAT COMES NEXT</p>' +
    '<h2>Start with something you need.</h2>' +
    '<div class="closing-three">' +
    '<section><span>01</span><h3>Notice</h3><p>What isn\'t working?</p></section>' +
    '<section><span>02</span><h3>Build</h3><p>Describe it. Make a first version.</p></section>' +
    '<section><span>03</span><h3>Revise</h3><p>Try it. Ask for a change.</p></section>' +
    '</div><p class="closing-note">A useful tool doesn\'t have to begin as a subscription.</p>' +
    '</div>', {id:"recap"});

  /* 24 — a single public front door to code, demos, prompts and the guide. */
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

  /* 25 — contact: intentionally sparse, no unverified email. */
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