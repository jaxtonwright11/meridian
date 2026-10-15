// Centralized event + integration config for the Meridian landing site.
// Edit values here and they update everywhere they are used.

/**
 * Registration form (LIVE as of August 17, 2026; form swapped Oct 15, 2026).
 * The Google Form is the registration system. Every register button on the
 * site links here.
 */
export const REGISTRATION_FORM_URL = 'https://forms.gle/Q9khivMSRpyesMNu8';

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

/** Instagram (@meridianconference), where day-of updates are posted. */
export const INSTAGRAM_URL: string | null = 'https://www.instagram.com/meridianconference/';

/** Contact. Both addresses are shown together, no routing. */
export const CONTACT_EMAIL = 'jaxtonwright11@berkeley.edu';
export const CONTACT_EMAIL_TEAM = 'meridianventura@gmail.com';

/**
 * Contact-form endpoint (Formspree). Registration goes through
 * REGISTRATION_FORM_URL above; this serves only the contact form.
 */
export const REGISTER_ENDPOINT = 'https://formspree.io/f/xqegkaaa';

/** The site and company name. Everything that brands the site reads this. */
export const SITE_NAME = 'Meridian';

/** The name of the one event. Only /conference and the Event data read this. */
export const EVENT_NAME = 'Meridian Conference';

/** Registration closes. Shown on /conference only. */
export const REGISTRATION_CLOSES_LABEL = 'November 7';

/**
 * The meetup plan after November 14. Never hardcode these in components.
 * Only the three first fields are named; the other three are not public.
 */
export const MEETUPS = {
  count: 25,
  fields: 6,
  cadence: 'roughly two a month',
  startsAfter: '2026-11-14',
  firstFields: ['engineering', 'pre-med', 'business'],
};

/**
 * Date by which partners are named in the room on November 14.
 * TODO(jax): pick the date. Empty string hides the line on /partners.
 */
export const PARTNER_NAMED_BY = '';

/**
 * The address shown on partner and executive pages.
 * TODO(jax): switch to a branded address (for example hello@meridianventura.com
 * forwarding to the team inbox). One value, so it changes everywhere.
 */
export const CONTACT_EMAIL_PUBLIC = CONTACT_EMAIL;

export const CALENDLY_URL = 'https://calendly.com/jaxtonwright';
