/* Builds the page from window.STORY. No libraries. */

(function () {
  "use strict";
  var S = window.STORY;
  var main = document.getElementById("main");

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* Typographic apostrophes and quotes for text people read */
  function curly(s) {
    return s
      .replace(/(\w)'(\w)/g, "$1\u2019$2")
      .replace(/(\w)'(\s|$|[.,;:!?])/g, "$1\u2019$2")
      .replace(/&quot;([^&]*?)&quot;/g, "\u201C$1\u201D");
  }

  /* Plain text with [DAVID: ...] shown as an unfinished marker */
  function text(s) {
    return curly(esc(s)).replace(/\[DAVID:[^\]]*\]/g, function (m) {
      return '<span class="todo">' + m + "</span>";
    });
  }

  /* HTML from content files: only the [DAVID: ...] markers are converted */
  function html(s) {
    return String(s).replace(/([A-Za-z])'([A-Za-z])/g, "$1\u2019$2").replace(/(^|[^>])(\[DAVID:[^\]]*\])/g, function (_, a, m) {
      return a + '<span class="todo">' + m + "</span>";
    });
  }

  function photoFigure(p, cls) {
    return (
      '<figure class="photo ' + (cls || "") + '"><div class="frame">' +
      '<img src="' + esc(p.src) + '" alt="' + esc(p.alt) + '" loading="lazy" decoding="async"></div>' +
      '<figcaption>Photo: <a href="' + esc(p.link) + '">' + esc(p.credit) + "</a> on Unsplash</figcaption></figure>"
    );
  }

  function beatsHTML(beats) {
    return (
      '<div class="beats">' +
      beats.map(function (lines, i) {
        return (
          '<p class="beat" data-beat="' + i + '">' +
          lines.map(function (l) { return '<span class="line">' + text(l) + "</span>"; }).join("") +
          "</p>"
        );
      }).join("") +
      "</div>"
    );
  }

  function doorsHTML(doors) {
    if (!doors || !doors.length) return "";
    return (
      '<div class="doors">' +
      doors.map(function (d) {
        return (
          '<details class="door"><summary><span>' + esc(d.title) +
          (d.hint ? '<span class="hint">' + esc(d.hint) + "</span>" : "") +
          '</span></summary><div class="door-body">' + html(d.body) + "</div></details>"
        );
      }).join("") +
      "</div>"
    );
  }

  function renderCover() {
    var c = S.cover;
    var el = document.createElement("section");
    el.className = "cover is-current";
    el.id = "start";
    el.setAttribute("aria-label", "Cover");
    el.innerHTML =
      '<div class="cover-text">' +
      '<h1><span class="struck">' + esc(c.title[0]) + "</span><br>" + esc(c.title[1]) + "</h1>" +
      '<p class="lede">' + text(c.lede) + "</p>" +
      '<p class="byline">' + text(c.byline) + "</p>" +
      '<a class="btn btn-primary cover-start" href="#' + S.chapters[0].id + '">Start reading</a>' +
      "</div>" +
      '<div class="cover-photo"><img src="' + esc(c.photo.src) + '" alt="' + esc(c.photo.alt) + '"></div>';
    main.appendChild(el);
  }

  function renderChapter(ch) {
    var el = document.createElement("section");
    el.className = "chapter" + (ch.photo ? "" : " no-photo");
    el.id = ch.id;
    el.setAttribute("aria-labelledby", ch.id + "-title");

    var say = ch.say ? '<div class="say">' + ch.say.map(function (p) { return "<p>" + text(p) + "</p>"; }).join("") + "</div>" : "";
    var figure = ch.figure ? '<div class="figure-block' + (ch.figureOnStage ? " on-stage" : "") + '">' + html(ch.figure) + "</div>" : "";

    var body;
    if (ch.photo) {
      body = '<div class="spread">' + "<div>" + say + "</div>" + photoFigure(ch.photo) + "</div>" + figure;
    } else if (ch.sayAfterFigure) {
      body = figure + doorsHTML(ch.doors) + '<div class="spread no-photo" style="margin-top:2.5rem"><div>' + say + "</div></div>";
      ch._doorsDone = true;
    } else {
      body = (say ? '<div class="spread no-photo"><div>' + say + "</div></div>" : "") + figure;
    }

    el.innerHTML =
      '<div class="chapter-inner">' +
      '<header class="chapter-head"><span class="chapter-num">' + ch.n + '</span><h2 class="chapter-title" id="' + ch.id + '-title">' + esc(ch.title) + "</h2></header>" +
      beatsHTML(ch.beats) + body + (ch._doorsDone ? "" : doorsHTML(ch.doors)) +
      "</div>" +
      (ch.photo ? '<div class="stage-photo" aria-hidden="true"><img src="' + esc(ch.photo.src) + '" alt=""></div>' : "");
    main.appendChild(el);
  }

  function renderContents() {
    var list = document.getElementById("contents-list");
    var items = [{ id: "start", title: "Stop subscribing, start building" }].concat(S.chapters);
    list.innerHTML = items.map(function (c) {
      return '<li><a href="#' + c.id + '" data-target="' + c.id + '">' + esc(c.title) + "</a></li>";
    }).join("");
  }

  function renderCredits() {
    var all = [S.cover.photo].concat(S.chapters.filter(function (c) { return c.photo; }).map(function (c) { return c.photo; }));
    var out = all.map(function (p) { return '<a href="' + esc(p.link) + '">' + esc(p.credit) + "</a>"; }).join(", ");
    document.querySelectorAll("[data-credits]").forEach(function (n) {
      n.innerHTML = "Photos from Unsplash by " + out + ".";
    });
  }

  function wireCopy() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-copy]");
      if (!btn) return;
      var done = function () {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = "Copy prompt"; }, 1800);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(S.prompt).then(done, function () { fallback(btn, done); });
      } else {
        fallback(btn, done);
      }
    });
  }

  function fallback(btn, done) {
    var t = document.createElement("textarea");
    t.value = S.prompt;
    t.setAttribute("readonly", "");
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.appendChild(t);
    t.select();
    try { document.execCommand("copy"); done(); } catch (err) { btn.textContent = "Select the text and copy"; }
    document.body.removeChild(t);
  }

  renderCover();
  S.chapters.forEach(renderChapter);
  renderContents();
  renderCredits();
  wireCopy();
})();
