import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Premise } from '@/components/Premise';
import { PersonContact } from '@/components/PersonContact';
import { Explore, EVENTS_SENTENCE, StatRow } from '@/components/site/parts';
import { confirmedLeaders, photoLeaders, title } from '@/data/leaders';

export const metadata: Metadata = {
  title: 'For executives',
  description:
    'What Meridian asks of the leaders in the room: nothing to prepare, nothing to carry afterward. Saturday, November 14, 2026 at UCLA.',
};

// Brief v2 section 6.5, with v3 wording. No schedule on this page, no ask for a time window.
export default function SpeakersPage() {
  const first = photoLeaders.length ? confirmedLeaders.slice(0, 12) : [];
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 48 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">For executives</span>
            <h1>One day in the room.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              Meridian brings students and executives together in person, by field. Our conference
              on Saturday, November 14 at UCLA is where it starts: 400 university students from
              across Los Angeles and Ventura Counties, a number of them already building companies.
            </p>
          </div>
        </section>

        <StatRow />

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">The format</span>
            <Premise />
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Who else is in the room</span>
            <p className="m-lead" style={{ marginBottom: 18 }}>
              {confirmedLeaders.length} leaders so far, including founders, executives, university
              leaders, physicians, engineers, and civic leaders.
            </p>
            <div className="m-list">
              {first.map((l) => (
                <div className="m-row" key={l.slug}>
                  <span className="n">{l.name}</span>
                  <span className="r">{title(l)}{l.format === 'virtual' ? '. Joining by video' : ''}</span>
                </div>
              ))}
            </div>
            <p className="m-names"><a className="m-link" href="/leaders/">See everyone</a></p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">What the day gives you</span>
            <p className="m-lead">
              You meet the other leaders in the room. You represent your work to students and press
              through who you are and what you care about, not through a logo or a slide.
            </p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">What you do</span>
            <div className="m-three" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div><h3>Work the room</h3><p>Get to know students in small groups.</p></div>
              <div><h3>Introductions</h3><p>Short introductions, if you would like them. A few minutes, no deck: who you are, what you built, and one thing a student can use on Monday. Guests who would rather spend the day in conversation do that instead.</p></div>
              <div><h3>The engineering design lab</h3><p>A hands-on build led by NASA engineers, a natural home for technical leaders who want time with students at a table.</p></div>
              <div><h3>Demo day</h3><p>Student teams present what they are building. A natural stop for investors, founders, and anyone who wants to see student work up close.</p></div>
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">After November 14</span>
            <p className="m-lead">{EVENTS_SENTENCE}</p>
            <p className="m-lead" style={{ marginTop: 12 }}>If you would like to be involved beyond the day, tell us which field.</p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Nothing to prepare, nothing to carry</span>
            <p className="m-lead">Nothing needs preparing, and nothing needs carrying afterward.</p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Say yes</span>
            <PersonContact primary />
            <p className="m-lead" style={{ marginTop: 28 }}>
              If you know someone who would get a lot from connecting with other executives and
              student founders, please feel free to recommend them.
            </p>
            <p className="m-small" style={{ marginTop: 14 }}>Founded by Jaxton Wright.</p>
          </div>
        </section>
      </main>
      <Explore links={[['Conference', '/conference/'], ['Leaders', '/leaders/'], ['Contact', '/contact/']]} />
      <Footer />
    </div>
  );
}
