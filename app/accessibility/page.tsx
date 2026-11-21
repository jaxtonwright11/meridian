import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Explore } from '@/components/site/parts';
import { EMAIL as CONTACT_EMAIL_PUBLIC } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'Accessibility',
  'How this site is built to be usable by everyone, and how to tell us about a problem or ask for an accommodation.',
  '/accessibility/',
);

// TODO(jax): counsel review. States the aim and what is built; makes no conformance claim.
const blocks = [
  { h: 'Our Aim', p: 'We build this site to meet WCAG 2.2 level AA. We have not had it audited by a third party, so we do not claim full conformance.' },
  { h: 'What Is in Place', p: 'Every page works with a keyboard alone, with a skip link and visible focus. Text and controls are sized and colored for contrast. Photos have descriptions. Pages read in order without JavaScript, and animation is turned off for anyone who has asked their device for reduced motion.' },
  { h: 'Tell Us', p: 'If anything is hard to use, tell us and we will fix it.' },
];

export default function AccessibilityPage() {
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'Meridian', href: '/' }, { label: 'Accessibility' }]} />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 32 }}>
          <div className="m-wrap">
            <h1>Accessibility</h1>
            <p className="m-lead" style={{ marginTop: 16 }}>This site should work for everyone who visits it.</p>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap m-narrow">
            {blocks.map((b) => (
              <div key={b.h} style={{ marginBottom: 32 }}>
                <h2 className="m-h2" style={{ fontSize: 28, marginBottom: 10 }}>{b.h}</h2>
                <p style={{ fontSize: 18, lineHeight: 1.65, maxWidth: '66ch', color: 'var(--ink)' }}>{b.p}</p>
              </div>
            ))}
            <p style={{ fontSize: 18 }}>
              <a className="m-link" href={`mailto:${CONTACT_EMAIL_PUBLIC}?subject=Accessibility`}>{CONTACT_EMAIL_PUBLIC}</a>
            </p>
            <p className="m-small" style={{ marginTop: 20 }}>Last updated November 21, 2026.</p>
          </div>
        </section>
      </main>
      <Explore links={[['Privacy', '/privacy/'], ['Terms', '/terms/'], ['Contact', '/contact/']]} />
      <Footer />
    </div>
  );
}
