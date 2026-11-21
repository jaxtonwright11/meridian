import {
  EXECS_IN_ROOM, PARTNERS, ALSO_NOV14, WORKED_WITH, PHOTOS, PHOTO_CREDIT, STUDENTS, STUDENTS_NUMBER, EXECUTIVES, STARTUPS,
  CONFERENCE_DATE, JOIN_TEAM_MAILTO, JOIN_TEAM_LINE, PARTNER_LINE, EMAIL, EXEC_GROUP_PHOTO, TEAM_PHOTO,
  FOUNDER_LINE, ORIGIN_STORY, FOUNDER_INSTAGRAM, LINKEDIN, type ExecInRoom,
} from '@/data/recap';

/** What happened on November 14, in a few short lines. */
export const RECAP_LINES = [
  `On ${CONFERENCE_DATE}, ${STUDENTS} students and ${EXECUTIVES} executives met at UCLA, in collaboration with USC.`,
  'Executives got to know students by field, for who they are and not their resumes.',
  'The day was free for students.',
];

/** The three numbers. */
export function Proof() {
  const items = [
    { n: STUDENTS_NUMBER, l: 'students' },
    { n: String(EXECUTIVES), l: 'executives' },
    { n: String(STARTUPS), l: 'student startups' },
  ];
  return (
    <ul className="v-proof" aria-label="The first conference in numbers">
      {items.map((i) => (
        <li key={i.l}><span className="v-proof-n">{i.n}</span> <span className="v-proof-l">{i.l}</span></li>
      ))}
    </ul>
  );
}

const initials = (name: string) =>
  name.replace(/^Dr\. /, '').split(',')[0].split(' ').filter((w) => /^[A-Z]/.test(w) && w.length > 2).map((w) => w[0]).slice(0, 2).join('');

function ExecCard({ e }: { e: ExecInRoom }) {
  return (
    <li className="v-card">
      {e.photo
        ? <img className="v-card-img" src={e.photo} alt={e.alt ?? e.name} width={640} height={640} loading="lazy" />
        : <div className="v-card-img v-card-blank" aria-hidden="true"><span>{initials(e.name)}</span></div>}
      <h3 className="v-card-name">{e.name}</h3>
      <p className="v-card-title">{e.title}</p>
      {e.zoom && <p className="v-card-tag">By Zoom</p>}
    </li>
  );
}

/** Everyone who was in the room: one card each, photo from the day where there is one. */
export function ExecGrid({ group = true }: { group?: boolean }) {
  return (
    <>
      {group && (
        <img className="v-wide v-wide-short" src={EXEC_GROUP_PHOTO.src} alt={EXEC_GROUP_PHOTO.alt} width={1600} height={889} loading="lazy" />
      )}
      <ul className="v-grid">
        {EXECS_IN_ROOM.map((e) => (<ExecCard e={e} key={e.name} />))}
      </ul>
    </>
  );
}

/** Photo grid with the photographer credit. */
export function Gallery({ limit }: { limit?: number }) {
  const photos = limit ? PHOTOS.slice(0, limit) : PHOTOS;
  return (
    <figure className="v-gallery-wrap">
      <div className="v-gallery">
        {photos.map((p) => (<img key={p.src} src={p.src} alt={p.alt} width={1200} height={800} loading="lazy" />))}
      </div>
      <figcaption className="v-credit">{PHOTO_CREDIT}</figcaption>
    </figure>
  );
}

const NameList = ({ names }: { names: string[] }) => (
  <ul className="v-names">{names.map((p) => (<li key={p}>{p}</li>))}</ul>
);

/** Partners and organizations. Names only. */
export function PartnersBlock() {
  return (
    <div className="v-partners">
      <div>
        <h3 className="v-label">Partners</h3>
        <NameList names={PARTNERS} />
      </div>
      <div>
        <h3 className="v-label">Also part of November 14</h3>
        <NameList names={ALSO_NOV14} />
      </div>
      <div className="v-partners-wide">
        <h3 className="v-label">Organizations we&rsquo;ve worked with</h3>
        <ul className="v-flow">{WORKED_WITH.map((p) => (<li key={p}>{p}</li>))}</ul>
      </div>
    </div>
  );
}

/** The founder, in the confirmed words. */
export function FounderStory({ full = false }: { full?: boolean }) {
  return (
    <div className="v-founder">
      <img src="/opt/unnamed__3_.webp" alt="Jaxton Wright, founder of Meridian" width={520} height={520} loading="lazy" />
      <div>
        <p className="v-lead">{FOUNDER_LINE}</p>
        <p className="v-body">{ORIGIN_STORY}</p>
        <p className="v-links">
          {full ? (
            <>
              <a href={LINKEDIN.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={FOUNDER_INSTAGRAM.url} target="_blank" rel="noopener noreferrer">Instagram {FOUNDER_INSTAGRAM.handle}</a>
            </>
          ) : (
            <a href="/about/">About Meridian</a>
          )}
        </p>
      </div>
    </div>
  );
}

/** The one button on the site besides the header: people who want to join the team. */
export function JoinTeam({ photo = true }: { photo?: boolean }) {
  return (
    <div className={photo ? 'v-join' : 'v-join v-join-plain'}>
      <div>
        <h2 className="v-h2" id="join-h">Join the team</h2>
        <p className="v-lead">{JOIN_TEAM_LINE}</p>
        <p><a className="v-btn" href={JOIN_TEAM_MAILTO}>Join the team</a></p>
      </div>
      {photo && <img src={TEAM_PHOTO.src} alt={TEAM_PHOTO.alt} width={1320} height={950} loading="lazy" />}
    </div>
  );
}

/** One quiet line for companies. Never a button. */
export function PartnerLine() {
  return (
    <p className="v-quiet">
      {PARTNER_LINE} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
    </p>
  );
}
