# RSVP collection — how it works

The "Reserve your spot" forms (the hero capture + the first-visit popup) send RSVPs
to **Formspree** — the same service the contact form already uses. No Google Apps
Script, no spreadsheet wiring, nothing to deploy.

- Endpoint: `REGISTER_ENDPOINT` in `config.ts` → `https://formspree.io/f/xqegkaaa`
- Each RSVP sends: `email`, `source` (`hero` or `popup`), `ts`, and a `_subject`
  of **"New Meridian RSVP (…)"** so it's easy to spot.

## Where the RSVPs go (your "vault")

1. **Email:** every RSVP emails the address on the Formspree form, subject
   "New Meridian RSVP …".
2. **Dashboard:** sign in at **https://formspree.io** → your form → **Submissions**.
   You can **export to CSV** anytime, and Formspree can pipe submissions into
   Google Sheets / Slack / etc. from **Integrations** (no code).

## Good to know

- **Free tier = 50 submissions/month**, shared with the contact form (same form id).
  For a few hundred RSVPs you have two easy options, no code changes to the site:
  - **Upgrade Formspree** (a paid plan lifts the cap), or
  - **Give RSVPs their own form** (recommended for clean separation): at
    formspree.io create a new form → copy its URL → paste it into
    `REGISTER_ENDPOINT` in `config.ts`. That gives RSVPs a separate inbox and quota.

## Want RSVPs in a real Google Sheet (free, unlimited)?

If you'd rather they land directly in a Google Sheet without Apps Script, the
clean path is a **Google Form as the backend**:

1. Create a Google **Form** with one short-answer **Email** question.
2. In the form's **Responses** tab, click the Sheets icon to create/link a
   responses spreadsheet (one click — this is where every RSVP lands).
3. Send me (Claude) the form's public link and I'll wire the site to post into it
   — I can pull the field id from the form myself, so you don't touch any code.

This keeps everything point-and-click on your side (no Apps Script) and the
responses auto-fill the Google Sheet.
