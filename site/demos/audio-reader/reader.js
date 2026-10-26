(function () {
  "use strict";

  var SAMPLES = {
    biology: {
      title: "Cellular respiration and the proton gradient",
      sentences: [
        "Most textbooks draw the mitochondrion like a static kidney bean, but inside a living cell it behaves more like a hydroelectric dam.",
        "As electrons travel down the inner membrane chain, protein complexes pump hydrogen ions into the narrow intermembrane space.",
        "That crowded reservoir of protons creates both a chemical gradient and a voltage difference across the membrane.",
        "When protons rush back through the turbine of ATP synthase, the enzyme physically rotates and snaps a third phosphate group onto ADP.",
        "Without oxygen waiting at the bottom of the chain to catch spent electrons, the entire turbine backs up within seconds.",
        "When you sprint up the stadium stairs and feel your legs burn, your muscle cells have switched to fermentation just to keep energy flowing."
      ]
    },
    history: {
      title: "Federalist No. 10: The mischiefs of faction",
      sentences: [
        "Among the numerous advantages promised by a well-constructed Union, none deserves to be more accurately developed than its tendency to break and control the violence of faction.",
        "By a faction, I understand a number of citizens, whether amounting to a majority or a minority of the whole, who are united and actuated by some common impulse of passion, or of interest, adverse to the rights of other citizens.",
        "There are two methods of curing the mischiefs of faction: the one, by removing its causes; the other, by controlling its effects.",
        "Liberty is to faction what air is to fire, an aliment without which it instantly expires.",
        "But it could not be less folly to abolish liberty, which is essential to political life, because it nourishes faction, than it would be to wish the annihilation of air because it imparts to fire its destructive agency."
      ]
    },
    essay: {
      title: "The Sunday clock table",
      sentences: [
        "Every Sunday my grandfather spread a green felt cloth over the kitchen table and handed me the bent brass tweezers.",
        "At twelve, I thought fixing a clock meant tightening every screw until nothing moved.",
        "Two seconds after I wound the mainspring on a 1968 Black Forest cuckoo clock, the escapement tooth snapped in my hand.",
        "My grandfather didn't scold me; he just held the brass wheel up to the window light so I could see where the metal had fatigued.",
        "Four years later, when our robotics flywheel kept jamming ten minutes before regional qualifiers, I didn't reach for a wrench—I listened for the tick that didn't belong."
      ]
    }
  };

  var currentSampleKey = "biology";
  var currentDoc = null;
  var activeSentenceIdx = 0;
  var activeWordIdx = -1;
  var isPlaying = false;
  var focusDimming = false;
  var fallbackTimer = null;

  var synth = window.speechSynthesis || null;
  var voices = [];

  var sampleBtns = document.querySelectorAll(".sample-btn");
  var pasteDrawerEl = document.getElementById("paste-drawer");
  var customTextInputEl = document.getElementById("custom-text-input");
  var loadCustomBtn = document.getElementById("load-custom-btn");
  var closeDrawerBtn = document.getElementById("close-drawer-btn");

  var playPauseBtn = document.getElementById("play-pause-btn");
  var speedSelectEl = document.getElementById("speed-select");
  var voiceSelectEl = document.getElementById("voice-select");
  var focusToggleEl = document.getElementById("focus-toggle");
  var swatchBtns = document.querySelectorAll(".swatch-btn");
  var settingsMenuEl = document.getElementById("settings-menu");
  var resetBtn = document.getElementById("reset-btn");

  var docTitleEl = document.getElementById("doc-title");
  var docProgressEl = document.getElementById("doc-progress");
  var sentencesFlowEl = document.getElementById("sentences-flow");

  function splitIntoSentences(rawText) {
    var cleaned = rawText.replace(/\s+/g, " ").trim();
    if (!cleaned) return ["Paste a paragraph to hear it read aloud."];
    var parts = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
    return parts
      ? parts.map(function (s) { return s.trim(); }).filter(Boolean)
      : [cleaned];
  }

  function populateVoices() {
    if (!synth) return;
    voices = synth.getVoices() || [];
    voiceSelectEl.innerHTML = '<option value="">Default voice</option>';
    voices.forEach(function (v, idx) {
      var opt = document.createElement("option");
      opt.value = String(idx);
      opt.textContent = v.name;
      voiceSelectEl.appendChild(opt);
    });
  }

  if (synth) {
    populateVoices();
    if (typeof synth.onvoiceschanged !== "undefined") {
      synth.onvoiceschanged = populateVoices;
    }
  }

  function loadPassage(key, customText) {
    stopPlayback();
    currentSampleKey = key;

    if (key === "custom") {
      currentDoc = {
        title: "Pasted text",
        sentences: splitIntoSentences(customText || "")
      };
    } else {
      var preset = SAMPLES[key] || SAMPLES.biology;
      currentDoc = {
        title: preset.title,
        sentences: preset.sentences.slice()
      };
    }

    activeSentenceIdx = 0;
    activeWordIdx = -1;
    renderAll();
  }

  function renderPassage() {
    if (!currentDoc) return;

    docTitleEl.textContent = currentDoc.title;
    docProgressEl.textContent =
      "Sentence " + (activeSentenceIdx + 1) + " of " + currentDoc.sentences.length;

    sentencesFlowEl.className = "sentences-flow" + (focusDimming ? " is-dimmed" : "");
    sentencesFlowEl.innerHTML = "";

    currentDoc.sentences.forEach(function (sentence, sIdx) {
      var span = document.createElement("span");
      span.className = "sentence-span" + (sIdx === activeSentenceIdx ? " is-active" : "");
      span.tabIndex = 0;

      var words = sentence.split(/\s+/);
      words.forEach(function (w, wIdx) {
        var wSpan = document.createElement("span");
        var isSpoken = isPlaying && sIdx === activeSentenceIdx && wIdx === activeWordIdx;
        wSpan.className = "word-token" + (isSpoken ? " is-spoken" : "");
        wSpan.textContent = w;
        span.appendChild(wSpan);
        if (wIdx < words.length - 1) {
          span.appendChild(document.createTextNode(" "));
        }
      });

      span.addEventListener("click", function () {
        activeSentenceIdx = sIdx;
        activeWordIdx = 0;
        if (isPlaying) {
          speakCurrentSentence();
        } else {
          renderAll();
        }
      });

      span.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          activeSentenceIdx = sIdx;
          startPlayback();
        }
      });

      sentencesFlowEl.appendChild(span);
      sentencesFlowEl.appendChild(document.createTextNode(" "));
    });
  }

  function updateTransportUI() {
    playPauseBtn.classList.toggle("is-playing", isPlaying);
    playPauseBtn.setAttribute("aria-pressed", isPlaying ? "true" : "false");
    playPauseBtn.textContent = isPlaying ? "Pause" : "Read aloud";
  }

  function renderAll() {
    renderPassage();
    updateTransportUI();
  }

  function clearFallbackTimer() {
    if (fallbackTimer) {
      clearInterval(fallbackTimer);
      fallbackTimer = null;
    }
  }

  function startWordPacer(words, rate) {
    clearFallbackTimer();
    var msPerWord = Math.max(180, Math.round(330 / (rate || 1)));
    activeWordIdx = 0;
    renderAll();

    fallbackTimer = setInterval(function () {
      if (!isPlaying) {
        clearFallbackTimer();
        return;
      }
      if (activeWordIdx < words.length - 1) {
        activeWordIdx += 1;
        renderPassage();
      } else {
        clearFallbackTimer();
        if (!synth) {
          advanceSentenceOrFinish();
        }
      }
    }, msPerWord);
  }

  function advanceSentenceOrFinish() {
    if (!currentDoc) return;
    if (activeSentenceIdx < currentDoc.sentences.length - 1) {
      activeSentenceIdx += 1;
      activeWordIdx = 0;
      speakCurrentSentence();
    } else {
      stopPlayback();
    }
  }

  function speakCurrentSentence() {
    clearFallbackTimer();
    if (!currentDoc) return;

    var sentence = currentDoc.sentences[activeSentenceIdx] || "";
    var words = sentence.split(/\s+/);
    var rate = parseFloat(speedSelectEl.value) || 1.0;

    startWordPacer(words, rate);

    if (synth && typeof window.SpeechSynthesisUtterance !== "undefined") {
      try {
        synth.cancel();
        var utter = new SpeechSynthesisUtterance(sentence);
        utter.rate = rate;
        var vIdx = voiceSelectEl.value;
        if (vIdx !== "" && voices[parseInt(vIdx, 10)]) {
          utter.voice = voices[parseInt(vIdx, 10)];
        }
        utter.onend = function () {
          if (isPlaying) {
            advanceSentenceOrFinish();
          }
        };
        utter.onerror = function () {
          clearFallbackTimer();
        };
        synth.speak(utter);
      } catch (err) {
        // Word pacer handles visual playback if speechSynthesis is unavailable
      }
    }
  }

  function startPlayback() {
    isPlaying = true;
    speakCurrentSentence();
    updateTransportUI();
  }

  function stopPlayback() {
    isPlaying = false;
    activeWordIdx = -1;
    clearFallbackTimer();
    if (synth) {
      try { synth.cancel(); } catch (e) {}
    }
    renderAll();
  }

  playPauseBtn.addEventListener("click", function () {
    if (isPlaying) stopPlayback();
    else startPlayback();
  });

  speedSelectEl.addEventListener("change", function () {
    if (isPlaying) speakCurrentSentence();
  });

  voiceSelectEl.addEventListener("change", function () {
    if (isPlaying) speakCurrentSentence();
  });

  focusToggleEl.addEventListener("change", function () {
    focusDimming = focusToggleEl.checked;
    renderPassage();
  });

  swatchBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var tint = btn.dataset.tint || "cream";
      document.body.setAttribute("data-paper", tint);
      swatchBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
    });
  });

  sampleBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.dataset.sample;
      sampleBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      if (key === "custom") {
        pasteDrawerEl.hidden = false;
        customTextInputEl.focus();
      } else {
        pasteDrawerEl.hidden = true;
        loadPassage(key);
      }
    });
  });

  loadCustomBtn.addEventListener("click", function () {
    var txt = customTextInputEl.value.trim();
    if (!txt) return;
    pasteDrawerEl.hidden = true;
    loadPassage("custom", txt);
  });

  closeDrawerBtn.addEventListener("click", function () {
    pasteDrawerEl.hidden = true;
  });

  resetBtn.addEventListener("click", function () {
    document.body.setAttribute("data-paper", "cream");
    swatchBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.tint === "cream");
    });
    focusDimming = false;
    focusToggleEl.checked = false;
    speedSelectEl.value = "1";
    settingsMenuEl.open = false;
    pasteDrawerEl.hidden = true;
    sampleBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.sample === "biology");
    });
    loadPassage("biology");
  });

  document.addEventListener("keydown", function (e) {
    var tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select" || tag === "summary") return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    if (e.key === " ") {
      if (tag === "button") return;
      e.preventDefault();
      if (isPlaying) stopPlayback();
      else startPlayback();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (currentDoc && activeSentenceIdx < currentDoc.sentences.length - 1) {
        activeSentenceIdx += 1;
        if (isPlaying) speakCurrentSentence();
        else renderAll();
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (currentDoc && activeSentenceIdx > 0) {
        activeSentenceIdx -= 1;
        if (isPlaying) speakCurrentSentence();
        else renderAll();
      }
    }
  });

  loadPassage("biology");
})();
