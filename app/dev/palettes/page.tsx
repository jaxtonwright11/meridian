import type { Metadata } from 'next';
import { Doors, SlimConferenceBand, PartnerList, MeridianLine, RegisterButton } from '@/components/site/parts';

// Unlinked preview of the three palettes. Remove before the final preview link.
export const metadata: Metadata = {
  title: 'Palettes',
  robots: { index: false, follow: false },
};

const frames = [
  { id: 'current', label: '1. Current (v2 brown theme)' },
  { id: 'new', label: '2. New (pale, ink, gold for lines only)' },
  { id: 'blend', label: '3. Blend (pale surface, espresso headings and footer, thin tan rules)' },
];

export default function Palettes() {
  return (
    <div style={{ background: '#fff', padding: 16 }}>
      <h1 style={{ fontSize: 28, margin: '8px 0 4px', color: '#111' }}>Palette preview</h1>
      <p style={{ color: '#333', marginBottom: 12 }}>Same home hero, doors, conference band and partner list in each option.</p>
      {frames.map((f) => (
        <div className="m-pal" key={f.id}>
          <div className="m-pal-label">{f.label}</div>
          <div data-palette={f.id === 'blend' ? undefined : f.id} style={{ background: 'var(--page-a)', color: 'var(--ink-soft)', padding: '24px 0' }}>
            <div className="m-wrap">
              <div className="m-sheet">
                <section className="m-hero" style={{ padding: '40px 0 32px' }}>
                  <MeridianLine />
                  <span className="m-eyebrow">Los Angeles</span>
                  <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>Reverse gatekeeping.</h1>
                  <p className="m-sub">Meridian brings students and executives together in person, by field. We start with a conference in Los Angeles on November 14, free for every student.</p>
                  <div className="m-actions"><RegisterButton /><a className="m-link" href="/partners/">Partner with Meridian</a></div>
                </section>
                <Doors />
                <div style={{ margin: '32px 0' }}><SlimConferenceBand /></div>
                <PartnerList home />
              </div>
            </div>
            <div className="m-footer" style={{ marginTop: 24, padding: '20px 0' }}>
              <div className="m-wrap"><span className="m-logo">Meridian<span>.</span></span> <span style={{ marginLeft: 16 }}>footer</span></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
