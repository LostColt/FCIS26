# FCIS slide 19 / Canvas press, typing and smart-screen layout
November 3, 2026

## User feedback
Slide 19's Canvas status was static and easy to miss. The sections of the one message should visibly type with whitespace rather than separator lines. At a smart-screen size, the lower part of the chat may be clipped and the entire message must remain accessible.

## Focused changes
1. Added a visibly pressed Canvas selector, including a brief cursor-click indicator and a selected badge; the initial prompt starts typing after that sequence.
2. Retained a single user-message bubble, with the same three paragraphs and two presenter-advanced reveal stages. New `data-prompt-type` tags use a dedicated `conversation-type.js` controller to type the newly revealed paragraph; previously revealed paragraphs remain intact.
3. Replaced thin horizontal divider lines with ordinary blank paragraph spacing. No model replies were added.
4. Height-scoped the two-column slide using viewport height; reduced header and footer overhead, and adjusted the layout for shorter smart-screen viewports.
5. On each reveal, the controller measures the **full visible text** before typing and shrinks font in small increments when it would overflow. A scrollable chat region is retained as a fallback on unusually small viewports rather than clipping text.
6. Observes reduced-motion preference: full text appears without simulated typing, and Canvas appears selected without motion.

## Source checks
- Existing deck 28 slides; slide 19 has two internal presenter steps and slide 20 remains the working HUD demo.
- Exactly three prompt sections have `data-prompt-type`, and exactly one new paragraph appears on each of steps one and two.
- All slide and typing-controller JavaScript parsed and normal slide declarations executed.
- CSS declares Canvas button press/cursor, zero paragraph rule, and smart-screen height variants.
- The typing script is included by `site/index.html`.
- Slide 18 and slide 20 content untouched.

## Limitations
The repo cannot be checked out directly into the browser-testing container because GitHub network/DNS access is unavailable there; thus this pass verified source/structure, not actual rendered screenshots at a physical smart-screen resolution. The CSS and script are intended to avoid clipping, but an on-device visual check is recommended.
