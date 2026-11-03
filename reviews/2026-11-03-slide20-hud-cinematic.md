# FCIS26 Slide 20 — fullscreen-to-preview HUD entrance

November 3, 2026.

## Intent
The existing interactive HUD should be the entire slide first. After an immersive hold it must return to the current embedded preview position on the right. Only then should the heading, explanatory text and Copy code / Download HTML / Open app controls enter on the left. Remove the small line about the example being built from an existing HTML file.

## Implementation
- `site/js/steps.js` adds `.hud-scene--cinematic` and removes the exact small caption; the app iframe and other content remain unchanged.
- `site/js/hud-intro.js` determines the destination iframe shell's existing bounding rectangle and computes the translation + scale needed for a viewport-filling start, replaying on slide re-entry and recalculating on resize.
- `site/css/layers.css` holds the preview shell fullscreen for approximately 1.3 seconds and animates it into its original preview over a total 3.9 seconds. Text and practical controls enter from the left after the preview settles, staggered over about 0.6 seconds.
- No simulated screenshot or alternative app is substituted. The same existing iframe is the visual.
- Reduced-motion media preference skips the entrance and shows the completed layout directly.
- The removed caption's factual distinction between a sample HUD and a live Gemini generation remains in the companion guide.

## Validation
- JavaScript syntax parsed for original slide declarations, deck engine, existing preview controller and new intro.
- Executed slide definitions: 28 total. Slide 20 still has zero presenter steps and the ID `hud-result`.
- Copy code, Download HTML and Open app buttons survive unchanged.
- The slide 19 prompt and slide 21 publishing content retain their IDs.
- Confirmed CSS includes both full-viewport to preview and delayed text keyframes.
- Checked that `index.html` loads the new intro controller.
- **Remaining:** No rendered screenshots or physical smart-screen test were possible in this pass, so actual visual cropping / viewport proportions should be checked at presentation resolution.
