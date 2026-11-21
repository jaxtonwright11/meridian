import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { principals } from '@/data/principals';

export const metadata: Metadata = pageMeta(
  'Before Meridian',
  'December 2025, before Meridian was founded.',
  '/past/',
);

// TODO(jax): approve this wording, and how to describe Young and Gifted and the other
// organization tied to the December 2025 event. Linked from About and the footer only.
export default function BeforeMeridianPage() {
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'About', href: '/about/' }, { label: 'Before Meridian' }]} />
      <main id="main">
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">December 2025</span>
            <h1 className="m-title">Before Meridian</h1>
            <p className="m-lead">
              In December 2025, before Meridian was founded, Jaxton Wright brought students and executives
              together at an event with Young and Gifted. It was not a Meridian event.
            </p>
            <p className="m-lead" style={{ marginTop: 12 }}>
              150 students met executives from Netflix, OpenAI, and Chase Bank. 23 executives attended, and
              nine students left with internships.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, margin: '28px 0' }}>
              <img src="/opt/img_9543.webp" alt="A panel of five speakers with Jaxton Wright moderating, December 2025" width={1200} height={800} loading="lazy" style={{ width: '100%', height: 'auto' }} />
              <img src="/opt/img_1728.webp" alt="A speaker with a microphone addressing the room, December 2025" width={1200} height={800} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
            <blockquote style={{ margin: 0, maxWidth: '62ch' }}>
              <p style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 22, color: 'var(--heading)' }}>
                &ldquo;I had an amazing time speaking on my experience and being able to hear the experiences
                of so many other talented individuals.&rdquo;
              </p>
              <footer className="m-small" style={{ marginTop: 10 }}>
                <strong>Adriel Miramontes</strong>, Journalist and Host, The Adriel Show
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="m-section m-alt" aria-labelledby="principals-h">
          <div className="m-wrap">
            <h2 id="principals-h" className="m-title">Schools That Shared It</h2>
            <div className="m-list">
              {principals.map((p) => (
                <div className="m-row" key={p.name}>
                  <span className="n">{p.name}</span>
                  <span className="r">{p.title}{p.org ? `, ${p.org}` : ''}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
