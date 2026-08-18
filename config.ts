// Centralized event + integration config for the Meridian landing site.
// Edit values here and they update everywhere they are used.

/**
 * Registration form (LIVE as of August 17, 2026).
 * The Google Form is the registration system. Every register button on the
 * site links here.
 */
export const REGISTRATION_FORM_URL = 'https://forms.gle/7EsA1GUVHv4eiotXA';

/** Seat cap line, used verbatim wherever seats are mentioned. */
export const SEATS_LINE = '400 seats, first come, first served';

/** Full, canonical event date. Used in mastheads, metadata, and prose. */
export const EVENT_DATE = 'Saturday, November 14, 2026';

/** Short date for inline copy and registration prompts. */
export const EVENT_DATE_SHORT = 'November 14';

/**
 * Venue. UCLA is public on the flyer and all outreach. Do NOT add a specific
 * building or street address until the room is contracted; fill VENUE_DETAILS
 * below when it is.
 */
export const EVENT_VENUE = 'UCLA';

/** Event time window. */
export const EVENT_TIME = '11 AM to 3 PM';

/**
 * Getting-there details. All null until the room is contracted. The
 * getting-there section renders placeholders while these are null and switches
 * to real directions the moment they are filled in.
 */
export const VENUE_DETAILS: {
  building: string | null;
  address: string | null;
  parkingStructure: string | null;
  parkingIsPaid: boolean | null;
  transitStop: string | null;
} = {
  building: null,
  address: null,
  parkingStructure: null,
  parkingIsPaid: null,
  transitStop: null,
};

/** One inbox for now; labeled routes keep student mail, speaker mail, and press separable. */
export const CONTACT_EMAIL = 'jaxtonwright11@berkeley.edu';
export const CONTACT_ROUTES = [
  { label: 'Students', email: CONTACT_EMAIL, subject: 'Student question' },
  { label: 'Speakers and partners', email: CONTACT_EMAIL, subject: 'Speaker or partner inquiry' },
  { label: 'Press', email: CONTACT_EMAIL, subject: 'Press inquiry' },
] as const;

/**
 * Contact-form endpoint (Formspree). The old email-capture RSVP flow is gone;
 * registration goes through REGISTRATION_FORM_URL above. This endpoint now
 * serves only the contact form.
 */
export const REGISTER_ENDPOINT = 'https://formspree.io/f/xqegkaaa';
