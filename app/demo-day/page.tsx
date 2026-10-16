import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Explore, RegisterButton } from '@/components/site/parts';

export const metadata: Metadata = pageMeta(
  'Demo day',
  'Students present research, startups, and projects to executives, investors, and press at Meridian on November 14, 2026.',
  '/demo-day/',
);

// Brief v2 6.7 with v3 sections 10.3 and 17. Names no team, investor or judge, and
// promises no funding or outcome. TODO(jax): the 1:20 time depends on the venue decision.
export default function DemoDayPage() {
  const blocks = [
    { h: 'What it is', p: 'Student founders and researchers present to peers and executives on the floor, not in a theater. Investors and press are in the room.' },
    { h: 'Who can present', p: 'Anyone with research, a startup, or a project they can show. Undergraduates, graduate students, and people already out of school are all welcome to apply.' },
    { h: 'How we choose', p: 'We screen. We ask whether it is real, whether you can explain it in two minutes, and whether it is past the idea stage. A mix of stages is fine.' },
    { h: 'What to expect', p: 'Three minutes each, with a screen, in front of people you do not usually get in front of. Afterward you are on the floor with them. Finalists pitch at 1:20. The expo is open the rest of the day, and everyone else who registers with a project gets an expo table.' },
    { h: 'How to apply', p: 'Register for the conference and answer the demo day question on the form. We follow up with the people we pick.' },
  ];
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'Conference', href: '/conference/' }, { label: 'Demo day' }]} />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 40 }}>
          <div className="m-wrap">
            <h1>Demo Day</h1>
            <p className="m-lead" style={{ marginTop: 18 }}>
              Students present what they are building to the people who can help. Research,
              startups, and projects. Executives and investors on the floor, press in the room.
            </p>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap">
            <div className="m-three m-cards3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {blocks.map((b) => (<div key={b.h}><h3>{b.h}</h3><p>{b.p}</p></div>))}
            </div>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap"><div className="m-actions" style={{ marginTop: 0 }}><RegisterButton /></div></div>
        </section>
      </main>
      <Explore links={[['Conference', '/conference/'], ['Students', '/students/']]} />
      <Footer />
    </div>
  );
}
