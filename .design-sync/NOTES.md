# design-sync notes — meridian-landing

This repo is a **Next.js 14 app**, not a packaged design system. It is synced in
the **package shape**, **synth-entry mode** (no `dist/`, no `.d.ts`; the converter
synthesizes an entry from `components/` and derives the component list from
PascalCase exports). Components are page sections using **CSS Modules** + a
CSS-custom-property token system in `app/globals.css`.

## Build setup (must-do before the converter)

- **Self-referencing symlink**: the converter resolves the package at
  `node_modules/<pkg>`. This is the app's own repo, so that path doesn't exist.
  Create it once per clone:
  `ln -sfn .. node_modules/meridian-landing`
  (gitignored via node_modules; recreate on a fresh clone before building).
- Build/validate/capture wrapper: `bash .ds-sync/rebuild.sh` runs
  `package-build.mjs` **and re-copies `public/opt` → `ds-bundle/opt`** (see Images).
- `--node-modules ./node_modules` (repo root's; react resolves there).
- No `--entry` flag — synth-entry mode requires its absence (passing one would
  bundle a single entry instead of synthesizing from all components).

## Styling / tokens / fonts

- **cssEntry is a generated concat**: `.design-sync/meridian-css-entry.css` =
  `.design-sync/assets/_supplement.css` + a verbatim mirror of `app/globals.css`.
  The supplement adds three things globals.css lacks (so the bundle renders on
  brand without editing production source):
  1. `--font-fraunces/hanken/mono` (set by next/font on `<html>` at runtime in
     the app, absent from static CSS).
  2. A `--space-*` scale (referenced by several components, never defined in-repo).
  3. Legacy dark-theme token aliases (`--text-primary`, `--bg-surface`,
     `--gold-bright`, …) mapped onto the current warm palette — see below.
  **Regenerate on any globals.css change**:
  `cat .design-sync/assets/_supplement.css app/globals.css > .design-sync/meridian-css-entry.css`
- **Fonts**: `.design-sync/assets/meridian-fonts.css` = Google Fonts `@font-face`
  for Fraunces, Hanken Grotesk, Spline Sans Mono, Cormorant Garamond, DM Sans
  (remote gstatic woff2 — the `[FONT_REMOTE]` pattern; loads at render time).
  Wired via `cfg.extraFonts`. Regenerate by re-fetching the Google Fonts css2 URL
  with a browser UA (see below).

## Legacy dark-theme components

The repo went through a redesign (dark theme → warm editorial). Three components
are orphaned remnants of the old dark theme and reference tokens that no longer
exist: **WhatsNext, ProofBar, StatBar**. The supplement aliases those tokens onto
the current palette so WhatsNext/ProofBar render on-brand.
- **StatBar** hardcodes `rgba(15,34,64,0.95)` (dark navy) directly in a
  gradient — NOT a token, so it can't be aliased. It renders with an off-brand
  dark gradient. Kept in the sync per the user's explicit choice (2026-07-11).

## Exclusions (cfg.componentSrcMap)

- `AnimateIn`, `StaggerContainer`, `StaggerItem`, `OptImg` — internal
  animation/image utility wrappers, not design components.
- `History2024` — excluded (2026-07-11): orphaned carousel of old event photos;
  its `/IMG_*.jpeg` assets aren't shipped and it renders sparse.

## Images

Components hardcode absolute `/opt/*.webp` paths. The optimized set
(`public/opt`, 2.8 MB, 40 files) is copied into `ds-bundle/opt/` after every full
build (rebuild.sh does this) so cards — and real designs built with these
components — resolve their imagery. `opt/**` must be in the upload plan's writes.

## Overrides

- `Nav`: `{cardMode: single, viewport: 1280x110}` — position:fixed bar.
- `WhatsNext`: `{cardMode: column}` — 4-card row overflows a grid cell.

## Known render warns (triaged legitimate)

- `[FONT_REMOTE]` — expected; fonts load from gstatic at runtime.

## Repo hygiene note

A stray Windows Lighthouse cache directory named literally
`C:\Users\joaqu\AppData\Local\lighthouse.54901828` existed in the repo root and
broke ts-morph (tsconfig `**/*.ts` glob). Moved out of the repo to scratch during
the first sync. If it reappears (re-created by a Windows tool on WSL), remove it.

## Re-sync risks (what can silently go stale)

- **cssEntry concat drift**: `.design-sync/meridian-css-entry.css` mirrors
  `app/globals.css`. If globals.css changes and the concat isn't regenerated, the
  bundle ships stale global styles. Regen command is under Styling above.
- **Legacy-token aliases**: the `--text-*`/`--bg-*`/`--gold-*` aliases assume the
  current warm palette token names (`--ink`, `--box`, `--gold-*`). If those are
  renamed in globals.css, update `_supplement.css`.
- **Remote fonts**: `meridian-fonts.css` points at pinned gstatic woff2 URLs
  (versioned, e.g. `/v21/`). Google may rotate them; re-fetch if fonts stop
  loading. Fetch UA + URL:
  `curl -A "<modern-chrome-UA>" "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"`
- **Image paths**: previews for Carousel/PersonCarousel inline real `/opt/*.webp`
  paths from Recap/WhoBuiltThis; if those components' image sets change upstream,
  the standalone previews won't follow automatically.
- **Component discovery is source-scan based** (synth-entry): a new PascalCase
  export in `components/` auto-enters the sync unless excluded. A build script
  that produces a real `dist/` + `.d.ts` would give stronger prop contracts.
