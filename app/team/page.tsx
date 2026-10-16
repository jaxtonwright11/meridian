import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Explore, RegisterButton } from '@/components/site/parts';
import { founder, team, detailLines } from '@/data/team';

export const metadata: Metadata = {
  title: 'Team',
  description: 'The team behind Meridian, across UCLA, USC, and UC Berkeley.',
};

export default function TeamPage() {
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'About', href: '/about/' }, { label: 'Team' }]} />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 32 }}>
          <div className="m-wrap">
            <h1>The team</h1>
            <p className="m-lead" style={{ marginTop: 16 }}>A team across UCLA, USC, and UC Berkeley.</p>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap">
            <div className="m-cards">
              {[founder, ...team].map((m) => (
                <article className="m-card" key={m.slug}>
                  <img src={m.photo} alt={m.name} width={400} height={400} loading="lazy" />
                  <h3>{m.linkedin ? <a className="m-namelink" href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}>{m.name}</a> : m.name}</h3>
                  <p className="m-role">{m.role}</p>
                  {detailLines(m).map((l) => (<p className="m-dl" key={l}>{l}</p>))}
                  {m.approved && m.bio && <p style={{ marginTop: 10, fontSize: 15 }}>{m.bio}</p>}
                  {m.slug === 'jaxton-wright' && <p style={{ marginTop: 10, fontSize: 15 }}><a className="m-link" href="/about/#founder">About the founder</a></p>}
                </article>
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
