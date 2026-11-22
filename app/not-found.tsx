import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata = { title: 'Page Not Found', robots: { index: false } };

export default function NotFound() {
  const links = [['About Meridian', '/'], ['November 14', '/conference/'], ['Demo Day', '/demo-day/'], ['Team', '/team/'], ['Contact', '/contact/']];
  return (
    <div className="m-page v-page">
      <Nav />
      <main id="main">
        <section className="v-section v-top">
          <div className="v-wrap">
            <p className="v-eyebrow">404</p>
            <h1 className="v-h1">That page is not here.</h1>
            <p className="v-lead">It may have moved. Start from one of these.</p>
            <p className="v-links">
              {links.map(([l, h]) => (<a key={h} href={h}>{l}</a>))}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
