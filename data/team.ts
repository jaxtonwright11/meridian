// Team records. Class year only, never age. A card renders only the fields
// that are present. Bios render only when approved AND text exists.
//
// TODO(jax): the v2 brief (section 7.1) holds the approved bio text for Aaron,
// Anahi, Carisa, Cheryl and Mane. It did not arrive, so bio is empty and cards
// render without it until the text is added here.

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  school?: string;
  year?: string;
  major?: string;
  bio?: string;
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
  { slug: 'aaron-colgan', name: 'Aaron Colgan', role: 'Content and filming', school: 'USC', year: 'Senior', major: 'Media Studies', approved: true, photo: p('aaron-colgan') },
  { slug: 'anahi-ceja', name: 'Anahi Ceja', role: 'Berkeley Outreach and Digital Content Lead', school: 'UC Berkeley', year: 'Junior', major: 'Neuroscience', approved: true, photo: p('anahi-ceja') },
  { slug: 'carisa-gonzales', name: 'Carisa Gonzales', role: 'USC Lead Coordinator', school: 'USC', year: 'Senior', major: 'Business, USC Marshall, emphasis in Leadership and Innovation', approved: true, photo: p('carisa-gonzales') },
  { slug: 'cheryl-zhang', name: 'Cheryl Zhang', role: 'Demo Day and Partnerships Lead', school: 'USC', year: 'Senior', major: 'Business Administration, USC Marshall', approved: true, photo: p('cheryl-zhang') },
  { slug: 'mane-patatanian', name: 'Mane Patatanian', role: 'UCLA Lead', school: 'UCLA', year: 'Sophomore', major: 'Honors Psychobiology and Political Science', approved: true, photo: p('mane-patatanian') },
  // Elijah: name, role and photo only. No school, year, major or bio.
  { slug: 'elijah-carraby', name: 'Elijah Carraby', role: 'Content', approved: true, photo: p('elijah-carraby') },
];

/** "Senior, Media Studies, USC" */
export const detail = (m: TeamMember) =>
  [m.year, m.major, m.school].filter(Boolean).join(', ');
