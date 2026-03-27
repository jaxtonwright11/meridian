# Meridian Conference — Content Checklist

Everything you need to provide before the site goes fully live. The page is built and deployed — these items replace the placeholder content.

---

## HERO SECTION
- [ ] **Logo file** — Meridian wordmark or logomark (SVG preferred, PNG fallback). File: `components/Hero.tsx` line with CONTENT NEEDED comment.
- [ ] **Headline confirmation** — Current: "The Room Changes Everything." Confirm or revise.

## PROOF BAR
- [ ] **Organization SVG logos** — Netflix, OpenAI, Chase Bank logos (SVG, white/light versions). File: `components/ProofBar.tsx`. Replace text org names with `<img>` tags.

## MISSION
- [ ] **Founder photo (small)** — Headshot or event photo, minimum 400×500px. File: `components/Mission.tsx`, replace the `JW` placeholder div.

## RECAP — DECEMBER 2025
- [ ] **Photo 1** — Wide shot of conference venue with students and speakers (landscape, min 800px wide)
- [ ] **Photo 2** — Student speaking with Netflix representative (portrait, min 600px wide)
- [ ] **Photo 3** — Panel discussion on stage (landscape)
- [ ] **Photo 4** — Student reaction during 30-second favor moment (portrait)
- [ ] **Photo 5** — Group photo of attendees (landscape)
- [ ] **Photo 6** — Close-up of student networking (square, min 600×600)
- [ ] **Testimonial 1** — Real student quote, 1–2 sentences. Include first name + school/grade only.
- [ ] **Testimonial 2** — Student or speaker quote, 1–2 sentences. Include name + role.

All photos go in `public/images/recap/` and get referenced in `components/Recap.tsx`.

## FOUNDER
- [ ] **Founder headshot** — Professional or event photo, portrait or square, min 600px wide. File: `components/Founder.tsx`, replace `JW` placeholder.

## CONTACT
- [ ] **Formspree form ID** — Create a form at [formspree.io](https://formspree.io), copy the form ID (e.g., `xrgvkpql`). File: `components/Contact.tsx`, replace `YOUR_FORM_ID` in the fetch URL.

## GENERAL
- [ ] **Favicon** — 32×32 PNG or SVG. Place at `app/favicon.ico`.
- [ ] **Open Graph image** — 1200×630px image for social sharing. Place at `public/og-image.jpg` and update `app/layout.tsx` metadata.
- [ ] **Domain DNS** — Point meridianventura.com to Vercel (see `meridian-vercel-dns-setup.md`).

---

## HOW TO ADD PHOTOS

1. Create folder: `public/images/recap/`
2. Drop photos in as `photo-1.jpg`, `photo-2.jpg`, etc.
3. In `components/Recap.tsx`, replace each `<div className={styles.photoPlaceholder}>...</div>` block with:
   ```tsx
   <img
     src="/images/recap/photo-1.jpg"
     alt="Description of the photo"
     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
   />
   ```
4. Run `npm run build` to verify, then `vercel --prod` to deploy.
