/* Chapter 6: build it. Not "how to click," which changes every few months, but the shape that doesn't:
   prototype, store, host. Three ways to do it, a Google dashboard to take home, and one guide page
   (guide.html) that holds the detailed steps and gets updated when the tools change. */

(function () {
  var D = window.DECK;

  /* The fill-in-the-brackets prompt, used in the workshop and in the guide */
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

  D.insertSteps = function (add) {
    /* Why we build: familiar thoughts drift in, then one comes forward */
    var thoughts = [
      ["There has to be a better way to do this.", "8%", "6%", 0],
      ["I make this same thing every year.", "54%", "2%", 1],
      ["If it just did this one thing…", "62%", "40%", 2],
      ["My students always get lost right here.", "4%", "44%", 3],
      ["I spend more time on the platform than with the kids.", "30%", "76%", 4],
      ["I’d use it if it worked the way I work.", "58%", "70%", 5]
    ];
    add(6, 0,
      '<div class="thoughts"><div class="drift" aria-hidden="true">' +
      thoughts.map(function (t) { return '<p style="left:' + t[1] + ";top:" + t[2] + ";--i:" + t[3] + '">' + t[0] + "</p>"; }).join("") +
      '</div><div class="forward"><p class="fw-1">There has to be a better way to do this.</p>' +
      '<p class="fw-2">That thought is where building <span class="mark tlate" style="--mt:7.4s">starts</span>.</p>' +
      '<p class="fw-3">Questions to start with are in <a href="guide.html#questions" target="_blank" rel="noopener">the guide</a>.</p></div></div>',
      { id: "build" });

    /* The shape that doesn't change */
    add(6, 0,
      '<p class="said-line">Every build has the same shape.</p>' +
      '<ol class="shape3" aria-label="Prototype, store, host">' +
      '<li style="--i:0"><b>Prototype</b><span>Describe it, try it, ask for changes, until it works the way you work.</span></li>' +
      '<li style="--i:1"><b>Store</b><span>Keep it somewhere safe, where you can change it again next month.</span></li>' +
      '<li style="--i:2"><b>Host</b><span>Put it where people can use it, with a link.</span></li>' +
      '</ol><p class="shape-note">Buttons move. The shape doesn’t.</p>');

    /* Three ways to do it: one glance, and the steps live in the guide */
    var ways = [
      ["All in ChatGPT", "ChatGPT", "ChatGPT", "ChatGPT Sites", "guide.html#chatgpt", "If you already live in ChatGPT."],
      ["Inside Google Workspace", "Gemini", "Google Sheets, Drive", "Apps Script", "guide.html#google", "If your school runs on Google."],
      ["Own it end to end", "Google AI Studio", "GitHub", "Vercel", "guide.html#own-it", "If you want it all in your own account. How this site was built."]
    ];
    add(6, 0,
      '<p class="said-line">Three ways to do it.</p>' +
      '<div class="ways" role="table" aria-label="Three ways to prototype, store and host">' +
      '<div class="ways-head" role="row"><span role="columnheader"></span><span role="columnheader">Prototype</span><span role="columnheader">Store</span><span role="columnheader">Host</span><span role="columnheader"></span></div>' +
      ways.map(function (w, k) {
        return '<div class="ways-row" role="row" style="--i:' + k + '"><span role="rowheader"><b>' + w[0] + "</b><small>" + w[5] + "</small></span>" +
          '<span role="cell">' + w[1] + '</span><span role="cell">' + w[2] + '</span><span role="cell">' + w[3] + "</span>" +
          '<span role="cell"><a href="' + w[4] + '" target="_blank" rel="noopener">See the steps</a></span></div>';
      }).join("") +
      '</div><p class="ways-note">Every step, prompt and link is in <a href="guide.html" target="_blank" rel="noopener">one guide</a> that gets updated when the tools change. It saves as a PDF too.</p>',
      { id: "ways" });

    /* If your school runs on Google: a sheet you already keep becomes a dashboard */
    var rows = [["Date", "Grade", "Course", "Type"], ["Nov 3", "10", "Geometry", "Test"], ["Nov 3", "10", "English 10", "Project"], ["Nov 4", "11", "Physics", "Test"], ["Nov 5", "9", "Biology", "Quiz"], ["Nov 6", "12", "AP Lit", "Essay"]];
    add(6, 0,
      '<p class="said-line">A sheet you already keep can become a dashboard.</p>' +
      '<div class="sheet-to-dash"><div class="mini-sheet" aria-label="A Google Sheet of assessment dates"><div class="mini-sheet-bar">Assessments · Google Sheets</div><table>' +
      rows.map(function (r, k) { return "<tr" + (k ? ' style="--i:' + k + '"' : "") + ">" + r.map(function (c) { return (k ? "<td>" : "<th>") + c + (k ? "</td>" : "</th>"); }).join("") + "</tr>"; }).join("") +
      '</table></div><div class="to-arrow" aria-hidden="true">→</div><div class="late-card" style="--t:2.6s">' +
      D.tool("dashboard", "For a department", "Assessment Calendar", "Each week at a glance, with crunch days flagged: two or more big assessments for one grade on one day. It runs inside your school’s Google Sheet, so everyone sees the same thing.") +
      "</div></div>", { id: "dashboard" });
  };
})();
