# Meridian audit, round 2: findings

Run on the site as of commit `8de5aa5` (home hero, Partner With Us button). 15 passes: 5 lenses x 3 tiers. Report only. Nothing has been changed on the site.

**How to read it.** Severity: **Bug** (broken or wrong, fix), **Hurts** (costs visitors), **Polish** (nice to fix), **Decision** (Jax's call). "Evidence" says how I know.

**Coverage and honesty notes**
- Measured on every page at 390 and 1280 px (sizes, tap targets, fonts, links, titles, overflow), at 320 and 768 px (overflow), with JavaScript off, by keyboard, with axe and Lighthouse.
- Looked at by eye this round: home, students, executives, partners, conference and about on a phone; terms and faq on desktop. The other pages were measured but not looked at screen by screen.
- External links cannot be loaded from here. They are listed for Jax at the end.
- Lighthouse ran against a local server with no compression, so weights look larger than production. Production mobile performance was about 85 to 87 last time.
- The research is mostly practitioner writing; where a number comes from a vendor I say so (see `AUDIT-PLAN-V2.md`).

## Top of the list

### Real bugs
1. **About page on a phone: the founder bio is squeezed into a column about 120 px wide**, one or two words per line, hundreds of lines tall. The photo and text sit side by side and never stack. *Evidence: screenshot of `/about/` at 390 px.* (Hurts a lot, easy fix.)
2. **Every page overflows sideways at 320 px** (small phones). The header's Menu button pushes past the edge. `/partners/` and `/conference/` also have a few more elements wider than the screen. *Evidence: scroll width > viewport at 320 px on all pages.*
3. **The Terms page has no `#main` target**, so its "Skip to content" link goes nowhere. *Evidence: link crawl.*
4. **The Terms and Accessibility pages still say "leader(s)".** Terms: three times (code of conduct and sharing). Accessibility: "The leader viewer on the home page" (the viewer is now "Executives Joining Us"). *Evidence: text search.*
5. **The contact form option says "Company or brand".** You questioned the word "brand" earlier. *Evidence: form text.*
6. **The home page has no canonical link tag.** Every other page does. *Evidence: page source.*
7. **The run of show is public on /students/ but hidden on /conference/ in production** (`approved: false`). Two pages that should match don't.

### Biggest hurts
- **Phone Menu hides all five tabs** and is only 34 px tall. With JavaScript off, the tabs are hidden and the Menu button does nothing. NN/g found hidden navigation hurts discovery.
- **Reading size.** Body text is 15 px (below 16) on cards on five pages, and 11.5 to 14.5 px on Terms.
- **13 to 16 different font sizes on every page** (guidance: about three levels).
- **Long pages.** Phone page lengths: Students 10.3 screens, Conference 9.9, Partners 9.8, Home 9.7, Speakers 8.1, About 8.9.
- **Tap targets:** Register 36 px tall, Menu 34 px, logo 38 px, breadcrumb links 15 px tall, text links 18 to 25 px.
- **The first meaningful text is delayed** by the fade-in animation (details in E).
- **An executive's contradiction:** the Students page says each executive introduces themselves in under a minute; the Executives page says introductions are optional and take a few minutes.
- **No post-event mode.** After November 14 every Register button still says Register.

### Decisions for Jax (summary; each is detailed below)
1. Phone navigation: keep Menu, scrolling row of tabs, or bottom bar.
2. The About H1 is a sentence in sentence case. Title-case it or leave.
3. Turn on the schedule on /conference/ (consistent with /students/)?
4. How executives and investors find their way (investor link, traction on home).
5. Hero headline "CEOs Come to You." addresses students; an executive reading it is described, not invited. Keep?
6. The tan chip labels above headings: keep or drop.
7. Partner link list (below) needs a click-through.

---

## Lens A: Jax's critiques

### Pass 1: Tier 1, front door

| Page | Finding | Severity | Evidence | Fix | Needs Jax |
|---|---|---|---|---|---|
| Partners | H1 "Partner with Meridian." has lowercase "with", while elsewhere it is "With" ("Who Is Working With Us"). | Polish | Heading check | Pick one rule for four-letter words and apply it everywhere | Yes |
| Conference | The schedule heading reads "The day" in sentence case, with a "Draft" tag (visible on the preview server only). | Polish | Heading check | "The Day" | No |
| About | H1 is a full sentence in sentence case. | Decision | Heading check | Title-case it, or accept as a statement | Yes |
| Home | "Where Would You Like to Start?" cards repeat "The conference is free, the executives come to you…". Also home no longer says it is free anywhere else. | Decision | Text dump | Say where on home that it is free, or leave | Yes |
| Students, Executives, Partners | New two-column white card grids ("On the Day and After", "Who We Are", "Working With Meridian"). Unrequested styling (white fill, tan border). | Decision | Visual | Keep, or switch to plain rows | Yes |
| All | Tan chip labels above headings ("For Students", "The Idea") are decoration you never asked for (the chip box overhangs the left margin by 8 px). | Decision | Visual | Keep, or drop the chip and keep the words | Yes |
| Home | Squiggly lines again run through the headline (restored on request). You called this jumbled earlier. | Decision | Visual | Keep or move to the bottom strip | Yes |
| Footer | The column heading "Company". | Polish | Text dump | Rename "Meridian" or leave (it is a nav group, not copy) | Yes |

### Pass 2: Tier 2, depth pages

| Page | Finding | Severity | Evidence | Fix |
|---|---|---|---|---|
| Demo Day | Five headings in sentence case ("What it is", "Who can present", "How we choose", "What to expect", "How to apply"). | Polish | Heading check | Title-case |
| Partner Directory | "Community organizations" heading in sentence case. | Polish | Heading check | Title-case |
| Directory, Executives Joining, Past Events, Team | Search descriptions are 34 to 60 characters (thin). | Polish | Page source | Write one useful sentence each |

### Pass 3: Tier 3, foundation

| Page | Finding | Severity | Evidence | Fix |
|---|---|---|---|---|
| Privacy, Terms, Accessibility | Headings in sentence case ("What we collect", "1. The event"). | Polish | Heading check | Title-case |
| Privacy, Terms, Accessibility | Use the old style: mono uppercase label, narrow column, small type. Looks like a different site. | Hurts | Screenshot of /terms/ | Move to the same styles as the rest |
| Terms | Still shows "Last updated August 16, 2026" and "in Los Angeles"; you removed the date from the footer. | Decision | Screenshot | Remove the date line? |
| Terms | Section 7 "Attendee directory" and "leaders" wording (3). Needs counsel and wording alignment with what the site now promises. | Decision | Text | Counsel review |
| 404 | Title "Page Not Found | Meridian". Good. | None | | |
| Tab titles | All title case. | Pass | | |

---

## Lens B: executive, investor and partner

### Pass 4: Tier 1

| Page | Finding | Severity | Evidence | Fix | Needs Jax |
|---|---|---|---|---|---|
| Home | "CEOs Come to You." speaks to students about CEOs. An executive reading it is described, not invited. The subhead rescues it. | Decision | 5-second read | Keep, or add a line for executives near the hero | Yes |
| Home | No traction on the first two screens. The stat row was removed; last year's 150 students, 23 executives and 9 internships sit near the bottom ("The First Meridian"). Investors look for proof early. | Hurts | Screenshot order | Move a single proof line (counts or last year) near the top | Yes |
| Home | Executives photos appear about 1.7 screens down on a phone. Good, inside the two-screen rule. | Pass | | | |
| Executives | Six dense cards plus a long names list. The strong skeptic FAQ is at the bottom. | Hurts | Screenshot | Move the FAQ up, or cut cards to four | Yes |
| Executives, Partners | Claims for Jax to be sure of before outreach: "400 students", "ties to each campus's administration and student body", "set the challenge", students "placed on teams with people from schools they would not normally meet". | Decision | Text | Confirm each is true as written | Yes |
| Partners | The "Proof" section is one run-on paragraph of five names and titles, and repeats George Leis twice. | Hurts | Screenshot | Show as a short list with photos, or fold into the stat cards | No |
| Partners | Proof sits low (after four sections). | Polish | Screenshot | Move up | Yes |
| Conference | Schedule hidden in production, so an executive cannot see the day. | Decision | Source | Turn on | Yes |
| All | Investors: no path from home or the footer. Only the contact page has an Investors box. | Hurts | Link crawl | Add "Investors" under the Contact column in the footer | Yes |

### Pass 5: Tier 2

| Page | Finding | Severity |
|---|---|---|
| Team | Seven people in two phone columns; Elijah sits alone in the last row. Bios are facts. | Polish |
| Team | Several members have no school or major beyond what you gave; Elijah shows "Community college, Senior". Fine. | None |
| Executives Joining | Pager shows "1 of 22" while the page says 31; the other 9 are under "Also joining (9)". The two numbers confuse a skeptic. | Hurts |
| Directory | Names only now, each linked. Five links unverified (below). | Decision |
| Contact | Form has four required fields (name, organization, email, message). Investors option added. | OK |

### Pass 6: Tier 3

| Finding | Severity |
|---|---|
| Legal pages look and sound different from the rest; the first impression of a forwarded link is the home page, which is fine. | Polish |
| Privacy uses "may" twice (legal language, fine). | None |
| Share previews and titles are unique and descriptive on all pages (Google has no length rule). | Pass |

---

## Lens C: the curious student

### Pass 7: Tier 1

| Finding | Severity | Evidence | Fix |
|---|---|---|---|
| Taps from home to Register: one (hero) or the header. | Pass | Measured | |
| Students page explains the day clearly now (timeline). Hours wrap onto two lines on a phone ("10:30 / AM"). | Polish | Screenshot | Show "10:30" and put AM/PM in smaller text |
| Home mentions nothing about what happens on the day; a student must open Students. | Decision | Screenshot | Add one line, or leave |
| The home page does not say it is free, and the hero no longer says it. The Students page does. | Decision | Text | Say it once on home |
| After the Register tap, the form opens in a new tab with no "what happens next" page on the site. | Polish | Link | Optional |
| **No post-event state.** From November 15, Register buttons, "Registration closes Nov 7", and "November 14" copy would be wrong. | Bug (timed) | Code | Build a post-event mode before Nov 14 |

### Pass 8: Tier 2

| Finding | Severity |
|---|---|
| FAQ: five groups of questions; accordions are right for this. Questions are sentence case (kept). | Pass |
| Demo Day tells a student how to apply; headings not title case (see Pass 2). | Polish |
| Team feels like peers (school, year, major). | Pass |

### Pass 9: Tier 3

| Finding | Severity |
|---|---|
| Legal pages are the hardest to read (small mono labels, 11.5 to 14.5 px). | Hurts |
| The 404 page offers links back. | Pass |

---

## Lens D: my own reasoning

### Pass 10: Tier 1

| Finding | Severity | Evidence |
|---|---|---|
| **Contradiction:** Students timeline: "Each executive introduces themselves to the room in under a minute." Executives page: "Short introductions, if you would like them. A few minutes…". | Bug | Text |
| Times: doors 10:30, welcome 11:00, conference stated as 11 AM to 3 PM, close 3:00 (timeline ends at 2:40 "Closing"). Consistent once you read it, but the timeline omits the 3:00 end. | Polish | Text |
| Numbers: 31 confirmed (22 photos + 9 names), 18 live partners, 400 seats. All consistent across pages. | Pass | Data |
| Internal URLs still say `/leaders/` and `/speakers/` while the copy says "executives". | Polish | Links |
| Dead code and CSS: unused components (`WhatMeridianDoes`, `NameNote`, `SlimConferenceBand`), unused classes (`.m-band-dark`, `.m-closing-dark`, `.m-whatcard`, `.m-chips`, `.m-titleband`, `.m-proof`), partner descriptions no longer shown but kept in the data, and a large pile of `!important` overrides in `site.css`. | Polish | Code |
| Stale code comments describing sections that no longer exist. | Polish | Code |
| Footer "Press" and "Instagram" links fine. | Pass | |

### Pass 11: Tier 2

| Finding | Severity |
|---|---|
| Five partner links I could not load (below). | Decision |
| Fifteen partners with status `check` are hidden; confirm none should be live. | Decision |
| Carlos Gonzales' bio uses the "Southern California State University" name you gave me. | Verify |

### Pass 12: Tier 3

| Finding | Severity | Evidence |
|---|---|---|
| Structured data valid: Organization (home), Organization + Event (conference), Organization + FAQPage (faq). | Pass | Parse |
| `robots.txt` still disallows `/dev/` (the page is gone). | Polish | File |
| Sitemap lists all pages. | Pass | File |
| Canonical missing on home (above). | Bug | Source |
| Focus outlines present on all controls; keyboard order on home is logical. | Pass | Keyboard run |

---

## Lens E: web design

### Pass 13: Tier 1

| # | Finding | Severity | Evidence |
|---|---|---|---|
| 1 | **Fade-in delays the first text.** Lighthouse's largest paint on the phone is the "What Is Meridian?" paragraph, with 874 ms of render delay from the scroll-reveal fade. Mobile performance 82 to 89 locally, LCP 3.8 to 4.9 s (good is 2.5 s). | Hurts | Lighthouse |
| 2 | **Render-blocking CSS file** (52 KB) with a lot of dead rules; images larger than shown (about 246 KB of savings); home 814 KB locally. | Hurts | Lighthouse |
| 3 | **Type scale:** 13 to 16 sizes per page. | Hurts | Measured |
| 4 | **Body text 15 px** on cards (conference, partners, speakers, students, team) and 11.5 to 14.5 px on Terms. | Hurts | Measured |
| 5 | **Tap targets under 44 px:** Register 36, Menu 34, logo 38, buttons 36 to 43, breadcrumb links 15, text links 18 to 25. WCAG 2.2 AA minimum is 24 px (breadcrumbs fail). | Hurts | Measured |
| 6 | **Hero:** on a phone, two buttons plus Register, Menu and three underlined links in the first view. Squint test: Register wins (black on off-white). Good. | Pass, with a note | Visual |
| 7 | **Competing dark buttons.** The three "For Students / Executives / Partners" buttons are dark brown, the same weight as black Register. Register is no longer the only dark button on the page (von Restorff effect). | Polish | Visual |
| 8 | **Long, same-looking card stacks.** Six identical cards in a column on Executives, six on Partners, four more above them. Headings are long. | Hurts | Screenshot |
| 9 | **Partner list:** ten full-width cards on a phone, each with a thick underlined name. About 1.2 screens for ten names. | Hurts | Screenshot |
| 10 | **Underline density.** Every partner and team name has a 2 px gold underline; in-text links too. | Polish | Visual |
| 11 | **Centered hero on a phone**, then left-aligned everything else. A four-line centered subhead reads slower than left-aligned. You asked for the centering. | Decision | Visual |
| 12 | **About page founder column bug** (see bugs). | Bug | Screenshot |
| 13 | **"Where Would You Like to Start?"** is three tall cards that duplicate the tab bar. | Decision | Screenshot |

### Pass 14: Tier 2

| # | Finding | Severity |
|---|---|---|
| 1 | Executives pager: controls are clear, but "1 of 22" does not say it is four people per page, and 31 vs 22 confuses (see Pass 5). | Hurts |
| 2 | FAQ accordion: fine, 66 to 97 px tap height. | Pass |
| 3 | Stat cards (31, 18, In the press) are compact and linked; good. | Pass |
| 4 | Breadcrumb trail links are 15 px tall. | Hurts |
| 5 | The Students timeline wraps the hour onto two lines at 390 px. | Polish |
| 6 | Conference sub-navigation uses small mono uppercase (old style) and scrolls sideways. | Polish |

### Pass 15: Tier 3

| # | Finding | Severity |
|---|---|---|
| 1 | axe: zero violations on all 16 pages at both widths. Lighthouse accessibility 100, best practices 100, SEO 100. | Pass |
| 2 | No layout shift (CLS 0). | Pass |
| 3 | JavaScript off: content shows, tabs do not. | Hurts |
| 4 | Focus outline 2 px solid everywhere. | Pass |
| 5 | Reduced-motion respected. | Pass |
| 6 | 320 px overflow (see bugs). | Bug |

---

## Ranked fix list

**Ship now (bugs, small):**
1. About: stack the founder photo and bio on phones.
2. 320 px overflow: shrink the header row (Register and Menu) on small phones.
3. Terms: add `id="main"`; replace "leaders" (needs counsel check) and fix Accessibility wording.
4. Contact form: "Company or brand" to "Company".
5. Home: add the canonical tag.
6. Resolve the introductions contradiction (one answer on both pages).
7. Title-case the remaining headings (Demo Day, Directory, Conference "The Day", legal pages, Partners H1).

**Next (hurts):**
8. Don't fade in anything visible in the first screen; cut dead CSS; resize headshots.
9. Raise phone text to 16 px; reduce to about six type sizes; enlarge tap targets (Register and Menu 44 px, breadcrumb links 24 px at least).
10. Make whole partner cards the link and tighten the list.
11. Post-event mode.
12. Bring one proof line to the top of home; add Investors in the footer.
13. Shorten the card stacks on Executives and Partners.

**Decisions:** listed in the summary at the top.

## Links for Jax to click

NSBE UCLA `https://nsbebruins.wixsite.com/nsbe` (2020 listing), MANA de San Diego `https://www.manasd.org` (2019 letter), Iovine and Young `https://iovine-young.usc.edu`, Undergraduate Research Center `https://ugresearch.ucla.edu`, LA Clippers Foundation `https://www.clippers.com` (not the foundation's own page). The others came back from search results.
