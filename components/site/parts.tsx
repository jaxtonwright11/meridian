import { REGISTRATION_FORM_URL, MEETUPS, EVENT_DATE_SHORT, EVENT_VENUE } from '@/config';
import { confirmedLeaders, photoLeaders, title } from '@/data/leaders';
import { team, founder, detailLines, type TeamMember } from '@/data/team';
import { livePartners, homePartners } from '@/data/partners';
import { press } from '@/data/press';
import { LeadersViewer, type Tile } from './LeadersViewer';

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export { EVENTS_SENTENCE, NETWORK_SENTENCE, numWord, list } from '@/lib/copy';
import { NETWORK_SENTENCE, numWord, list } from '@/lib/copy';

export function RegisterButton({ children = `Register for ${EVENT_DATE_SHORT}` }: { children?: React.ReactNode }) {
  return (
    <a className="btn btn-ink" href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

/** One primary action, then two or three plain text links. */
export function Explore({ links }: { links: [string, string][] }) {
  return (
    <div className="m-wrap">
      <nav className="m-explore" aria-label="Explore">
        <span>Explore</span>
        {links.map(([l, h]) => (<a key={h} className="m-link" href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>{l}</a>))}
      </nav>
    </div>
  );
}

/** The meridian line: one thin gold curve through the hero and the name. */
export function MeridianLine() {
  return (
    <svg className="m-line" viewBox="0 0 1200 520" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-20 430 C 320 330, 520 120, 1220 70" />
      <path d="M-20 470 C 360 380, 600 190, 1220 140" />
    </svg>
  );
}

export function Doors() {
  const doors = [
    { h: 'Students', p: 'The conference is free, the leaders come to you, and nothing needs preparing. See how it works and register.', l: 'For students', href: '/students/' },
    { h: 'Executives', p: 'Spend the day getting to know students, alongside the other leaders in the room. See what the day involves and who is joining.', l: 'For executives', href: '/speakers/' },
    { h: 'Partners', p: 'Companies, campus offices, and community organizations are working with Meridian on the conference and on what comes after it. See what that looks like.', l: 'For partners', href: '/partners/' },
  ];
  return (
    <div className="m-wrap">
      <h2 className="m-title">Where would you like to start?</h2>
      <div className="m-doors">
        {doors.map((d) => (
          <a className="m-door" key={d.h} href={d.href}>
            <h3>{d.h}</h3>
            <p>{d.p}</p>
            <span className="btn btn-ink m-door-cta">{d.l}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/** The three blocks of what Meridian does. Used on the home and About pages. */
export function WhatMeridianDoes() {
  return (
    <div className="m-three m-cards3">
      <div>
        <h3>The conference</h3>
        <p>A free day at UCLA where leaders from every field come to students. November 14.</p>
        <p style={{ marginTop: 12 }}><a className="m-link" href="/conference/">See the conference</a></p>
      </div>
      <div>
        <h3>Events by field</h3>
        <p>
          In-person events, each in one field, beginning with {list(MEETUPS.firstFields)}.
          Each brings executives from that field together with students from across Los Angeles
          campuses, with student teams working the same challenge side by side.
        </p>
      </div>
      <div>
        <h3>The network</h3>
        <p>{NETWORK_SENTENCE}</p>
      </div>
    </div>
  );
}

/** The name note, with the meridian line passing through it. */
export function NameNote() {
  return (
    <section className="m-section" style={{ position: 'relative', overflow: 'hidden' }} aria-labelledby="name-h">
      <MeridianLine />
      <div className="m-wrap" style={{ position: 'relative' }}>
        <span className="m-eyebrow" id="name-h">The name</span>
        <p className="m-idea m-name">
          A meridian is the highest point in the arc and the line connecting where you are to where
          you are going. The line runs through here.
        </p>
      </div>
    </section>
  );
}

export function SlimConferenceBand() {
  return (
    <div className="m-wrap">
      <div className="m-slim">
        <p>The first Meridian conference is Saturday, {EVENT_DATE_SHORT} at {EVENT_VENUE}. Free for every student.</p>
        <div className="m-actions">
          <RegisterButton>Register</RegisterButton>
          <a className="btn btn-tan" href="/conference/">Everything about the day</a>
        </div>
      </div>
    </div>
  );
}

/** Leaders proof band. Pages through every leader with an approved photo. */
export function LeadersBand() {
  const tiles: Tile[] = photoLeaders.map((l) => ({
    slug: l.slug,
    name: l.name,
    title: title(l),
    photo: l.photo as string,
    bio: l.bioApproved ? l.bio : undefined,
    virtual: l.format === 'virtual',
  }));
  const photoSlugs = new Set(tiles.map((t) => t.slug));
  const names = confirmedLeaders.filter((l) => !photoSlugs.has(l.slug)).map((l) => l.name);
  return (
    <section className="m-section m-alt" aria-labelledby="leaders-h">
      <div className="m-wrap">
        <h2 id="leaders-h" className="m-title">Leaders joining us on {EVENT_DATE_SHORT}</h2>
        <LeadersViewer tiles={tiles} />
        {names.length > 0 && (
          <details className="m-also">
            <summary>Also joining ({names.length})</summary>
            <p className="m-names">{names.join(', ')}.</p>
          </details>
        )}
        <p className="m-names"><a className="m-link" href="/leaders/">See everyone joining</a></p>
      </div>
    </section>
  );
}

/** One person: photo, name, bold title, then school, year, major. */
export function TeamTile({ m }: { m: TeamMember }) {
  return (
    <div className="m-person">
      <img src={m.photo} alt={m.name} width={400} height={400} loading="lazy" />
      <h3>{m.linkedin ? <a className="m-namelink" href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}>{m.name}</a> : m.name}</h3>
      <p className="m-role">{m.role}</p>
      {detailLines(m).map((l) => (<p className="m-dl" key={l}>{l}</p>))}
    </div>
  );
}

/** Founder and team, as proof. */
export function TeamStrip() {
  const all = [founder, ...team];
  return (
    <section className="m-section" aria-labelledby="team-h">
      <div className="m-wrap">
        <h2 id="team-h" className="m-title">A team across UCLA, USC, and UC Berkeley</h2>
        <div className="m-people m-team">
          {all.map((m) => (<TeamTile m={m} key={m.slug} />))}
        </div>
        <p className="m-actions"><a className="btn btn-tan" href="/team/">Meet the team</a></p>
      </div>
    </section>
  );
}

/** Company traction, from data. Current numbers only; nothing here is a promise. */
export function StatRow() {
  const stats = [
    { n: String(confirmedLeaders.length), l: 'leaders confirmed', href: '/leaders/' },
    { n: String(livePartners.length), l: 'partners working with us', href: '/partners/directory/' },
  ];
  return (
    <section className="m-section m-statsec" aria-label="Meridian in numbers">
      <div className="m-wrap">
        <div className="m-stats">
          {stats.map((x) => (
            <a className="m-stat" key={x.l} href={x.href}>
              <span className="n">{x.n}</span>
              <span className="l">{x.l}</span>
            </a>
          ))}
          {press.length > 0 && (
            <a className="m-stat" href={press[0].url} target="_blank" rel="noopener">
              <span className="n n-text">In the press</span>
              <span className="l">Read the recent media</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function PartnerList({ heading = true, home = false }: { heading?: boolean; home?: boolean }) {
  const rows = home ? homePartners : livePartners;
  return (
    <div>
      {heading && (
        <>
          <h2 className="m-title">Who is working with us</h2>
        </>
      )}
      <div className="m-pgrid">
        {rows.map((p) => (
          <div className="m-pcard" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PressLinks({ showPage = true }: { showPage?: boolean }) {
  if (!press.length) return null;
  return (
    <p style={{ display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'baseline' }}>
      <a className="m-link" href={press[0].url} target="_blank" rel="noopener">Read the recent media</a>
    </p>
  );
}

export { cap };
