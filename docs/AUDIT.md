# Meridian site audit: 12 passes

Four lenses (A: Jax's compiled critiques in `FEEDBACK.md`, B: executive/partner, C: curious student, D: my own reasoning) across three tiers (1 home, conference, students, speakers, partners, about, team; 2 leaders, demo day, FAQ, contact, past; 3 legal, 404, SEO, performance, accessibility).
Status: FIXED (this pass), OPEN (needs Jax or a later pass).

## Tier 1
**A. Jax's critiques**
- Colors bland on home: FIXED. Hero glow, full-width tan band, white stat cards, espresso leaders band, dark closing box. (Departs from the earlier "no dark band on home" rule, per your newest direction. Easy to revert.)
- Header boxes jagged/cheap, need slight shine: FIXED. One pill nav, tan gradient with inset highlight, white active pill; shine on buttons and cards.
- Register larger: FIXED (padding 15x30, 13px).
- "Los Angeles" above "Reverse gatekeeping": FIXED (removed). Also removed duplicate eyebrows above headings that said the same thing (home Meridian/Leaders/The team/Partners, About, Partners).
- Carlos Gonzales has no description: OPEN. I have no verified facts; paste his LinkedIn text and I will write it.
- "One box, like the one in the middle, not at the top of the tab": OPEN, ambiguous. I read it as one container around the tabs (done). Tell me if you meant something else.
**B. Executive/partner**
- Home press section duplicated the stat tile and footer: FIXED (section removed).
- Partner proof: "Thirty to fifty" range on LA Promise Fund: FIXED ("Bringing students from two cohorts.").
- OPEN: "About 150" and schedule "Times may shift" are hedges; confirm exact figures.
**C. Student**
- Premise paragraph on /conference and /speakers was a giant display size: FIXED (reading size).
- The standalone "The idea" was repeated on Home and About; merged into "What is Meridian?" on home: FIXED.
- "The first Meridian" link label confusing on home: FIXED ("More from December 2025").
**D. My own reasoning**
- Too many sections saying the same thing on home: FIXED (idea + press removed).
- OPEN: /about still has "The name" and "What we do" sections, which you asked removed from home only. Say if you want them gone there too.
- OPEN: privacy page should be aligned with Terms (sharing what you're looking for with attending leaders). Needs counsel; not changed.

## Tier 2
**A.** FAQ was a bland list: FIXED (each question is its own white card). Contact fields unchanged.
**B.** Leaders page lists confirmed leaders only; Bryan Martin's organization is blank: OPEN.
**C.** Students page has no at-a-glance line (date, place, time, free): OPEN, next pass.
**D.** Demo day/schedule stay hidden in production until approved: unchanged.

## Tier 3
**A/B.** Terms still says "California 501(c)(3) nonprofit": OPEN (legal text, not edited by me). Privacy/accessibility are drafts needing counsel review.
**C.** 404, sitemap, robots, share previews, favicons: done earlier.
**D.** Axe: zero violations on all 16 pages, desktop and mobile, after this pass (dark-band contrast fixed). Lighthouse mobile performance is about 85-90 (target 95 not reached; React/Next bundle). `/dev/palettes` still exists (noindex); remove when you pick a palette.

## Not done yet
Post-event mode for Register, /students at-a-glance line, /speakers event time, /about founder bio paragraph split, /partners proof strip as list. Say go and I will do them.
