import {
  EXECS_IN_ROOM, PARTNERS, PHOTOS, PHOTOGRAPHERS, STUDENTS, EXECUTIVES, STARTUPS,
  CONFERENCE_DATE, JOIN_TEAM_MAILTO, JOIN_TEAM_LINE, PARTNER_LINE, EMAIL, TEAM_PHOTO,
  FOUNDER_BIO, FOUNDER_INSTAGRAM, LINKEDIN, type ExecInRoom,
} from '@/data/recap';

/** What happened on November 14, in a few short lines. */
export const RECAP_LINES = [
  `On ${CONFERENCE_DATE}, ${STUDENTS} students and ${EXECUTIVES} executives met at UCLA, in collaboration with USC.`,
  'Executives got to know students by field, for who they are and not their resumes.',
  `${STARTUPS} student startups pitched at Demo Day.`,
];

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
    </li>
  );
}

/** The executives: one card each, in the order set in the data file. */
export function ExecGrid() {
  return (
    <ul className="v-grid">
      {EXECS_IN_ROOM.map((e) => (<ExecCard e={e} key={e.name} />))}
    </ul>
  );
}

/** "Photos by" with each photographer's name linked. */
export function PhotoCredit() {
  return (
    <p className="v-credit">
      Photos by{' '}
      {PHOTOGRAPHERS.map((p, i) => (
        <span key={p.name}>
          {i > 0 && (i === PHOTOGRAPHERS.length - 1 ? ' and ' : ', ')}
          <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
        </span>
      ))}
      .
    </p>
  );
}

/** Photo grid with the photographer credit. */
export function Gallery({ limit, credit = true }: { limit?: number; credit?: boolean }) {
  const photos = limit ? PHOTOS.slice(0, limit) : PHOTOS;
  return (
    <div className="v-gallery-wrap">
      <div className="v-gallery">
        {photos.map((p) => (<img key={p.src} src={p.src} alt={p.alt} width={960} height={1200} loading="lazy" />))}
      </div>
      {credit && <PhotoCredit />}
    </div>
  );
}

/** Partners: one list of names. */
export function PartnersBlock() {
  return (
    <ul className="v-names v-names-cols">{PARTNERS.map((p) => (<li key={p}>{p}</li>))}</ul>
  );
}

/** The founder. */
export function FounderStory() {
  return (
    <div className="v-founder">
      <img src="/opt/unnamed__3_.webp" alt="Jaxton Wright, founder of Meridian" width={520} height={520} loading="lazy" />
      <div>
        <h3 className="v-founder-name">Jaxton Wright</h3>
        <p className="v-lead">{FOUNDER_BIO}</p>
        <p className="v-links">
          <a href={LINKEDIN.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={FOUNDER_INSTAGRAM.url} target="_blank" rel="noopener noreferrer">Instagram {FOUNDER_INSTAGRAM.handle}</a>
        </p>
      </div>
    </div>
  );
}

/** People who want to join the team. */
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
