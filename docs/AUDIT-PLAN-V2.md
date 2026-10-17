# Meridian audit plan, round 2

Nothing in this document has been run yet. It says what each pass will do, the point of view behind it, what research backs it, and how I will check the site. No site changes happen until Jax says go.

Five lenses across three tiers makes **15 passes**.

## 0. Ground rules

These come from `docs/FEEDBACK.md` and the last rounds of feedback. Every pass checks against them.

1. **Facts only.** Nothing uncertain ("roughly", "about", "may"), nothing not confirmed today. Plans in development are said as "we are building".
2. **Show, don't say.** A page does not announce that it is different, or tell the reader what is "in it for them". It lays out the facts and lets the reader see it.
3. **Words.** "Executives", never "leaders". "Creates" hackathon-style events, never "hosts". Never "a company that…". "Get to know", not "meet". At UCLA, not "in Los Angeles". "Executives and students", in that order.
4. **Capitalization.** Every title, heading, label, tab title and button is in title case. Questions in the FAQ and body sentences stay as sentences.
5. **Look.** Bubbles only for the header Register and the tab pill. Everything else is square-cornered. No gold bars, no dark bands, no gradients, no shine, no shadows on cards. Register is black with white text. No unrequested decoration.
6. **Hero.** One primary action (Register). One quieter second action. The first screen sees executives and photos fast.
7. **Never name the building. Never mention nonprofit status. No uncertain hedges.**
8. **Claims about people** (bios) are facts about the person, not their role at Meridian.
9. **Change only what was asked.** Findings go in a list first. Fixes ship only after approval, except obvious bugs (broken link, overflow, contrast failure), which I will list separately.

## 1. The three tiers

| Tier | Pages | Why this tier |
|---|---|---|
| **1: Front door** | Home, Students, Executives (`/speakers/`), Partners, Conference, About | These are where visitors land and decide. |
| **2: Depth** | Team, Executives Joining (`/leaders/`), Demo Day, Partner Directory, Past Events, FAQ, Contact | Where a curious or skeptical visitor goes to check the claims. |
| **3: Foundation** | Privacy, Terms, Accessibility, 404, header and footer on every page, sitemap, robots, titles and descriptions, share previews, favicon, structured data, performance, accessibility, links | What a careful person checks, and what search engines and phones see. |

## 2. The five lenses

### Lens A: Jax's critiques (the compiled-complaints lens)

- **Perspective:** Jax reading his own site. He wants it to read as a company, not an event page. He notices copy that over-explains, decoration he did not ask for, and inconsistency.
- **Question it asks:** Would this make Jax say "that is basic", "that is bland", "I never asked for that", or "that is sentence case"?
- **Method:**
  - Re-read `docs/FEEDBACK.md` and this round's ground rules.
  - Dump every page's text and grep it against the banned-words list.
  - Diff the visual styling against the "things added without being asked" list.
  - Check title case on every heading, label and tab title.
  - Check for one source of truth: the same fact stated the same way everywhere (date, time, venue, counts, names, titles).
- **Research behind it:** the usability literature on consistency. The weak point is evidence on capitalization: [USAGov](https://www.usa.gov/blog/2023/09/making-the-case-for-sentence-case) and [TYPENORM](https://typenorm.com/articles/sentence-case-vs-title-case-in-ui) find no strong readability difference between title case and sentence case. The practical rule they agree on is to pick one and apply it everywhere. Jax picked title case, so the lens enforces it.

### Lens B: Executive, investor and partner (the skeptical outsider)

- **Perspective:** Three people. (1) An executive who clicked a link and has two minutes. (2) A potential investor checking whether the team can execute. (3) A potential partner or sponsor deciding whether to take a meeting.
- **Question it asks:** Within five seconds do I know what this is, who is behind it, who else is involved, and what happens if I reply? What would make me close the tab?
- **Method:**
  - A 5-second read of each Tier 1 page at 1280px and 390px (screenshot, blur, then re-read) to see what stands out.
  - For each page, list the claims a skeptic would test and whether proof sits next to the claim.
  - Check that every page ends with a next step (contact, register or partner).
  - Look for anything that sounds like an event brochure instead of a company.
  - Check the investor path: team, traction, scale, a contact.
- **Research behind it:**
  - Investors judge a startup site on clarity, traction proof and team credibility within seconds ([Waveup](https://waveup.com/blog/how-to-make-your-startup-website-design-investor-friendly/), [startups.com](https://www.startups.com/lexicon/startup-website)). Pre-revenue teams can use signups, partners and pilots as proof.
  - Decision makers scan for value and proof, and a homepage is often forwarded, so it must make sense without explanation ([Merritt Group](https://www.merrittgrp.com/mg-blog/b2b-ux-website-best-practices/)).
  - Named people with photos build more trust than anonymous or logo-only proof ([discoveredlabs](https://discoveredlabs.com/blog/social-proof-and-trust-signals-for-conversion-rate-optimization-implementation-and-impact)). Proof placed next to the call to action matters most.
  - Credibility comes largely from looking professional and from verifiable detail, per the [Stanford Web Credibility Project](http://credibility.stanford.edu/credlit.html).
  - Practitioners treat a dated or sloppy site as a sign of a team that misses details.
- **Caveat:** nearly all of this is practitioner writing, not controlled studies. I will treat it as a checklist of hypotheses, not as proof.

### Lens C: The curious student (and the wanderer)

- **Perspective:** Three students. (1) A student before the conference deciding whether to sign up. (2) A student who clicked a link and is wondering what to do. (3) A student after November 14 who wants to know what next.
- **Question it asks:** Is this for me, is it real, what does it cost, what do I do, what happens on the day, and what happens after?
- **Method:**
  - Walk the three journeys on a phone-width screen, following only what is on screen.
  - Count taps from landing to Register.
  - Read the Students page as a first-timer: is the day clear, is anything scary, are the benefits concrete?
  - Check the post-event state: nothing should read as a dead event after November 14.
  - Check language level: short sentences, no jargon.
- **Research behind it:**
  - Prospective students rely heavily on institutional websites (91% in [RNL's 2025 E-Expectations](https://learn.ruffalonl.com/rs/395-EOG-977/images/2025_E-Expectations_Report.pdf?version=0)). Their top frustrations are hard-to-find information and hard-to-use navigation. 39% want to hear current students share experiences.
  - Event registration pages convert best with a single goal, date, time and place near the top, a short form, and proof that people like the visitor are going ([Guidebook](https://www.guidebook.com/post/event-registration-landing-page-tips), [Involve.me](https://www.involve.me/blog/events-landing-page-optimization), [Attendir](https://attendir.com/blog/event-landing-page-optimization)).
  - More than half of event sign-ups are said to happen on phones (Involve.me, vendor figure), so the phone walk comes first.
  - Gen Z research is thin and mostly about consumer behavior. About half independently verify what they read ([Raptive via PR Newswire](https://www.prnewswire.com/news-releases/new-gen-z-research-reveals-a-shift-toward-credible-expert-driven-open-web-content-302350718.html)). One study of Gen Z university students found clarity and function rated above trendy design ([MSI Journal](https://msijournal.com/the-website-through-gen-z-eyes/)).
- **Caveat:** no good evidence on student sign-up behavior specifically. The walk-through carries the weight.

### Lens D: My own reasoning (the builder's skeptic)

- **Perspective:** Me, as the one who built it, reading with fresh eyes for what Jax has not mentioned.
- **Question it asks:** What is wrong that nobody has said? What contradicts itself? What would break?
- **Method:**
  - Logic pass: does every sentence follow from confirmed facts, and does any page contradict another (times, counts, who, where)?
  - Claim audit: every number and named person traced to the data files and to what Jax told me.
  - Link audit: every internal link resolves, every anchor exists, every external link is flagged for Jax to click (the sandbox cannot load external sites).
  - Code and content hygiene: unused components, stale comments that say things the site no longer says, dead data.
  - Failure modes: JavaScript off, slow phone, long names, empty states, small phones at 320px.
  - The known open items list in section 5.
- **Research behind it:**
  - [NN/g: users scan; 79% always scan a new page, 16% read word by word](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/). Concise, scannable text measured 124% better usability in their test, though the study is old (1997).
  - [WCAG 2.2](https://www.audioeye.com/post/whats-new-with-wcag-2-2/): AA includes target size (24px minimum), focus not obscured by sticky headers, and dragging alternatives.

### Lens E (new): Web design: usability and appearance

- **Perspective:** A designer and usability researcher looking only at how the page works and looks: where the eye goes, what a thumb can hit, what is clear, what feels polished.
- **Question it asks:** Where does a visitor look first? Where do they click? Does the page guide them there? Is anything harder than it should be, or just not good-looking?
- **Method (measurable where possible):**
  1. **First impression test.** Screenshot every Tier 1 page at 390 and 1280. Blur, then shrink to a thumbnail. What stands out? Does the primary action win the "squint test"?
  2. **Fixation map by reasoning.** Using the research below, mark where eyes land first (top-left headline, large faces, high-contrast buttons) and check that the order matches what we want: headline, then proof (executives), then Register.
  3. **Action count.** Count visible buttons and links in each first screen and each section. Target: one primary action, one quiet second action.
  4. **Hierarchy audit.** Count distinct font sizes (target: three on a page) and weights; check that heading spacing groups content correctly.
  5. **Tap targets.** Measure every interactive element's bounding box on a phone. Flag anything under 44px tall, or closer than about 8px to another.
  6. **Reading comfort.** Measure characters per line (target 45 to 75), body size (16px or more), line height (1.4 to 1.6), contrast (4.5:1).
  7. **Page length.** Count screens per page on a phone and flag long runs with nothing new.
  8. **Navigation.** Item count, label clarity, the mobile menu.
  9. **Motion.** Check the reveal-on-scroll and slide animations for jank and reduced-motion handling.
  10. **Speed.** Lighthouse on mobile and desktop: LCP, CLS, INP-proxy, total weight.
- **Research behind it (with honest confidence levels):**

| Topic | What the research says | Confidence | What it means here |
|---|---|---|---|
| First impressions | Visual appeal is judged in about 50 ms and correlates across 50 and 500 ms ([Lindgaard et al. 2006](https://www.semanticscholar.org/paper/Attention-web-designers:-You-have-50-milliseconds-a-Lindgaard-Fernandes/f9715b117c57d4e7064afe1c1cb95d5bf4cc1831)). It measured appeal, not trust or sales. One secondary source reports that low visual complexity plus familiar layout wins first impressions ([Tuch et al. 2012, via blog](https://boostbery.com/insights/the-psychology-of-first-impressions-what-your-homepage-says-in-50-milliseconds/)). | High for the 50 ms finding, medium for the rest | The first screen must be calm and familiar: headline, one line, one button. |
| Scanning | Users scan with several patterns. The F-pattern appears when content lacks structure; headings-led "layer-cake" scanning is the best-performing ([NN/g](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)). | High (primary source) | Headings must carry the meaning on their own. Body text is for the convinced. |
| Above the fold | About 57% of viewing time is above the fold and 74% in the first two screenfuls ([NN/g 2018](https://www.nngroup.com/articles/scrolling-and-attention/)). This is where people look, not how far they scroll. | High | Put the executives (proof) in the first two screens. Do not hide the point below the fold. |
| Number of actions | Vendor data: one CTA converts better than several. Unbounce, in a vendor summary, reports 13.5% for one link, 11.9% for two to four and 10.5% for five or more. Consensus is one primary action and an optional, visibly quieter second ([summary](https://www.wearetenet.com/blog/saas-hero-section-best-practices)). | Medium to low (vendor data) | Hero: Register plus one quiet second action. Each section: one action. |
| Standing out | Contrast with the surroundings drives attention (the von Restorff effect), and it fails when many elements compete ([Wikipedia](https://en.wikipedia.org/wiki/Von_Restorff_effect), [practitioner summary](https://leanexperiments.substack.com/p/cta-button-psychology-size-color)). | Medium | Register should be the only black button on a screen. |
| Hierarchy | Use no more than three sizes; group with whitespace and enclosure ([NN/g](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)). | High (primary source) | Audit type sizes and spacing. |
| Hidden navigation | Hidden navigation is less discoverable and hurts task success, more on desktop than phones ([NN/g 2016, 179 participants](https://www.nngroup.com/articles/hamburger-menus/)). | High | Desktop shows the tabs. On a phone the "Menu" button hides five items. Test showing them. |
| Accordions | They shorten pages but cost an extra click and hide content; avoid when users need most of the content ([NN/g](https://www.nngroup.com/articles/accordions-complex-content/), [video](https://www.nngroup.com/videos/avoid-accordions/)). | High | FAQ and "Three Parts" are fine. The executives "On the Day and After" cards must stay visible. |
| Carousels and paging | Carousels are skipped and controls are small. Show how many items exist and keep controls large ([secondary sources](https://f7.de/en/blog/stop-the-slide-why-carousels-harm-the-ux)). Original NN/g articles not retrieved. | Low to medium | The executives pager already shows "1 of 22" and big buttons. Test whether people notice there are 22. |
| Tap targets | Apple 44pt, Google 48dp, WCAG 2.2 AA at least 24px ([HTML Hunter](https://www.html-hunter.com/touch-target-size-guidelines-how-big-should-mobile-buttons-be-in-2026/)). The blog statistics on mistaps have no traceable source. | High for the standards, low for the stats | My phone buttons are about 36px tall. Likely under 44. Flag. |
| Text readability | 16px or more body, 45 to 75 characters per line, 1.4 to 1.6 line height, 4.5:1 contrast ([guides](https://wuxwebtools.com/en/blog/a-practical-guide-to-readable-type-on-the-modern-web)). Weakly sourced numbers. | Medium | Measure and compare. |
| Alignment | Left-align body text. Centering short headings is accepted; mixing creates imbalance ([Wikipedia](https://en.wikipedia.org/wiki/Typographic_alignment), [UX Movement](https://uxmovement.com/content/why-you-should-never-center-align-paragraph-text/)). | Medium | The phone hero centers a multi-line subhead. Test alignment with the headline. |
| Links | Colored, underlined links read as clickable. NN/g's March 2026 note says underlines are no longer essential if color, placement and context are clear and accessibility is met ([NN/g](https://www.nngroup.com/articles/guidelines-for-visualizing-links/)). | High | Keep underlines on in-text links. |
| Real photos | Direction is consistent: real people and settings beat stock on trust, but the numbers trace to vendors ([summary](https://www.websnp.com/help/website-images-stock-vs-real-photos)). | Medium | We use real headshots and event photos. Check for any low-quality image. |
| Speakers on event sites | Core details (name, date, place, register) at the top. Speakers with photo, title and a credibility line further down. A bare list of names is not enough ([Smart Meetings](https://www.smartmeetings.com/tips-tools/117985/anatomy-of-a-successful-conference-website)). | Low (practitioner) | We put executives high on purpose. Check that each has a title line. |
| Speed | Core Web Vitals "good" is LCP at or under 2.5s, INP at or under 200ms, CLS at or under 0.1 ([sources](https://dev.to/nayankyada/why-core-web-vitals-matter-and-how-i-improve-them-pj3)). Renault case study: faster LCP gave a 13% conversion lift. Impact claims in blogs are mostly unverified. | High for thresholds | We are at about 85 to 90 on mobile Lighthouse. Look for the cause. |
| Accessibility | WCAG 2.2 AA is the working target. Not a confirmed legal rule for private sites ([sources](https://www.audioeye.com/post/whats-new-with-wcag-2-2/)). | Medium | Keep axe at zero. Add a manual keyboard pass. |

## 3. The 15 passes

Each pass produces a findings table: **page, what, evidence, severity (blocks / hurts / polish), proposed fix, needs Jax (yes/no)**.

| # | Lens | Tier | Scope and specific checks |
|---|---|---|---|
| 1 | A: Jax | 1 Front door | Home, Students, Executives, Partners, Conference, About. Banned words, title case, tone, consistency of facts, decoration not asked for. |
| 2 | A: Jax | 2 Depth | Team, Executives Joining, Demo Day, Directory, Past Events, FAQ, Contact. Same checks. Bios are facts about the person. Partner and executive titles match everywhere. |
| 3 | A: Jax | 3 Foundation | Privacy, Terms, Accessibility, 404, header, footer, tab titles, share previews. Title case in tab titles. Nonprofit and building mentions gone. |
| 4 | B: Executive, investor, partner | 1 | Five-second read of each Tier 1 page. What a skeptic would test. Is there a next step. Investor path. Partners page against the partner research. |
| 5 | B | 2 | Does Team prove the founders can execute? Do Executives Joining and Directory give proof? Is Contact easy for an executive, investor or partner? |
| 6 | B | 3 | Do legal pages read as trustworthy? Does the 404 recover? Do the footer and titles make a forwarded link make sense? |
| 7 | C: Student | 1 | Three journeys on a phone. Taps to Register. Students page reads clearly and honestly. After-event state. |
| 8 | C | 2 | FAQ answers the real worries. Demo Day explains how to enter. Contact is easy to find. Team feels like peers. |
| 9 | C | 3 | Privacy and terms in plain language. Accessibility statement is usable. 404 helps a lost student. |
| 10 | D: My own reasoning | 1 | Contradictions between pages. Claim and number audit against data files. Link and anchor audit. Failure modes (no JavaScript, 320px, long names). |
| 11 | D | 2 | Same for the depth pages. Dead data, `check` partners, unverified links (NSBE UCLA, MANA de San Diego, Iovine and Young, URC, Clippers). |
| 12 | D | 3 | Sitemap, robots, structured data, canonical URLs, security headers, unused code, stale comments. |
| 13 | E: Web design | 1 | Squint and 50 ms test, action count, hierarchy, tap targets, reading comfort, page length, mobile menu, alignment, motion. |
| 14 | E | 2 | Same. Add the executives pager, the stat cards, accordions, the FAQ, the timeline on Students. |
| 15 | E | 3 | Lighthouse mobile and desktop, LCP cause, CLS, weight, fonts, images. Keyboard-only pass. Screen-reader landmarks. Print view. |

## 4. Tools and how each check is done

- **Screenshots:** Playwright (Chromium) at 320, 390, 768, 1280 and 1440. Full page, after scrolling to load images.
- **Text:** a dump of every page to plain text, then grep for the banned words and capitalization patterns.
- **Accessibility:** axe-core on every page at two widths. Plus a keyboard-only walk of the home page and one inner page.
- **Performance:** Lighthouse mobile and desktop. Check the LCP element and the largest assets.
- **Links:** internal links crawled from the built site (all must resolve, all `#anchors` must exist). External links listed for Jax to click, since the sandbox cannot load other sites.
- **Layout measurements:** a script that reports every button's size, characters per line for body text, font sizes in use, and horizontal overflow.
- **Blur and squint:** screenshots blurred and thumbnailed, then read for what stands out.
- **Structured data:** check the Event and Organization JSON-LD parse and match the page.
- **Search rules:** [Google's title-link guidance](https://developers.google.com/search/docs/appearance/title-link) has no fixed length, so the check is that titles are unique, descriptive and concise, and that each page has its own description.

## 5. Things I already know to verify first

- Phone buttons look under 44px tall.
- The phone hero centers a multi-line subhead (alignment against the research).
- The phone "Menu" hides all five tabs (hidden-navigation research).
- Home page length on a phone. How many screens before the team.
- The FAQ questions and small labels above headings are still sentence case. Decide whether labels count as titles.
- About: the founder bio is one long paragraph.
- Post-event mode is not built: nothing handles November 15 and after.
- Partner links to verify by clicking: NSBE UCLA, MANA de San Diego, Iovine and Young, Undergraduate Research Center, Clippers.
- Partners with status `check` are hidden; confirm none should show.
- "CEOs Come to You" against the mix of executives, not all CEOs.
- Lighthouse mobile performance of 85 to 90, against a target of 95.
- Privacy page and Terms: counsel review pending, and wording still to align with the actual sharing plan.
- Three Parts of Meridian on About: check it reads cleanly in its new spot.
- The squiggly hero lines through the text (restored on request, but they were called jumbled).

## 6. Where the research and Jax's rules differ

| Topic | Research | Jax's rule | Plan |
|---|---|---|---|
| Title case | No strong evidence either way. Consistency is the main point. | Title case everywhere. | Follow Jax. Enforce with a single rule and a check. |
| Single call to action | One primary action converts best. | Register plus a second tan button. | Keep the second button visibly quieter. Test it in the squint test. |
| Hidden menu on phones | Hurts discovery. | Header is a pill plus a Menu button. | Report. Show the options (a bottom bar, or the five tabs in a scroll row) and let Jax pick. |
| Centered text | Fine for a short headline, weaker for several lines. | Wanted the phone hero centered. | Keep the headline centered. Test the subhead. |
| Speakers high | Core details first, speakers lower. | Executives and photos early as proof. | Keep. Details (date, place, Register) stay in the first screen. |
| Dark and decorative elements | Low visual complexity wins first impressions. | No decoration beyond what was asked. | These agree. |

## 7. What I will deliver

1. `docs/AUDIT-V2.md`: all 15 passes, findings tables, severity, evidence, proposed fix, and whether Jax is needed.
2. A short ranked list: what to fix first, what is a decision for Jax, what is polish.
3. Screenshots of the issues for the pages that matter most.
4. No site change until Jax approves the list. Real bugs (broken link, overflow, contrast failure) go in their own short list so they can ship the same day if Jax wants.

## 8. Questions for Jax before I start

1. Should I fix as I go, or report all 15 passes first and fix after you approve? (I recommend report first.)
2. Can you click the five unverified partner links when the list comes back?
3. Is a bottom tab bar or a scrolling row of tabs acceptable on phones if the research flags the hidden menu?
4. Do small labels above headings (for example "For Students") count as titles for the title-case rule?
