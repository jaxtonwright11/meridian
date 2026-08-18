# Registration

**Live system (since August 17, 2026): the Google Form.**

- URL: https://forms.gle/7EsA1GUVHv4eiotXA
- Set in `config.ts` as `REGISTRATION_FORM_URL`. Every register button on the
  site (banner, nav, hero, schedule, getting-there) links there. To swap forms,
  change that one constant.
- Responses land in the form's linked Google Sheet.
- The form links to https://meridianventura.com/terms ("Event terms" consent),
  which is served by `app/terms/page.tsx`.

## What happened to the email capture

The old "Reserve your spot" email capture (Formspree) was removed when the real
form went live: one call to action, one destination. Formspree
(`https://formspree.io/f/xqegkaaa`, `REGISTER_ENDPOINT` in `config.ts`) now
serves only the contact form on `/partners`. Free tier is 50 submissions/month.
