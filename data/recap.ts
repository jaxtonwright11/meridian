// Facts about Meridian and its first conference. Every page reads these, so a
// change here changes the whole site. Use only facts Jax has confirmed.

export const COMPANY_LINE = 'Meridian is a company that connects executives with the next generation of talent.';

/** The proof, in the one wording used everywhere. Always "close to 400". */
export const STUDENTS = 'close to 400';
export const EXECUTIVES = 22;
export const STARTUPS = 10;
export const PROOF_LINE = `Our first conference: ${STUDENTS} students and ${EXECUTIVES} executives at UCLA, in collaboration with USC.`;
export const CONFERENCE_DATE = 'Saturday, November 14, 2026';

/** Contact. One address for everything public. */
export const EMAIL = 'jaxtonwright11@berkeley.edu';
export const INSTAGRAM = { handle: '@meridianventura', url: 'https://www.instagram.com/meridianventura/' };
export const FOUNDER_INSTAGRAM = { handle: '@jaxtonwright', url: 'https://www.instagram.com/jaxtonwright/' };
export const LINKEDIN = { label: 'linkedin.com/in/jaxtonwright', url: 'https://www.linkedin.com/in/jaxtonwright/' };

const mail = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
export const PARTNER_MAILTO = mail('Partner with Meridian');
export const JOIN_TEAM_MAILTO = mail('Join the Meridian team');
export const EXECUTIVE_MAILTO = mail('Executive inquiry');
export const NETWORK_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfMuxN5v5W0OFyd-kYbGzL34mjgU86VbuUHooODWJRyLFgK6Q/viewform';

/** Partners. Names only, no logos. Ask Jax before adding the UCLA Career Center or the UCLA Black Alumni Association. */
export const PARTNERS = [
  'USC Career Center',
  'USC Latino Alumni Association',
  'USC Neighborhood Academic Initiative',
  'USC Iovine and Young Academy',
];

export interface ExecInRoom { name: string; title: string; zoom?: boolean }

/**
 * Executives in the room on November 14. TODO(jax): confirm every name before this deploys.
 * Titles are reused from the site (the /nov14 page and data/leaders.ts). Never invent one:
 * an empty title is a TODO and renders as the name alone.
 * Jax's count is 22 executives; this list has 20 names. TODO(jax): the other two.
 */
export const EXECS_IN_ROOM: ExecInRoom[] = [
  { name: 'Tony Hsieh', title: 'Founder, Shriller Creates · Comedian and TEDx Speaker' },
  { name: 'Troy Palmquist', title: 'Founder, HomeCode Advisors (real estate and proptech)' },
  { name: 'Michael Kang', title: 'Graduate Director of Film and Television Production, LMU School of Film and Television' },
  { name: 'Dr. Shanna Shaked', title: 'Director, UCLA Learning Assistant Program · Senior Associate Director, UCLA CEILS' },
  { name: 'Jody Stiger', title: 'Deputy Chief, Administrative Services Division, LA Metro Police Department of Public Safety' },
  { name: 'Joe Killinger', title: 'Co-founder, Commercial Brokers International' },
  { name: 'David Lash', title: "Managing Counsel for Pro Bono and Public Interest Services, O'Melveny & Myers" },
  { name: 'Kheris Rogers', title: "Founder, Flexin' In My Complexion" },
  { name: 'Dr. Bob Dodge', title: 'President, Physicians for Social Responsibility Los Angeles' },
  { name: 'Carlos Gonzales', title: 'Vice President of Manufacturing, The Peggs Company' },
  // TODO(jax): the site lists him as Anthony Mendoza. Which name should show?
  { name: 'Tony Mendoza', title: 'VP of Candles, Bath & Body Works' },
  { name: 'Chris Swain', title: 'Co-founder, EA Game Innovation Lab · USC Iovine and Young' },
  { name: 'Julian Lewis', title: 'Board Member, EnCorps' },
  { name: 'Dr. Ellen Junn', title: 'President Emerita, California State University, Stanislaus' },
  { name: 'Dr. Ted Lawrence', title: 'Principal, Oxnard High School' },
  { name: 'Dr. Yan Searcy', title: 'Dean, California State University, Northridge' },
  { name: 'Darren Prince', title: 'Founder and CEO, Prince Marketing Group · Sports and celebrity agent' },
  { name: 'Paul C. Pereira, JD', title: 'SVP, Patient Advocacy and Government Affairs, Ardelyx', zoom: true },
  { name: 'Dr. Naveen Vetcha', title: 'NASA Marshall Space Flight Center', zoom: true },
  // TODO(jax): "Head Judge, Elevator Pitch" is the only title on the site for him. Confirm or replace.
  { name: 'David Meltzer', title: 'Head Judge, Elevator Pitch', zoom: true },
];

/**
 * Photos from November 14, in gallery order. Real and unaltered, square crops in
 * public/opt/nov14/, WebP, under about 300 KB each. Empty until the files are in the project.
 * TODO(jax): drop the photos into the project.
 */
export interface Photo { src: string; alt: string }
export const PHOTOS: Photo[] = [];

/** The full-room photo, also used as the link preview image. */
export const ROOM_PHOTO: Photo | null = null;

export const PHOTO_CREDIT = 'Photos by Catherine Rodriguez (Las Fotos Project), Aaron Colgan and Elijah Carraby.';
