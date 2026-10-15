import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Premise } from '@/components/Premise';
import { PersonContact } from '@/components/PersonContact';
import { Explore, MEETUP_SENTENCE } from '@/components/site/parts';
import { EVENT_DATE, EVENT_VENUE } from '@/config';

export const metadata: Metadata = {
  title: 'For executives',
  description:
    'What Meridian asks of the leaders in the room: nothing to prepare, nothing to carry afterward, and a scope you set yourself. Saturday, November 14, 2026 at UCLA.',
};

// TODO(jax): the v2 executive page copy did not arrive. This is the previous
// page's content with the v3 wording rules applied (no banned stage wording, no "free" for
// anything after November 14, premise revised).
export default function SpeakersPage() {
  const blocks = [
    { h: 'The format', p: 'The format is inverted. Leaders get to know students, sit with them, and each one names a single concrete thing they can do for someone in the room. They set the scope themselves.' },
    { h: 'The room', p: 'The room being assembled includes bank executives, founders who have built and sold companies, a public company chief executive, former university presidents, deans, and civic leaders.' },
    { h: 'Introductions, if you would like them', p: 'Short introductions, if you would like them. A few minutes, no deck: who you are, what you built, and one thing a student can use on Monday. Guests who would rather spend the day in conversation do that instead.' },
    { h: 'Nothing to prepare, nothing to carry', p: 'Nothing needs preparing, and nothing needs carrying afterward. You give what you want to give on the day, and that is the whole ask. Students never get handed your inbox.' },
  ];
  return (
    <div className="m-page">
      <Nav />
      <main>
        <section className="m-hero" style={{ paddingBottom: 48 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">For executives</span>
            <h1>One day in the room.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              Meridian brings students and executives together in person, by field. The first
              Meridian conference is {EVENT_DATE} at {EVENT_VENUE}, for students from across Los
              Angeles campuses.
            </p>
          </div>
        </section>
        <section className="m-section"><div className="m-wrap"><Premise /></div></section>
        <section className="m-section">
          <div className="m-wrap">
            <div className="m-three" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {blocks.map((b) => (
                <div key={b.h}><h3>{b.h}</h3><p>{b.p}</p></div>
              ))}
            </div>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">After November 14</span>
            <p className="m-lead">{MEETUP_SENTENCE}</p>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Speaker and partner inquiries</span>
            <PersonContact />
          </div>
        </section>
      </main>
      <Explore links={[['Conference', '/conference/'], ['Leaders', '/leaders/'], ['Contact', '/contact/']]} />
      <Footer />
    </div>
  );
}
