import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { FirstMeridian } from '@/components/FirstMeridian';
import { Explore, RegisterButton } from '@/components/site/parts';
import { principals, PRINCIPAL_LINE } from '@/data/principals';

export const metadata: Metadata = pageMeta(
  'Past Events',
  'The first Meridian, December 2025.',
  '/past/',
);

export default function PastPage() {
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'About', href: '/about/' }, { label: 'Past events' }]} />
      <main id="main">
        <FirstMeridian detail page />

        <section className="m-section" id="principals">
          <div className="m-wrap">
            <span className="m-eyebrow">December 2025</span>
            <h2 className="m-display m-h2">Who Shared the First Meridian</h2>
            <p className="m-lead" style={{ marginBottom: 20 }}>
              Schools and educators who shared the first Meridian with their students in December 2025.
            </p>
            <div className="m-list">
              {principals.map((p) => (
                <div className="m-row" key={p.name}>
                  <span className="n">{p.name}</span>
                  <span className="r">{p.title}{p.org ? `, ${p.org}` : ''}. {PRINCIPAL_LINE}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap"><div className="m-actions" style={{ marginTop: 0 }}><RegisterButton /></div></div>
        </section>
      </main>
      <Explore links={[['About', '/about/'], ['Conference', '/conference/']]} />
      <Footer />
    </div>
  );
}
