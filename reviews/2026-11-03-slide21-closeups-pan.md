# FCIS 2026 — slide 21 three control close-ups, focus pan and pullback

Date: November 3, 2026

## User-requested presentation behavior
- Replace three nearly full application screenshots with **three columns of tight UI close-ups**: Gemini Export dropdown, Google Sites Publish button, and Publish dropdown.
- Focus column 1 first, with an illustrative click and open dropdown; on NEXT pan to column 2 and indicate Publish; on NEXT pan to column 3 and reveal publish menu; on final NEXT **pull back** to all three columns together. Subsequent NEXT advances to slide 22.
- Keep only essential Google Workspace versus Download code note at the bottom. Detailed procedures stay on the resource guide.

## Implementation
- Slide 21 remains `id: publish` and becomes `add(6,3,...)` so the presenter has 3 controlled internal swipes and a fourth to move on.
- Three simulated but screenshot-informed interface close-ups are built from HTML/CSS (no giant screenshots).
- CSS translates/scales a single three-column rail to focus each control successively; the last step removes transforms and restores all columns.
- Distinct cursor and popover animations accompany the focus. Reduced-motion support removes transitions and click animations. The stage clips non-focused overflow and adapts to shorter screens.
- The small bottom note links to `guide.html#share` and keeps the Download code fallback.
- Removed the former large recreated-screen styling section.

## Source audit
- JavaScript parses and slide definitions execute to **28 total slides**.
- Slide 21: id `publish`, exactly **three** internal steps, three close-up columns, and three staged markers.
- CSS has first, second, third focus states and a final all-columns pullback.
- The following slide remains `dashboard`, with unchanged slide count.
- The old full application mockup markup is absent from slide 21.
- Remaining limitation: animated browser screenshots and physical smart-screen rehearsal have not been performed. The close-ups are CSS recreations guided by the provided screenshots rather than actual embedded captures.
