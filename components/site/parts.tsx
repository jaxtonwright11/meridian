import { REGISTRATION_FORM_URL, MEETUPS, EVENT_DATE_SHORT, EVENT_VENUE } from '@/config';
import { confirmedLeaders, photoLeaders, title } from '@/data/leaders';
import { team, founder } from '@/data/team';
import { livePartners, homePartners } from '@/data/partners';
import { press } from '@/data/press';

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Plain-words meetup plan, read from config. */
export const MEETUP_SENTENCE =
  `Starting ${EVENT_DATE_SHORT}, Meridian scales from one conference into a company that hosts ${MEETUPS.count} in-person meetups across ${numWord(MEETUPS.fields)} fields over the following year, ${MEETUPS.cadence}, beginning with ${list(MEETUPS.firstFields)}. Each brings executives from that field together with students from across Los Angeles campuses, with student teams working the same challenge side by side, and everyone who attends joins the Meridian network.`;

export const NETWORK_SENTENCE =
  'Everyone who attends joins the Meridian network, which connects students to each other and to executives in their field.';

function numWord(n: number) {
  return ({ 6: 'six', 5: 'five', 4: 'four', 7: 'seven' } as Record<number, string>)[n] ?? String(n);
}
function list(a: string[]) {
  return a.length < 3 ? a.join(' and ') : `${a.slice(0, -1).join(', ')}, and ${a[a.length - 1]}`;
}

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
        {links.map(([l, h]) => (<a key={h} className="m-link" href={h}>{l}</a>))}
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
    { h: 'Partners', p: 'Companies, campus offices, and nonprofits are working with Meridian on the conference and on what comes after it. See what that looks like.', l: 'For partners', href: '/partners/' },
  ];
  return (
    <div className="m-wrap">
      <h2 className="m-display m-h2">Where would you like to start?</h2>
      <div className="m-doors">
        {doors.map((d) => (
          <div className="m-door" key={d.h}>
            <h3>{d.h}</h3>
            <p>{d.p}</p>
            <a className="m-link" href={d.href}>{d.l}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

/** The three blocks of what Meridian does. Used on the home and About pages. */
export function WhatMeridianDoes() {
  return (
    <div className="m-three">
      <div>
        <h3>The conference</h3>
        <p>A free day at UCLA where leaders from every field come to students. November 14.</p>
        <p style={{ marginTop: 12 }}><a className="m-link" href="/conference/">See the conference</a></p>
      </div>
      <div>
        <h3>Meetups by field</h3>
        <p>
          In-person meetups, each in one field, beginning with {list(MEETUPS.firstFields)}.
          Each brings executives from that field together with students from across Los Angeles
          campuses, with student teams working the same challenge side by side.
        </p>
        <p style={{ marginTop: 10 }}>Twenty-five meetups across {numWord(MEETUPS.fields)} fields, {MEETUPS.cadence}.</p>
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
        <p className="m-display" style={{ maxWidth: '26ch' }}>
          A meridian is the highest point in the arc and the line connecting where you are to where
          you are going. The line runs through here.
        </p>
      </div>
    </section>
  );
}

export function SlimConferenceBand() {
  return (
    <div className="m-slim">
      <div className="m-slim-in">
        <p>The first Meridian conference is Saturday, {EVENT_DATE_SHORT} at {EVENT_VENUE}. Free for every student.</p>
        <div className="m-actions">
          <RegisterButton>Register</RegisterButton>
          <a className="m-link" href="/conference/">Everything about the day</a>
        </div>
      </div>
    </div>
  );
}

/** Leaders proof band. Renders from data; photo only if approved. */
export function LeadersBand() {
  const shown = photoLeaders.slice(0, 6);
  const shownSlugs = new Set(shown.map((l) => l.slug));
  const rest = confirmedLeaders.filter((l) => !shownSlugs.has(l.slug));
  const names = rest.slice(0, 8);
  const more = confirmedLeaders.length - shown.length - names.length;
  return (
    <section className="m-section" aria-labelledby="leaders-h">
      <div className="m-wrap">
        <span className="m-eyebrow">{confirmedLeaders.length} leaders confirmed</span>
        <h2 id="leaders-h" className="m-display m-h2">Leaders joining us on {EVENT_DATE_SHORT}</h2>
        <div className="m-people">
          {shown.map((l) => (
            <div className="m-person" key={l.slug}>
              <img src={l.photo} alt={l.name} width={400} height={400} loading="lazy" />
              <h3>{l.name}</h3>
              {title(l) && <p>{title(l)}</p>}
            </div>
          ))}
        </div>
        <p className="m-names">
          {names.map((l) => l.name).join(', ')}
          {more > 0 && `, and ${more} more`}.{' '}
          <a className="m-link" href="/leaders/">See everyone joining</a>
        </p>
      </div>
    </section>
  );
}

/** Founder and team, as proof. Photo, name, role. */
export function TeamStrip() {
  const all = [founder, ...team];
  return (
    <section className="m-section" aria-labelledby="team-h">
      <div className="m-wrap">
        <span className="m-eyebrow">The team</span>
        <h2 id="team-h" className="m-display m-h2">A team across UCLA, USC, and UC Berkeley</h2>
        <div className="m-people m-team">
          {all.map((m) => (
            <div className="m-person" key={m.slug}>
              <img src={m.photo} alt={m.name} width={400} height={400} loading="lazy" />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
        <p className="m-names"><a className="m-link" href="/team/">Meet the team</a></p>
      </div>
    </section>
  );
}

export function PartnerList({ heading = true, home = false }: { heading?: boolean; home?: boolean }) {
  const rows = home ? homePartners : livePartners;
  return (
    <div>
      {heading && <span className="m-eyebrow">Who is working with us</span>}
      <div className="m-list">
        {rows.map((p) => (
          <div className="m-row" key={p.name}>
            <span className="n">{p.name}</span>
            <span className="r">{p.line}</span>
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
      {showPage && <a className="m-link" href="/press/">Press page</a>}
    </p>
  );
}

export { cap };
