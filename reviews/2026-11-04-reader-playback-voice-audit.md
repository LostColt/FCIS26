# FCIS Reader playback and voice audit — November 4, 2026

## Reported problems
The Reader sometimes skips words or fails to highlight them all, and the default voice sounds synthetic.

## Source findings
1. The former sentence parser used one punctuation regular expression. That can split abbreviations, dates and other non-sentence punctuation incorrectly. It did not use locale-aware sentence boundaries.
2. The former speech engine sent entire sentences to `speechSynthesis`. Some browser speech implementations terminate long utterances early or lose callbacks; there was no piecewise continuation.
3. Word highlighting depended entirely on `SpeechSynthesisUtterance.onboundary`. Browser/voice implementations vary: events may be missing or inaccurate. The app should not invent word timing.
4. Cancellation, navigation and speed/voice changes could leave stale asynchronous callbacks in flight. There was no generation guard.
5. The voice selection defaulted to the first English voice returned by the browser, often a lower-quality voice despite better voices being available.
6. Finishing a text and then returning to the library could reset the completed position, because `stop()` saved `idx=0` after finishing.

## Changes
- Use `Intl.Segmenter` with a safe fallback; handle common honorifics as a subsequent merge pass.
- Divide each sentence into speech fragments near 190 characters, preferring a whitespace boundary; retain exact sentence text and original sentence-level progress.
- Preserve boundary-highlight offsets relative to original sentences across fragments; keep the sentence highlight as a fallback where the speech engine supplies no word timing.
- Add a monotonically increasing generation token so stale callbacks from canceled speech cannot advance new playback. Restart cleanly after voice/speed/position changes.
- Prefer voices labelled natural, neural, enhanced or premium, with a secondary ranking for known modern voices; preserve explicit voice selection. All voice availability is browser/OS-specific.
- Keep completed-library position when exiting a finished text.
- Add a concise voice availability and privacy explanation. Some browser/system voices can use online speech processing. No new TTS API, accounts, keys, analytics or application network requests were added.

## Plan followed and verification
1. Audit original sentence parsing, playback lifecycle, word highlighting and voice enumeration.
2. Revise the one-file Reader without changing its saved-text format or removing controls.
3. Parse its actual inline JavaScript successfully.
4. Unit-test split/chunk behavior with punctuation, honorifics, 3.14 decimals, 36 short sentences and an unpunctuated long passage. Every test preserved the full normalized word stream, with no dropped words.
5. Simulate a browser's speech synthesis and DOM to run a 27-fragment passage through every end event. Confirm the preferred neural voice, natural completion and persistence of finished reading position on return to library.

## Limitations and follow-up
- Speech naturalness is limited by the voices installed/exposed on the user's actual browser/device; no offline code-only change guarantees human-quality speech on every platform.
- Word-level highlighting cannot be exact when a browser voice does not report valid boundary events. The app maintains sentence-level context rather than fabricating timing.
- Real listening tests on the intended Chrome, Edge, Safari and school devices, especially with long passages and quick voice changes, remain necessary.
- A future optional premium neural TTS service would require a privacy, cost, and server/security design; it is deliberately **not** included in this offline/standalone reader.
