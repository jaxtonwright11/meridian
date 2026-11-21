import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { TeamTile } from '@/components/site/parts';
import { founder, team } from '@/data/team';
import { COMPANY_LINE, PROOF_LINE, FOUNDER_INSTAGRAM, LINKEDIN, JOIN_TEAM_MAILTO } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'About',
  `${COMPANY_LINE} ${PROOF_LINE}`,
  '/about/',
);

export default function AboutPage() {
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 40 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">About</span>
            <h1>About Meridian.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>{COMPANY_LINE}</p>
            <p className="m-lead" style={{ marginTop: 12 }}>{PROOF_LINE}</p>
          </div>
        </section>

        <section className="m-section m-alt" id="founder" aria-labelledby="founder-h">
          <div className="m-wrap">
            <span className="m-eyebrow">The Founder</span>
            <div className="m-person-block" style={{ gridTemplateColumns: 'minmax(0, 260px) 1fr', gap: 40 }}>
              <img src="/opt/unnamed__3_.webp" alt="Jaxton Wright, founder of Meridian" width={520} height={650}
                   style={{ width: '100%', height: 'auto', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 0 }} />
              <div>
                <h2 id="founder-h" className="m-h2" style={{ marginBottom: 6 }}>Jaxton Wright</h2>
                <p className="m-small" style={{ marginBottom: 18 }}>Founder</p>
                <p className="m-lead">
                  Jaxton Wright founded Meridian. He is a junior at UC Berkeley, studying Honors Economics
                  and Political Science. In July 2025, he spoke at Harvard.
                </p>
                <p style={{ marginTop: 16, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  <a className="m-link" href={FOUNDER_INSTAGRAM.url} target="_blank" rel="noopener noreferrer">Instagram {FOUNDER_INSTAGRAM.handle}</a>
                  <a className="m-link" href={LINKEDIN.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-section" aria-labelledby="team-h">
          <div className="m-wrap">
            <h2 id="team-h" className="m-title">The Team</h2>
            <div className="m-people m-team">
              {[founder, ...team].map((m) => (<TeamTile m={m} key={m.slug} />))}
            </div>
            <p className="m-actions">
              <a className="btn btn-tan" href="/team/">Meet the team</a>
              <a className="btn btn-ink" href={JOIN_TEAM_MAILTO}>Join the team</a>
            </p>
            <p className="m-names"><a className="m-link" href="/past/">Before Meridian: December 2025</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
