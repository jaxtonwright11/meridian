import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Premise } from '@/components/Premise';
import { Schedule } from '@/components/Schedule';
import { GettingThere } from '@/components/GettingThere';
import { Explore, RegisterButton, MEETUP_SENTENCE } from '@/components/site/parts';
import { confirmedLeaders, photoLeaders, title } from '@/data/leaders';
import { EVENT_DATE, EVENT_NAME, EVENT_VENUE, REGISTRATION_CLOSES_LABEL, VENUE_DETAILS } from '@/config';

export const metadata: Metadata = {
  title: { absolute: `${EVENT_NAME} | ${EVENT_DATE} at ${EVENT_VENUE}` },
  description: `${EVENT_NAME}, ${EVENT_DATE} at ${VENUE_DETAILS.building}, ${EVENT_VENUE}. Free for every student. Meridian brings students and executives together in person, by field.`,
};

const EVENT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: EVENT_NAME,
  startDate: '2026-11-14T11:00:00-08:00',
  endDate: '2026-11-14T15:00:00-08:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: `${VENUE_DETAILS.building}, ${EVENT_VENUE}`,
    address: VENUE_DETAILS.address,
  },
  isAccessibleForFree: true,
  organizer: { '@type': 'Organization', name: 'Meridian', url: 'https://meridianventura.com' },
};

export default function ConferencePage() {
  const twelve = photoLeaders.slice(0, 12);
  return (
    <div className="m-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_JSONLD) }} />
      <Nav />
      <div className="m-subnav" aria-label="On this page">
        <div className="m-subnav-in">
          <a href="#the-day">The day</a>
          <a href="/leaders/">Leaders</a>
          <a href="/demo-day/">Demo day</a>
          <a href="#schedule">Schedule</a>
          <a href="#getting-there">Getting there</a>
        </div>
      </div>
      <main>
        {/* 1-2. Header, register */}
        <section className="m-hero" style={{ paddingBottom: 56 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">{EVENT_DATE} &middot; {VENUE_DETAILS.building}, {EVENT_VENUE}</span>
            <h1>Meridian Conference</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              The conference is where Meridian starts. Meridian brings students and executives
              together in person, by field.
            </p>
            <div className="m-actions">
              <RegisterButton />
              <span className="m-small">Registration closes {REGISTRATION_CLOSES_LABEL}</span>
              <a className="m-link" href="/meridian-conference-2026.ics">Add to calendar</a>
            </div>
          </div>
        </section>

        {/* 3. Premise */}
        <section className="m-section"><div className="m-wrap"><Premise /></div></section>

        {/* 4. What the day includes. TODO(jax): v2 6.2 wording did not arrive. */}
        <section className="m-section" id="the-day">
          <div className="m-wrap">
            <span className="m-eyebrow">What the day includes</span>
            <div className="m-three">
              <div><h3>Time with leaders</h3><p>Leaders from every field get to know students, and each one is looking to help with opportunities they manage.</p></div>
              <div><h3>Demo day</h3><p>Student founders and researchers present to peers and executives on the floor.</p></div>
              <div><h3>Engineering design lab</h3><p>A lab for students, run by NASA engineers.</p></div>
            </div>
          </div>
        </section>

        {/* 5. Who will be in the room */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">{confirmedLeaders.length} leaders so far</span>
            <h2 className="m-display m-h2">Who will be in the room</h2>
            <div className="m-people m-twelve">
              {twelve.map((l) => (
                <div className="m-person" key={l.slug}>
                  <img src={l.photo} alt={l.name} width={300} height={300} loading="lazy" />
                  <h3>{l.name}</h3>
                  {title(l) && <p>{title(l)}</p>}
                </div>
              ))}
            </div>
            <p className="m-names"><a className="m-link" href="/leaders/">See everyone joining</a></p>
          </div>
        </section>

        {/* 6. Demo day: the one dark band */}
        <section className="m-dark">
          <div className="m-wrap m-narrow" style={{ margin: '0 auto' }}>
            <span className="m-eyebrow">Demo day</span>
            <h2 className="m-display m-h2" style={{ color: '#F0E4D1' }}>Student founders and researchers present their work.</h2>
            <p className="m-lead" style={{ color: '#E4D6BF' }}>
              Three minutes each, with a screen, in front of peers and executives. Students who
              register with a project can show it at an expo table.
            </p>
            <p style={{ marginTop: 20 }}><a className="m-link" href="/demo-day/">About demo day</a></p>
          </div>
        </section>

        {/* 7. The day */}
        <Schedule />

        {/* 8. Getting there */}
        <GettingThere />

        {/* 9. After November 14 */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">After November 14</span>
            <p className="m-lead">{MEETUP_SENTENCE}</p>
            <p style={{ marginTop: 16 }}><a className="m-link" href="/partners/">Partner with Meridian</a></p>
          </div>
        </section>

        {/* 10. Closing */}
        <section className="m-section">
          <div className="m-wrap">
            <div className="m-actions" style={{ marginTop: 0 }}>
              <RegisterButton />
              <a className="m-link" href="/faq/">Read the FAQ</a>
            </div>
            <p className="m-small" style={{ marginTop: 28 }}>
              <a className="m-link" href="/past/#principals">How the first Meridian came together</a>
            </p>
          </div>
        </section>
      </main>
      <Explore links={[['Students', '/students/'], ['Executives', '/speakers/'], ['Demo day', '/demo-day/'], ['Leaders', '/leaders/'], ['FAQ', '/faq/']]} />
      <Footer />
    </div>
  );
}
