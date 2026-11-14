// Press. The outlet is never named in visible text, alt text or meta.
// The URL lives only in the href.
/** Every press link on the site points here. The outlet is never named in visible text. */
export const PRESS_URL =
  'https://lasentinel.net/jaxton-wrights-meridian-conference-is-changing-the-narrative.html';

export interface PressEntry { label: string; url: string; date?: string }

export const press: PressEntry[] = [
  {
    label: 'Recent media',
    url: PRESS_URL,
  },
];
