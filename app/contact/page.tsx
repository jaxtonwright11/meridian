import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import {
  EMAIL, INSTAGRAM, FOUNDER_INSTAGRAM, LINKEDIN, PARTNER_MAILTO, EXECUTIVE_MAILTO, JOIN_TEAM_MAILTO, NETWORK_FORM_URL,
} from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'Contact',
  'How to reach Meridian: companies, executives, students, and people who want to join the team.',
  '/contact/',
);

export default function ContactPage() {
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'Meridian', href: '/' }, { label: 'Contact' }]} />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 32 }}>
          <div className="m-wrap">
            <h1>Contact</h1>
            <p className="m-lead" style={{ marginTop: 16 }}>
              <a className="m-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p style={{ marginTop: 12, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <a className="m-link" href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer">Instagram {INSTAGRAM.handle}</a>
              <a className="m-link" href={FOUNDER_INSTAGRAM.url} target="_blank" rel="noopener noreferrer">Jaxton Wright {FOUNDER_INSTAGRAM.handle}</a>
              <a className="m-link" href={LINKEDIN.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap">
            <h2 className="sr-only">Who to write to</h2>
            <div className="m-routes">
              <div className="m-route">
                <h3>Companies and Partners</h3>
                <p>Partner with Meridian.</p>
                <div className="m-actions"><a className="btn btn-tan" href={PARTNER_MAILTO}>Partner with Meridian</a></div>
              </div>
              <div className="m-route">
                <h3>Executives</h3>
                <p>Meet the next generation of talent in your field.</p>
                <div className="m-actions"><a className="btn btn-tan" href={EXECUTIVE_MAILTO}>Get in touch</a></div>
              </div>
              <div className="m-route">
                <h3>Students</h3>
                <p>Join the Meridian Network.</p>
                <div className="m-actions"><a className="btn btn-tan" href={NETWORK_FORM_URL} target="_blank" rel="noopener noreferrer">Join the Meridian Network</a></div>
              </div>
              <div className="m-route">
                <h3>The Team</h3>
                <p>Meridian is growing from here.</p>
                <div className="m-actions"><a className="btn btn-tan" href={JOIN_TEAM_MAILTO}>Join the team</a></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
