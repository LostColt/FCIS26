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
    { title: "Building for others", word: "others" },
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

  /* David's tools, built in ChatGPT Sites. Paste each link between the quotes when it's ready;
     until then the slide shows a holding spot. */
  D.SITES = {
    tracker: "",
    screenplay: "",
    reader: ""
  };

  /* A slide (or half of one) for one of David's tools: a link when there is one, a holding spot until then */
  D.site = function (key, title, line) {
    var url = D.SITES[key];
    return '<div class="site-card' + (url ? "" : " holding") + '"><h2>' + title + '</h2><p class="sub">' + line + "</p>" +
      (url
        ? '<a class="site-open" href="' + url + '" target="_blank" rel="noopener">Open it</a><p class="site-url">' + url.replace(/^https?:\/\//, "") + "</p>"
        : '<p class="site-hold">Holding spot. The link goes here once it’s built in ChatGPT Sites.</p>') +
      "</div>";
  };

  /* 0 · Cover */
  add(0, 1,
    '<div class="cover"><div>' +
    '<h1 class="cover-title"><span class="line"><span class="strike-lines" data-at="1">Stop subscribing.</span></span><span class="line">Start building.</span></h1>' +
    '<p class="cover-lede">How I started making the tools I needed, and what it taught me about teaching.</p>' +
    '<p class="cover-by">David Tran, AI Learning and Teaching Specialist, Gulliver Prep, Miami, FL. FCIS.</p>' +
    '<p class="cover-hint">Swipe, or use the arrow keys.</p>' +
    '</div><figure class="cover-qr"><div data-qr></div><figcaption>Scan to follow along, and keep it.</figcaption></figure></div>');

  /* 0 · Who I am: a short introduction, then where I've lived drawn as one line */
  var places = ["Cleveland, OH", "San Diego, CA", "Oxford, MS", "Ho Chi Minh City, Vietnam", "Bradenton, FL", "Miami, FL"];
  add(0, 0,
    '<div class="intro"><div>' +
    '<p class="intro-hi">Hi, I’m David Tran.</p>' +
    '<ul class="intro-facts">' +
    '<li style="--i:0">An educator for over 15 years.</li>' +
    '<li style="--i:1">Taught at Ole Miss. In FCIS schools since 2017.</li>' +
    '<li style="--i:2">English teacher, director, essay writing coach.</li>' +
    '<li style="--i:3">Now the AI Learning and Teaching Specialist at Gulliver Prep.</li>' +
    '<li style="--i:4">A writing teacher first: a BFA from Bowling Green State University, and an MFA in Creative Writing from Ole Miss.</li>' +
    '</ul></div>' +
    '<ol class="trail" aria-label="Where I’ve lived">' +
    places.map(function (p, k) { return '<li style="--i:' + k + '"><span>' + p + "</span></li>"; }).join("") +
    "</ol></div>", { id: "about" });

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
  /* The numbers count up, hold for two seconds, then fade back as the line lands over them. No press needed. */
  add(2, 0,
    '<div class="stats-stage auto-over"><div class="stats">' +
    '<p><span class="stat-num"><span data-count="150">150</span></span><span class="stat-label">students</span></p>' +
    '<p><span class="stat-num"><span data-count="800">800</span>+</span><span class="stat-label">essays</span></p>' +
    '<p><span class="stat-num">10–12</span><span class="stat-label">meetings a day</span></p>' +
    '</div><p class="over">So I looked into apps.</p></div>');

  /* 3 · The real cost: one slide. When it opens, the lines slide in by themselves;
     the turn to students lands centered, with their three costs in one row. */
  add(3, 0,
    '<div class="said auto-run">' +
    '<p style="--t:0.3s">Another subscription meant another system to learn.</p>' +
    '<p style="--t:2.2s">I’d be working the way the tool wanted, not the way I&nbsp;work.</p>' +
    '<p style="--t:4.4s">The real cost isn’t only the money. It’s <span class="mark auto" style="--t:5.2s">adaptation</span>.</p>' +
    '<p class="turn" style="--t:7s">And students pay that cost too.</p>' +
    '<ul class="costs centered-row" aria-label="What it costs students">' +
    '<li style="--t:8s;--r:-1.5deg">Another login</li>' +
    '<li style="--t:8.25s;--r:1deg">Another interface</li>' +
    '<li style="--t:8.5s;--r:-0.5deg">Another set of rules before the learning starts</li>' +
    "</ul></div>");

  /* 4 · So I had it build it */
  /* The question */
  add(4, 0, '<p class="big huge">Could I build&nbsp;it?</p>');
  /* The apps I was already using spread out when the slide opens;
     one press and "What about my own apps?" brings the tools any teacher could build */
  var apps = ["Notion", "Padlet", "Trello", "Kahoot!", "Quizlet", "Nearpod", "Gimkit", "Blooket", "Screencastify", "MagicSchool"];
  var tools = ["A dashboard", "A PDF reader", "A locked browser", "A screenplay writer", "A class website", "A mini LMS", "An automated newsletter", "Flashcards", "An exit-ticket randomizer", "A class timer"];
  var rot = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.5, -1, 2], drop = [0, 0.6, 0.2, 0.9, 0.1, 0.7, 0.3, 0.8, 0, 0.5];
  function cards(list, step) {
    return list.map(function (t, k) {
      return "<li" + (step ? ' data-step="1"' : "") + ' style="--i:' + k + ";--r:" + rot[k] + "deg;--y:" + drop[k] + 'rem">' + t + "</li>";
    }).join("");
  }
  add(4, 1,
    '<div class="could">' +
    '<section><h2>The apps I was already using</h2><ul class="pile-row spread" aria-label="Apps I could copy">' + cards(apps) + "</ul></section>" +
    '<section><h2 data-step="1">What about my own apps?</h2><ul class="pile-row tools" aria-label="Tools any teacher could build">' + cards(tools, true) + "</ul></section>" +
    "</div>");
  add(4, 1,
    '<p class="big huge">Do I have to pay <span class="mark" data-at="1">anymore?</span></p>' +
    '<p class="kicker-line" data-step="1">I started asking it to build the tools I was already using. And the information was stored locally.</p>');
  add(4, 0, '<div class="two sites">' +
    D.site("tracker", "What I built: a counseling tracker", "Notes, appointments, revisions, and a prep card for the next meeting.") +
    D.site("screenplay", "A screenplay tool", "Type a slash for scene, action, character or dialogue, and it formats the page.") +
    "</div>", { id: "tracker" });

  /* 5 · Why I kept building */
  add(5, 2,
    '<p class="big huge">Faster.</p>' +
    '<p class="big huge" data-step="1">In my system.</p>' +
    '<p class="big huge" data-step="2">So I could be more <span class="mark" data-at="2">present</span>.</p>');

  /* 6 · Building for others */
  add(6, 1,
    '<p class="big mid">I was building tools for myself.</p>' +
    '<p class="big mid" data-step="1">But more than that, I wanted to build <span class="mark" data-at="1">for others</span>.</p>');
  add(6, 0,
    '<div class="two"><div class="story">' +
    "<p>I built a PDF reader. You could upload a document or paste text and it would read it aloud.</p>" +
    "<p>It wasn’t for me. It was for a friend’s student, who was better with audio than with reading.</p>" +
    "</div>" + D.site("reader", "The reader", "Paste text and hear it read aloud, line by line.") + "</div>", { id: "reader" });
  add(6, 1,
    '<div class="story" style="max-width:44rem"><p>I’ve worked with students with learning differences for a long time.</p></div>' +
    '<p class="big mid" data-step="1">Truth be told, it was working with these students where I began to lean on <span class="mark" data-at="1">technology</span>.</p>');
  add(6, 2,
    '<p class="big mid">When I’m building, it’s easy to look at myself.</p>' +
    '<p class="big mid" data-step="1">But as an educator, I’m always looking to the students.</p>' +
    '<p class="big mid" data-step="2"><span class="mark" data-at="2">What can I build that helps them?</span></p>');
})();
