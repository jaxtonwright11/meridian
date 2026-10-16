// Team records. Class year only, never age. A card renders only the fields
// that are present. Bios render only when approved AND text exists.
//
// Bios: facts only, about the person, never their Meridian role (that is the bold title
// above the bio). Jax, Oct 15 and 16. Sourced from each person\'s public
// LinkedIn (pasted by Jax) and the Arts Climate Collective post. Each teammate should
// re-check theirs.

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
  /** Public LinkedIn profile. The name links here. */
  linkedin?: string;
  approved: boolean;
  photo: string;
}

const p = (slug: string) => `/opt/people/${slug}.webp`;

export const founder: TeamMember = {
  slug: 'jaxton-wright',
  linkedin: 'https://www.linkedin.com/in/jaxtonwright/',
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
  { slug: 'carisa-gonzales', linkedin: 'https://www.linkedin.com/in/carisagonzales/', name: 'Carisa Gonzales', role: 'USC Lead Coordinator', school: 'USC', year: 'Senior', major: 'Business, USC Marshall, emphasis in Leadership and Innovation', bio: 'Previously a Selling Manager at Ralph Lauren, and now works at Sephora. Completed the USC Marshall international business immersion in Lithuania. Worked on a semester-long client project for Reflaunt in USC\'s Fashion, Luxury, and Lifestyle Marketing course.', approved: true, photo: p('carisa-gonzales') },
  { slug: 'cheryl-zhang', linkedin: 'https://www.linkedin.com/in/cherylzhangx/', name: 'Cheryl Zhang', role: 'Demo Day and Partnerships Lead', school: 'USC', year: 'Senior', major: 'Business Administration, USC Marshall', bio: '2026 IRTS Summer Fellow, one of 40 selected from more than 2,500 applicants. Product Management intern at Horizon Media, and Assistant Director of Finance for USC OWN IT, where she helped secure over $10,000 in sponsorships. Won Folio and Canva\'s Summer Business Strategy Challenge for a Canva for Campus go-to-market strategy at USC.', approved: true, photo: p('cheryl-zhang') },
  { slug: 'aaron-colgan', linkedin: 'https://www.linkedin.com/in/aaron-colgan-153475389/', name: 'Aaron Colgan', role: 'Content and filming', school: 'USC', year: 'Senior', major: 'Media Studies', bio: '2026 Arts Climate Collective awardee for a project documenting the effects of warehousing in the Inland Empire. Transferred to USC from community college. Films long-form interviews and live events.', approved: true, photo: p('aaron-colgan') },
  { slug: 'mane-patatanian', linkedin: 'https://www.linkedin.com/in/mane-patatanian-669a9b313/', name: 'Mane Patatanian', role: 'UCLA Lead', school: 'UCLA', year: 'Sophomore', major: 'Honors Psychobiology and Political Science', bio: 'Founder of Vital Teens, an Antelope Valley organization with 135+ members that has donated thousands of toys to local hospitals and led CPR training initiatives. Presented Aliso Canyon health research at UCLA\'s Undergraduate Research Week. UCLA Honors Program member and Optimist Scholar.', approved: true, photo: p('mane-patatanian') },
  { slug: 'anahi-ceja', linkedin: 'https://www.linkedin.com/in/anahi-ceja/', name: 'Anahi Ceja', role: 'Berkeley Outreach and Digital Content Lead', school: 'UC Berkeley', year: 'Junior', major: 'Neuroscience', bio: 'Space Assignments Associate in the ASUC Office of the Executive Vice President. Previously Operations Associate for the Latinx Business Student Association, and a Blood Donor Ambassador and board officer with the American Red Cross Los Angeles Region.', approved: true, photo: p('anahi-ceja') },
  // Elijah: no school, year, major or bio supplied. TODO(jax): add them.
  { slug: 'elijah-carraby', linkedin: 'https://www.linkedin.com/in/elijah-carraby-29b303180/', name: 'Elijah Carraby', role: 'Content Creation and Film', tagline: 'Meridian content team', bio: '2026 Arts Climate Collective awardee. Films long-form interviews and live events.', approved: true, photo: p('elijah-carraby') },
];

/** Lines under the bold title, in this order: school, year, major. */
export const detailLines = (m: TeamMember) =>
  [m.school ?? m.tagline, m.year, m.major].filter((x): x is string => Boolean(x));

/** "Senior, Media Studies, USC" */
export const detail = (m: TeamMember) =>
  [m.year, m.major, m.school].filter(Boolean).join(', ');
