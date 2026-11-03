# FCIS26 — slide 20 true fullscreen fix
November 3, 2026

Requested: The HUD must START already full screen and centered, hold stationary for exactly three seconds, then zoom into the existing right-side preview. Only after the move should explanatory text appear. No offscreen starting geometry.

## Cause and correction
The existing HUD was inside the deck's translated track. The earlier animation attempted to make the preview fill the viewport using local transforms; transformed ancestors create a containing block and displaced its start.

The revised controller temporarily places the **same live iframe and its shell** at `document.body` so that `position:fixed;left:0;top:0;width:100vw;height:100vh` is truly viewport-relative. A placeholder reserves the final spot in the slide. After a 3000ms stationary hold, the shell animates in 1400ms to the placeholder's `getBoundingClientRect()`. It is then restored to its original location, original preview CSS is reinstated, and the left-hand copy and export controls appear.

The iframe load/unload controller now keys on the active slide ID (`hud-result`), so moving the same iframe to the body does not prematurely unload its source. Leaving the slide resets the animation and unloads the app. Reduced-motion preference skips movement.

## Source audit
- All changed JavaScript syntax validated.
- Existing slide declarations evaluate to 28 slides.
- Slide 20 keeps ID `hud-result`, zero presenter steps, and the Copy code, Download HTML and Open app controls.
- Verified explicit 3000ms hold, body portal, viewport 0,0 origin, removal of old transform-origin keyframe, active-slide-driven iframe lifecycle, and delayed copy.
- No slide 19, slide 21 or other content changed.

## Limitation
A browser rendered/projector-scale screenshot and interaction QA remain outstanding. This is a source-level correction, not a guarantee about every smart-screen device.
