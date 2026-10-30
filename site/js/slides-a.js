/* Slides for chapters 0–6. Words come from content/story.md; change them there first.
   data-step="n": hidden until the nth press on that slide.
   data-at="n": visible, but its red pen or highlighter only moves on the nth press. */

(function () {
  var D = (window.DECK = { chapters: [], slides: [] });

  D.chapters = [
    { title: "Stop subscribing, start building", word: "build" },
    { title: "The shift", word: "shift" },
    { title: "150 students", word: "150" },
    { title: "The real cost", word: "cost" },
    { title: "So I had it build it", word: "build it" },
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

  /* David's two small tools, built here as lightweight single files so teachers can download them.
     When one is ready, set its file (e.g. "demos/tracker.html"); until then the card is a holding spot. */
  D.TOOLS = {
    reader: "demos/reader.html",
    tracker: "demos/tracker.html",
    screenplay: "demos/screenplay.html"
  };
  D.tool = function (key, who, title, line) {
    var f = D.TOOLS[key];
    return '<div class="tool-card' + (f ? "" : " holding") + '">' +
      '<p class="tool-who">' + who + "</p>" +
      '<div class="tool-thumb">' + (f ? '<img src="' + f.replace(/\.html$/, ".png") + '" alt="">' : "<span>Picture of the tool</span>") + "</div>" +
      "<h3>" + title + '</h3><p class="tool-line">' + line + "</p>" +
      '<div class="tool-actions">' +
      (f ? '<a class="site-open" href="' + f + '" target="_blank" rel="noopener">Open it</a><a class="tool-dl" href="' + f + '" download>Download the HTML</a><button type="button" class="tool-copy" data-copy-file="' + f + '">Copy the code</button>'
         : '<span class="site-open off">Open it</span><span class="tool-dl off">Download the HTML</span><span class="tool-copy off">Copy the code</span>') +
      "</div></div>";
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
  var places = ["Cleveland, OH", "San Diego, CA", "Ho Chi Minh, VN", "Oxford, MS", "Bradenton, FL", "Miami, FL"];
  add(0, 0,
    '<div class="intro"><div>' +
    '<p class="intro-hi">Who is David Tran?</p>' +
    '<ul class="intro-facts">' +
    '<li style="--i:0">An educator for over 15 years.</li>' +
    '<li style="--i:1">Taught at Ole Miss. In FCIS schools since 2017.</li>' +
    '<li style="--i:2">English teacher, director, essay writing coach.</li>' +
    '<li style="--i:3">Now the AI Learning and Teaching Specialist at Gulliver Prep.</li>' +
    '<li style="--i:4">A BFA in Creative Writing from Bowling Green State University, and an MFA in Creative Writing from Ole Miss.</li>' +
    '</ul></div>' +
    '<ol class="trail" aria-label="Where I’ve lived">' +
    places.map(function (p, k) { return '<li style="--i:' + k + '"><span>' + p + "</span></li>"; }).join("") +
    "</ol>" +
    '<p class="intro-first">A writing teacher first.</p></div>', { id: "about" });

  /* 1 · The shift */
  /* During COVID: the line, then a resume that fills itself in. A joke, kept to this one slide. */
  add(1, 0,
    '<div class="experts"><p class="said-line">During COVID, we were all asked to be experts.</p>' +
    '<div class="resume" aria-label="A teacher’s resume, 2020 to 2021">' +
    '<header><h3>Every Teacher</h3><p>2020–2021 · Your classroom, and everyone’s kitchen table</p></header>' +
    '<h4>Experience</h4><ul class="resume-jobs">' +
    '<li style="--i:0"><b>Website builder</b><span>Built a class site overnight.</span></li>' +
    '<li style="--i:1"><b>Curriculum designer</b><span>Rewrote every unit for a screen.</span></li>' +
    '<li style="--i:2"><b>Video producer</b><span>Recorded every lesson. Twice.</span></li>' +
    '<li style="--i:3"><b>Podcaster</b><span>Turned lessons into audio.</span></li>' +
    '<li style="--i:4"><b>Slide designer</b><span>Made every lesson a deck.</span></li>' +
    '<li style="--i:5"><b>Data analyst</b><span>Tracked how long each kid was on the screen, and who opened the assignment.</span></li>' +
    '<li style="--i:6"><b>Tech support</b><span>For every family, every evening.</span></li>' +
    '</ul><h4>Software</h4><p class="resume-skills" style="--i:7">Zoom · Microsoft Teams · Google Classroom · Schoology · Blackbaud · Veracross · Canva · Notion · Trello · Screencastify · Nearpod · Padlet · Kahoot! · Several apps, linked&nbsp;together</p>' +
    '<p class="resume-refs" style="--i:8">References available upon request.</p>' +
    "</div></div>");
  /* After: plays by itself; the red pen takes "band-aid", the highlighter takes "shift" */
  add(1, 0,
    '<div class="said auto-run">' +
    '<p style="--t:0.3s">Then COVID ended.</p>' +
    '<p style="--t:1.8s">The classroom didn’t snap back like a rubber band. We still live in the era of tech.</p>' +
    '<p class="turn shift-line" style="--t:4.2s">It wasn’t a <span class="strike-lines late">band-aid</span>. It was a <span class="mark late">shift</span>.</p>' +
    "</div>");
  /* Opens with the line and the old supplies; holds five seconds; then the red pen and highlighter
     do the rest by themselves: supplies struck, subscriptions arrive. */
  add(1, 0,
    '<div class="supplies">' +
    '<p class="big"><span class="strike t5">Supply costs</span> became <span class="mark t5">subscription costs</span>.</p>' +
    '<ul class="ledger" aria-label="What we paid for, and what we pay for now">' +
    '<li class="old"><span class="strike t5">Paper</span></li><li class="old"><span class="strike t5">Pencils</span></li><li class="old"><span class="strike t5">Markers</span></li>' +
    '<li class="new" style="--d:0s"><span class="mark t5">Per month</span></li><li class="new" style="--d:0.2s"><span class="mark t5">Per seat</span></li><li class="new" style="--d:0.4s"><span class="mark t5">Per year</span></li>' +
    "</ul></div>", { center: true });
  add(1, 0, '<div class="practical tally-stage"><div data-figure="tally"></div></div>', { scroll: true, center: true, id: "tally" });

  /* 2 · 150 students */
  /* The numbers first, cold. They count up and stay. */
  add(2, 0,
    '<div class="stats">' +
    '<p><span class="stat-num"><span data-count="150">150</span></span><span class="stat-label">students</span></p>' +
    '<p><span class="stat-num"><span data-count="800">800</span>+</span><span class="stat-label">essays</span></p>' +
    '<p><span class="stat-num">10–12</span><span class="stat-label">meetings a day</span></p>' +
    "</div>");
  /* Then the story. What I had to track lands on its own; after ten seconds the top fades back
     and "So I looked into apps." comes up along the bottom. */
  add(2, 0,
    '<div class="looked"><div class="looked-top"><div class="two"><div class="story">' +
    "<p>I was working in college counseling as a college essay writing coach.</p>" +
    "<p>I needed to track my notes, track appointments, track revisions, and prepare for back-to-back meetings.</p>" +
    '</div><ul class="juggle arrive" aria-label="What I had to keep track of">' +
    '<li style="--i:0">Notes<small>for every student</small></li>' +
    '<li style="--i:1">Appointments<small>back to back</small></li>' +
    '<li style="--i:2">Revisions<small>draft after draft</small></li>' +
    '<li style="--i:3">Meeting prep<small>before each one</small></li>' +
    '</ul></div></div><p class="looked-line">So I looked into apps.</p></div>');

  /* 3 · The real cost: one slide. When it opens, the lines slide in by themselves;
     the turn to students lands centered, with their three costs in one row. */
  /* The exhaustion: browser tabs fill until they're slivers, then a pile of handwritten sticky notes.
     (Chosen 2026-10-30 from three options; the other looks are still in realCost() if ever wanted.) */
  var tabNames = ["Google Classroom", "Schoology", "Canva", "Nearpod", "Padlet", "Kahoot!", "Turnitin", "Quizlet", "Blooket", "Gimkit", "Notion", "Trello", "Screencastify", "Brisk", "MagicSchool", "Veracross", "Blackbaud", "Microsoft Teams", "Zoom", "Gemini"];
  /* Option C's sticky notes: color, left, top, tilt, words. Nobody has just one. */
  var notes = [
    ["y", "68%", "0%", 4, '<b>passwords!!</b><br>Classroom: <s>Summer2020</s> Summer2020!<br>Schoology: <s>Tran123</s> <s>Tran1234</s> Tran1234!'],
    ["p", "86%", "3%", -6, "Nearpod<br>reset AGAIN"],
    ["b", "74%", "30%", 7, "Canva =<br>same as<br>Classroom??"],
    ["g", "92%", "27%", -3, "Turnitin<br>→ ask IT"],
    ["y", "65%", "52%", -8, "Kahoot! code<br>is on my phone"],
    ["p", "82%", "55%", 5, "which email<br>did I use<br>for Padlet?"],
    ["b", "58%", "24%", -4, "2FA → phone<br>→ which phone?"]
  ];
  function realCost(look, label) {
    var exhaust = look === "tabs"
    ? '<div class="tabbar" aria-hidden="true"><div class="tabs">' +
      tabNames.map(function (t, k) { return '<span class="tab" style="--t:' + (0.5 + k * 0.32).toFixed(2) + 's"><i></i>' + t + "</span>"; }).join("") +
      '<span class="tab-plus">+</span></div></div>'
    : look === "sticky"
    ? '<div class="sticky" aria-hidden="true"><p class="sticky-head">passwords!!</p><ul>' +
      '<li><b>Classroom</b> <s>Summer2020</s> Summer2020!</li>' +
      '<li><b>Schoology</b> <s>Tran123</s> <s>Tran1234</s> Tran1234!</li>' +
      '<li><b>Canva</b> same as Classroom?</li>' +
      '<li><b>Nearpod</b> <s>Gulliver1</s> reset again</li>' +
      '<li><b>Turnitin</b> <s>?????</s> ask IT</li>' +
      '<li><b>Kahoot!</b> it’s on my phone</li>' +
      "</ul></div>"
    : look === "tabs-notes"
    ? '<div class="tabbar" aria-hidden="true"><div class="tabs">' +
      tabNames.map(function (t, k) { return '<span class="tab" style="--t:' + (0.5 + k * 0.32).toFixed(2) + 's"><i></i>' + t + "</span>"; }).join("") +
      '<span class="tab-plus">+</span></div></div>' +
      '<div class="notes" aria-hidden="true">' + notes.map(function (n, k) {
        return '<div class="note ' + n[0] + '" style="--i:' + k + ";--x:" + n[1] + ";--y:" + n[2] + ";--r:" + n[3] + 'deg">' + n[4] + "</div>";
      }).join("") + "</div>"
    : "";
    return (label ? '<p class="option-tag">' + label + "</p>" : "") +
      '<div class="said auto-run' + (look ? " look-" + look : "") + '">' + exhaust +
    '<p style="--t:0.3s">Another subscription meant another system to learn.</p>' +
      '<p style="--t:2.2s">I’d be working the way the tool wanted, not the way I&nbsp;work.</p>' +
      '<p style="--t:4.4s">The real cost isn’t only the money. It’s <span class="mark auto" style="--t:5.2s">adaptation</span>.</p>' +
      '<p class="turn" style="--t:7s">And students pay that cost too.</p>' +
      '<ul class="costs centered-row" aria-label="What it costs students">' +
      '<li style="--t:8s;--r:-1.5deg">Another login</li>' +
      '<li style="--t:8.25s;--r:1deg">Another interface</li>' +
      '<li style="--t:8.5s;--r:-0.5deg">Another set of rules before the learning starts</li>' +
    "</ul></div>";
  }
  add(3, 0, realCost("tabs-notes"));

  /* 4 · So I had it build it */
  /* The question */
  add(4, 0, '<p class="big huge">Could I build&nbsp;it?</p>');
  /* I didn't code. What I had instead arrives line by line; "write" gets the highlighter. */
  add(4, 0,
    '<div class="coding"><div class="said auto-run">' +
    '<p style="--t:0.3s">I didn’t code.</p>' +
    '<p style="--t:1.6s">But I knew what I wanted.</p>' +
    '<div class="could-do">' +
    '<p style="--t:3.2s">I could <span class="mark late-write">write</span>.</p>' +
    '<p style="--t:4.1s">I could ask.</p>' +
    '<p style="--t:5s">I could imagine it.</p>' +
    '</div></div><div class="typing" data-typing aria-hidden="true"><pre></pre></div></div>');
  /* The apps I was already using spread out when the slide opens;
     one press and "What about my own apps?" brings the tools any teacher could build */
  var apps = ["Notion", "Padlet", "Trello", "Kahoot!", "Quizlet", "Nearpod", "Gimkit", "Blooket", "Screencastify", "MagicSchool"];
  var tools = ["A dashboard", "A PDF reader", "A locked browser", "A screenplay writer", "A class website", "A mini LMS", "An automated newsletter", "Flashcards", "An exit-ticket randomizer", "A class timer"];
  var rot = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.5, -1, 2], drop = [0, 0.6, 0.2, 0.9, 0.1, 0.7, 0.3, 0.8, 0, 0.5];
  var pulled = ["Notion", "Padlet"];
  function cards(list, step) {
    return list.map(function (t, k) {
      var src = pulled.indexOf(t) >= 0 ? ' data-pull-src="' + t + '"' : "";
      return "<li" + (step ? ' data-step="1"' : "") + src + ' style="--i:' + k + ";--r:" + rot[k] + "deg;--y:" + drop[k] + 'rem">' + t + "</li>";
    }).join("");
  }
  /* On the press: "Could I build my own app that combined them?" Notion and Padlet are pulled down
     from the apps I paid for, and Google Sheets joins them. pull.js does the pulling. */
  add(4, 1,
    '<div class="could pull-slide">' +
    '<section><h2>The apps I was already using</h2><ul class="pile-row spread" aria-label="Apps I was paying for">' + cards(apps) + "</ul></section>" +
    '<section><h2 data-step="1">Could I build my own app that combined them?</h2><ul class="pile-row tools combine" aria-label="What I could combine">' +
    pulled.map(function (t, k) { return '<li class="pulled-in" data-pull="' + t + '" style="--r:' + rot[k + 3] + "deg;--y:" + drop[k + 3] + 'rem">' + t + "</li>"; }).join("") +
    '<li class="sheets" data-step="1" style="--i:4;--r:1deg;--y:0.3rem">Google Sheets</li>' +
    "</ul></section></div>");
  /* What held me back: the experts line first, then four words struck one at a time,
     then the turn, highlighted */
  add(4, 0,
    '<div class="held">' +
    '<p class="held-1">Teachers are used to being the experts in the room. It’s hard to sit with being a&nbsp;novice.</p>' +
    '<ul class="held-words" aria-label="What held me back">' +
    '<li style="--i:0"><span class="strike-lines">Fear.</span></li>' +
    '<li style="--i:1"><span class="strike-lines">Doubt.</span></li>' +
    '<li style="--i:2"><span class="strike-lines">Time.</span></li>' +
    '<li style="--i:3"><span class="strike-lines">Knowledge.</span></li>' +
    "</ul>" +
    '<p class="held-2">But remember, we’re <span class="mark">quick studies</span>.</p>' +
    "</div>");
  /* The proof: two small things, one for my students, one for me */
  add(4, 0,
    '<div class="two-things"><p class="said-line">So I built two small things.</p><div class="tool-pair">' +
    D.tool("tracker", "For my students", "A meeting tracker", "It tracks my student meetings, holds my notes, and preps the next one. Designed how I work. It molds to me, not the other way around.") +
    D.tool("screenplay", "For me", "A screenplay tool", "Film or TV, with a home page for all your scripts. Type a slash for scene, action, character or dialogue, and it formats the page. It saves as you write, to the browser or your Google Drive, and exports to PDF or Google Docs.") +
    '</div><p class="tool-note">Start on top of the version I built.</p></div>', { id: "tracker" });

  /* 5 · Building for others: why I kept building (faster, present), then for others, the reader */
  add(5, 0,
    '<div class="two others"><div class="said auto-run">' +
    '<p style="--t:0.3s">I was building tools for myself, to work faster, to be more <span class="mark tlate" style="--mt:1.4s">present</span>.</p>' +
    '<p style="--t:2.6s">But more than that, I wanted to build <span class="mark tlate" style="--mt:3.6s">for others</span>.</p>' +
    '<p class="small" style="--t:5s">I built a reader. Paste in text and it reads it aloud. It wasn’t for me. It was for a friend’s student, who was better with audio than with reading.</p>' +
    '</div><div class="late-card" style="--t:7s">' +
    D.tool("reader", "For a friend’s student", "A reader", "Paste text and hear it read aloud, with each word highlighted as it’s read. Bigger text, calmer colors, and it remembers where you stopped.") +
    "</div></div>", { id: "reader" });
  /* The students: learning differences, then looking to the students, then the question, highlighted */
  add(5, 0,
    '<div class="said auto-run">' +
    '<p class="small" style="--t:0.3s">I’ve worked with students with learning differences for a long time.</p>' +
    '<p style="--t:2s">Truth be told, it was working with these students where I began to lean on <span class="mark tlate" style="--mt:3.2s">technology</span>.</p>' +
    '<p class="small" style="--t:5.4s">When I’m building, it’s easy to look at myself.</p>' +
    '<p class="small" style="--t:7.2s">But as an educator, I’m always looking to the students.</p>' +
    '<p class="turn" style="--t:9.4s"><span class="mark tlate" style="--mt:10.3s">What can I build that helps them?</span></p>' +
    "</div>");
})();
