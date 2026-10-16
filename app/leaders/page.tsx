import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LeaderSpotlight, type Spot } from '@/components/site/LeaderSpotlight';
import { Explore, RegisterButton } from '@/components/site/parts';
import { confirmedLeaders } from '@/data/leaders';

export const metadata: Metadata = pageMeta(
  'Executives joining',
  'Executives joining Meridian on November 14, 2026 at UCLA.',
  '/leaders/',
);

export default function LeadersPage() {
  // Viewer: confirmed leaders with an approved photo and an approved bio, in roster order.
  const spots: Spot[] = confirmedLeaders
    .filter((l) => l.photo && l.photoApproved && l.bio && l.bioApproved)
    .map((l) => ({ slug: l.slug, name: l.name, roles: l.roles, bio: l.bio as string, photo: l.photo as string, virtual: l.format === 'virtual' }));
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'Conference', href: '/conference/' }, { label: 'Who is joining' }]} />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 40 }}>
          <div className="m-wrap">
            <h1>Who Will Be in the Room</h1>
            <p className="m-lead" style={{ marginTop: 18 }}>
              Executives joining us on November 14. They get to know students, each one looking to help
              with opportunities they manage. More names are added as they confirm.
            </p>
            <p className="m-role" style={{ marginTop: 14, fontSize: 18 }}>{confirmedLeaders.length} executives so far.</p>
          </div>
        </section>

        <section className="m-section m-alt">
          <div className="m-wrap">
            <span className="m-eyebrow">Featured</span>
            <LeaderSpotlight spots={spots} />
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Everyone joining</span>
            <h2 className="m-title">All {confirmedLeaders.length} Executives</h2>
            <div className="m-roster">
              {confirmedLeaders.map((l) => (
                <div className={`m-rrow ${l.photo && l.photoApproved ? 'has' : ''}`} key={l.slug}>
                  {l.photo && l.photoApproved && <img src={l.photo} alt={l.name} width={144} height={144} loading="lazy" />}
                  <div>
                    <div className="n">{l.name}</div>
                    {l.roles.map((r, i) => (
                      <div className="t" key={r}>{r}{i === l.roles.length - 1 && l.format === 'virtual' ? '. Joining by video' : ''}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="m-lead" style={{ marginTop: 28 }}>
              Interested in being in the room? See the <a className="m-link" href="/speakers/">page for executives</a>.
            </p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap"><div className="m-actions" style={{ marginTop: 0 }}><RegisterButton /></div></div>
        </section>
      </main>
      <Explore links={[['Conference', '/conference/'], ['Executives', '/speakers/']]} />
      <Footer />
    </div>
  );
}
