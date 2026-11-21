import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JOIN_TEAM_MAILTO } from '@/data/recap';
import { founder, team, detailLines } from '@/data/team';

export const metadata: Metadata = pageMeta(
  'Team',
  'The team behind Meridian, across UCLA, USC, and UC Berkeley.',
  '/team/',
);

export default function TeamPage() {
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'About', href: '/about/' }, { label: 'Team' }]} />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 32 }}>
          <div className="m-wrap">
            <h1>The Team</h1>
            <p className="m-lead" style={{ marginTop: 16 }}>A team across UCLA, USC, and UC Berkeley.</p>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap">
            <h2 className="sr-only">Team members</h2>
            <div className="m-cards">
              {[founder, ...team].map((m) => (
                <article className="m-card" key={m.slug}>
                  <img src={m.photo} alt={m.name} width={400} height={400} loading="lazy" />
                  <h3>{m.linkedin ? <a className="m-namelink" href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}>{m.name}</a> : m.name}</h3>
                  <p className="m-role">{m.role}</p>
                  {detailLines(m).map((l) => (<p className="m-dl" key={l}>{l}</p>))}
                  {m.approved && m.bio && <p style={{ marginTop: 10 }}>{m.bio}</p>}
                  {m.slug === 'jaxton-wright' && <p style={{ marginTop: 10 }}><a className="m-link" href="/about/#founder">About the founder</a></p>}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="m-section m-alt" aria-labelledby="join-h">
          <div className="m-wrap">
            <h2 id="join-h" className="m-title">Join the Team</h2>
            <p className="m-lead">Meridian is growing from here. Write to us about joining the team.</p>
            <div className="m-actions"><a className="btn btn-ink" href={JOIN_TEAM_MAILTO}>Join the team</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
