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
 * Registration endpoint — the deployed Google Apps Script Web App URL bound to
 * the registration sheet (sheet id 1oZRuKfm_kTSU98zLwJy7ECtzLwaQG6jzlCyGiF5N8Ro).
 *
 * PLACEHOLDER — paste the deployed `/exec` URL here after publishing the Apps
 * Script (see REGISTRATION-SETUP.md). It will look like:
 *   'https://script.google.com/macros/s/AKfycb.../exec'
 *
 * While this is empty, the registration UI still works end-to-end (shows the
 * success state) but no row is written. Set it to start recording signups.
 */
export const REGISTER_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz54ZTJP6y0z1vzjuYclhF4DmdQHXGeDBbCSZuztzjajvP4y1K0Mfj4i09xvDAHtKo-SA/exec';
