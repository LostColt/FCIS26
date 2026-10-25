(function () {
  "use strict";

  var SCENES = {
    counseling: {
      runtime: "EST. RUNTIME: 0:55 · PAGE 1",
      beats: [
        {
          prose:
            "It was 2:15 PM on a Tuesday in the college counseling office, and Mina had five minutes before the bell rang for seventh period. She stared at the blinking cursor on her laptop, convinced her essay about her grandfather's broken cuckoo clock sounded too small for engineering schools.",
          craft:
            "Screenplays can't film 'convinced her essay sounded too small'—so the adaptation turns her doubt into the physical business of highlighting Paragraph 1 and hovering a finger over the DELETE key.",
          lenses: {
            faithful: [
              { type: "slugline", text: "INT. COLLEGE COUNSELING OFFICE - DAY (2:15 PM)" },
              {
                type: "action",
                text: "A cramped office lined with college pennants and a wall clock ticking toward the 2:20 bell. MINA CHEN (17) sits across from MR. RIVERA (30s, fictional writing coach). On her open Chromebook, Paragraph 1 is highlighted in blue. Her right index finger hovers over the DELETE key."
              }
            ],
            subtext: [
              { type: "slugline", text: "INT. COUNSELING OFFICE - CONTINUOUS" },
              {
                type: "action",
                text: "2:15 PM. Five minutes to the bell. Mina's thumb taps the edge of her trackpad—the whole first paragraph selected, ready to wipe."
              }
            ],
            shooting: [
              { type: "slugline", text: "INT. COLLEGE COUNSELING OFFICE - DAY" },
              {
                type: "action",
                text: "INSERT - CHROMEBOOK SCREEN: 'Every Sunday my grandfather spread a green felt cloth...' highlighted in cold blue.\n\nBACK TO SCENE: Mina's finger rests on BACKSPACE. The hallway bell clock clicks to 2:15."
              }
            ]
          }
        },
        {
          prose:
            "Mr. Rivera reached across the desk and gently tilted her screen down by an inch so she'd stop reading the stiff academic version she wrote last night. He asked her to tell him—just tell him out loud—what the kitchen table sounded like when the brass gear slipped.",
          craft:
            "Tilting the laptop screen down by an inch breaks the spell of 'admissions-speak' and gives the actors a clear physical turn.",
          lenses: {
            faithful: [
              {
                type: "action",
                text: "Rivera reaches across the desk and lowers her laptop lid an inch—just enough to break her stare."
              },
              { type: "character", text: "MR. RIVERA" },
              { type: "parenthetical", text: "(quietly)" },
              {
                type: "dialogue",
                text: "Forget the admissions committee for thirty seconds. When the brass gear slipped on the kitchen table—what did it sound like?"
              }
            ],
            subtext: [
              {
                type: "action",
                text: "Rivera nudges the laptop screen down an inch."
              },
              { type: "character", text: "MR. RIVERA" },
              {
                type: "dialogue",
                text: "Don't read the screen. Tell me what the kitchen table sounded like."
              }
            ],
            shooting: [
              {
                type: "action",
                text: "CLOSE ON THE HINGE as Rivera's hand tilts the Chromebook screen down 15 degrees. Mina blinks, looking up."
              },
              { type: "character", text: "MR. RIVERA" },
              {
                type: "dialogue",
                text: "Tell me out loud. The Sunday table. The bent tweezers. What happened when you wound it too tight?"
              }
            ]
          }
        },
        {
          prose:
            "Mina looked up at the ceiling and smiled despite herself. She said it made a tiny metallic ping, like a guitar string snapping in a quiet room, and her grandfather didn't even blink. Mr. Rivera slid a yellow legal pad toward her and told her: write that sentence before the bell rings.",
          craft:
            "Ends on a prop handoff (the yellow legal pad) and a ticking-clock button before the period bell.",
          lenses: {
            faithful: [
              {
                type: "action",
                text: "Mina glances up at the acoustic ceiling tiles. A small, involuntary smile."
              },
              { type: "character", text: "MINA" },
              {
                type: "dialogue",
                text: "Like a high E string snapping in an empty room. Ping. And my grandpa didn't even blink—he just handed me the magnifying glass."
              },
              {
                type: "action",
                text: "Rivera slides a yellow legal pad and a felt-tip pen across the blotter."
              },
              { type: "character", text: "MR. RIVERA" },
              {
                type: "dialogue",
                text: "Write that sentence down before the bell rings. Eat first, then brush."
              }
            ],
            subtext: [
              { type: "character", text: "MINA" },
              {
                type: "dialogue",
                text: "A tiny metallic ping. Like a guitar string in a quiet room."
              },
              {
                type: "action",
                text: "Rivera pushes a yellow legal pad across the wood."
              },
              { type: "character", text: "MR. RIVERA" },
              { type: "dialogue", text: "That's line one. Go." }
            ],
            shooting: [
              { type: "character", text: "MINA" },
              { type: "parenthetical", text: "(smiling, off memory)" },
              {
                type: "dialogue",
                text: "Ping. Like a guitar string snapping. My grandpa didn't even flinch."
              },
              {
                type: "action",
                text: "ON THE DESK: Rivera's hand slides a yellow pad into frame."
              },
              { type: "character", text: "MR. RIVERA" },
              {
                type: "dialogue",
                text: "Write that before the 2:20 bell."
              },
              { type: "transition", text: "CUT TO:" }
            ]
          }
        }
      ]
    },
    faculty: {
      runtime: "EST. RUNTIME: 0:45 · PAGE 1",
      beats: [
        {
          prose:
            "At 7:42 AM, the faculty workroom copier jammed on page fourteen of a forty-page packet while six teachers waited in a polite, caffeinated line. Coach Miller muttered that teachers spend half their lives feeding paper into machines that hate them.",
          craft:
            "Turns collective teacher frustration into a visual comedy staging around the blinking red 'TRAY 2 JAM' light.",
          lenses: {
            faithful: [
              { type: "slugline", text: "INT. FACULTY WORKROOM - MORNING (7:42 AM)" },
              {
                type: "action",
                text: "The industrial Ricoh copier groans, clunks, and flashes a red code: TRAY 2 PAPER JAM. Six teachers stand in line holding travel mugs. COACH MILLER (50s) sighs at the ceiling."
              },
              { type: "character", text: "COACH MILLER" },
              {
                type: "dialogue",
                text: "Twenty years in education and half my life is spent negotiating with Tray Two."
              }
            ],
            subtext: [
              { type: "slugline", text: "INT. FACULTY WORKROOM - MORNING" },
              {
                type: "action",
                text: "7:42 AM. Red light on the copier. Six teachers with coffee mugs, nobody moving."
              },
              { type: "character", text: "COACH MILLER" },
              {
                type: "dialogue",
                text: "It smells fear. And first-period bell."
              }
            ],
            shooting: [
              { type: "slugline", text: "INT. FACULTY WORKROOM - MORNING" },
              {
                type: "action",
                text: "ECU - COPIER LCD PANEL: 'OPEN SIDE DOOR A.'\n\nWIDE: Six teachers in a deadpan queue."
              },
              { type: "character", text: "COACH MILLER" },
              {
                type: "dialogue",
                text: "We feed the machine. The machine eats the morning."
              }
            ]
          }
        },
        {
          prose:
            "Instead of clearing Tray Two again, Mr. Rivera opened his laptop on the laminator counter and typed three sentences describing the vocabulary warmup he actually needed for first period. Ninety seconds later, the link was live on the board.",
          craft:
            "Contrasts the jammed mechanical copier with building a tiny, working tool on the spot.",
          lenses: {
            faithful: [
              {
                type: "action",
                text: "Rivera steps out of line, sets his laptop on the cold laminator table, and types three plain sentences into a prompt box."
              },
              { type: "character", text: "MR. RIVERA" },
              { type: "parenthetical", text: "(to Coach Miller)" },
              {
                type: "dialogue",
                text: "Keep my spot in line if you want—I'm just building the warmup for 8:00 AM."
              },
              {
                type: "action",
                text: "On his screen: a clean flashcard grid loads. The 7:45 warning bell RINGS."
              }
            ],
            subtext: [
              {
                type: "action",
                text: "Rivera opens his laptop beside the dead paper cutter. Three sentences typed. A live preview appears before Miller gets Door A open."
              }
            ],
            shooting: [
              {
                type: "action",
                text: "SPLIT FOCUS: In the foreground, Rivera's screen renders a clean classroom app in 90 seconds. In the background, Miller pulls an accordion-folded sheet from the rollers."
              },
              { type: "transition", text: "SMASH CUT TO:" }
            ]
          }
        }
      ]
    },
    diner: {
      runtime: "EST. RUNTIME: 0:40 · PAGE 1",
      beats: [
        {
          prose:
            "Rain streaked the front window of the 24-hour diner at 9:30 PM. Between a half-empty mug of decaf and a stack of AP essays, Mr. Rivera realized he was writing the exact same margin note—'start where the action starts'—for the nineteenth time.",
          craft:
            "Externalizes an internal realization ('nineteenth time') through a close-up of red-ink repetition and a waitress refilling decaf.",
          lenses: {
            faithful: [
              { type: "slugline", text: "INT. SKYLINE DINER - NIGHT (9:30 PM)" },
              {
                type: "action",
                text: "Rain streaks the neon reflection on the booth window. Mr. Rivera sits fenced in by forty student drafts and a mug of decaf. He writes in the margin: 'Start in the middle of the scene.' He flips to the next paper. Writes the exact same words."
              },
              { type: "character", text: "MR. RIVERA" },
              { type: "parenthetical", text: "(muttering to the mug)" },
              {
                type: "dialogue",
                text: "Nineteen times. I am a human rubber stamp."
              }
            ],
            subtext: [
              { type: "slugline", text: "INT. DINER BOOTH - NIGHT" },
              {
                type: "action",
                text: "9:30 PM. Paper #19. Rivera's pen stalls halfway through writing the same comment he wrote at 8:00 PM."
              }
            ],
            shooting: [
              { type: "slugline", text: "INT. SKYLINE DINER - NIGHT" },
              {
                type: "action",
                text: "MONTAGE OF MARGINS: Three different essays, the exact same red-pen note: 'CUT PARAGRAPH 1—START AT THE TABLE.'"
              }
            ]
          }
        }
      ]
    }
  };

  var currentSceneKey = "counseling";
  var currentLens = "faithful";
  var activeBeatIdx = 0;
  var showCraftNotes = true;
  var customSceneData = null;

  var sceneBtns = document.querySelectorAll(".scene-btn");
  var lensBtns = document.querySelectorAll(".lens-btn");
  var showCraftCheckbox = document.getElementById("show-craft-notes");
  var copyScriptBtn = document.getElementById("copy-script-btn");
  var resetBtn = document.getElementById("reset-btn");

  var proseBeatsEl = document.getElementById("prose-beats");
  var customProseBoxEl = document.getElementById("custom-prose-box");
  var customProseInputEl = document.getElementById("custom-prose-input");
  var convertCustomBtn = document.getElementById("convert-custom-btn");
  var pageRuntimeEl = document.getElementById("page-runtime");
  var scriptBlocksEl = document.getElementById("script-blocks");

  function parseCustomParagraphToScene(raw) {
    var text = raw.trim();
    if (!text) return SCENES.counseling;

    // Detect setting time/place
    var isNight = /night|dusk|evening|9:30|dark|late/i.test(text);
    var isExt = /outside|street|field|park|parking|courtyard/i.test(text);
    var loc = "CLASSROOM / OFFICE";
    if (/library/i.test(text)) loc = "SCHOOL LIBRARY";
    else if (/diner|cafe|coffee/i.test(text)) loc = "CORNER DINER";
    else if (/hallway|corridor/i.test(text)) loc = "HIGH SCHOOL HALLWAY";
    else if (/kitchen|table/i.test(text)) loc = "KITCHEN TABLE";

    var slug = (isExt ? "EXT. " : "INT. ") + loc + " - " + (isNight ? "NIGHT" : "DAY");

    // Extract quoted dialogue if present
    var quoteMatch = text.match(/[“"]([^”"]+)[”"]/);
    var dialogueLine = quoteMatch
      ? quoteMatch[1]
      : "Let's try this one more time—without the script.";

    // Detect character name (capitalized word not at start of sentence, or default SPEAKER)
    var speaker = "TEACHER";
    var nameMatch = text.match(/(?:Ms\.|Mr\.|Dr\.|Coach)\s+[A-Z][a-z]+|[A-Z][a-z]{2,}/g);
    if (nameMatch && nameMatch.length > 0) {
      var candidate = nameMatch.find(function (w) {
        return !/^(The|In|At|When|Every|Between|Inside|After)$/.test(w);
      });
      if (candidate) speaker = candidate.toUpperCase();
    }

    var actionCleaned = text.replace(/[“"][^”"]+[”"]/g, "").replace(/\s+/g, " ").trim();
    if (!actionCleaned) {
      actionCleaned = speaker + " pauses, looking across the table.";
    }

    var blocks = [
      { type: "slugline", text: slug },
      { type: "action", text: actionCleaned },
      { type: "character", text: speaker },
      { type: "parenthetical", text: "(leaning in)" },
      { type: "dialogue", text: dialogueLine }
    ];

    return {
      runtime: "EST. RUNTIME: 0:30 · CUSTOM",
      beats: [
        {
          prose: text,
          craft:
            "Rule-based offline parser extracted setting ('" +
            slug +
            "'), action lines, and quoted dialogue for " +
            speaker +
            ".",
          lenses: {
            faithful: blocks,
            subtext: blocks,
            shooting: blocks.concat([{ type: "transition", text: "CUT TO:" }])
          }
        }
      ]
    };
  }

  function getActiveScene() {
    if (currentSceneKey === "custom" && customSceneData) {
      return customSceneData;
    }
    return SCENES[currentSceneKey] || SCENES.counseling;
  }

  function renderStudio() {
    var scene = getActiveScene();
    pageRuntimeEl.textContent = scene.runtime;

    if (activeBeatIdx >= scene.beats.length) {
      activeBeatIdx = 0;
    }

    // Render Prose Beats
    proseBeatsEl.innerHTML = "";
    scene.beats.forEach(function (beat, idx) {
      var card = document.createElement("div");
      card.className =
        "prose-beat" + (idx === activeBeatIdx ? " is-active" : "");
      card.tabIndex = 0;
      card.setAttribute("role", "button");

      var num = document.createElement("span");
      num.className = "beat-num";
      num.textContent =
        "Invented Example Beat " + (idx + 1) + " of " + scene.beats.length;

      var p = document.createElement("p");
      p.className = "beat-prose-text";
      p.textContent = beat.prose;

      card.appendChild(num);
      card.appendChild(p);

      if (showCraftNotes && beat.craft) {
        var note = document.createElement("div");
        note.className = "beat-craft-note";
        note.textContent = "↳ Why it changes: " + beat.craft;
        card.appendChild(note);
      }

      card.addEventListener("click", function () {
        activeBeatIdx = idx;
        renderStudio();
      });
      card.addEventListener("mouseenter", function () {
        activeBeatIdx = idx;
        renderStudio();
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activeBeatIdx = idx;
          renderStudio();
        }
      });

      proseBeatsEl.appendChild(card);
    });

    // Render Screenplay Sheet
    scriptBlocksEl.innerHTML = "";
    scene.beats.forEach(function (beat, idx) {
      var group = document.createElement("div");
      group.className =
        "script-beat-group" + (idx === activeBeatIdx ? " is-active" : "");

      var lines = beat.lenses[currentLens] || beat.lenses.faithful;
      lines.forEach(function (item) {
        var div = document.createElement("div");
        div.className = "sp-" + item.type;
        div.textContent = item.text;
        group.appendChild(div);
      });

      group.addEventListener("click", function () {
        activeBeatIdx = idx;
        renderStudio();
      });
      group.addEventListener("mouseenter", function () {
        activeBeatIdx = idx;
        renderStudio();
      });

      scriptBlocksEl.appendChild(group);
    });
  }

  function buildPlainFountainText() {
    var scene = getActiveScene();
    var out = [];
    scene.beats.forEach(function (beat) {
      var lines = beat.lenses[currentLens] || beat.lenses.faithful;
      lines.forEach(function (item) {
        if (item.type === "slugline") out.push("\n" + item.text + "\n");
        else if (item.type === "action") out.push(item.text + "\n");
        else if (item.type === "character") out.push("                    " + item.text);
        else if (item.type === "parenthetical") out.push("               " + item.text);
        else if (item.type === "dialogue") out.push("          " + item.text + "\n");
        else if (item.type === "transition") out.push("                                        " + item.text);
      });
    });
    return out.join("\n").trim();
  }

  sceneBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.dataset.scene;
      sceneBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });

      if (key === "custom") {
        customProseBoxEl.hidden = false;
        if (!customProseInputEl.value.trim()) {
          customProseInputEl.value =
            'In the quiet school library at dusk, Ms. Alvarez closed her laptop and slid a yellow legal pad across the oak table to Sam. "Tell me the story without looking at your outline," she said softly.';
        }
        customSceneData = parseCustomParagraphToScene(customProseInputEl.value);
        currentSceneKey = "custom";
        activeBeatIdx = 0;
        renderStudio();
        customProseInputEl.focus();
      } else {
        customProseBoxEl.hidden = true;
        currentSceneKey = key;
        activeBeatIdx = 0;
        renderStudio();
      }
    });
  });

  convertCustomBtn.addEventListener("click", function () {
    customSceneData = parseCustomParagraphToScene(customProseInputEl.value);
    currentSceneKey = "custom";
    activeBeatIdx = 0;
    renderStudio();
  });

  lensBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentLens = btn.dataset.lens;
      lensBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      renderStudio();
    });
  });

  showCraftCheckbox.addEventListener("change", function () {
    showCraftNotes = showCraftCheckbox.checked;
    renderStudio();
  });

  copyScriptBtn.addEventListener("click", function () {
    var txt = buildPlainFountainText();
    var done = function () {
      copyScriptBtn.textContent = "Copied to clipboard ✓";
      setTimeout(function () {
        copyScriptBtn.textContent = "Copy Fountain / Script";
      }, 1800);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(txt).then(done, done);
    } else {
      done();
    }
  });

  resetBtn.addEventListener("click", function () {
    currentSceneKey = "counseling";
    currentLens = "faithful";
    activeBeatIdx = 0;
    showCraftNotes = true;
    showCraftCheckbox.checked = true;
    customProseBoxEl.hidden = true;
    sceneBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.scene === "counseling");
    });
    lensBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.lens === "faithful");
    });
    renderStudio();
  });

  renderStudio();
})();
