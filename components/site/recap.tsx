import {
  EXECS_IN_ROOM, PARTNERS, PHOTOS, PHOTO_CREDIT, STUDENTS, EXECUTIVES, CONFERENCE_DATE,
  PARTNER_MAILTO, JOIN_TEAM_MAILTO, NETWORK_FORM_URL,
} from '@/data/recap';

/** What happened on November 14, in a few short lines. */
export const RECAP_LINES = [
  `On ${CONFERENCE_DATE}, ${STUDENTS} students and ${EXECUTIVES} executives met at UCLA, in collaboration with USC.`,
  'Executives got to know students by field, for who they are and not their resumes.',
  'We reversed the usual conference: the executives worked the room, not the students.',
];

export function RecapLines() {
  return (
    <ul className="m-recap">
      {RECAP_LINES.map((l) => (<li key={l}>{l}</li>))}
    </ul>
  );
}

/** Square photo grid with the photographer credit. */
export function Gallery({ limit }: { limit?: number }) {
  const photos = limit ? PHOTOS.slice(0, limit) : PHOTOS;
  return (
    <figure className="m-gallery-wrap">
      <div className="m-gallery">
        {photos.length > 0
          ? photos.map((p) => (<img key={p.src} src={p.src} alt={p.alt} width={600} height={600} loading="lazy" />))
          : Array.from({ length: limit ?? 8 }, (_, i) => (
            // Preview only: shows where the November 14 photos go until the files are in the project.
            <div className="m-gallery-todo" key={i} aria-hidden="true">Photo</div>
          ))}
      </div>
      <figcaption className="m-credit">{PHOTO_CREDIT}</figcaption>
    </figure>
  );
}

/** Everyone who was in the room. Names and titles only. */
export function ExecsInRoom() {
  const inPerson = EXECS_IN_ROOM.filter((e) => !e.zoom);
  const zoom = EXECS_IN_ROOM.filter((e) => e.zoom);
  const Row = ({ e }: { e: (typeof EXECS_IN_ROOM)[number] }) => (
    <li><span className="n">{e.name}</span>{e.title && <span className="t">{e.title}</span>}</li>
  );
  return (
    <>
      <ul className="m-execs">{inPerson.map((e) => (<Row e={e} key={e.name} />))}</ul>
      {zoom.length > 0 && (
        <>
          <h3 className="m-execs-h">Joined by Zoom</h3>
          <ul className="m-execs">{zoom.map((e) => (<Row e={e} key={e.name} />))}</ul>
        </>
      )}
    </>
  );
}

export function PartnerNames() {
  return (
    <ul className="m-partners">
      {PARTNERS.map((p) => (<li key={p}>{p}</li>))}
    </ul>
  );
}

/** The three next steps, one per audience. */
export function NextSteps() {
  const steps = [
    { h: 'Companies and Executives', p: 'Partner with Meridian to connect with the next generation of talent.', l: 'Partner with Meridian', href: PARTNER_MAILTO },
    { h: 'Students', p: 'Join the Meridian Network to hear from Meridian as it grows.', l: 'Join the Meridian Network', href: NETWORK_FORM_URL, ext: true },
    { h: 'The Team', p: 'Meridian is growing from here. Write to us about joining the team.', l: 'Join the team', href: JOIN_TEAM_MAILTO },
  ];
  return (
    <div className="m-doors">
      {steps.map((s) => (
        <a className="m-door" key={s.h} href={s.href} {...(s.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          <h3>{s.h}</h3>
          <p>{s.p}</p>
          <span className="btn btn-ink m-door-cta">{s.l}</span>
        </a>
      ))}
    </div>
  );
}
