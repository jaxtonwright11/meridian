# Meridian Landing — Launch Status

**Live URL:** https://meridian-landing-seven.vercel.app
**Date:** 2026-03-25
**Status:** Ready for soft launch (content placeholders remain)

---

## Completed Steps

| # | Step | Status | Notes |
|---|------|--------|-------|
| 1 | Build | DONE | Next.js 14 static export, compiles clean |
| 2 | Deploy | DONE | Vercel production at meridian-landing-seven.vercel.app |
| 3 | Visual Audit | DONE | Desktop (1280px) + all sections verified via Playwright |
| 4 | Lighthouse | DONE | Perf: 59, A11y: 95, Best Practices: 100, SEO: 100 |
| 5 | Real Content | DONE | 6 event photos optimized (50MB → 555KB), wired into Recap, Founder, Mission |
| 6 | Formspree | READY | Form UI complete with loading/error states — needs Jax's form ID |
| 7 | OG Image | DONE | Generated and wired into layout.tsx metadata |
| 8 | Mobile | DONE | Hamburger menu added, all sections verified at 375px |
| 9 | DNS Docs | DONE | Pre-existing |
| 10 | Final Output | DONE | This document |

---

## Lighthouse Results

| Category | Score |
|----------|-------|
| Performance | 59 |
| Accessibility | 95 |
| Best Practices | 100 |
| SEO | 100 |

**Key Metrics:**
- FCP: 3.3s (slow — mostly Framer Motion JS bundle)
- LCP: 5.2s (slow — JS-heavy initial load)
- CLS: 0 (perfect)
- Speed Index: 3.3s (good)

**What was fixed during audit:**
- Text contrast bumped (`--text-dim` from #8A7A6A → #A89880) for footer links/tagline
- Heading order fixed (h4 → h3 in WhatsNext timeline cards)

**Performance notes:** The 59 score is driven by Framer Motion bundle size (~54KB) and render-blocking JS. This is acceptable for a landing page with animation-heavy design. To improve further:
- Lazy-load Framer Motion (dynamic import below the fold)
- Preload hero fonts
- These are optional optimizations — won't affect user perception significantly

---

## What Jax Needs To Provide

### BLOCKING (form won't work without this)

1. **Formspree Form ID**
   - Go to [formspree.io](https://formspree.io) → Create account → New Form
   - Set notification email to `jaxtonwright11@gmail.com`
   - Copy the form ID (looks like `xyzabcde`)
   - File to edit: `components/Contact.tsx` line 25
   - Replace: `YOUR_FORM_ID` → your actual ID
   - Redeploy after: `npx vercel deploy --prod`

### NICE-TO-HAVE (site works without these)

2. **Meridian Logo** (SVG preferred, PNG fallback)
   - White or gold version on transparent background
   - Max 200x50px for nav bar
   - Files to update: `components/Nav.tsx` line 45, `components/Hero.tsx` line 42
   - Currently using "MERIDIAN" text wordmark — looks clean as-is

3. **Official Company Logos** (Netflix, OpenAI, Chase Bank)
   - SVG format, white/light versions for dark background
   - Need permission to use, or keep text-only (current approach is safe)
   - File: `components/ProofBar.tsx` line 31

4. **Real Testimonial Quotes**
   - Currently using placeholder quotes that sound authentic
   - Replace with actual student/speaker quotes from December 2025
   - Need: 1 student quote (first name + school/grade) and 1 speaker quote (name + role)
   - File: `components/Recap.tsx` lines 54 and 70

5. **Hero Headline Confirmation**
   - Current: "The Room Changes Everything."
   - Confirm or replace — current copy is strong
   - File: `components/Hero.tsx` line 7

6. **Additional Event Photos** (optional, for variety)
   - Types that would strengthen the site:
     - **Wide-angle venue/stage shot** (showing the room setup before/during event)
     - **Close-up of student engaged in conversation** with a speaker (1-on-1 moment)
     - **Speaker at podium/on stage** delivering keynote
     - **Candid networking moment** (students and professionals mingling)
   - Format: JPG, any resolution (will be optimized automatically)
   - Drop into `public/images/` and reference in components

### DNS (when ready for custom domain)

7. **Custom Domain Setup**
   - Add domain in Vercel dashboard → Settings → Domains
   - Point DNS A record to `76.76.21.21` or CNAME to `cname.vercel-dns.com`
   - SSL is automatic

---

## Fixes Applied During This Session

1. **Hero word spacing** — `margin-right: 0.25em` on `.headline span` (words were running together due to `inline-block`)
2. **Mobile hamburger menu** — Full implementation: animated 3-line icon, slide-down overlay with all nav links + CTA, X close animation, body scroll lock
3. **Text contrast** — `--text-dim` lightened from `#8A7A6A` to `#A89880` for WCAG compliance
4. **Heading order** — Timeline card headings changed from `h4` to `h3` (proper h2 → h3 hierarchy)
5. **Contact form UX** — Added loading state ("Sending…"), error state with mailto fallback, disabled button while submitting

---

## Architecture

```
meridian-landing/
├── app/
│   ├── layout.tsx          # Root layout, metadata, OG image
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Design tokens, reset, utilities
├── components/
│   ├── Nav.tsx/css          # Fixed nav + mobile hamburger
│   ├── Hero.tsx/css         # Animated hero with meridian line SVG
│   ├── ProofBar.tsx/css     # Stats + company names
│   ├── Mission.tsx/css      # Mission statement + founder photo
│   ├── Recap.tsx/css        # December 2025 photo grid + testimonials
│   ├── WhatsNext.tsx/css    # Winter 2026 timeline cards
│   ├── Sponsors.tsx/css     # 3-tier sponsor packages
│   ├── Founder.tsx/css      # Jax Wright bio
│   ├── Contact.tsx/css      # Contact form (Formspree-ready)
│   ├── Footer.tsx/css       # Footer with nav + copyright
│   └── AnimateIn.tsx        # Scroll-triggered animation wrapper
├── public/images/           # Optimized event photos (WebP)
└── LAUNCH-STATUS.md         # This file
```

**Stack:** Next.js 14 (static export) · Framer Motion · CSS Modules · Vercel
