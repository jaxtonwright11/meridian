# Meridian — How to Update Content Post-Launch

## Quick Reference

| What to change | File to edit | What to look for |
|---|---|---|
| Hero headline | `components/Hero.tsx` | `words` array at top |
| Stats numbers | `components/ProofBar.tsx` | `stats` array at top |
| Organization names | `components/ProofBar.tsx` | `orgs` array at top |
| Mission text | `components/Mission.tsx` | Paragraph tags in the `text` div |
| Recap photos | `components/Recap.tsx` | `photos` array + placeholder divs |
| Testimonials | `components/Recap.tsx` | `<blockquote>` tags |
| Timeline items | `components/WhatsNext.tsx` | `timeline` array at top |
| Sponsor tiers/pricing | `components/Sponsors.tsx` | `tiers` array at top |
| Founder bio | `components/Founder.tsx` | Paragraph tags in `bio` div |
| Contact email | `components/Contact.tsx` | `mailto:` and Formspree URL |
| Nav links | `components/Nav.tsx` | `navLinks` array at top |
| Footer text | `components/Footer.tsx` | Direct text in JSX |
| Page title/SEO | `app/layout.tsx` | `metadata` object |
| Colors/fonts | `app/globals.css` | CSS custom properties in `:root` |

## How to Make Changes

### Option A: Edit on GitHub (easiest)
1. Go to the repo on GitHub
2. Navigate to the file you want to change
3. Click the pencil icon to edit
4. Make your change
5. Click "Commit changes"
6. Vercel auto-deploys in ~60 seconds

### Option B: Edit Locally
1. Open terminal in the project folder
2. Edit the file with any text editor
3. Test locally: `npm run dev` (visit localhost:3000)
4. When happy: `git add . && git commit -m "update content" && git push`
5. Vercel auto-deploys

## Adding a New Sponsor Tier

In `components/Sponsors.tsx`, add an object to the `tiers` array:

```tsx
{
  name: 'Silver Sponsor',
  price: '$2,500',
  accent: 'default',
  featured: false,
  benefits: [
    'Logo on event signage',
    '3 guest passes',
    'Social media mention',
  ],
},
```

## Changing the Event Date

When the date is confirmed, search the codebase for "Winter 2026" and update:
- `components/WhatsNext.tsx` — the h2 heading
- `components/Recap.tsx` — the intro paragraph mentions December 2025 (past event, likely keep)
- `app/layout.tsx` — meta description

## Updating Colors

All colors live in `app/globals.css` under `:root`. Change the hex values there and every component updates automatically. The gold system (`--gold`, `--gold-bright`, `--gold-dim`) controls the primary accent throughout.

## Redeploying

After any push to the `main` branch, Vercel automatically rebuilds and deploys within 60 seconds. No manual action needed.

To force a manual deploy: `vercel --prod` from the project directory.
