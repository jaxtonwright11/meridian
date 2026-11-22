// Facts about Meridian and the conference it launched with. Every page reads these, so a
// change here changes the whole site. Use only facts Jax has confirmed.

export const COMPANY_LINE = 'Meridian is a company that connects executives with top student talent.';
/** Footer tagline. */
export const TAGLINE = 'A company that connects executives with top student talent.';
export const HEADLINE = 'Meridian connects executives with top student talent.';
/** What Meridian does. Company first, not conference first. */
export const WHAT_LINE = 'Meridian connects executives with top student talent. Executives meet students in their field, in person, and get to know them for who they are, not their resumes. Companies get an early look at strong students, and executives meet each other. Afterward, Meridian makes the introductions both sides ask for.';

/** 400, everywhere, not "close to 400" (Jax, Nov 21). */
export const STUDENTS = '400';
export const STUDENTS_NUMBER = '400';
export const EXECUTIVES = 20;
export const STARTUPS = 12;
export const PROOF_LINE = `Meridian launched with a conference: ${STUDENTS} students and ${EXECUTIVES} executives at UCLA, in collaboration with USC.`;
export const CONFERENCE_DATE = 'Saturday, November 14, 2026';

/** Contact. One address for everything public. */
export const EMAIL = 'jaxtonwright11@berkeley.edu';
export const INSTAGRAM = { handle: '@meridianventura', url: 'https://www.instagram.com/meridianventura/' };
export const FOUNDER_INSTAGRAM = { handle: '@jaxtonwright', url: 'https://www.instagram.com/jaxtonwright/' };
/** Meridian's own LinkedIn. */
export const LINKEDIN = { label: 'LinkedIn', url: 'https://www.linkedin.com/in/meridian-conference-b65a5943b/' };
/** Jaxton's personal LinkedIn, linked from the founder section and the contact page. */
export const FOUNDER_LINKEDIN = { label: 'LinkedIn (Jaxton Wright)', url: 'https://www.linkedin.com/in/jaxtonwright/' };

const mail = (subject: string, body?: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
export const JOIN_TEAM_MAILTO = mail('Joining the Meridian team', 'Name:\nSchool and year:\nRole I am interested in:\nWhat I have built or done:\n');
export const JOIN_TEAM_LINE = "Meridian's team works across partnerships, software engineering, design, content, outreach and events, and is open to people who bring other skills.";
/**
 * The contact form. It never asks people to pick a category ("executive", "student"): people are
 * more than a label (Jax, Nov 22). Every contact link goes to the same plain form.
 */
export const CONTACT = '/contact/';

/**
 * Partners: each organization's own logo file, unedited (sources in the "Asset sources" doc in
 * Drive, Nov 22). `dark`: the logo is white, so it sits on a dark tile. `small`: a bare wordmark, drawn smaller so it doesn't outweigh the rest. Four share a USC or UCLA
 * parent logo, so every tile shows the name too. Never list the UCLA Black Alumni Association.
 */
export interface Partner { name: string; logo: string; w: number; h: number; dark?: boolean; small?: boolean }
const lg = (f: string) => `/logos/${f}`;
export const PARTNERS: Partner[] = [
  { name: 'USC Career Center', logo: lg('usc-career-center.png'), w: 340, h: 109 },
  { name: 'USC Latino Alumni Association', logo: lg('usc-latino-alumni-association.svg'), w: 379, h: 84, dark: true },
  { name: 'USC Neighborhood Academic Initiative', logo: lg('usc-neighborhood-academic-initiative.png'), w: 340, h: 109 },
  { name: 'USC Iovine and Young Academy', logo: lg('usc-iovine-young-academy.svg'), w: 517, h: 116, dark: true },
  { name: 'UCLA Career Center', logo: lg('ucla-career-center.svg'), w: 133, h: 43, dark: true, small: true },
  { name: 'UCLA SOLE', logo: lg('ucla-sole.svg'), w: 339, h: 86, dark: true },
  { name: 'UCLA Undergraduate Research Center', logo: lg('ucla-undergraduate-research-center.png'), w: 456, h: 70 },
  { name: 'UCLA Design Media Arts', logo: lg('ucla-design-media-arts.svg'), w: 133, h: 43, dark: true, small: true },
  { name: 'Petersen Automotive Museum', logo: lg('petersen-automotive-museum.png'), w: 1500, h: 227 },
  { name: 'Bruin Formula Racing', logo: lg('bruin-formula-racing.svg'), w: 2713, h: 1915 },
  { name: 'Las Fotos Project', logo: lg('las-fotos-project.png'), w: 1899, h: 631, dark: true },
  { name: 'EnCorps', logo: lg('encorps.png'), w: 560, h: 143 },
  { name: 'Youth Cinema Project', logo: lg('youth-cinema-project.png'), w: 327, h: 93 },
  { name: 'General Atomics', logo: lg('general-atomics.svg'), w: 422, h: 65, dark: true },
];
/** The five shown in the footer. */
export const PARTNERS_SHORT = PARTNERS.slice(0, 5);

export interface ExecInRoom { name: string; title: string; photo?: string; alt?: string }
const ex = (slug: string) => `/opt/nov14/exec/${slug}.webp`;

/**
 * Executives, in the order Jax set (Nov 22). Titles match the stage slides: use them exactly.
 * Portraits where we have one, otherwise the best photo from the day. No "by Zoom" label.
 * Kheris Rogers attended but is not listed (Jax, Nov 22).
 * TODO(jax): headshots still wanted for Anthony Mendoza and Dr. Shanna Shaked.
 * David Meltzer and Troy Palmquist: portraits supplied by Jax (Nov 22).
 */
export const EXECS_IN_ROOM: ExecInRoom[] = [
  { name: 'David Meltzer', title: 'Co-founder and CEO, Sports 1 Marketing · Co-creator, Entrepreneur Elevator Pitch', photo: ex('david-meltzer'), alt: 'David Meltzer' },
  { name: 'Darren Prince', title: 'Founder and CEO, Prince Marketing Group; sports and celebrity agent', photo: ex('darren-prince'), alt: 'Darren Prince' },
  { name: 'Chris Swain', title: 'Co-founder, EA Game Innovation Lab; USC Iovine and Young Academy', photo: '/opt/people/chris-swain.webp', alt: 'Chris Swain' },
  { name: 'Anthony Mendoza', title: 'VP of Candles, Bath & Body Works', photo: ex('anthony-mendoza'), alt: 'Anthony Mendoza' },
  { name: 'Carlos Gonzales', title: 'Vice President of Manufacturing, The Peggs Company', photo: ex('carlos-gonzales'), alt: 'Carlos Gonzales' },
  { name: 'Paul C. Pereira, JD', title: 'SVP, Patient Advocacy and Government Affairs, Ardelyx', photo: '/opt/people/paul-pereira.webp', alt: 'Paul C. Pereira, JD' },
  { name: 'Dr. Naveen Vetcha', title: 'NASA Marshall Space Flight Center', photo: '/opt/people/naveen-vetcha.webp', alt: 'Dr. Naveen Vetcha' },
  { name: 'Joe Killinger', title: 'Co-founder, Commercial Brokers International', photo: '/opt/people/joe-killinger.webp', alt: 'Joe Killinger' },
  { name: 'Jody Stiger', title: 'Deputy Chief, Administrative Services Division, LA Metro Police Department of Public Safety', photo: ex('jody-stiger'), alt: 'Jody Stiger' },
  { name: 'Dr. Ellen Junn', title: 'Former President, California State University, Stanislaus', photo: '/opt/people/ellen-junn.webp', alt: 'Dr. Ellen Junn' },
  { name: 'Dr. Bob Dodge', title: 'President, Physicians for Social Responsibility Los Angeles', photo: '/opt/people/bob-dodge.webp', alt: 'Dr. Bob Dodge' },
  { name: 'David Lash', title: "Managing Counsel for Pro Bono and Public Interest Services, O'Melveny & Myers", photo: ex('david-lash'), alt: 'David Lash' },
  { name: 'Dr. Yan Searcy', title: 'Dean, California State University, Northridge', photo: '/opt/people/yan-searcy.webp', alt: 'Dr. Yan Searcy' },
  { name: 'Michael Kang', title: 'Graduate Director of Film and Television Production, LMU School of Film and Television', photo: '/opt/people/michael-kang.webp', alt: 'Michael Kang' },
  { name: 'Dr. Shanna Shaked', title: 'Director, UCLA Learning Assistant Program; Senior Associate Director, UCLA CEILS', photo: ex('shanna-shaked'), alt: 'Dr. Shanna Shaked' },
  { name: 'Jamin Wright', title: 'Associate Director, Talent Acquisition, Ardelyx', photo: ex('jamin-wright'), alt: 'Jamin Wright' },
  { name: 'Troy Palmquist', title: 'Founder, HomeCode Advisors', photo: ex('troy-palmquist'), alt: 'Troy Palmquist' },
  { name: 'Tony Hsieh', title: 'Founder, Shriller Creative; comedian and TEDx speaker', photo: '/opt/people/tony-shriller.webp', alt: 'Tony Hsieh' },
  { name: 'Julian Lewis', title: 'Board Member, EnCorps', photo: ex('julian-lewis'), alt: 'Julian Lewis' },
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

/** Gallery, in order. Real, unaltered photos from November 14, from Jax's own shortlist. Full rooms only. */
const g = (n: string) => `/opt/nov14/day/${n}.webp`;
export const PHOTOS: Photo[] = [
  { src: g('room-back'), alt: 'The full room from the back, during Dr. Bob Dodge\'s talk' },
  { src: g('team-laughing'), alt: 'Two members of the Meridian team laughing, with the crowd behind them' },
  { src: g('tony-crowd'), alt: 'Tony Hsieh talking with students by the windows' },
  { src: g('dodge-story'), alt: 'Dr. Bob Dodge telling a story to a student' },
  { src: g('kang-student'), alt: 'Michael Kang in conversation with a student' },
  { src: g('founder-room'), alt: 'Jaxton Wright on stage, speaking to a full room' },
];

/** Photographers, each name linked. TODO(jax): confirm Catherine's link (her portfolio; no LinkedIn found). */
export const PHOTOGRAPHERS = [
  { name: 'Catherine Rodriguez', url: 'https://new.express.adobe.com/webpage/aG3Xe5qhfJCQp' },
  { name: 'Aaron Colgan', url: 'https://www.linkedin.com/in/aaron-colgan-153475389/' },
  { name: 'Elijah Carraby', url: 'https://www.linkedin.com/in/elijah-carraby-29b303180/' },
];

/** Demo Day: the 12 student startups. Pitch order, except NYC High School Esports League, which Jax moved last (Nov 22). One line each, exactly as confirmed. Never add to them. */
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
  { slug: 'cat-counselor', name: 'Cat Counselor', founders: 'Yin Qiao Zhang (USC) and team', line: 'A cozy mobile game that turns anxiety-coping worksheets into minigames.',
    photos: [{ src: d('cat-counselor-1'), alt: 'The Cat Counselor founder pitching at the podium, with a slide beside her' }, { src: d('cat-counselor-2'), alt: 'The Cat Counselor pitch, seen from the side of the stage' }] },
  // Photos cleared by Jax (Nov 22): the founders and families are fine with them. Names still not published.
  { slug: 'safe-pulse', name: 'Safe Pulse', line: 'A wristband that helps caregivers look after people living with dementia.',
    photos: [{ src: d('safe-pulse-1'), alt: 'The Safe Pulse team pitching on stage' }, { src: d('safe-pulse-2'), alt: 'The Safe Pulse team on stage beside the podium' }] },
  { slug: 'project-play', name: 'Project Play', founders: 'Rila He (USC)', line: 'Gets you playing your favorite song in under 15 minutes.',
    photos: [{ src: d('project-play-1'), alt: 'The Project Play founder pitching, holding a small keyboard' }, { src: d('project-play-2'), alt: 'The Project Play founder at the microphone' }] },
  { slug: 'blendwell', name: 'BlendWell', founders: 'Ian Robinson', line: "A smoothie app that builds blends from what's already in your kitchen and your goals.",
    photos: [{ src: d('blendwell-1'), alt: 'The BlendWell founder, seated, smiling' }, { src: d('blendwell-2'), alt: 'The BlendWell founder at the conference' }, { src: d('blendwell-3'), alt: 'The BlendWell founder smiling, close up' }] },
  { slug: 'turtle', name: 'Turtle', founders: 'Kalyan Toussaint (UC Berkeley)', line: 'A 6 lb sleeping bag, tent and backpack in one, for people facing homelessness or displaced by disaster.',
    photos: [{ src: d('turtle-1'), alt: 'The Turtle founder pitching with a microphone' }, { src: d('turtle-2'), alt: 'The Turtle founder on stage' }] },
  { slug: 'amor', name: 'AMOR Smash Burger', founders: 'Eric Rios (Oxnard)', line: 'A smash burger brand built on simple ingredients and community impact.',
    photos: [{ src: d('amor-1'), alt: 'The AMOR Smash Burger founder pitching at the podium' }, { src: d('amor-3'), alt: 'The AMOR Smash Burger founder waving from the podium beside his slide' }, { src: d('amor-2'), alt: 'The AMOR Smash Burger founder with a microphone' }] },
  { slug: 'prism', name: 'PRISM', founders: 'Ayla Schorn (USC)', line: 'MedTech for early detection of respiratory reflux.',
    photos: [{ src: d('prism-1'), alt: 'The PRISM founder pitching on stage beside her slide, How PRISM works' }, { src: d('prism-2'), alt: 'The PRISM pitch, seen from the tables' }] },
  { slug: 'papertok', name: 'PaperTok', founders: 'Pablo Presa Carrera (USC Iovine and Young Academy)', line: 'Scientific papers in one short-form, scrollable feed.',
    link: { label: 'papertok.app', url: 'https://papertok.app' },
    photos: [{ src: d('papertok-1'), alt: 'The PaperTok founder pitching on stage beside his slide' }, { src: d('papertok-2'), alt: 'The PaperTok founder at the podium' }] },
  { slug: 'nyc-esports', name: 'NYC High School Esports League', founders: 'Edison Zhong (USC)', line: 'A high school esports league in New York City.', photos: [{ src: d('edison-zhong'), alt: 'Edison Zhong, founder of NYC High School Esports League' }] },
];

/** Founder bio: the wording from before the rewrite, restored (Jax, Nov 22). Its later sentences were about plans for November 14 and are left out. */
export const FOUNDER_BIO = 'Jaxton Wright is the founder of Meridian. He grew up in Oxnard, California, and studies Honors Economics and Political Science at UC Berkeley. In July 2025 he gave a speech at Harvard on AI and policy. He founded Meridian to connect executives with top student talent, and it launched with a conference that brought 20 executives and 400 students together at UCLA, in collaboration with USC.';
