/* Chapter 7: three ways in. A getting-started slide, then two slides per path:
   a flowchart, and instructions with links. Steps checked against each product's documentation
   in October 2026; recheck the week before the session. */

(function () {
  var D = window.DECK;

  /* The fill-in-the-brackets prompt, used here and in the workshop */
  D.prompt =
    "I teach [grade and subject]. My students struggle with [the problem].\n" +
    "Build a one-page app where they [what they do].\n" +
    "It must work on a Chromebook, need no login, and use large, readable text.\n" +
    "Make it work without any AI or API calls.\n" +
    "Don’t collect names or any student data.";

  function ui(label) { return '<span class="ui">' + label + "</span>"; }
  function arrow() { return ' <span class="ui-arrow" aria-hidden="true">→</span> '; }
  function link(url, text) { return '<a href="' + url + '" target="_blank" rel="noopener">' + (text || url.replace(/^https?:\/\//, "")) + "</a>"; }
  D.ui = ui; D.arrow = arrow; D.link = link;
  D.promptBox = function (text) {
    return '<div class="prompt-box"><pre>' + text + '</pre><button type="button" class="btn copy" data-copy>Copy prompt</button></div>';
  };

  /* A flowchart: boxes and arrows, left to right (top to bottom on a phone). One press and it draws itself. */
  function flow(title, line, boxes, loop) {
    return '<div class="flow-slide"><p class="howto-path">' + title + "</p>" +
      '<h2 class="howto-title">' + line + "</h2>" +
      '<ol class="flow" aria-label="' + title + ', step by step">' +
      boxes.map(function (b, k) {
        return '<li data-step="1" style="--i:' + k + '"><span class="flow-n">' + (k + 1) + "</span><b>" + b[0] + "</b><span>" + b[1] + "</span></li>";
      }).join("") + "</ol>" +
      (loop ? '<p class="flow-loop" data-step="1" style="--i:' + boxes.length + '"><span aria-hidden="true">↺</span> ' + loop + "</p>" : "") +
      "</div>";
  }

  /* Instructions: numbered, with links, a prompt and the watch-outs. Scrolls on a phone. */
  function sheet(title, steps, extra) {
    return '<div class="practical sheet"><p class="howto-path">' + title + "</p><h2>How to do it</h2><ol>" +
      steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>" + (extra || "") + "</div>";
  }

  D.insertSteps = function (add) {
    /* Before you start: what a teacher needs */
    add(7, 0,
      '<div class="practical wide"><h2>Before you start</h2><p class="sub">What you need, and the words you’ll see.</p>' +
      '<div class="start-grid"><section><h3>Accounts</h3><ul class="plain">' +
      "<li><b>A Google account.</b> School or personal. For Gemini, Google AI Studio and Sheets.</li>" +
      "<li><b>GitHub</b>, free. Only for <i>Own it</i>. " + link("https://github.com/signup", "github.com/signup") + "</li>" +
      "<li><b>Vercel</b>, free; sign up with GitHub. Only for <i>Own it</i>. " + link("https://vercel.com/signup", "vercel.com/signup") + "</li>" +
      "<li><b>A paid ChatGPT plan.</b> Only for <i>Ship it fast</i>.</li>" +
      "</ul></section><section><h3>Words you’ll see</h3><dl class=\"glossary\">" +
      "<dt>Prompt</dt><dd>What you type to describe the tool. Write it the way you’d explain it to a colleague.</dd>" +
      "<dt>Preview</dt><dd>The working version beside the chat. Try it there, like a student would.</dd>" +
      "<dt>HTML</dt><dd>The file a web page is made of. One file can be a whole small tool.</dd>" +
      "<dt>Repository</dt><dd>A folder for your code on GitHub, with a history of every change.</dd>" +
      "<dt>Deploy, publish</dt><dd>Put it online so it has a link.</dd>" +
      "<dt>Canvas</dt><dd>The panel where Gemini, or Google Sheets, builds and shows your tool.</dd>" +
      "<dt>Apps Script</dt><dd>Google’s coding tool, built into Sheets, Docs and Forms (" + ui("Extensions") + arrow() + ui("Apps Script") + "). It can turn a sheet into a small web app only your school can open.</dd>" +
      "</dl></section></div>" +
      '<p class="note">First build: no student information, and keep “no AI or API calls” in the prompt. Change one thing at a time.</p></div>',
      { scroll: true, id: "start" });

    /* Path 1: Own it */
    var A = "Own it: Google AI Studio, GitHub, Vercel";
    add(7, 1, flow(A, "Google AI Studio builds it. GitHub keeps it. Vercel puts it online.", [
      ["Describe", "AI Studio, Build"],
      ["Try and refine", "the live preview"],
      ["Save", "to a GitHub repository"],
      ["Import", "the repository into Vercel"],
      ["Deploy", "get a .vercel.app link"]
    ], "Change it any time: edit in AI Studio, save to GitHub, and Vercel updates the link."), { id: "own-it" });
    add(7, 0, sheet(A, [
      "Go to " + link("https://aistudio.google.com") + " and sign in with your Google account. Choose " + ui("Build") + ".",
      "Describe the tool. Start with this, and fill in the brackets:" + D.promptBox(D.prompt),
      "AI Studio writes the code and shows a live preview beside it. Use it the way a student would, then type what to fix: “Make the buttons bigger.” “Add a timer.”",
      "Open " + ui("Settings") + arrow() + ui("GitHub") + " and create a new repository. No GitHub account yet? Make a free one at " + link("https://github.com/signup", "github.com/signup") + " first.",
      "Go to " + link("https://vercel.com") + " and sign up with GitHub. Choose " + ui("Add New") + arrow() + ui("Project") + ", then " + ui("Import") + " next to your repository. If you don’t see it, let Vercel see it when GitHub asks.",
      "Click " + ui("Deploy") + ". You get a link like <b>your-tool.vercel.app</b>."
    ], '<p class="note">If the deploy fails, ask AI Studio: “Make this a simple static site with no server, so it deploys on Vercel.” Keep your first tool free of AI features; those need an API key and can cost money.</p>'), { scroll: true });

    /* Path 2: Ship it fast */
    var B = "Ship it fast: ChatGPT Sites";
    add(7, 1, flow(B, "ChatGPT Sites builds the site and hosts it. One conversation, one link.", [
      ["Switch to Work", "in ChatGPT"],
      ["Ask for a site", "type @Sites"],
      ["Preview and refine", "in plain language"],
      ["Publish", "it starts private"],
      ["Share", "people, or anyone with the link"]
    ]), { id: "ship-it" });
    add(7, 0, sheet(B, [
      "In ChatGPT, switch to " + ui("Work") + ". Sites lives there, not in regular chat. It needs a paid plan.",
      "Type " + ui("@Sites") + ", or just ask it to build a website. Say who it’s for and what it should do. You can attach files." +
        D.promptBox("Build a website for my 10th-grade biology class with this week’s vocabulary as flip cards and a five-question self-check. Large, readable text. No logins."),
      "Review the preview. Ask for changes until it works the way you want.",
      "Publish it when it’s ready. A new site starts private.",
      "Share it with specific people, or with anyone who has the link. More at " + link("https://chatgpt.com/features/sites/", "chatgpt.com/features/sites") + "."
    ], '<p class="note">Everything you put in it lives on OpenAI’s servers. Keep student information out.</p>'), { scroll: true });

    /* Path 3: Keep it protected */
    var C = "Keep it protected: Google Sheets canvas, or Apps Script";
    add(7, 1, flow(C, "Turn a sheet you already keep into a small app, inside your school’s Google account.", [
      ["Start with a sheet", "school account, a practice copy"],
      ["Create a canvas", "Insert, then Create a canvas"],
      ["Describe the tool", "what to see and do"],
      ["Use it", "the sheet and canvas stay in sync"],
      ["Share", "like any sheet"]
    ], "No canvas option yet? Extensions, then Apps Script: Gemini writes the code, and you deploy it as a web app."), { id: "keep-it" });
    add(7, 0, sheet(C, [
      "Open a sheet you already keep (hours, duties, a sign-up list) in your school account. Make a copy to practice on.",
      "Choose " + ui("Insert") + arrow() + ui("Create a canvas") + ", or open the Gemini panel and choose " + ui("Create canvas") + ". It needs Gemini in Sheets, which depends on your school’s Workspace plan.",
      "Describe the tool:" + D.promptBox("Make a board of our department’s assessments grouped by week, so we can spot when three tests land on the same day."),
      "Use it. Change something in the canvas and the sheet updates; change the sheet and the canvas follows.",
      "Share it like any sheet. The canvas follows the sheet’s sharing settings."
    ],
      '<h3>No canvas? Use Apps Script</h3><ol>' +
      "<li>Ask Gemini for the code. Describe your columns; don’t paste the data. (The Apps Script prompt in the workshop does this.)</li>" +
      "<li>In the sheet, open " + ui("Extensions") + arrow() + ui("Apps Script") + ". Paste <b>Code.gs</b>, then add an HTML file named <b>Index</b> and paste that too. Save.</li>" +
      "<li>Choose " + ui("Deploy") + arrow() + ui("New deployment") + ", select type " + ui("Web app") + ". Execute as: <b>Me</b>. Who has access: <b>only people in your school</b>. Click " + ui("Deploy") + " and approve the permissions.</li>" +
      "<li>Open the web app link. Only people you allowed can see it. Google’s guide: " + link("https://developers.google.com/apps-script/guides/web", "Apps Script web apps") + ".</li></ol>"),
      { scroll: true });
  };
})();
