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
    { title: "Update your software", word: "revise" },
    { title: "Three ways in", word: "paths" },
    { title: "Before you build", word: "care" },
    { title: "Your turn", word: "your turn" },
    { title: "Keep building", word: "keep" }
  ];

  function add(ch, steps, html, opts) {
    D.slides.push({ ch: ch, steps: steps, html: html, scroll: !!(opts && opts.scroll), center: !!(opts && opts.center), id: opts && opts.id });
  }
  D.add = add;

  /* A slide with a live, clickable mockup inside it. On phones it shows a picture that opens the mockup. */
  D.live = function (slug, title, line) {
    return '<div class="live"><div class="live-head"><div><h2>' + title + '</h2><p class="sub">' + line + '</p></div>' +
      '<a class="live-open" href="demos/' + slug + '/index.html" target="_blank" rel="noopener">Open full screen</a></div>' +
      '<div class="live-frame" data-src="demos/' + slug + '/index.html" data-title="' + title + '">' +
      '<img class="live-thumb" src="demos/' + slug + '/thumb.png" alt="' + title + ' mockup"></div></div>';
  };

  /* 0 · Cover */
  add(0, 1,
    '<div class="cover"><div>' +
    '<h1 class="cover-title"><span class="line"><span class="strike" data-at="1">Stop subscribing.</span></span><span class="line">Start building.</span></h1>' +
    '<p class="cover-lede">How I started making the tools I needed, and what it taught me about teaching.</p>' +
    '<p class="cover-by">David Tran, AI Learning and Teaching Specialist, Gulliver Prep, Miami, FL. FCIS.</p>' +
    '<p class="cover-hint">Swipe, or use the arrow keys.</p>' +
    '</div><figure class="cover-qr"><div data-qr></div><figcaption>Scan to follow along, and keep it.</figcaption></figure></div>');

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
    "</ul>", { center: true });
  add(1, 0, '<div class="practical"><div data-figure="tally"></div></div>', { scroll: true });

  /* 2 · 150 students */
  /* The story first; what I had to track lands on its own */
  add(2, 0,
    '<div class="two"><div class="story">' +
    "<p>I was working in college counseling as a college essay writing coach.</p>" +
    "<p>I needed to track my notes, track appointments, track revisions, and prepare for back-to-back meetings.</p>" +
    '</div><ul class="juggle arrive" aria-label="What I had to keep track of">' +
    '<li style="--i:0">Notes<small>for every student</small></li>' +
    '<li style="--i:1">Appointments<small>back to back</small></li>' +
    '<li style="--i:2">Revisions<small>draft after draft</small></li>' +
    '<li style="--i:3">Meeting prep<small>before each one</small></li>' +
    "</ul></div>");
  /* Then the numbers */
  add(2, 1,
    '<div class="stats">' +
    '<p><span class="stat-num"><span data-count="150">150</span></span><span class="stat-label">students</span></p>' +
    '<p><span class="stat-num"><span data-count="800">800</span>+</span><span class="stat-label">essays</span></p>' +
    '<p><span class="stat-num">10–12</span><span class="stat-label">meetings a day</span></p>' +
    '</div><p class="kicker-line" data-step="1">So I looked into apps.</p>');

  /* 3 · The real cost */
  add(3, 1,
    '<p class="big mid">Another subscription meant another system to learn.</p>' +
    '<p class="big mid" data-step="1">The real cost isn’t only the money. It’s <span class="mark" data-at="1">adaptation</span>.</p>');
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
  /* One press and the whole chain fans out */
  add(4, 1,
    '<p class="big" style="font-size:clamp(1.9rem,3.6vw,3.2rem)">One thing led to the next.</p>' +
    '<ol class="steps fan" aria-label="How one build led to the next">' +
    '<li data-step="1" style="--i:0"><div class="sketch off" aria-hidden="true"><i class="dark"></i><i></i><i class="short"></i></div><h3>A slide deck</h3><p>I wanted to embed it in a website. It didn’t look right.</p></li>' +
    '<li data-step="1" style="--i:1"><div class="sketch" aria-hidden="true"><i class="dark"></i><i class="blue"></i><i></i></div><h3>A slide I could embed</h3><p>So I had it build one.</p></li>' +
    '<li data-step="1" style="--i:2"><div class="sketch" aria-hidden="true"><i class="dark"></i><i></i><i></i><i class="short"></i><i class="blue"></i></div><h3>A website</h3><p>Then I had it build a website.</p></li>' +
    '<li data-step="1" style="--i:3"><div class="sketch" aria-hidden="true"><i class="dark"></i><div class="bars"><b style="height:40%"></b><b style="height:75%"></b><b style="height:55%"></b><b style="height:90%"></b></div></div><h3>A dashboard</h3><p>Then a dashboard, so I could track things.</p></li>' +
    "</ol>");
  /* "Could you build:" and the apps arrive like texts */
  var asks = [
    ["Notion?", 4, 6, -2, 0], ["Padlet?", 52, 2, 1.5, 1], ["Trello?", 30, 30, -1, 0],
    ["Kahoot?", 70, 26, 2, 1], ["Quizlet?", 8, 52, 1, 1], ["Nearpod?", 46, 56, -1.5, 0],
    ["Gimkit?", 76, 62, 1, 0], ["Blooket?", 22, 78, -2, 1], ["Screencastify?", 56, 84, 1.5, 0]
  ];
  add(4, 0,
    '<div class="texts"><p class="big">Could you build:</p><ul class="bubbles" aria-label="Tools I asked it to build">' +
    asks.map(function (a, k) {
      return '<li class="' + (a[4] ? "me" : "") + '" style="--i:' + k + ";--x:" + a[1] + "%;--y:" + a[2] + "%;--r:" + a[3] + 'deg">' + a[0] + "</li>";
    }).join("") + "</ul></div>");
  add(4, 1,
    '<p class="big huge">Do I have to pay <span class="mark" data-at="1">anymore?</span></p>' +
    '<p class="kicker-line" data-step="1">I started asking it to build the tools I was already using. And the information was stored locally.</p>');
  add(4, 0, D.live("counseling-tracker", "What I built: a counseling tracker", "Notes, appointments, revisions, and a prep card for the next meeting. Click around; it’s live."), { id: "tracker" });
  add(4, 0, D.live("screenplay", "A screenplay tool", "It turns natural writing into screenplay format."), { id: "screenplay" });

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
    '</div><p class="big" data-step="1" style="font-size:clamp(1.8rem,3.4vw,3rem)">Start from what one learner does well, and build around it.</p></div>');
  add(6, 0, D.live("audio-reader", "The reader", "Paste text and hear it read aloud, line by line. This one really works."), { id: "reader" });
})();
