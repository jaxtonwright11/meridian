import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Premise } from '@/components/Premise';
import { Schedule } from '@/components/Schedule';
import { GettingThere } from '@/components/GettingThere';
import { Explore, RegisterButton, EVENTS_SENTENCE } from '@/components/site/parts';
import { confirmedLeaders, photoLeaders, title } from '@/data/leaders';
import { EVENT_DATE, EVENT_NAME, EVENT_VENUE, EVENT_TIME, REGISTRATION_CLOSES_LABEL, EVENT_OVER } from '@/config';

export const metadata: Metadata = pageMeta(
  'Meridian Conference',
  `${EVENT_NAME}, ${EVENT_DATE} at ${EVENT_VENUE}. Free for every student. Meridian brings executives and students together in person, by field.`,
  '/conference/',
  `${EVENT_NAME} | ${EVENT_DATE} at ${EVENT_VENUE}`,
);

const EVENT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: EVENT_NAME,
  startDate: '2026-11-14T11:00:00-08:00',
  endDate: '2026-11-14T15:00:00-08:00',
  eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: EVENT_VENUE,
    address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA' },
  },
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: 'https://forms.gle/Q9khivMSRpyesMNu8', availability: 'https://schema.org/InStock' },
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
          <a href="/leaders/">Who Is Joining</a>
          <a href="/demo-day/">Demo day</a>
          <a href="#schedule">Schedule</a>
          <a href="#getting-there">Getting there</a>
        </div>
      </div>
      <main id="main">
        {/* 1-2. Header, register */}
        <section className="m-hero" style={{ paddingBottom: 56 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">{EVENT_DATE} at {EVENT_VENUE}. {EVENT_TIME}.</span>
            <h1>Meridian Conference</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              The conference is where Meridian starts. Meridian brings executives and students
              together in person, by field.
            </p>
            <div className="m-actions">
              <RegisterButton />
              {!EVENT_OVER && <span className="m-small">Registration closes {REGISTRATION_CLOSES_LABEL}</span>}
              {!EVENT_OVER && <a className="m-link" href="/meridian-conference-2026.ics">Add to calendar</a>}
            </div>
          </div>
        </section>

        {/* 3. Premise */}
        <section className="m-section"><div className="m-wrap"><Premise /></div></section>

        {/* 4. What the day includes (brief v2 6.2) */}
        <section className="m-section" id="the-day">
          <div className="m-wrap">
            <span className="m-eyebrow">What the Day Includes</span>
            <div className="m-three" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div><h3>Aerospace Design Lab</h3><p>Led by NASA engineers. You spend the day building something real instead of sitting through a talk about it.</p></div>
              <div><h3>Demo Day</h3><p>Students present research, startups, and projects to executives, investors, other students, and press.</p><p style={{ marginTop: 10 }}><a className="m-link" href="/demo-day/">About demo day</a></p></div>
              <div><h3>Free Professional Headshots</h3><p>Photographers from Las Fotos Project shoot you for free and the pictures are yours to keep.</p></div>
              <div><h3>Partner Tables</h3><p>The organizations that brought students run tables of their own. Walk up to any of them, no introduction needed.</p></div>
              <div><h3>Petersen Automotive Museum</h3><p>The museum is bringing a 1955 Pontiac and a 1955 Bel Air to the floor, with staff.</p></div>
              <div><h3>Someone to Introduce You</h3><p>Hosts work the floor all day. If walking up to a stranger is not your thing, find one and they will make the introduction.</p></div>
            </div>
          </div>
        </section>

        {/* 5. Who will be in the room */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">{confirmedLeaders.length} Executives So Far</span>
            <h2 className="m-display m-h2">Who Will Be in the Room</h2>
            <div className="m-people m-twelve">
              {twelve.map((l) => (
                <div className="m-person" key={l.slug}>
                  <img src={l.photo} alt={l.name} width={300} height={300} loading="lazy" />
                  <h3>{l.name}</h3>
                  {title(l) && <p className="m-role">{title(l)}</p>}
                </div>
              ))}
            </div>
            <p className="m-names"><a className="m-link" href="/leaders/">See everyone joining</a></p>
          </div>
        </section>

        {/* 6. Demo day: the one dark band */}
        <section className="m-dark">
          <div className="m-wrap m-narrow" style={{ margin: '0 auto' }}>
            <span className="m-eyebrow">Demo Day</span>
            <h2 className="m-display m-h2" style={{ color: '#F0E4D1' }}>Student Founders and Researchers Present Their Work.</h2>
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
            <p className="m-lead">{EVENTS_SENTENCE}</p>
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
      <Explore links={[['Students', '/students/'], ['Executives', '/speakers/'], ['Demo Day', '/demo-day/'], ['Who Is Joining', '/leaders/'], ['FAQ', '/faq/']]} />
      <Footer />
    </div>
  );
}
