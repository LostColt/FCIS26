/* Slides for chapters 0–6. Words come from content/story.md; change them there first.
   data-step="n": hidden until the nth press on that slide.
   data-at="n": visible, but its red pen or highlighter only moves on the nth press. */

(function () {
  var D = (window.DECK = { chapters: [], slides: [] });

  D.chapters = [
    { title: "Stop subscribing, start building", word: "build" },
    { title: "The pile", word: "pile" },
    { title: "150 students", word: "150" },
    { title: "The real cost", word: "cost" },
    { title: "So I had it build it", word: "build it" },
    { title: "Why I kept building", word: "present" },
    { title: "Building for someone else", word: "others" },
    { title: "Build small", word: "small" },
    { title: "Update your software", word: "revise" },
    { title: "Three ways in", word: "paths" },
    { title: "Before you build", word: "care" },
    { title: "Your turn", word: "your turn" },
    { title: "Keep building", word: "keep" }
  ];

  function add(ch, steps, html, opts) {
    D.slides.push({ ch: ch, steps: steps, html: html, scroll: !!(opts && opts.scroll) });
  }

  /* 0 · Cover */
  add(0, 1,
    '<h1 class="cover-title"><span class="line"><span class="strike" data-at="1">Stop subscribing.</span></span><span class="line">Start building.</span></h1>' +
    '<p class="cover-lede">How I started making the tools I needed, and what it taught me about teaching.</p>' +
    '<p class="cover-by">David Tran, Gulliver Prep, Miami, FL. FCIS, [DAVID: date].</p>' +
    '<p class="cover-hint">Swipe, or use the arrow keys.</p>');

  /* 1 · The pile */
  add(1, 0, '<p class="big">After COVID, the classroom didn’t snap back like a rubber band.</p>');
  add(1, 0,
    '<div class="two"><div class="story">' +
    "<p>We all became edtech. Zoom, Teams, Google Classroom, several apps linked together. eLearning days. Virtual school. We accommodated.</p>" +
    "<p>And when we came back, we didn’t go back to pencil and paper. We stayed electronic.</p>" +
    '</div><ul class="pile" aria-label="What we linked together">' +
    '<li style="--i:0;--r:-2deg">Zoom</li><li style="--i:1;--r:1.5deg;--x:2rem">Teams</li>' +
    '<li style="--i:2;--r:-1deg;--x:0.8rem">Google Classroom</li><li style="--i:3;--r:2deg;--x:3rem">Several apps, linked together</li>' +
    '<li style="--i:4;--r:-1.5deg;--x:1.2rem">eLearning days</li><li style="--i:5;--r:1deg;--x:2.4rem">Virtual school</li>' +
    "</ul></div>");
  add(1, 1,
    '<p class="big"><span class="strike" data-at="1">Supply costs</span> became <span class="mark" data-at="1">subscription costs</span>.</p>' +
    '<ul class="ledger" data-step="1" aria-label="What we pay for now">' +
    '<li class="old"><span class="strike on">Paper</span></li><li class="old"><span class="strike on">Pencils</span></li><li class="old"><span class="strike on">Markers</span></li>' +
    '<li><span class="mark on">Per month</span></li><li><span class="mark on">Per seat</span></li><li><span class="mark on">Per year</span></li>' +
    "</ul>");
  add(1, 0, '<div class="practical"><div data-figure="tally"></div></div>', { scroll: true });

  /* 2 · 150 students */
  add(2, 0,
    '<p class="count-up" data-count="150">150</p>' +
    '<p class="count-sub">students. Back-to-back meetings.</p>');
  add(2, 4,
    '<div class="two"><div class="story">' +
    "<p>I was working in college counseling as a college essay writing coach. I had over 150 students.</p>" +
    "<p>I needed to track my notes, track appointments, track revisions, and prepare for back-to-back meetings.</p>" +
    '<p data-step="4">So I looked into apps.</p>' +
    '</div><ul class="juggle" aria-label="What I had to keep track of">' +
    '<li data-step="1">Notes<small>for every student</small></li>' +
    '<li data-step="2">Appointments<small>back to back</small></li>' +
    '<li data-step="3">Revisions<small>draft after draft</small></li>' +
    '<li data-step="4">Meeting prep<small>before each one</small></li>' +
    "</ul></div>");

  /* 3 · The real cost */
  add(3, 0, '<p class="big">Another subscription meant another system to learn.</p>');
  add(3, 1,
    '<p class="big">The real cost isn’t only the money.</p>' +
    '<p class="big" data-step="1">It’s <span class="mark">adaptation</span>.</p>');
  add(3, 1,
    '<div class="two"><div class="story">' +
    "<p>Every app meant another subscription. But more than that, it meant I had to learn how to use it, and adapt to another system. I’d be working the way the tool wanted, not the way I work.</p>" +
    '<p data-step="1">And students pay that cost too. It’s hard having students log into yet another app.</p>' +
    '</div><div class="compare">' +
    "<section><h3>What it costs me</h3><ul><li>Another subscription</li><li>Learning how to use it</li><li>Adapting to another system</li></ul></section>" +
    '<section data-step="1"><h3>What it costs students</h3><ul><li>Another login</li><li>Another interface</li><li>Another set of rules before the learning starts</li></ul></section>' +
    "</div></div>");

  /* 4 · So I had it build it */
  add(4, 0, '<p class="big huge">So I had it build&nbsp;it.</p>');
  add(4, 4,
    '<p class="big" style="font-size:clamp(1.9rem,3.6vw,3.2rem)">One thing led to the next.</p>' +
    '<ol class="steps" aria-label="How one build led to the next">' +
    '<li data-step="1"><div class="sketch off" aria-hidden="true"><i class="dark"></i><i></i><i class="short"></i></div><h3>A slide deck</h3><p>I wanted to embed it in a website. It didn’t look right.</p></li>' +
    '<li data-step="2"><div class="sketch" aria-hidden="true"><i class="dark"></i><i class="blue"></i><i></i></div><h3>A slide I could embed</h3><p>So I had it build one.</p></li>' +
    '<li data-step="3"><div class="sketch" aria-hidden="true"><i class="dark"></i><i></i><i></i><i class="short"></i><i class="blue"></i></div><h3>A website</h3><p>Then I had it build a website.</p></li>' +
    '<li data-step="4"><div class="sketch" aria-hidden="true"><i class="dark"></i><div class="bars"><b style="height:40%"></b><b style="height:75%"></b><b style="height:55%"></b><b style="height:90%"></b></div></div><h3>A dashboard</h3><p>Then a dashboard, so I could track things.</p></li>' +
    "</ol>");
  add(4, 2,
    '<p class="big">Could you build Notion?</p>' +
    '<p class="big" data-step="1">Could you build Padlet?</p>' +
    '<p class="big" data-step="2">Could you build Trello?</p>');
  add(4, 1,
    '<p class="big huge">Do I have to pay <span class="mark" data-at="1">anymore?</span></p>' +
    '<p class="kicker-line" data-step="1">I started asking it to build the tools I was already using. And the information was stored locally.</p>' +
    '<p class="cover-hint" data-step="1">[DAVID: decide whether to add: “I still pay for one AI tool. But instead of paying for a dozen tools that each do one thing, I pay for one that builds the specific ones I need.”]</p>');
  add(4, 0,
    '<div class="practical"><h2>What I built</h2>' +
    '<p class="sub">Click around in mockups of my tools. They run in your browser with mock data; nothing connects to the real ones.</p>' +
    '<div class="mockups">' +
    '<a class="mockup-link" href="demos/counseling-tracker/index.html"><strong>Counseling tracker</strong><span>Notes, appointments, revisions.</span></a>' +
    '<a class="mockup-link" href="demos/dashboard/index.html"><strong>Dashboard</strong><span>So I could track things.</span></a>' +
    '<a class="mockup-link" href="demos/screenplay/index.html"><strong>Screenplay tool</strong><span>Turns my natural writing into screenplay format.</span></a>' +
    '</div><p class="note">The slide and the website: [DAVID: screenshot]</p></div>', { scroll: true });

  /* 5 · Why I kept building */
  add(5, 2,
    '<p class="big huge">Faster.</p>' +
    '<p class="big huge" data-step="1">In my system.</p>' +
    '<p class="big huge" data-step="2">So I could be more <span class="mark" data-at="2">present</span>.</p>');
  add(5, 1,
    '<div class="story" style="max-width:40rem">' +
    "<p>The aim was to work faster and build presentations faster. But more than that, it was about being more present. If I built things faster, and in my own system, I’d have more time to work with students.</p>" +
    '<p data-step="1">Building apps is really about building a workflow: creating repetition, not just in how I do things, but in how students receive the information.</p>' +
    "</div>");

  /* 6 · Building for someone else */
  add(6, 0, '<p class="big">Building can also mean building <span class="mark auto">for others</span>.</p>');
  add(6, 1,
    '<div class="two"><div class="story">' +
    "<p>I built a PDF reader. You could upload a document or paste text and it would read it aloud.</p>" +
    "<p>It wasn’t for me. It was for a student who was better with audio than with reading. Not even my student; a friend’s student.</p>" +
    '<p data-step="1">That’s when I learned building isn’t only for me.</p>' +
    '</div><div class="practical"><p class="sub">Start from what one learner does well, and build around it.</p>' +
    '<div class="mockups"><a class="mockup-link" href="demos/audio-reader/index.html"><strong>Audio reader</strong><span>Paste text and hear it read aloud.</span></a></div></div></div>');
})();
