# Meridian Conference Landing Page — Build Notes

## Tech Stack
- **Framework**: Next.js 14.2 (App Router, static export)
- **Animation**: Framer Motion 11 (scroll-triggered reveals, stagger effects)
- **Smooth Scroll**: Lenis 1.1 (momentum-based, GPU-accelerated)
- **Styling**: CSS Modules with CSS custom properties (no Tailwind)
- **Typography**: Cormorant Garamond (display) + DM Sans (body)
- **Forms**: Formspree (zero-backend)
- **Output**: Static HTML/CSS/JS in `/out/` folder — 956KB total

## Architecture
```
meridian-landing/
├── app/
│   ├── globals.css          ← Full design system (colors, spacing, typography, grain overlay)
│   ├── layout.tsx           ← SEO metadata, Open Graph, Twitter cards
│   └── page.tsx             ← Client component with Lenis + all section imports
├── components/
│   ├── AnimateIn.tsx        ← Reusable scroll-triggered animation wrappers
│   ├── Nav.tsx + .css       ← Fixed glassmorphism nav with scroll state
│   ├── Hero.tsx + .css      ← Full-viewport hero, word-by-word stagger, SVG meridian lines
│   ├── ProofBar.tsx + .css  ← Stats bar + organization names
│   ├── Mission.tsx + .css   ← Two-column grid with sticky pull quote
│   ├── Recap.tsx + .css     ← Photo grid + testimonials (December 2025)
│   ├── WhatsNext.tsx + .css ← Timeline cards (Winter 2026 event flow)
│   ├── Sponsors.tsx + .css  ← Three-tier sponsor cards with benefits
│   ├── Founder.tsx + .css   ← Founder bio with photo placeholder
│   ├── Contact.tsx + .css   ← Contact form + info (Formspree-powered)
│   └── Footer.tsx + .css    ← Minimal footer with nav links
├── next.config.mjs          ← Static export config
├── tsconfig.json
└── package.json
```

## Design System
- **Color palette**: Deep navy (#0A1931) → Gold (#C9A84C) → Warm cream text (#F5F0E8)
- **Gold shimmer**: CSS gradient animation on key text via `background-clip: text`
- **Grain overlay**: SVG noise filter at 3% opacity with `mix-blend-mode: overlay`
- **Spacing**: 8px base system (xs=8, sm=16, md=24, lg=40, xl=64, 2xl=96, 3xl=128)
- **Card radius**: 12px
- **Transitions**: 0.2–0.3s ease, hover translateY(-2px to -4px)

## Deployment Instructions

### Option 1: Vercel CLI (recommended)
```bash
cd meridian-landing
npm install -g vercel
vercel login
vercel deploy --prod
```
Then add custom domain in Vercel dashboard → Settings → Domains → `meridianventura.com`

### Option 2: GitHub + Vercel (auto-deploy)
```bash
cd meridian-landing
git remote add origin https://github.com/YOUR_USERNAME/meridian-landing.git
git push -u origin master
```
Then connect the repo in Vercel dashboard → New Project → Import from GitHub.

### Option 3: Static hosting (Netlify, Cloudflare Pages, etc.)
The `/out/` folder contains the complete static site. Upload it to any static hosting provider.

## Build Commands
- `npm run dev` — Local dev server (localhost:3000)
- `npm run build` — Production build + static export to `/out/`
- `npm start` — Serve production build locally

## Performance Notes
- First Load JS: 136KB (page) + 87.4KB (shared) — well within budget
- Static HTML pre-rendered — no server-side rendering needed
- All animations use `transform` and `opacity` only (GPU-accelerated, no layout thrashing)
- Font loading via Google Fonts with `display=swap`
- CSS Modules eliminate unused style shipping per-component

## Placeholder Content
Every piece of content Jax needs to provide is marked with `CONTENT NEEDED FROM JAX` comments in the source files. See `meridian-content-checklist.md` for the full list.
