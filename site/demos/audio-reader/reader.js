(function () {
  "use strict";

  var SAMPLES = {
    biology: {
      title: "Cellular Respiration & The Proton Gradient",
      source: "Uploaded PDF · AP Biology Unit 3 Handout (p. 4) · Mock data",
      sentences: [
        "Most textbooks draw the mitochondrion like a static kidney bean, but inside a living cell it behaves more like a hydroelectric dam.",
        "As electrons travel down the inner membrane chain, protein complexes pump hydrogen ions into the narrow intermembrane space.",
        "That crowded reservoir of protons creates both a chemical gradient and a voltage difference across the membrane.",
        "When protons rush back through the turbine of ATP synthase, the enzyme physically rotates and snaps a third phosphate group onto ADP.",
        "Without oxygen waiting at the bottom of the chain to catch spent electrons, the entire turbine backs up within seconds.",
        "When you sprint up the stadium stairs and feel your quads burn, your muscle cells have switched to lactic acid fermentation just to keep glycolysis running."
      ],
      initialBookmark: 3
    },
    history: {
      title: "Federalist No. 10: The Mischiefs of Faction",
      source: "Uploaded PDF · Primary Source Packet (1787) · Mock data",
      sentences: [
        "Among the numerous advantages promised by a well-constructed Union, none deserves to be more accurately developed than its tendency to break and control the violence of faction.",
        "By a faction, I understand a number of citizens, whether amounting to a majority or a minority of the whole, who are united and actuated by some common impulse of passion, or of interest, adverse to the rights of other citizens.",
        "There are two methods of curing the mischiefs of faction: the one, by removing its causes; the other, by controlling its effects.",
        "Liberty is to faction what air is to fire, an aliment without which it instantly expires.",
        "But it could not be less folly to abolish liberty, which is essential to political life, because it nourishes faction, than it would be to wish the annihilation of air, which is essential to animal life, because it imparts to fire its destructive agency."
      ],
      initialBookmark: 3
    },
    essay: {
      title: "Student Draft: The Sunday Clock Table",
      source: "Pasted Draft · Maya Lin (Student A) · Mock data",
      sentences: [
        "Every Sunday my grandfather spread a green felt cloth over the kitchen table and handed me the bent brass tweezers.",
        "At twelve, I thought fixing a clock meant tightening every screw until nothing moved.",
        "Two seconds after I wound the mainspring on a 1968 Black Forest cuckoo clock, the escapement tooth snapped in my hand.",
        "My grandfather didn't scold me; he just held the brass wheel up to the window light so I could see where the metal had fatigued.",
        "Four years later, when our robotics flywheel kept jamming ten minutes before regional qualifiers, I didn't reach for a wrench—I listened for the tick that didn't belong."
      ],
      initialBookmark: 2
    }
  };

  var currentSampleKey = "biology";
  var currentDoc = null;
  var activeSentenceIdx = 0;
  var activeWordIdx = -1;
  var isPlaying = false;
  var focusDimming = false;
  var bookmarks = [];
  var fallbackTimer = null;

  var synth = window.speechSynthesis || null;
  var voices = [];

  var sampleBtns = document.querySelectorAll(".sample-btn");
  var pasteDrawerEl = document.getElementById("paste-drawer");
  var customTextInputEl = document.getElementById("custom-text-input");
  var fileUploadEl = document.getElementById("file-upload");
  var loadCustomBtn = document.getElementById("load-custom-btn");
  var closeDrawerBtn = document.getElementById("close-drawer-btn");

  var playPauseBtn = document.getElementById("play-pause-btn");
  var prevSentBtn = document.getElementById("prev-sent-btn");
  var nextSentBtn = document.getElementById("next-sent-btn");
  var stopBtn = document.getElementById("stop-btn");
  var speedSelectEl = document.getElementById("speed-select");
  var voiceSelectEl = document.getElementById("voice-select");
  var focusToggleBtn = document.getElementById("focus-toggle");
  var swatchBtns = document.querySelectorAll(".swatch-btn");
  var resetBtn = document.getElementById("reset-btn");

  var docSourceEl = document.getElementById("doc-source");
  var docProgressEl = document.getElementById("doc-progress");
  var docTitleEl = document.getElementById("doc-title");
  var sentencesFlowEl = document.getElementById("sentences-flow");

  var ttsStatusEl = document.getElementById("tts-status");
  var nowReadingBoxEl = document.getElementById("now-reading-box");
  var wordProgressBarEl = document.getElementById("word-progress-bar");
  var bookmarkBtn = document.getElementById("bookmark-btn");
  var bookmarkCountEl = document.getElementById("bookmark-count");
  var bookmarkListEl = document.getElementById("bookmark-list");

  function splitIntoSentences(rawText) {
    var cleaned = rawText.replace(/\s+/g, " ").trim();
    if (!cleaned) return ["Paste or upload text to hear it read aloud."];
    var parts = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
    return parts
      ? parts.map(function (s) {
          return s.trim();
        }).filter(Boolean)
      : [cleaned];
  }

  function populateVoices() {
    if (!synth) return;
    voices = synth.getVoices() || [];
    voiceSelectEl.innerHTML = '<option value="">System Default Voice</option>';
    voices.forEach(function (v, idx) {
      var opt = document.createElement("option");
      opt.value = String(idx);
      opt.textContent = v.name + " (" + v.lang + ")";
      voiceSelectEl.appendChild(opt);
    });
  }

  if (synth) {
    populateVoices();
    if (typeof synth.onvoiceschanged !== "undefined") {
      synth.onvoiceschanged = populateVoices;
    }
  }

  function loadPassage(key, customText, customTitle) {
    stopPlayback();
    currentSampleKey = key;

    if (key === "custom") {
      var sentences = splitIntoSentences(customText || "");
      currentDoc = {
        title: customTitle || "Custom Pasted Reading",
        source: "Student Custom Text · Local Browser Reader · Mock data",
        sentences: sentences
      };
      bookmarks = [
        {
          sentenceIdx: 0,
          text: sentences[0]
        }
      ];
    } else {
      var preset = SAMPLES[key] || SAMPLES.biology;
      currentDoc = {
        title: preset.title,
        source: preset.source,
        sentences: preset.sentences.slice()
      };
      var bmIdx = preset.initialBookmark || 0;
      bookmarks = [
        {
          sentenceIdx: bmIdx,
          text: preset.sentences[bmIdx]
        }
      ];
    }

    activeSentenceIdx = 0;
    activeWordIdx = -1;
    renderAll();
  }

  function renderPassage() {
    if (!currentDoc) return;

    docSourceEl.textContent = currentDoc.source;
    docTitleEl.textContent = currentDoc.title;
    docProgressEl.textContent =
      "Sentence " +
      (activeSentenceIdx + 1) +
      " of " +
      currentDoc.sentences.length;

    sentencesFlowEl.innerHTML = "";
    sentencesFlowEl.classList.toggle("focus-dimming", focusDimming);

    currentDoc.sentences.forEach(function (sentText, sIdx) {
      var sentSpan = document.createElement("span");
      sentSpan.className =
        "sentence-node" + (sIdx === activeSentenceIdx ? " is-active" : "");
      sentSpan.dataset.index = String(sIdx);
      sentSpan.tabIndex = 0;
      sentSpan.setAttribute("role", "button");
      sentSpan.setAttribute(
        "aria-label",
        "Sentence " + (sIdx + 1) + ": " + sentText
      );

      var words = sentText.split(/\s+/);
      words.forEach(function (word, wIdx) {
        var wSpan = document.createElement("span");
        wSpan.className =
          "word-token" +
          (sIdx === activeSentenceIdx && wIdx === activeWordIdx
            ? " is-spoken"
            : "");
        wSpan.textContent = word;
        sentSpan.appendChild(wSpan);
        if (wIdx < words.length - 1) {
          sentSpan.appendChild(document.createTextNode(" "));
        }
      });

      sentSpan.addEventListener("click", function () {
        activeSentenceIdx = sIdx;
        activeWordIdx = -1;
        if (isPlaying) {
          speakCurrentSentence();
        } else {
          renderAll();
        }
      });

      sentSpan.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          activeSentenceIdx = sIdx;
          startPlayback();
        }
      });

      sentencesFlowEl.appendChild(sentSpan);
      sentencesFlowEl.appendChild(document.createTextNode(" "));
    });
  }

  function renderSidebar() {
    if (!currentDoc) return;
    var currentSent =
      currentDoc.sentences[activeSentenceIdx] || currentDoc.sentences[0];
    nowReadingBoxEl.textContent = currentSent;

    var words = currentSent.split(/\s+/);
    var pct = 0;
    if (activeWordIdx >= 0 && words.length > 0) {
      pct = Math.min(100, Math.round(((activeWordIdx + 1) / words.length) * 100));
    }
    wordProgressBarEl.style.width = pct + "%";

    ttsStatusEl.textContent = isPlaying
      ? "Speaking (" + speedSelectEl.value + "×)"
      : "Ready · Click play or any sentence";

    playPauseBtn.textContent = isPlaying ? "⏸ Pause Reading" : "▶ Read Aloud";
    playPauseBtn.setAttribute("aria-pressed", isPlaying ? "true" : "false");

    // Bookmarks
    bookmarkCountEl.textContent = bookmarks.length + " saved";
    bookmarkListEl.innerHTML = "";

    bookmarks.forEach(function (bm) {
      var li = document.createElement("li");
      li.className = "bookmark-item";

      var top = document.createElement("div");
      top.className = "bookmark-item-top";

      var labelSpan = document.createElement("span");
      labelSpan.textContent = "Sentence #" + (bm.sentenceIdx + 1);

      var jumpBtn = document.createElement("button");
      jumpBtn.type = "button";
      jumpBtn.className = "bookmark-jump";
      jumpBtn.textContent = "▶ Jump & listen";
      jumpBtn.addEventListener("click", function () {
        activeSentenceIdx = bm.sentenceIdx;
        startPlayback();
      });

      top.appendChild(labelSpan);
      top.appendChild(jumpBtn);

      var p = document.createElement("p");
      p.className = "bookmark-text";
      p.textContent = "“" + bm.text + "”";

      li.appendChild(top);
      li.appendChild(p);
      bookmarkListEl.appendChild(li);
    });
  }

  function renderAll() {
    renderPassage();
    renderSidebar();
  }

  function clearFallbackTimer() {
    if (fallbackTimer) {
      clearInterval(fallbackTimer);
      fallbackTimer = null;
    }
  }

  function stopPlayback() {
    isPlaying = false;
    activeWordIdx = -1;
    clearFallbackTimer();
    if (synth) {
      try {
        synth.cancel();
      } catch (err) {}
    }
    renderAll();
  }

  function advanceSentenceOrFinish() {
    if (!currentDoc) return;
    if (activeSentenceIdx < currentDoc.sentences.length - 1) {
      activeSentenceIdx += 1;
      activeWordIdx = -1;
      speakCurrentSentence();
    } else {
      stopPlayback();
    }
  }

  function startWordPacerFallback(sentenceText, rate) {
    clearFallbackTimer();
    var words = sentenceText.split(/\s+/);
    activeWordIdx = 0;
    renderAll();

    var msPerWord = Math.max(160, Math.round(310 / rate));
    fallbackTimer = setInterval(function () {
      if (!isPlaying) {
        clearFallbackTimer();
        return;
      }
      if (activeWordIdx < words.length - 1) {
        activeWordIdx += 1;
        renderAll();
      } else {
        clearFallbackTimer();
        if (!synth) {
          advanceSentenceOrFinish();
        }
      }
    }, msPerWord);
  }

  function speakCurrentSentence() {
    if (!currentDoc) return;
    clearFallbackTimer();
    if (synth) {
      try {
        synth.cancel();
      } catch (err) {}
    }

    var text = currentDoc.sentences[activeSentenceIdx];
    var rate = parseFloat(speedSelectEl.value) || 1.0;

    // Start visual word-by-word pacer immediately so even browsers without onboundary show smooth word tracking
    startWordPacerFallback(text, rate);

    if (synth && typeof window.SpeechSynthesisUtterance !== "undefined") {
      try {
        var utter = new SpeechSynthesisUtterance(text);
        utter.rate = rate;
        var vIdx = voiceSelectEl.value;
        if (vIdx !== "" && voices[parseInt(vIdx, 10)]) {
          utter.voice = voices[parseInt(vIdx, 10)];
        }
        utter.onboundary = function (event) {
          if (event.name === "word" && typeof event.charIndex === "number") {
            var prefix = text.slice(0, event.charIndex);
            var wordIndex = prefix.trim() ? prefix.trim().split(/\s+/).length : 0;
            activeWordIdx = wordIndex;
            renderAll();
          }
        };
        utter.onend = function () {
          if (isPlaying) {
            advanceSentenceOrFinish();
          }
        };
        utter.onerror = function () {
          // Visual fallback timer will advance
        };
        synth.speak(utter);
      } catch (err) {}
    }
  }

  function startPlayback() {
    isPlaying = true;
    speakCurrentSentence();
  }

  function togglePlayback() {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  }

  // Event listeners
  playPauseBtn.addEventListener("click", togglePlayback);

  prevSentBtn.addEventListener("click", function () {
    if (!currentDoc) return;
    activeSentenceIdx = Math.max(0, activeSentenceIdx - 1);
    activeWordIdx = -1;
    if (isPlaying) {
      speakCurrentSentence();
    } else {
      renderAll();
    }
  });

  nextSentBtn.addEventListener("click", function () {
    if (!currentDoc) return;
    activeSentenceIdx = Math.min(
      currentDoc.sentences.length - 1,
      activeSentenceIdx + 1
    );
    activeWordIdx = -1;
    if (isPlaying) {
      speakCurrentSentence();
    } else {
      renderAll();
    }
  });

  stopBtn.addEventListener("click", function () {
    activeSentenceIdx = 0;
    stopPlayback();
  });

  speedSelectEl.addEventListener("change", function () {
    if (isPlaying) {
      speakCurrentSentence();
    } else {
      renderSidebar();
    }
  });

  voiceSelectEl.addEventListener("change", function () {
    if (isPlaying) {
      speakCurrentSentence();
    }
  });

  focusToggleBtn.addEventListener("click", function () {
    focusDimming = !focusDimming;
    focusToggleBtn.setAttribute("aria-pressed", focusDimming ? "true" : "false");
    focusToggleBtn.textContent = focusDimming
      ? "Focus Dimming: On"
      : "Focus Dimming: Off";
    renderPassage();
  });

  swatchBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.body.dataset.paper = btn.dataset.tint;
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
    loadPassage("custom", txt, "Custom Pasted Passage");
  });

  closeDrawerBtn.addEventListener("click", function () {
    pasteDrawerEl.hidden = true;
  });

  fileUploadEl.addEventListener("change", function () {
    var file = fileUploadEl.files && fileUploadEl.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (e) {
      var content = String(e.target.result || "");
      customTextInputEl.value = content;
      pasteDrawerEl.hidden = true;
      loadPassage("custom", content, "Uploaded: " + file.name);
    };
    reader.readAsText(file);
  });

  bookmarkBtn.addEventListener("click", function () {
    if (!currentDoc) return;
    var exists = bookmarks.some(function (b) {
      return b.sentenceIdx === activeSentenceIdx;
    });
    if (!exists) {
      bookmarks.unshift({
        sentenceIdx: activeSentenceIdx,
        text: currentDoc.sentences[activeSentenceIdx]
      });
      renderSidebar();
    }
  });

  resetBtn.addEventListener("click", function () {
    document.body.dataset.paper = "cream";
    swatchBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.tint === "cream");
    });
    focusDimming = false;
    focusToggleBtn.setAttribute("aria-pressed", "false");
    focusToggleBtn.textContent = "Focus Dimming: Off";
    speedSelectEl.value = "1";
    pasteDrawerEl.hidden = true;
    sampleBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.sample === "biology");
    });
    loadPassage("biology");
  });

  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select") return;

    if (e.key === " " && tag !== "button") {
      e.preventDefault();
      togglePlayback();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSentBtn.click();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSentBtn.click();
    } else if (e.key === "b" || e.key === "B") {
      e.preventDefault();
      bookmarkBtn.click();
    }
  });

  loadPassage("biology");
})();
