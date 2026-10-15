import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Explore } from '@/components/site/parts';
import { CONTACT_EMAIL_PUBLIC } from '@/config';
import { PRESS_URL } from '@/data/press';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'How to reach Meridian: students, executives, partners, and press.',
};

export default function ContactPage() {
  const mail = `mailto:${CONTACT_EMAIL_PUBLIC}`;
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'Meridian', href: '/' }, { label: 'Contact' }]} />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 32 }}>
          <div className="m-wrap">
            <h1>Contact</h1>
            <p className="m-lead" style={{ marginTop: 16 }}>We reply personally.</p>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap">
            <div className="m-routes">
              <div className="m-route">
                <h3>Students</h3>
                <p>Questions about the day? Start with the FAQ, then write to us.</p>
                <div className="m-actions"><a className="btn btn-tan" href="/faq/">Read the FAQ</a><a className="m-link" href={`${mail}?subject=Student%20question`}>{CONTACT_EMAIL_PUBLIC}</a></div>
              </div>
              <div className="m-route">
                <h3>Executives</h3>
                <p>What the day asks of a leader, and who else is joining.</p>
                <div className="m-actions"><a className="btn btn-tan" href="/speakers/">For executives</a></div>
              </div>
              <div className="m-route">
                <h3>Partners</h3>
                <p>Companies, campus offices, and nonprofits working with Meridian.</p>
                <div className="m-actions"><a className="btn btn-tan" href="/partners/">For partners</a></div>
              </div>
              <div className="m-route">
                <h3>Press</h3>
                <p>Recent coverage, and a contact for press.</p>
                <div className="m-actions"><a className="btn btn-tan" href={PRESS_URL} target="_blank" rel="noopener">Read the recent media</a><a className="m-link" href={`${mail}?subject=Press`}>{CONTACT_EMAIL_PUBLIC}</a></div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap"><div className="m-actions" style={{ marginTop: 0 }}><a className="btn btn-ink" href={mail}>Write to us</a></div></div>
        </section>
      </main>
      <Explore links={[['Conference', '/conference/'], ['Students', '/students/'], ['Executives', '/speakers/'], ['Partners', '/partners/'], ['About', '/about/']]} />
      <Footer />
    </div>
  );
}
