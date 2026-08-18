// Centralized event + integration config for the Meridian landing site.
// Edit values here and they update everywhere they are used.

/**
 * Registration form (LIVE as of August 17, 2026).
 * The Google Form is the registration system. Every register button on the
 * site links here.
 */
export const REGISTRATION_FORM_URL = 'https://forms.gle/7EsA1GUVHv4eiotXA';

/** Full, canonical event date. Used in mastheads, metadata, and prose. */
export const EVENT_DATE = 'Saturday, November 14, 2026';

/** Short date for inline copy and registration prompts. */
export const EVENT_DATE_SHORT = 'November 14';

/** Venue, now confirmed down to the building. */
export const EVENT_VENUE = 'UCLA';

/** Event time window. */
export const EVENT_TIME = '11 AM to 3 PM';

/** Confirmed venue details. */
export const VENUE_DETAILS = {
  building: 'Covel Commons',
  address: '200 De Neve, Los Angeles, CA 90095',
};

/** Jaxton's Instagram, where day-of updates are posted. */
export const INSTAGRAM_URL: string | null = 'https://www.instagram.com/jaxtonwright/';

/** Contact. Both addresses are shown together, no routing. */
export const CONTACT_EMAIL = 'jaxtonwright11@berkeley.edu';
export const CONTACT_EMAIL_TEAM = 'meridianventura@gmail.com';

/**
 * Contact-form endpoint (Formspree). Registration goes through
 * REGISTRATION_FORM_URL above; this serves only the contact form.
 */
export const REGISTER_ENDPOINT = 'https://formspree.io/f/xqegkaaa';
