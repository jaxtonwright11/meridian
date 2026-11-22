import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JoinTeam } from '@/components/site/recap';
import { TEAM_PHOTO } from '@/data/recap';
import { founder, team, detailLines } from '@/data/team';

export const metadata: Metadata = pageMeta(
  'Team',
  'The team behind Meridian.',
  '/team/',
);

export default function TeamPage() {
  return (
    <div className="m-page v-page">
      <Nav />
      <main id="main">
        <section className="v-section v-top">
          <div className="v-wrap">
            <p className="v-eyebrow">Team</p>
            <h1 className="v-h1">The team behind Meridian.</h1>
            <img className="v-wide" src={TEAM_PHOTO.src} alt={TEAM_PHOTO.alt} width={1320} height={950} />
          </div>
        </section>
        <section className="v-section v-tight-top" aria-label="Team members">
          <div className="v-wrap">
            <ul className="v-grid v-grid-3">
              {[founder, ...team].map((m) => (
                <li className="v-card" key={m.slug}>
                  <img className="v-card-img" src={m.photo} alt={m.name} width={640} height={640} loading="lazy" />
                  <h2 className="v-card-name">
                    {m.linkedin ? <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}>{m.name}</a> : m.name}
                  </h2>
                  <p className="v-card-title">{m.role}</p>
                  {detailLines(m).length > 0 && <p className="v-card-sub">{detailLines(m).join(' · ')}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="v-section v-tint" aria-labelledby="join-h">
          <div className="v-wrap"><JoinTeam photo={false} /></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
