// Partners (brief v2 section 7.3). Text only, no logos. Only status "live"
// renders. `line` says what the partner is doing, never a status.
// Internal notes from the brief are deliberately not in this file.

export type PartnerGroup = 'UCLA' | 'USC' | 'Community Organizations' | 'Companies';
export type PartnerKind = 'Office or Department' | 'Student Organization';

export interface Partner {
  name: string;
  group: PartnerGroup;
  kind?: PartnerKind;
  status: 'live' | 'check';
  line: string;
  url?: string;
}

export const GROUPS: PartnerGroup[] = ['UCLA', 'USC', 'Community Organizations', 'Companies'];

export const partners: Partner[] = [
  { name: 'Undergraduate Students Association Council', group: 'UCLA', kind: 'Student Organization', status: 'live', line: 'Student government sharing Meridian across UCLA.' },
  { name: 'Student Organizations, Leadership & Engagement', group: 'UCLA', kind: 'Office or Department', status: 'live', line: 'Reaching students across the UCLA campus.' },
  { name: 'Undergraduate Research Center', group: 'UCLA', kind: 'Office or Department', status: 'live', line: 'Directing students to campus research resources and to demo day.' },
  { name: 'VIPS Scholars', group: 'UCLA', kind: 'Office or Department', status: 'check', line: '' },
  { name: 'Startup UCLA', group: 'UCLA', kind: 'Student Organization', status: 'check', line: 'Student teams from its summer incubator presenting at demo day.' },
  { name: 'Bruin Formula Racing', group: 'UCLA', kind: 'Student Organization', status: 'live', line: 'UCLA\u2019s student race team, joining the day.' },
  { name: 'NSBE UCLA', group: 'UCLA', kind: 'Student Organization', status: 'live', line: 'Thirty seats held, promoting Meridian to their chapter.' },
  { name: 'Afrikan Student Union', group: 'UCLA', kind: 'Student Organization', status: 'check', line: 'Sharing Meridian with its members.' },
  { name: 'First To Go', group: 'UCLA', kind: 'Student Organization', status: 'check', line: 'Sharing Meridian with its members.' },
  { name: 'UCLA Design Media Arts', group: 'UCLA', kind: 'Office or Department', status: 'live', line: 'Carried to their students on campus.' },
  { name: 'UCLA Black Alumni Association', group: 'UCLA', kind: 'Student Organization', status: 'live', line: 'Sharing Meridian with alumni.' },
  { name: 'USC Iovine and Young Academy', group: 'USC', kind: 'Office or Department', status: 'live', line: 'Promoting Meridian to students through newsletters and classes.' },
  { name: 'USC Educational Partnerships', group: 'USC', kind: 'Office or Department', status: 'check', line: 'Supporting the Neighborhood Academic Initiative\u2019s students coming to the day.' },
  { name: 'USC Latino Alumni Association', group: 'USC', kind: 'Student Organization', status: 'live', line: 'A reserved block of seats for their students.' },
  { name: 'USC Neighborhood Academic Initiative', group: 'USC', kind: 'Office or Department', status: 'live', line: 'Bringing 140 students and day-of volunteers.' },
  { name: 'USC School of Cinematic Arts', group: 'USC', kind: 'Office or Department', status: 'check', line: '' },
  { name: 'TRIO Scholars', group: 'USC', kind: 'Office or Department', status: 'check', line: 'Sharing Meridian with its scholars.' },
  { name: 'Trojan Marketing Group', group: 'USC', kind: 'Student Organization', status: 'check', line: '' },
  { name: 'SHPE USC', group: 'USC', kind: 'Student Organization', status: 'check', line: '' },
  { name: 'USC Campus Activities', group: 'USC', kind: 'Office or Department', status: 'check', line: '' },
  { name: '826LA', group: 'Community Organizations', status: 'live', line: 'Sent to a network of 4,000 students and alumni.' },
  { name: 'LA Promise Fund', group: 'Community Organizations', status: 'live', line: 'Bringing students from two cohorts.' },
  { name: 'I Have A Dream Foundation LA', group: 'Community Organizations', status: 'live', line: 'A block of Dreamer Scholars.' },
  { name: 'Las Fotos Project', group: 'Community Organizations', status: 'live', line: 'Photographers shooting free headshots for every student.' },
  { name: 'MANA de San Diego', group: 'Community Organizations', status: 'live', line: 'Students from their San Diego network.' },
  { name: 'San Diego Diplomacy Council', group: 'Community Organizations', status: 'live', line: 'Student ambassadors, in person or by video.' },
  { name: 'EnCorps', group: 'Community Organizations', status: 'check', line: 'STEM fellows working the aerospace lab alongside students.' },
  { name: 'Project ECHO', group: 'Community Organizations', status: 'check', line: '' },
  { name: 'HOPE', group: 'Community Organizations', status: 'check', line: '' },
  { name: 'Youth Cinema Project', group: 'Community Organizations', status: 'check', line: '' },
  { name: 'LA Clippers Foundation', group: 'Companies', status: 'live', line: 'Team gear and prizes for the room.' },
  { name: 'Petersen Automotive Museum', group: 'Companies', status: 'live', line: 'Bringing a 1955 Pontiac and a 1955 Bel Air to the floor, with staff, and sharing their summer internships with students.' },
  { name: 'Campaign Zero', group: 'Community Organizations', status: 'check', line: '' },
];

/** Main page for each partner. */
const URLS: Record<string, string> = {
  'Undergraduate Students Association Council': 'https://usac.ucla.edu',
  'Student Organizations, Leadership & Engagement': 'https://sole.ucla.edu',
  'Undergraduate Research Center': 'https://ugresearch.ucla.edu',
  'Bruin Formula Racing': 'https://www.bruinformula.com',
  'NSBE UCLA': 'https://nsbebruins.wixsite.com/nsbe',
  'UCLA Design Media Arts': 'https://dma.ucla.edu',
  'UCLA Black Alumni Association': 'https://www.uclablackalumni.org',
  'USC Latino Alumni Association': 'https://alumni.usc.edu/laa/',
  'USC Neighborhood Academic Initiative': 'https://communities.usc.edu/educational-partnerships/nai/',
  'USC Iovine and Young Academy': 'https://iovine-young.usc.edu',
  '826LA': 'https://826la.org',
  'LA Promise Fund': 'https://www.lapromisefund.org',
  'I Have A Dream Foundation LA': 'https://www.ihadla.org',
  'Las Fotos Project': 'https://lasfotosproject.org',
  'MANA de San Diego': 'https://www.manasd.org',
  'San Diego Diplomacy Council': 'https://www.sandiegodiplomacy.org',
  'LA Clippers Foundation': 'https://www.clippers.com',
  'Petersen Automotive Museum': 'https://www.petersen.org',
};
partners.forEach((p) => { p.url = URLS[p.name]; });

export const livePartners = partners.filter((p) => p.status === 'live');

/** The ten partners shown on the home page, in this order. */
const HOME_FEATURED = [
  'Petersen Automotive Museum', 'LA Clippers Foundation', 'USC Iovine and Young Academy',
  'USC Neighborhood Academic Initiative', 'Undergraduate Students Association Council',
  'Undergraduate Research Center', 'LA Promise Fund', 'I Have A Dream Foundation LA',
  'Las Fotos Project', '826LA',
];
export const homePartners = HOME_FEATURED
  .map((n) => livePartners.find((p) => p.name === n))
  .filter((p): p is Partner => Boolean(p));
