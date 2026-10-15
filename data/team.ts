// Team records. Class year only, never age. A card renders only the fields
// that are present. Bios render only when approved AND text exists.
//
// Bios: facts only, no opinions (Jax, Oct 15). Rewritten from the v2 bios, so each
// teammate should re-check theirs. TODO(jax): send accolades to add.

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
  // Order set by Jax: Jaxton (founder), Carisa, Cheryl, Aaron, Mane, Anahi, then Elijah.
  { slug: 'carisa-gonzales', name: 'Carisa Gonzales', role: 'USC Lead Coordinator', school: 'USC', year: 'Senior', major: 'Business, USC Marshall, emphasis in Leadership and Innovation', bio: 'Leads Meridian\'s outreach at USC and runs its LinkedIn presence.', approved: true, photo: p('carisa-gonzales') },
  { slug: 'cheryl-zhang', name: 'Cheryl Zhang', role: 'Demo Day and Partnerships Lead', school: 'USC', year: 'Senior', major: 'Business Administration, USC Marshall', bio: 'Screens demo day applicants and leads Meridian\'s partnerships. Previously helped lead sponsorships for OWN IT, a USC conference.', approved: true, photo: p('cheryl-zhang') },
  { slug: 'aaron-colgan', name: 'Aaron Colgan', role: 'Content and filming', school: 'USC', year: 'Senior', major: 'Media Studies', bio: 'Transferred to USC from community college. Films Meridian\'s long-form interviews and the conference itself.', approved: true, photo: p('aaron-colgan') },
  { slug: 'mane-patatanian', name: 'Mane Patatanian', role: 'UCLA Lead', school: 'UCLA', year: 'Sophomore', major: 'Honors Psychobiology and Political Science', bio: 'Leads Meridian\'s outreach at UCLA. Founder of Vital Teens, a UCLA student organization.', approved: true, photo: p('mane-patatanian') },
  { slug: 'anahi-ceja', name: 'Anahi Ceja', role: 'Berkeley Outreach and Digital Content Lead', school: 'UC Berkeley', year: 'Junior', major: 'Neuroscience', bio: 'Leads Meridian\'s outreach and digital content at UC Berkeley.', approved: true, photo: p('anahi-ceja') },
  // Elijah: no school, year, major or bio supplied. TODO(jax): add them.
  { slug: 'elijah-carraby', name: 'Elijah Carraby', role: 'Content Creation and Film', tagline: 'Meridian content team', bio: 'Creates content and film for Meridian.', approved: true, photo: p('elijah-carraby') },
];

/** Lines under the bold title, in this order: school, year, major. */
export const detailLines = (m: TeamMember) =>
  [m.school ?? m.tagline, m.year, m.major].filter((x): x is string => Boolean(x));

/** "Senior, Media Studies, USC" */
export const detail = (m: TeamMember) =>
  [m.year, m.major, m.school].filter(Boolean).join(', ');
