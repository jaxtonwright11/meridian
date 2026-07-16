# Meridian Conference — design system conventions

This is the component library for the **Meridian Conference** landing site: a
**warm editorial** identity — layered tan "paper" surfaces sitting on a deep
dark-brown page, ink-black text, and a single muted gold accent. Typography is
**Fraunces** (display serif, headings), **Hanken Grotesk** (body), and **Spline
Sans Mono** (uppercase eyebrows, meta lines, button labels).

## What these components are

They are **complete, self-contained page sections**, not low-level primitives.
`Hero`, `Mission`, `Recap`, `Future`, `Partners`, `Founder`, `WhoBuiltThis`,
`Contact`, `Footer`, `Nav` render entire sections with their own copy and
imagery baked in. You compose a page by stacking them in order — most take **no
props**. Build with them like: `<Nav/> <Hero/> <Mission/> <Recap/> … <Footer/>`.

A few take props for composition:
- `RegisterForm` — inline email RSVP capture: `source` (required), `buttonLabel`,
  `placeholder`, `onSuccess`.
- `Carousel` — image carousel: `slides: {src, mobileSrc?, alt}[]`, `desktopHeight?`,
  `mobileHeight?`.
- `PersonCarousel` — people carousel: `slides: {src, mobileSrc?, name, title?, caption}[]`.

No provider or theme wrapper is required — components render standalone. `Nav`
and the carousels read the browser scroll / `window.lenis` and degrade gracefully
without them.

## Styling idiom — CSS custom properties + a few global classes

Components are pre-styled. When you add your own layout glue around them, use the
DS's tokens and utility classes rather than inventing values.

**Color / type tokens** (`var(--*)`):
- Ink: `--ink`, `--ink-soft`, `--stone`
- Paper surfaces (light→deep): `--paper`, `--paper-2`, `--band`, `--bg`
- The tan "chunk box": `--box`, `--box-line`, `--box-inset`
- Dark page shades: `--page-a`, `--page-b`; light text on them: `--on-page`
- Gold accent: `--gold`, `--gold-ink`, `--gold-soft`, `--gold-wash`
- Lines: `--line`, `--line-strong`
- Fonts: `--font-fraunces`, `--font-hanken`, `--font-mono`
- Spacing scale: `--space-xs|sm|md|lg|xl|2xl|3xl`; layout: `--max-width`,
  `--max-width-editorial`, `--section-pad-y`

**Global utility classes** (in `styles.css` / `_ds_bundle.css`):
- Layout: `.container`, `.container-narrow`, `.band`, `.surface-paper`
- The recurring tan card: `.chunk` (`.chunk-wide` for full width), `.panel`
- Labels: `.eyebrow` / `.caption` (uppercase mono gold label), `.meta` (small mono line)
- Buttons: `.btn` + `.btn-ink` (or `.btn-gold`) / `.btn-ghost`
- Rules: `.rule`, `.rule-ink`; stat block: `.proof` with `.fig .n` / `.fig .l`

Headings (`h1`–`h4`) are already Fraunces; body is Hanken; `.eyebrow`/`.btn`/
`.meta` are Spline Mono. The page background is dark brown (`--page-a`) with tan
`.chunk` cards on top — keep new sections in that relationship.

## Where the truth lives

- `styles.css` — the single stylesheet entry: it `@import`s the fonts, the tokens
  + global classes, and the component styles (`_ds_bundle.css`). Read it (and its
  imports) before styling.
- `components/general/<Name>/<Name>.d.ts` — the prop contract.
- `components/general/<Name>/<Name>.prompt.md` — per-component usage.

## One idiomatic build snippet

```tsx
import { Nav, Hero, RegisterForm } from 'meridian-landing';

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      {/* Custom section using the DS tokens + classes for the glue */}
      <section style={{ background: 'var(--page-b)', padding: 'var(--space-3xl) 0' }}>
        <div className="container-narrow">
          <div className="chunk">
            <span className="eyebrow">Reserve your spot</span>
            <h2>Join us on November 14</h2>
            <RegisterForm source="cta" buttonLabel="RSVP" />
          </div>
        </div>
      </section>
    </>
  );
}
```
