// Team records. Class year only, never age. A card renders only the fields
// that are present. Bios render only when approved AND text exists.
//
// Bios are the approved text from the v2 brief section 7.1. Jax confirmed on
// Oct 15 that each teammate approved theirs. They are shown exactly as written.

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  school?: string;
  year?: string;
  major?: string;
  bio?: string;
  /** Shown in the school slot when there is no school. */
  tagline?: string;
  approved: boolean;
  photo: string;
}

const p = (slug: string) => `/opt/people/${slug}.webp`;

export const founder: TeamMember = {
  slug: 'jaxton-wright',
  name: 'Jaxton Wright',
  role: 'Founder',
  school: 'UC Berkeley',
  year: 'Junior',
  major: 'Honors Economics',
  approved: true,
  photo: p('jaxton-wright'),
};

export const team: TeamMember[] = [
  { slug: 'aaron-colgan', name: 'Aaron Colgan', role: 'Content and filming', school: 'USC', year: 'Senior', major: 'Media Studies', bio: 'Transferred to USC from community college, so he has seen both sides. Films the long form interviews and the day itself.', approved: true, photo: p('aaron-colgan') },
  { slug: 'anahi-ceja', name: 'Anahi Ceja', role: 'Berkeley Outreach and Digital Content Lead', school: 'UC Berkeley', year: 'Junior', major: 'Neuroscience', bio: 'Leads Meridian\'s outreach and digital content at Berkeley. From Glendale.', approved: true, photo: p('anahi-ceja') },
  { slug: 'carisa-gonzales', name: 'Carisa Gonzales', role: 'USC Lead Coordinator', school: 'USC', year: 'Senior', major: 'Business, USC Marshall, emphasis in Leadership and Innovation', bio: 'Leads Meridian\'s USC outreach and its LinkedIn presence.', approved: true, photo: p('carisa-gonzales') },
  { slug: 'cheryl-zhang', name: 'Cheryl Zhang', role: 'Demo Day and Partnerships Lead', school: 'USC', year: 'Senior', major: 'Business Administration, USC Marshall', bio: 'Screens demo day applicants and builds partnerships. Previously helped lead sponsorships for OWN IT, a USC conference.', approved: true, photo: p('cheryl-zhang') },
  { slug: 'mane-patatanian', name: 'Mane Patatanian', role: 'UCLA Lead', school: 'UCLA', year: 'Sophomore', major: 'Honors Psychobiology and Political Science', bio: 'Leads Meridian\'s UCLA outreach. Founder of Vital Teens, a UCLA student organization.', approved: true, photo: p('mane-patatanian') },
  // Elijah: no school, year, major or bio supplied. TODO(jax): add them, or confirm the title.
  { slug: 'elijah-carraby', name: 'Elijah Carraby', role: 'Content Creator', tagline: 'Meridian content team', approved: true, photo: p('elijah-carraby') },
];

/** Lines under the bold title, in this order: school, year, major. */
export const detailLines = (m: TeamMember) =>
  [m.school ?? m.tagline, m.year, m.major].filter((x): x is string => Boolean(x));

/** "Senior, Media Studies, USC" */
export const detail = (m: TeamMember) =>
  [m.year, m.major, m.school].filter(Boolean).join(', ');
