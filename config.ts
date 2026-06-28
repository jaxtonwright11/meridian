// Centralized event + integration config for the Meridian landing site.
// Edit values here and they update everywhere they are used.

/** Full, canonical event date. Used in mastheads, metadata, and prose. */
export const EVENT_DATE = 'Saturday, November 14, 2026';

/** Short date for inline copy and the registration prompt. */
export const EVENT_DATE_SHORT = 'November 14';

/**
 * Generic venue. The campus is NOT officially confirmed — keep this generic.
 * Do not name a specific university anywhere on the site.
 */
export const EVENT_VENUE = 'a major Los Angeles university';

/** Event time window. */
export const EVENT_TIME = '11 AM–3 PM';

/**
 * RSVP endpoint — where "Reserve your spot" submissions go.
 *
 * This uses Formspree, the same service the contact form already uses, so RSVPs
 * land in the Formspree inbox (email per signup) + dashboard at formspree.io,
 * exportable to CSV / Google Sheets. No Google Apps Script needed. See
 * REGISTRATION-SETUP.md for how to view RSVPs or swap in a dedicated form.
 *
 * Currently reuses the existing contact form id; RSVPs are labelled "New
 * Meridian RSVP" so they're easy to spot. To give RSVPs their own form/quota,
 * create a new Formspree form and paste its URL here.
 */
export const REGISTER_ENDPOINT = 'https://formspree.io/f/xqegkaaa';
