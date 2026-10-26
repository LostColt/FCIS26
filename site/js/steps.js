/* Chapter 9: how to build, one step per slide, for each of the three paths.
   Steps checked against each product's documentation in October 2026; recheck the week before the session. */

(function () {
  var D = window.DECK;

  function ui(label) { return '<span class="ui">' + label + "</span>"; }
  function arrow() { return ' <span class="ui-arrow" aria-hidden="true">→</span> '; }
  function prompt(text) {
    return '<div class="prompt-box"><pre>' + text + '</pre><button type="button" class="btn copy" data-copy>Copy prompt</button></div>';
  }

  function path(title, line, detail) {
    return '<div class="howto-intro"><p class="big huge">' + title + "</p>" +
      '<p class="kicker-line">' + line + "</p>" +
      (detail ? '<p class="howto-note">' + detail + "</p>" : "") + "</div>";
  }

  function step(label, n, total, title, body, extra) {
    return '<div class="howto">' +
      '<p class="howto-path">' + label + '<span class="howto-count">Step ' + n + " of " + total + "</span></p>" +
      '<h2 class="howto-title">' + title + "</h2>" +
      (body ? '<p class="howto-body">' + body + "</p>" : "") +
      (extra || "") + "</div>";
  }

  D.insertSteps = function (add) {
    /* Path 1: Own it */
    var A = "Own it: Google AI Studio, GitHub, Vercel", a = 8;
    add(9, 0, path("Own it.", "Google AI Studio builds it. GitHub keeps it. Vercel puts it online.", "Free to start. You need a Google account and a free GitHub account."), { id: "own-it" });
    add(9, 0, step(A, 1, a, "Open Google AI Studio.",
      "Go to <b>aistudio.google.com</b> and sign in with your Google account. Choose " + ui("Build") + "."));
    add(9, 0, step(A, 2, a, "Describe the tool you want.",
      "Type it the way you’d explain it to a colleague. Start with this:",
      prompt(D.prompt)), { scroll: true });
    add(9, 0, step(A, 3, a, "Watch it build.",
      "AI Studio writes the code and shows a live preview beside it. Nothing to install."));
    add(9, 0, step(A, 4, a, "Try it, then ask for changes.",
      "Use it the way a student would. Then type what to fix: “Make the buttons bigger.” “Add a timer.” “Use our school colors.”"));
    add(9, 0, step(A, 5, a, "Save it to GitHub.",
      "In AI Studio, open " + ui("Settings") + arrow() + ui("GitHub") + " and create a new repository. Your code now lives in your own account, with a history of every change.",
      '<p class="howto-note">No GitHub account yet? Make a free one at github.com first.</p>'));
    add(9, 0, step(A, 6, a, "Bring it to Vercel.",
      "Go to <b>vercel.com</b> and sign up with GitHub. Choose " + ui("Add New") + arrow() + ui("Project") + ", then " + ui("Import") + " next to your new repository.",
      '<p class="howto-note">Don’t see your repository? When GitHub asks, let Vercel see it.</p>'));
    add(9, 0, step(A, 7, a, "Deploy.",
      "Vercel works out how to build it. Click " + ui("Deploy") + " and wait for it to finish. You get a link like <b>your-tool.vercel.app</b>."));
    add(9, 0, step(A, 8, a, "Change it any time.",
      "Ask AI Studio for an edit and save it to GitHub. Vercel sees the change and updates your link on its own.",
      '<p class="howto-note">If the deploy fails, ask AI Studio: “Make this a simple static site with no server, so it deploys on Vercel.” Keep your first tool free of AI features; those need an API key and can cost money.</p>'));

    /* Path 2: Ship it fast */
    var B = "Ship it fast: ChatGPT Sites", b = 5;
    add(9, 0, path("Ship it fast.", "ChatGPT Sites builds the site and hosts it. One conversation, one link.", "Needs a paid ChatGPT plan."), { id: "ship-it" });
    add(9, 0, step(B, 1, b, "Switch to Work.",
      "In ChatGPT, switch to " + ui("Work") + ". Sites lives there, not in regular chat."));
    add(9, 0, step(B, 2, b, "Ask for a website.",
      "Type " + ui("@Sites") + ", or just ask it to build a website. Say who it’s for and what it should do. You can attach files.",
      prompt("Build a website for my 10th-grade biology class with this week’s vocabulary as flip cards and a five-question self-check. Large, readable text. No logins.")), { scroll: true });
    add(9, 0, step(B, 3, b, "Review the preview, then refine.",
      "Ask for changes in plain language until it works the way you want."));
    add(9, 0, step(B, 4, b, "Publish.",
      "A new site starts private. Publish it when it’s ready."));
    add(9, 0, step(B, 5, b, "Share the link.",
      "Share it with specific people, or with anyone who has the link.",
      '<p class="howto-note">Everything you put in it lives on OpenAI’s servers. Keep student information out.</p>'));

    /* Path 3: Keep it protected */
    var C = "Keep it protected: Google Sheets canvas", c = 5;
    add(9, 0, path("Keep it protected.", "Sheets canvas turns a Google Sheet into a small app, inside your school’s Google account.", "New since August 2026. It needs Gemini in Sheets, which depends on your school’s Google Workspace plan."), { id: "keep-it" });
    add(9, 0, step(C, 1, c, "Start with a sheet you already keep.",
      "Hours, duties, schedules, a sign-up list. Use your school account, and make a copy to practice on."));
    add(9, 0, step(C, 2, c, "Create a canvas.",
      "Choose " + ui("Insert") + arrow() + ui("Create a canvas") + ". Or open the Gemini panel and choose " + ui("Create canvas") + "."));
    add(9, 0, step(C, 3, c, "Describe the tool.",
      "Say what you want to see and do with your data:",
      prompt("Make a board of our department’s assessments grouped by week, so we can spot when three tests land on the same day.")), { scroll: true });
    add(9, 0, step(C, 4, c, "Use it. It stays in sync.",
      "Change something in the canvas and the sheet updates. Change the sheet and the canvas follows."));
    add(9, 0, step(C, 5, c, "Share it like any sheet.",
      "The canvas follows the sheet’s sharing settings. Share the sheet only with the people who should see it.",
      '<p class="howto-note">Don’t see “Create a canvas”? Your school may not have it yet. The fallback: ' + ui("Extensions") + arrow() + ui("Apps Script") + ", then ask any AI to write a script that shows your sheet as a dashboard. Describe your columns; don’t paste the data.</p>"));
  };
})();
