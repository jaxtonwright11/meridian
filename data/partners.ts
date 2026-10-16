// Partners (brief v2 section 7.3). Text only, no logos. Only status "live"
// renders. `line` says what the partner is doing, never a status.
// Internal notes from the brief are deliberately not in this file.

export type PartnerGroup = 'UCLA' | 'USC' | 'Community organizations' | 'Companies';
export type PartnerKind = 'Office or department' | 'Student organization';

export interface Partner {
  name: string;
  group: PartnerGroup;
  kind?: PartnerKind;
  status: 'live' | 'check';
  line: string;
}

export const GROUPS: PartnerGroup[] = ['UCLA', 'USC', 'Community organizations', 'Companies'];

export const partners: Partner[] = [
  { name: 'Undergraduate Students Association Council', group: 'UCLA', kind: 'Student organization', status: 'live', line: 'Student government sharing Meridian across UCLA.' },
  { name: 'Student Organizations, Leadership & Engagement', group: 'UCLA', kind: 'Office or department', status: 'live', line: 'Reaching students across the UCLA campus.' },
  { name: 'Undergraduate Research Center', group: 'UCLA', kind: 'Office or department', status: 'live', line: 'Directing students to campus research resources and to demo day.' },
  { name: 'VIPS Scholars', group: 'UCLA', kind: 'Office or department', status: 'check', line: '' },
  { name: 'Startup UCLA', group: 'UCLA', kind: 'Student organization', status: 'check', line: 'Student teams from its summer incubator presenting at demo day.' },
  { name: 'Bruin Formula Racing', group: 'UCLA', kind: 'Student organization', status: 'live', line: 'UCLA\u2019s student race team, joining the day.' },
  { name: 'NSBE UCLA', group: 'UCLA', kind: 'Student organization', status: 'live', line: 'Thirty seats held, promoting Meridian to their chapter.' },
  { name: 'Afrikan Student Union', group: 'UCLA', kind: 'Student organization', status: 'check', line: 'Sharing Meridian with its members.' },
  { name: 'First To Go', group: 'UCLA', kind: 'Student organization', status: 'check', line: 'Sharing Meridian with its members.' },
  { name: 'UCLA Design Media Arts', group: 'UCLA', kind: 'Office or department', status: 'live', line: 'Carried to their students on campus.' },
  { name: 'UCLA Black Alumni Association', group: 'UCLA', kind: 'Student organization', status: 'live', line: 'Sharing Meridian with alumni.' },
  { name: 'USC Neighborhood Academic Initiative', group: 'USC', kind: 'Office or department', status: 'live', line: 'Bringing 140 students and day-of volunteers.' },
  { name: 'USC Educational Partnerships', group: 'USC', kind: 'Office or department', status: 'check', line: 'Supporting the Neighborhood Academic Initiative\u2019s students coming to the day.' },
  { name: 'USC Latino Alumni Association', group: 'USC', kind: 'Student organization', status: 'live', line: 'A reserved block of seats for their students.' },
  { name: 'USC Iovine and Young Academy', group: 'USC', kind: 'Office or department', status: 'live', line: 'Promoting Meridian to students through newsletters and classes.' },
  { name: 'USC School of Cinematic Arts', group: 'USC', kind: 'Office or department', status: 'check', line: '' },
  { name: 'TRIO Scholars', group: 'USC', kind: 'Office or department', status: 'check', line: 'Sharing Meridian with its scholars.' },
  { name: 'Trojan Marketing Group', group: 'USC', kind: 'Student organization', status: 'check', line: '' },
  { name: 'SHPE USC', group: 'USC', kind: 'Student organization', status: 'check', line: '' },
  { name: 'USC Campus Activities', group: 'USC', kind: 'Office or department', status: 'check', line: '' },
  { name: '826LA', group: 'Community organizations', status: 'live', line: 'Sent to a network of 4,000 students and alumni.' },
  { name: 'LA Promise Fund', group: 'Community organizations', status: 'live', line: 'Bringing students from two cohorts.' },
  { name: 'I Have A Dream Foundation LA', group: 'Community organizations', status: 'live', line: 'A block of Dreamer Scholars.' },
  { name: 'Las Fotos Project', group: 'Community organizations', status: 'live', line: 'Photographers shooting free headshots for every student.' },
  { name: 'MANA de San Diego', group: 'Community organizations', status: 'live', line: 'Students from their San Diego network.' },
  { name: 'San Diego Diplomacy Council', group: 'Community organizations', status: 'live', line: 'Student ambassadors, in person or by video.' },
  { name: 'EnCorps', group: 'Community organizations', status: 'check', line: 'STEM fellows working the aerospace lab alongside students.' },
  { name: 'Project ECHO', group: 'Community organizations', status: 'check', line: '' },
  { name: 'HOPE', group: 'Community organizations', status: 'check', line: '' },
  { name: 'Youth Cinema Project', group: 'Community organizations', status: 'check', line: '' },
  { name: 'LA Clippers', group: 'Companies', status: 'live', line: 'Team gear and prizes for the room.' },
  { name: 'Petersen Automotive Museum', group: 'Companies', status: 'live', line: 'Bringing a 1955 Pontiac and a 1955 Bel Air to the floor, with staff, and sharing their summer internships with students.' },
  { name: 'Campaign Zero', group: 'Community organizations', status: 'check', line: '' },
];

export const livePartners = partners.filter((p) => p.status === 'live');

/** The ten partners shown on the home page, in this order. */
const HOME_FEATURED = [
  'Petersen Automotive Museum', 'LA Clippers', 'USC Neighborhood Academic Initiative',
  'USC Iovine and Young Academy', 'Undergraduate Students Association Council',
  'Undergraduate Research Center', 'LA Promise Fund', 'I Have A Dream Foundation LA',
  'Las Fotos Project', '826LA',
];
export const homePartners = HOME_FEATURED
  .map((n) => livePartners.find((p) => p.name === n))
  .filter((p): p is Partner => Boolean(p));
