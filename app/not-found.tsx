import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata = { title: 'Page Not Found', robots: { index: false } };

export default function NotFound() {
  const links = [['Conference', '/conference/'], ['Students', '/students/'], ['Executives', '/speakers/'], ['Partners', '/partners/'], ['About', '/about/']];
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 56 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">404</span>
            <h1>That Page Is Not Here.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>It may have moved. Start from one of these.</p>
            <div className="m-actions">
              {links.map(([l, h]) => (<a key={h} className="btn btn-tan" href={h}>{l}</a>))}
              <a className="btn btn-ink" href="/">Home</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
