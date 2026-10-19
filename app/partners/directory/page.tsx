import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Explore } from '@/components/site/parts';
import { GROUPS, livePartners, type Partner } from '@/data/partners';

export const metadata: Metadata = pageMeta(
  'Partner Directory',
  'The organizations working with Meridian on November 14.',
  '/partners/directory/',
);

const slug = (g: string) => g.toLowerCase().replace(/[^a-z]+/g, '-');

function Rows({ rows }: { rows: Partner[] }) {
  return (
    <div className="m-list">
      {rows.map((p) => (
        <div className="m-row" key={p.name}>
          <span className="n">{p.url ? <a className="m-pname" href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a> : p.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function DirectoryPage() {
  const groups = GROUPS.filter((g) => livePartners.some((p) => p.group === g));
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'Partners', href: '/partners/' }, { label: 'Directory' }]} />
      <nav className="m-subnav" aria-label="Groups">
        <div className="m-subnav-in">
          {groups.map((g) => (<a key={g} href={`#${slug(g)}`}>{g}</a>))}
        </div>
      </nav>
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 32 }}>
          <div className="m-wrap">
            <h1>Who Is Working With Us</h1>
            <p className="m-lead" style={{ marginTop: 16 }}>
              The organizations working with Meridian on November 14. More are named here as they confirm.
            </p>
          </div>
        </section>
        {groups.map((g) => {
          const rows = livePartners.filter((p) => p.group === g);
          const kinds = (['Office or Department', 'Student Organization'] as const)
            .filter((k) => rows.some((r) => r.kind === k));
          return (
            <section className="m-section" id={slug(g)} key={g}>
              <div className="m-wrap">
                <h2 className="m-display m-h2">{g}</h2>
                {g === 'UCLA' || g === 'USC' ? (
                  kinds.map((k) => (
                    <div key={k} style={{ marginBottom: 24 }}>
                      <span className="m-eyebrow">{k}</span>
                      <Rows rows={rows.filter((r) => r.kind === k)} />
                    </div>
                  ))
                ) : (
                  <Rows rows={rows} />
                )}
              </div>
            </section>
          );
        })}
        <section className="m-section">
          <div className="m-wrap">
            <p className="m-lead">More partners are named here as they confirm.</p>
            <div className="m-actions"><a className="btn btn-ink" href="/partners/#inquiries">Partner with Meridian</a></div>
          </div>
        </section>
      </main>
      <Explore links={[['Partners', '/partners/'], ['Conference', '/conference/']]} />
      <Footer />
    </div>
  );
}
