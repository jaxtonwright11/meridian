# Post-event copy (draft) and phone menu recommendation

Nothing here is live. The post-event switch is `EVENT_STATE` in `config.ts` ('before' now). The reminder to flip it is set for November 14, 3 PM Pacific.

## Part 1: What the research says about the phone menu

| Finding | Source | Confidence |
|---|---|---|
| Hidden navigation is less discoverable, is used less, and lowers task success and ratings on both phones and desktops. 179 participants, 6 sites. | [NN/g, Hamburger Menus and Hidden Navigation](https://www.nngroup.com/articles/hamburger-menus/) | High |
| Tab bars are always visible, which is their main advantage. They get hard to fit with more than 5 options at a good touch size. | [NN/g, Basic Patterns for Mobile Navigation](https://www.nngroup.com/articles/mobile-navigation-patterns/) | High |
| For horizontal scrolling, it must be obvious there is more beyond the edge; cut-off (partly visible) items work better than dots or arrows. | [NN/g, Mobile Tables](https://www.nngroup.com/articles/mobile-tables/) (tables and carousels, not tab bars) | Medium |
| Baymard saw people overlook content reachable only through horizontal tabs. | [Baymard](https://baymard.com/research-articles/avoid-horizontal-tabs) (product pages, indirect) | Medium |
| No controlled study compares scrolling tabs against a bottom bar. | search found none | Gap |
| On iOS Safari a fixed bottom bar can sit under the browser's own bottom toolbar, jump when the toolbar hides, and drifted in iOS 26. The bottom ~44 px of the screen also competes with Safari's own taps. | [Ben Frain](https://benfrain.com/the-ios-safari-menu-bar-is-hostile-to-web-apps-discuss/), [Apple Developer Forums](https://developer.apple.com/forums/thread/801028), [a fix write-up](https://github.com/dengf/budget_planner/pull/89) | Medium (forum reports) |

**Fit with how Meridian is used.** The link gets opened from iMessage. Your own screenshot of the site in that in-app browser shows its toolbar (back, share, reload) floating over the bottom of the page. A fixed bottom tab bar would collide with it.

**Recommendation: the visible row of tabs (middle option), not the bottom bar.**
- All five tabs are visible the moment the page loads (fixes the hidden-navigation problem).
- The fifth pill peeks off the right edge, the cut-off signal the research supports.
- Nothing fights the iMessage or Safari toolbar.
- Make only the top bar (logo, Register) sticky; the tab row scrolls away. That keeps the sticky header at 65 px instead of 110 px, which would eat about 13% of a phone screen.
- Trade-off: a first-time visitor sees tabs on landing; someone mid-page scrolls up or uses footer links (the footer already lists every page).

The Menu button goes away.

**Built (Oct 17), revised.** Phones (900 px and under) show the logo and Register in the sticky top bar, with the five sections right under it as the same connected tan pill the desktop uses (current section white, Register stays separate and black). The row is plain links in the page HTML, so it shows with JavaScript off. At 520 px and under the pill runs wider than the screen, with each segment sized so two show whole and the third is always cut off. The row starts scrolled to the current section's tab. Tabs are 44 px tall. Desktop is unchanged.

## Part 2: Post-event copy (draft for approval)

Facts I need from you first, so nothing is invented: the attendance counts (students and executives), the demo day winners, any quote you want, whether to name a next event or date, and how people should join the network (Instagram follow, an email address, or a sign-up form).

Research notes behind the approach ([Splash](https://splashthat.com/resources/event-marketing-guide/post-event-engagement-strategies), [Eventiere](https://eventiere.com/blog/post-event-recap-ideas/), [University of Arkansas web guide](https://webfirst.uark.edu/managing-content/content-building/event-recap.php), [Attendir](https://attendir.com/blog/event-recap-template)): keep the page live and turn it into a recap; thank people quickly; point to what is next with one clear action; put photos in social feeds rather than the front page; message the people who registered but did not come. Mostly vendor guidance, so treat it as a checklist.

Words in [brackets] are blanks for facts only you have.

### Header and every page
- Header button: **Instagram** (links to @meridianconference).
- Every "Register" button: **Follow on Instagram**.
- Remove: "Registration closes", "Add to calendar".

### Home
- Headline (unchanged): **CEOs Come to You.**
- Subhead: Meridian brings **executives** and **students** together. Our first **conference** took place at UCLA on November 14.
- Buttons: **Follow on Instagram** and **Partner With Us**.
- What Is Meridian?: Meridian brings executives and students together in person, by field. It began with the November 14 conference, where executives from every field came to get to know students. Meridian creates hackathon-style events for executives and students. We are building software that matches students with opportunities that fit them. Everyone who attended joins the Meridian network.
- Executives section heading: **Executives Who Joined Us on November 14**

### Students
- Eyebrow: **For Students**. Headline: **The Conference Is Over. Here Is What Comes Next.**
- Lead: [N] students came to UCLA on November 14 and spent the day with executives from every field. Meridian now creates hackathon-style events for executives and students, by field, and everyone who attended is part of the Meridian network.
- Section **How the Day Went** (keeps the timeline, in past tense where it reads better).
- Section **What You Can Do Now**: follow Meridian on Instagram for the next event; write to us with the field you care about ([email]).
- Closing block: **See What Comes Next** / Follow Meridian on Instagram for the next event. [button]

### Conference
- Eyebrow: **Saturday, November 14, 2026 at UCLA.**
- Lead: The first Meridian Conference took place at UCLA on November 14. [N] students and [N] executives spent the day together at roundtables, in the aerospace design lab, and at demo day. Meridian continues with hackathon-style events by field.
- Demo Day recap: [winners and what they built]. Photos and clips are on Instagram.
- Remove the Event markup's open-registration offer (already done in the code).

### Executives
- Headline: **Meet the Next Generation.** (unchanged)
- First card: **Students Before Anyone Else Meets Them** (unchanged).
- Add near the top: Executives who joined on November 14 are part of the Meridian network. To take part in the next hackathon-style event in your field, write to us.

### Executives Joining (/leaders/)
- Headline: **Executives Who Joined Us on November 14.**
- Lead: [N] executives joined us on November 14. They got to know students, each one looking to help with opportunities they manage.

### Demo Day
- **How to Apply** becomes **What Is Next**: Demo day was part of the November 14 conference. [Winners.] To present at the next one, write to us.

### FAQ
- Remove: "Is it free?", "Can I join online?", "When does registration close?", "How do I get there?"
- Keep and reword: "What is Meridian?"
- Add: "What happened on November 14?", "What comes next?", "How do I stay involved?" (answers drawn from the sections above).

### Partners
- Change "Partners run tables at the conference" to "Partners joined the conference with tables, and Meridian continues with events by field."
- Add a line near the top: [N] partners joined us on November 14.

### Footer, privacy, terms
- No change.

### The First Meridian section (home, partners, past)
- Becomes two sections: **The Second Meridian** (new, November 14, with [N] numbers and a line you choose) and **The First Meridian** (December 2025, as is).

## Decisions I need
1. Approve the phone menu recommendation (visible row, top bar sticky, no Menu button)?
2. The five facts listed under Part 2.
3. Is "Instagram" the right single follow-up for now, or do you want an email sign-up too? (The research favors a next-event opt-in; that needs a form or an email address for people to write to.)
