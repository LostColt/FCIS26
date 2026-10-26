(function () {
  "use strict";

  var SCENES = {
    counseling: [
      {
        prose:
          "It was 2:15 PM on a Tuesday in the college counseling office, and Mina had five minutes before the bell rang for seventh period. She stared at the blinking cursor on her laptop, convinced her essay about her grandfather's broken cuckoo clock sounded too small for engineering schools.",
        script: [
          { type: "slugline", text: "Int. College counseling office — Day (2:15 PM)" },
          {
            type: "action",
            text: "A quiet office lined with college pennants and a wall clock ticking toward the 2:20 bell. Mina Chen (17) sits across from Mr. Rivera (30s, writing coach). On her open laptop, Paragraph 1 is highlighted in blue. Her finger hovers over the Delete key."
          }
        ]
      },
      {
        prose:
          "Mr. Rivera reached across the desk and gently tilted her screen down by an inch so she'd stop reading the stiff academic version she wrote last night. He asked her to tell him—just tell him out loud—what the kitchen table sounded like when the brass gear slipped.",
        script: [
          {
            type: "action",
            text: "Rivera reaches across the desk and lowers her laptop lid an inch—just enough to break her stare."
          },
          { type: "character", text: "Mr. Rivera" },
          { type: "parenthetical", text: "(quietly)" },
          {
            type: "dialogue",
            text: "Forget the admissions committee for thirty seconds. When the brass gear slipped on the kitchen table—what did it sound like?"
          }
        ]
      },
      {
        prose:
          "Mina looked up at the ceiling and smiled despite herself. She said it made a tiny metallic ping, like a guitar string snapping in a quiet room, and her grandfather didn't even blink. Mr. Rivera slid a yellow legal pad toward her and told her to write that sentence down before the bell rang.",
        script: [
          {
            type: "action",
            text: "Mina glances up at the ceiling tiles with a small, involuntary smile."
          },
          { type: "character", text: "Mina" },
          {
            type: "dialogue",
            text: "Like a high E string snapping in an empty room. Ping. And my grandpa didn't even blink—he just handed me the magnifying glass."
          },
          {
            type: "action",
            text: "Rivera slides a yellow legal pad and a pen across the desk."
          },
          { type: "character", text: "Mr. Rivera" },
          {
            type: "dialogue",
            text: "Write that sentence down before the bell rings."
          }
        ]
      }
    ],
    faculty: [
      {
        prose:
          "At 7:42 AM, the faculty workroom copier jammed on page fourteen of a forty-page packet while six teachers waited in a polite, caffeinated line. Coach Miller muttered that teachers spend half their lives feeding paper into machines that hate them.",
        script: [
          { type: "slugline", text: "Int. Faculty workroom — Morning (7:42 AM)" },
          {
            type: "action",
            text: "The workroom copier groans, clunks, and flashes a red warning light for Tray 2. Six teachers stand in line holding travel mugs. Coach Miller (50s) sighs at the ceiling."
          },
          { type: "character", text: "Coach Miller" },
          {
            type: "dialogue",
            text: "Twenty years in education and half my life is spent negotiating with Tray Two."
          }
        ]
      },
      {
        prose:
          "Ms. Patel stepped out of line, popped open the side latch without looking, and pulled out a single accordion-folded sheet like a magician pulling a silk scarf from a hat. The machine immediately whirred back to life.",
        script: [
          {
            type: "action",
            text: "Ms. Patel (40s) steps forward, pops the side latch with one practiced thumb, and extracts a crumpled accordion sheet in a single smooth motion. The rollers spin back up."
          },
          { type: "character", text: "Ms. Patel" },
          { type: "parenthetical", text: "(already walking back to her mug)" },
          {
            type: "dialogue",
            text: "Humidity curls the bottom ream. Flip the stack before you press start."
          }
        ]
      }
    ],
    diner: [
      {
        prose:
          "It was past ten at night at the corner diner, and the stack of ungraded junior essays sat between Mr. Rivera's coffee mug and a half-eaten plate of fries. Every time he picked up his red pen, the essays all blurred into the same five-paragraph formula.",
        script: [
          { type: "slugline", text: "Int. Flamingo Diner — Night (10:15 PM)" },
          {
            type: "action",
            text: "Rain streaks the neon window. In a corner booth, Mr. Rivera stares at a tall stack of stapled essays wedged between a coffee mug and cold fries. He uncaps a red pen, hesitates, and caps it again."
          }
        ]
      },
      {
        prose:
          "The night waitress refilled his mug without asking and glanced at the top paper. She remarked that anyone who uses the word 'moreover' three times on page one is trying to hide the fact that they didn't read the book.",
        script: [
          {
            type: "action",
            text: "Carla (60s), apron pockets full of guest checks, refills his coffee without breaking stride. She squints upside-down at the top essay."
          },
          { type: "character", text: "Carla" },
          {
            type: "dialogue",
            text: "Three 'moreovers' on page one? Kid didn't read the book, honey."
          },
          {
            type: "action",
            text: "Rivera laughs, trades the red pen for a pencil, and turns to the next paper."
          }
        ]
      }
    ]
  };

  var currentSceneKey = "counseling";
  var activeBeatIdx = 0;

  var sceneBtns = document.querySelectorAll(".scene-btn");
  var proseBeatsEl = document.getElementById("prose-beats");
  var scriptBlocksEl = document.getElementById("script-blocks");
  var resetBtn = document.getElementById("reset-btn");

  function setActiveBeat(idx) {
    activeBeatIdx = idx;
    var proseEls = proseBeatsEl.querySelectorAll(".prose-beat");
    var scriptEls = scriptBlocksEl.querySelectorAll(".script-group");

    proseEls.forEach(function (el, i) {
      el.classList.toggle("is-active", i === activeBeatIdx);
    });
    scriptEls.forEach(function (el, i) {
      el.classList.toggle("is-active", i === activeBeatIdx);
    });
  }

  function renderAll() {
    var beats = SCENES[currentSceneKey] || SCENES.counseling;
    proseBeatsEl.innerHTML = "";
    scriptBlocksEl.innerHTML = "";

    beats.forEach(function (beat, idx) {
      var proseDiv = document.createElement("div");
      proseDiv.className = "prose-beat" + (idx === activeBeatIdx ? " is-active" : "");
      proseDiv.tabIndex = 0;
      proseDiv.textContent = beat.prose;

      proseDiv.addEventListener("mouseenter", function () {
        setActiveBeat(idx);
      });
      proseDiv.addEventListener("click", function () {
        setActiveBeat(idx);
      });
      proseDiv.addEventListener("focus", function () {
        setActiveBeat(idx);
      });

      proseBeatsEl.appendChild(proseDiv);

      var groupDiv = document.createElement("div");
      groupDiv.className = "script-group" + (idx === activeBeatIdx ? " is-active" : "");
      groupDiv.tabIndex = 0;

      beat.script.forEach(function (line) {
        var p = document.createElement("p");
        p.className = "sp-" + line.type;
        p.textContent = line.text;
        groupDiv.appendChild(p);
      });

      groupDiv.addEventListener("mouseenter", function () {
        setActiveBeat(idx);
      });
      groupDiv.addEventListener("click", function () {
        setActiveBeat(idx);
      });
      groupDiv.addEventListener("focus", function () {
        setActiveBeat(idx);
      });

      scriptBlocksEl.appendChild(groupDiv);
    });
  }

  sceneBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentSceneKey = btn.dataset.scene || "counseling";
      activeBeatIdx = 0;
      sceneBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      renderAll();
    });
  });

  resetBtn.addEventListener("click", function () {
    currentSceneKey = "counseling";
    activeBeatIdx = 0;
    sceneBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.scene === "counseling");
    });
    renderAll();
  });

  document.addEventListener("keydown", function (e) {
    var beats = SCENES[currentSceneKey] || SCENES.counseling;
    if (e.key === "ArrowDown" || e.key === "j" || e.key === "J") {
      e.preventDefault();
      setActiveBeat((activeBeatIdx + 1) % beats.length);
    } else if (e.key === "ArrowUp" || e.key === "k" || e.key === "K") {
      e.preventDefault();
      setActiveBeat((activeBeatIdx - 1 + beats.length) % beats.length);
    }
  });

  renderAll();
})();
