// Facts about Meridian and its first conference. Every page reads these, so a
// change here changes the whole site. Use only facts Jax has confirmed.

export const COMPANY_LINE = 'Meridian is a company that connects executives with top student talent.';
/** Footer tagline. */
export const TAGLINE = 'A company that connects executives with top student talent.';
export const HEADLINE = 'Executives and students. Same room.';

/** 400, everywhere, not "close to 400" (Jax, Nov 21). */
export const STUDENTS = '400';
export const STUDENTS_NUMBER = '400';
export const EXECUTIVES = 20;
export const STARTUPS = 12;
export const PROOF_LINE = `Our first conference: ${STUDENTS} students and ${EXECUTIVES} executives at UCLA, in collaboration with USC.`;
export const CONFERENCE_DATE = 'Saturday, November 14, 2026';

/** Contact. One address for everything public. */
export const EMAIL = 'jaxtonwright11@berkeley.edu';
export const INSTAGRAM = { handle: '@meridianventura', url: 'https://www.instagram.com/meridianventura/' };
export const FOUNDER_INSTAGRAM = { handle: '@jaxtonwright', url: 'https://www.instagram.com/jaxtonwright/' };
export const LINKEDIN = { label: 'linkedin.com/in/jaxtonwright', url: 'https://www.linkedin.com/in/jaxtonwright/' };

const mail = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
export const JOIN_TEAM_MAILTO = mail('Joining the Meridian team');
export const JOIN_TEAM_LINE = "We're building the team. If you want to be part of what Meridian does next, write to us.";
/** The one quiet line for companies. Never a button. */
export const PARTNER_LINE = "Companies and organizations that want to be part of what's next:";

/** Partners. Names only, no logos. Never list the UCLA Black Alumni Association. */
export const PARTNERS = [
  'USC Career Center',
  'USC Latino Alumni Association',
  'USC Neighborhood Academic Initiative',
  'USC Iovine and Young Academy',
  'UCLA Career Center',
];
export const ALSO_NOV14 = ['Petersen Automotive Museum', 'Bruin Formula Racing', 'Las Fotos Project'];
export const WORKED_WITH = [
  'LA Clippers Foundation', 'UCLA SOLE', 'UCLA Undergraduate Research Center', 'UCLA Design Media Arts',
  '826LA', 'I Have A Dream Foundation LA', 'EnCorps', 'Project ECHO', 'Youth Cinema Project', 'HOPE',
  'Vital Teens', 'Trojan Marketing Group', 'General Atomics',
];

export interface ExecInRoom { name: string; title: string; zoom?: boolean; photo?: string; alt?: string }
const ex = (slug: string) => `/opt/nov14/exec/${slug}.webp`;

/**
 * The 20 executives at the conference. Titles match the stage slides (Jax, Nov 21): use them
 * exactly. Photos are from the day. No photo means the card shows initials.
 */
export const EXECS_IN_ROOM: ExecInRoom[] = [
  { name: 'Tony Hsieh', title: 'Founder, Shriller Creative; comedian and TEDx speaker', photo: ex('tony-hsieh'), alt: 'Tony Hsieh at the conference' },
  { name: 'Troy Palmquist', title: 'Founder, HomeCode Advisors', photo: ex('troy-palmquist'), alt: 'Troy Palmquist talking with students' },
  { name: 'Michael Kang', title: 'Graduate Director of Film and Television Production, LMU School of Film and Television', photo: ex('michael-kang'), alt: 'Michael Kang talking with students' },
  { name: 'Dr. Shanna Shaked', title: 'Director, UCLA Learning Assistant Program; Senior Associate Director, UCLA CEILS', photo: ex('shanna-shaked'), alt: 'Dr. Shanna Shaked at a table at the conference' },
  { name: 'Jody Stiger', title: 'Deputy Chief, Administrative Services Division, LA Metro Police Department of Public Safety', photo: ex('jody-stiger'), alt: 'Jody Stiger speaking on stage' },
  { name: 'Joe Killinger', title: 'Co-founder, Commercial Brokers International', photo: ex('joe-killinger'), alt: 'Joe Killinger at the conference' },
  { name: 'David Lash', title: "Managing Counsel for Pro Bono and Public Interest Services, O'Melveny & Myers", photo: ex('david-lash'), alt: 'David Lash talking with students' },
  { name: 'Dr. Bob Dodge', title: 'President, Physicians for Social Responsibility Los Angeles', photo: ex('bob-dodge'), alt: 'Dr. Bob Dodge talking with a student' },
  { name: 'Carlos Gonzales', title: 'Vice President of Manufacturing, The Peggs Company', photo: ex('carlos-gonzales'), alt: 'Carlos Gonzales at the conference' },
  { name: 'Anthony Mendoza', title: 'VP of Candles, Bath & Body Works', photo: ex('anthony-mendoza'), alt: 'Anthony Mendoza talking with a student' },
  { name: 'Chris Swain', title: 'Co-founder, EA Game Innovation Lab; USC Iovine and Young Academy', photo: '/opt/people/chris-swain.webp', alt: 'Chris Swain' },
  { name: 'Julian Lewis', title: 'Board Member, EnCorps', photo: ex('julian-lewis'), alt: 'Julian Lewis at a table with students' },
  { name: 'Dr. Ellen Junn', title: 'Former President, California State University, Stanislaus', photo: ex('ellen-junn'), alt: 'Dr. Ellen Junn speaking at the podium' },
  // No clear photo from the day for Chris Swain or Dr. Searcy: their portraits from the earlier site.
  { name: 'Dr. Yan Searcy', title: 'Dean, California State University, Northridge', photo: '/opt/people/yan-searcy.webp', alt: 'Dr. Yan Searcy' },
  { name: 'Darren Prince', title: 'Founder and CEO, Prince Marketing Group; sports and celebrity agent' },
  { name: 'Jamin Wright', title: 'Associate Director, Talent Acquisition, Ardelyx' },
  // Last of the in-person cards, by request (Jax, Nov 21).
  { name: 'Kheris Rogers', title: "Founder, Flexin' In My Complexion", photo: ex('kheris-rogers'), alt: 'Kheris Rogers at the conference' },
  { name: 'Paul C. Pereira, JD', title: 'SVP, Patient Advocacy and Government Affairs, Ardelyx', zoom: true, photo: ex('paul-pereira'), alt: 'Paul C. Pereira on the screen, joining by Zoom' },
  { name: 'Dr. Naveen Vetcha', title: 'NASA Marshall Space Flight Center', zoom: true, photo: ex('naveen-vetcha'), alt: 'Dr. Naveen Vetcha on the screen, joining by Zoom, with the room watching' },
  { name: 'David Meltzer', title: 'Co-founder and CEO, Sports 1 Marketing · Co-creator, Entrepreneur Elevator Pitch', zoom: true, photo: ex('david-meltzer'), alt: 'David Meltzer on the screen, joining by Zoom' },
];

export interface Photo { src: string; alt: string }

/** The full-room photo: the home hero and the link preview image. */
export const ROOM_PHOTO = {
  src: '/opt/nov14/room.webp',
  small: '/opt/nov14/room-sm.webp',
  alt: "The full room during Dr. Bob Dodge's talk: students and executives at round tables, facing the stage",
};
export const EXEC_GROUP_PHOTO: Photo = { src: '/opt/nov14/exec-group.webp', alt: 'Executives from the conference standing together on stage' };
export const TEAM_PHOTO: Photo = { src: '/opt/nov14/team.webp', alt: 'Six members of the Meridian team at the conference' };

/** Gallery, in order. Real, unaltered photos from November 14. No photo features a high school student. */
const g = (n: string) => `/opt/nov14/gallery/${n}.webp`;
export const PHOTOS: Photo[] = [
  { src: g('kang'), alt: 'Michael Kang in conversation with a student' },
  { src: g('room'), alt: 'The room watching an executive join by Zoom on the big screen' },
  { src: g('mendoza'), alt: 'Anthony Mendoza talking with three students' },
  { src: g('dodge'), alt: 'Dr. Bob Dodge talking with a student' },
  { src: g('junn'), alt: 'Dr. Ellen Junn at a table, handing a card to a student' },
  { src: g('lash'), alt: 'David Lash talking with two students' },
  { src: g('lewis'), alt: 'Julian Lewis talking with a group at a table' },
  { src: g('stiger'), alt: 'Jody Stiger speaking on stage' },
];

export const PHOTO_CREDIT = 'Photos by Catherine Rodriguez (Las Fotos Project), Aaron Colgan and Elijah Carraby.';

/** Demo Day: the 12 student startups, in pitch order. One line each, exactly as confirmed. Never add to them. */
export interface Startup {
  slug: string; name: string; founders?: string; line: string;
  /** Shown after the line as a link. */
  link?: { label: string; url: string };
  photos: Photo[];
}
const d = (n: string) => `/opt/nov14/demo/${n}.webp`;
export const STARTUPS_LIST: Startup[] = [
  { slug: 'cardiostat', name: 'Cardiostat', founders: 'Jonathan Chung and SJ Lim (UCLA)', line: 'One patch that reads the heart and delivers aspirin during a heart attack.',
    photos: [{ src: d('cardiostat-3'), alt: 'A Cardiostat founder pitching with a microphone' }, { src: d('cardiostat-1'), alt: 'The two Cardiostat founders pitching on stage' }, { src: d('cardiostat-2'), alt: 'The Cardiostat founders on stage' }] },
  { slug: 'zesty', name: 'Zesty', founders: 'Delaney Duan, Boran Wang and William Zhang (UCLA)', line: 'An app that plans healthy meals students grew up on, with one-tap grocery ordering.',
    photos: [{ src: d('zesty-1'), alt: 'A Zesty founder pitching with a microphone' }, { src: d('zesty-2'), alt: 'The Zesty team on stage' }] },
  { slug: 'squaloo', name: 'Squaloo', founders: 'Marshal Aldoph (USC)', line: "Offline AI that keeps veteran technicians' know-how at the machine and shows where every answer came from.",
    photos: [{ src: d('squaloo-2'), alt: 'The Squaloo founder smiling at the podium' }, { src: d('squaloo-1'), alt: 'The Squaloo founder pitching at the podium' }] },
  { slug: 'nyc-esports', name: 'NYC High School Esports League', founders: 'Edison Zhong (USC), pitched by Zoom', line: 'A high school esports league in New York City.', photos: [] },
  { slug: 'cat-counselor', name: 'Cat Counselor', founders: 'Yin Qiao Zhang (USC) and team', line: 'A cozy mobile game that turns anxiety-coping worksheets into minigames.',
    photos: [{ src: d('cat-counselor-1'), alt: 'The Cat Counselor founder pitching at the podium, with a slide beside her' }, { src: d('cat-counselor-2'), alt: 'The Cat Counselor pitch, seen from the side of the stage' }] },
  // The founders are high school students: never their names or photos.
  { slug: 'safe-pulse', name: 'Safe Pulse', line: 'A wristband that helps caregivers look after people living with dementia.', photos: [] },
  { slug: 'project-play', name: 'Project Play', founders: 'Rila He (USC)', line: 'Gets you playing your favorite song in under 15 minutes.',
    photos: [{ src: d('project-play-1'), alt: 'The Project Play founder pitching, holding a small keyboard' }, { src: d('project-play-2'), alt: 'The Project Play founder at the microphone' }] },
  { slug: 'blendwell', name: 'BlendWell', founders: 'Ian Robinson', line: "A smoothie app that builds blends from what's already in your kitchen and your goals.",
    photos: [{ src: d('blendwell-1'), alt: 'The BlendWell founder at the conference' }] },
  { slug: 'turtle', name: 'Turtle', founders: 'Kalyan Toussaint (UC Berkeley)', line: 'A 6 lb sleeping bag, tent and backpack in one, for people facing homelessness or displaced by disaster.',
    photos: [{ src: d('turtle-1'), alt: 'The Turtle founder pitching with a microphone' }, { src: d('turtle-2'), alt: 'The Turtle founder on stage' }] },
  { slug: 'amor', name: 'AMOR Smash Burger', founders: 'Eric Rios', line: 'A smash burger brand built on simple ingredients and community impact.',
    photos: [{ src: d('amor-1'), alt: 'The AMOR Smash Burger founder pitching at the podium' }, { src: d('amor-2'), alt: 'The AMOR Smash Burger founder with a microphone' }] },
  { slug: 'prism', name: 'PRISM', founders: 'Ayla Schorn (USC)', line: 'MedTech for early detection of respiratory reflux.',
    photos: [{ src: d('prism-1'), alt: 'The PRISM founder pitching on stage to the room' }, { src: d('prism-2'), alt: 'The PRISM pitch, seen from the tables' }] },
  { slug: 'papertok', name: 'PaperTok', founders: 'Pablo Presa Carrera (USC Iovine and Young Academy)', line: 'Scientific papers in one short-form, scrollable feed.',
    link: { label: 'papertok.app', url: 'https://papertok.app' },
    photos: [{ src: d('papertok-1'), alt: 'The PaperTok founder pitching on stage beside his slide' }, { src: d('papertok-2'), alt: 'The PaperTok founder at the podium' }] },
];

/** Founder story (confirmed, Part 2 section 2). */
export const FOUNDER_LINE = 'Jaxton Wright founded Meridian. He is a junior at UC Berkeley, studying Honors Economics and Political Science. In July 2025, he spoke at Harvard.';
export const ORIGIN_STORY = 'A speech for Laphonza Butler led to speaking at Harvard, which led to a small conference, which became Meridian. Dr. Yan Searcy introduced Jaxton to his mentor George Leis, past chair of the YMCA of the USA, who introduced him to many of the people behind Meridian.';
