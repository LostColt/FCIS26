/* The story, chapters 7–12. Text comes from content/story.md; change it there first. */

(function () {
  var U = function (id) {
    return "https://images.unsplash.com/" + id + "?w=1600&q=72&auto=format&fit=crop";
  };

  var PROMPT =
    "I teach [grade and subject]. My students struggle with [the problem].\n" +
    "Build a one-page app where they [what they do].\n" +
    "It must work on a Chromebook, need no login, and use large, readable text.\n" +
    "Make it work without any AI or API calls.\n" +
    "Don't collect names or any student data.";

  var promptBox =
    '<div class="prompt-box"><pre data-copy-source>' + PROMPT + "</pre>" +
    '<button type="button" class="btn copy" data-copy>Copy prompt</button></div>';

  window.STORY.prompt = PROMPT;

  window.STORY.chapters = window.STORY.chapters.concat([
    {
      n: 7,
      id: "build-small",
      title: "Build small",
      beats: [["People loved it.", "I stopped anyway."], ["Build tools, not products."]],
      say: [
        "I built a tool where students could put in notes. I built it as a classroom first. Then it became ready for taking tests. Then it went into a locked browser, so students couldn't copy and paste or use AI. People loved it.",
        "But I wasn't trying to ship a product. I was trying to build smaller things. What it would mean to build something like that, to support it and maintain it, was too much at the time. Knowing when to stop is part of the skill."
      ],
      figure:
        '<ol class="steps" aria-label="How the note tool grew">' +
        '<li><div class="sketch" aria-hidden="true"><i class="dark"></i><i></i><i></i><i class="short"></i></div><h3>A classroom</h3><p>Students put in their notes.</p></li>' +
        '<li><div class="sketch" aria-hidden="true"><i class="dark"></i><i class="blue"></i><i class="blue"></i><i class="blue"></i></div><h3>Ready for tests</h3><p>Then it became ready for taking tests.</p></li>' +
        '<li><div class="sketch" aria-hidden="true"><i class="dark"></i><i></i><i></i><span class="lock">Locked</span></div><h3>A locked browser</h3><p>No copy and paste, no AI.</p></li>' +
        "</ol>",
      doors: [
        {
          title: "The locked browser",
          hint: "Switch between the classroom version, the test version and the locked browser.",
          body: '<div class="mockups"><a class="mockup-link" href="demos/locked-browser/"><strong>Notes, test, locked browser</strong><span>Three stages of one tool.</span></a></div>'
        }
      ]
    },
    {
      n: 8,
      id: "update-your-software",
      title: "Update your software",
      beats: [
        ["If we are edtech, we need to update our software too."],
        ["Do you brush your teeth while you eat chocolate?", "No. You eat. Then you brush."]
      ],
      say: [
        "I've seen teachers who aren't willing to change, because the resources they built took so long to make. So the resources go stagnant.",
        "But with this, building also means revising and updating. If the system is failing or needs revision, you're not stuck. You can change it. Add to it. Improve it constantly. It lives with you.",
        "With a subscription, you adapt to the tool. When you build, the tool adapts to you.",
        "Build first. Then revise."
      ],
      photo: {
        src: U("photo-1544396821-4dd40b938ad3"),
        alt: "Rows of ring binders on shelves",
        credit: "Viktor Talashuk",
        link: "https://unsplash.com/photos/05HLFQu8bFw"
      },
      figure:
        '<div class="revision">' +
        "<h3>A resource that keeps changing</h3>" +
        '<p class="kicker">An example of what revising looks like when a change takes a sentence, not a summer.</p>' +
        "<ol>" +
        '<li><span class="v">First</span><span>Vocabulary flashcards for one unit.</span></li>' +
        '<li><span class="v">Next</span><span><del>Students type answers</del> <ins>Students hear each word read aloud</ins></span></li>' +
        '<li><span class="v">Then</span><span><ins>Works on the class Chromebooks</ins></span></li>' +
        '<li><span class="v">Now</span><span><ins>A second version for the next unit, in an afternoon</ins></span></li>' +
        "</ol></div>"
    },
    {
      n: 9,
      id: "three-ways-in",
      title: "Three ways in",
      beats: [["Pick the path by the job."]],
      say: ["There are three paths I use, and each one teaches something different."],
      figureOnStage: true,
      figure:
        '<div class="paths">' +
        '<div><h3>Own it</h3><p class="tools">Google AI Studio, GitHub, Vercel</p><dl><dt>Best for</dt><dd>Lessons and tools you keep and revise</dd><dt>Cost</dt><dd>Free to start</dd></dl></div>' +
        '<div><h3>Ship it fast</h3><p class="tools">ChatGPT Sites</p><dl><dt>Best for</dt><dd>A page or small app with a link today</dd><dt>Cost</dt><dd>Paid ChatGPT plan</dd></dl></div>' +
        '<div><h3>Keep it protected</h3><p class="tools">Google Sheets and Apps Script</p><dl><dt>Best for</dt><dd>Data your school already keeps in Google</dd><dt>Cost</dt><dd>Included in Workspace</dd></dl></div>' +
        "</div>",
      doors: [
        {
          title: "Own it: Google AI Studio, then GitHub, then Vercel",
          hint: "Interactive lessons, practice tools, small apps you want to keep and revise.",
          body:
            "<ol>" +
            '<li>Go to <a href="https://aistudio.google.com">aistudio.google.com</a>, sign in with a Google account, and open <b>Build</b>.</li>' +
            "<li>Describe the tool (use the prompt in “Your turn”). Add: <i>“Make it work without any AI or API calls.”</i> That keeps your first tool simple to host.</li>" +
            "<li>Test it in the preview. Ask for changes in plain language.</li>" +
            "<li>In AI Studio, open <b>Settings → GitHub</b> and create a new repository for your app. (Or download it as a ZIP.)</li>" +
            '<li>Go to <a href="https://vercel.com">vercel.com</a>, sign in with GitHub, choose <b>Add New → Project</b>, import that repository, and click <b>Deploy</b>.</li>' +
            "<li>You get a link. Every time you push a change to GitHub, the site updates.</li>" +
            "</ol>" +
            "<p><b>Why this path:</b> the code is yours. It lives in your GitHub, with a history of every change.</p>" +
            '<p class="note">Watch out: if your app does use AI features, it needs an API key set on the host, and usage can cost money. Apps in AI Studio are private until you share them.</p>' +
            '<p><span class="todo">[DAVID: recorded demo video link]</span></p>'
        },
        {
          title: "Ship it fast: ChatGPT Sites",
          hint: "Polished pages, dashboards and small apps you want to share with a link today. Needs a paid plan.",
          body:
            "<ol>" +
            "<li>In ChatGPT, switch to <b>Work</b> and type <b>@Sites</b>, or simply ask it to build a website.</li>" +
            "<li>Describe what you want and who it's for. You can attach files or reference images.</li>" +
            "<li>Review the preview and ask for changes.</li>" +
            "<li>Publish. A new site starts private; share it with specific people or with a link.</li>" +
            "</ol>" +
            "<p><b>Why this path:</b> it's the fastest way from an idea to a live link.</p>" +
            "<p class=\"note\">Watch out: the site and anything you put in it live on OpenAI's servers. Keep student information out.</p>" +
            '<p><span class="todo">[DAVID: recorded demo video link]</span></p>'
        },
        {
          title: "Keep it protected: Google Sheets, then a dashboard",
          hint: "Tracking data your school already keeps in Google: hours, schedules, duties, rosters.",
          body:
            "<ol>" +
            "<li>Start with a Google Sheet in your school account.</li>" +
            "<li><b>Option A, Gemini in Sheets</b> (if your school's Workspace includes it and it's approved for this data): open the Gemini panel and ask it to summarize the sheet and build charts.</li>" +
            "<li><b>Option B, Apps Script:</b> in the sheet, open <b>Extensions → Apps Script</b>. Ask any AI to write a script that reads this sheet and shows a dashboard. Describe your column names; don't paste the data itself. Paste the code it gives you.</li>" +
            "<li>Choose <b>Deploy → New deployment → Web app</b>. Set <i>Execute as</i> to <b>Me</b> and <i>Who has access</i> to <b>Only myself</b> or <b>anyone in your school</b>.</li>" +
            "<li>Open the link. Only people signed in with access can see it.</li>" +
            "</ol>" +
            "<p><b>Why this path:</b> the data never leaves your school's Google account.</p>" +
            '<p><span class="todo">[DAVID: recorded demo video link]</span></p>'
        }
      ]
    },
    {
      n: 10,
      id: "before-you-build",
      title: "Before you build",
      beats: [["Build boldly. Not carelessly."]],
      figure:
        '<ul class="checklist">' +
        "<li>No student names, grades or work in a prompt or an app unless your school has approved that tool for it.</li>" +
        "<li>Follow your school's policy. Ask your tech lead before, not after.</li>" +
        "<li>Check the content yourself. AI-built tools can be confidently wrong.</li>" +
        "<li>Name an owner. Who fixes it in June? If nobody, keep it small.</li>" +
        "<li>Keep the systems of record (your LMS, gradebook, student information system) where they are. Build the small, specific things around them.</li>" +
        "</ul>"
    },
    {
      n: 11,
      id: "your-turn",
      title: "Your turn",
      beats: [["One small tool. 15\u00a0minutes."]],
      say: ["You just did what we ask students to do: try something, get feedback, revise. Eat, then brush."],
      sayAfterFigure: true,
      figureOnStage: true,
      figure: '<div data-figure="timer"></div>',
      doors: [
        {
          title: "Step 1: pick one small annoyance",
          hint: "Two minutes.",
          body:
            "<ul>" +
            "<li>An exit-ticket randomizer</li><li>Flashcards for this unit's vocabulary</li>" +
            "<li>A rubric students check their draft against</li><li>A simulation with sliders that shows cause and effect</li>" +
            "<li>A tracker for your team's dates, hours or duties</li><li>The thing you complained about this week</li>" +
            "</ul>"
        },
        {
          title: "Step 2: the prompt",
          hint: "Nine minutes. Copy it, fill in the brackets, paste it into AI Studio.",
          body:
            promptBox +
            "<p>Then refine it: “Make it…” “Add…” “When a student…”</p>" +
            '<p>No paid plan? Use <a href="https://aistudio.google.com">Google AI Studio</a>. It\'s free.</p>'
        },
        {
          title: "Step 3: swap",
          hint: "Four minutes.",
          body:
            "<ol>" +
            "<li>Trade with a neighbor. Use their tool like a student. Try to break it.</li>" +
            "<li>Tell them one thing that would make it work in a real class.</li>" +
            "<li>They type that fix in, in one sentence, and watch it change.</li>" +
            "</ol>"
        }
      ]
    },
    {
      n: 12,
      id: "keep-building",
      title: "Keep building",
      beats: [["Start small. It lives with you."]],
      say: ["One annoyance. One prompt. One colleague to test it. Then revise it next month, and the month after that."],
      photo: {
        src: U("photo-1580582932707-520aed937b7b"),
        alt: "An empty classroom with rows of desks and a chalkboard",
        credit: "Ivan Aleksic",
        link: "https://unsplash.com/photos/PDRFeeDniCk"
      },
      doors: [
        {
          title: "Everything in one place",
          hint: "Every link from today, the prompt, and how to reach me.",
          body:
            "<ul>" +
            '<li><a href="https://aistudio.google.com">Google AI Studio</a></li>' +
            '<li><a href="https://chatgpt.com/features/sites/">ChatGPT Sites</a></li>' +
            '<li><a href="https://script.google.com">Google Apps Script</a></li>' +
            '<li><a href="https://vercel.com">Vercel</a></li>' +
            '<li><a href="https://github.com">GitHub</a></li>' +
            "</ul>" +
            "<h4>The prompt</h4>" + promptBox +
            '<p><span class="todo">[DAVID: link to recorded demos]</span></p>' +
            '<p><span class="todo">[DAVID: contact]</span></p>' +
            '<h4>Photo credits</h4><p class="note" data-credits></p>'
        }
      ]
    }
  ]);
})();
