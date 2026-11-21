import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PartnerNames } from '@/components/site/recap';
import { COMPANY_LINE, STUDENTS, EXECUTIVES, EMAIL, PARTNER_MAILTO } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'For Companies and Partners',
  `Partner with Meridian. Our first conference brought ${STUDENTS} students and ${EXECUTIVES} executives together at UCLA, in collaboration with USC.`,
  '/partners/',
);

export default function PartnersPage() {
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 48 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">For Companies and Partners</span>
            <h1>Partner With Meridian.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              {COMPANY_LINE} Our first conference brought {STUDENTS} students and {EXECUTIVES} executives
              together at UCLA, in collaboration with USC.
            </p>
            <div className="m-actions">
              <a className="btn btn-ink" href={PARTNER_MAILTO}>Partner with Meridian</a>
            </div>
          </div>
        </section>

        <section className="m-section m-alt" aria-labelledby="why-h">
          <div className="m-wrap">
            <h2 id="why-h" className="m-title">Why Partner With Meridian</h2>
            <div className="m-three m-cards3">
              <div>
                <h3>Talent by Field</h3>
                <p>At our first conference, executives got to know students by field, in person.</p>
              </div>
              <div>
                <h3>Executives Work the Room</h3>
                <p>Executives worked the room and got to know students for who they are, not their resumes.</p>
              </div>
              <div>
                <h3>Growing From Here</h3>
                <p>Meridian is growing from here, and we are looking for companies to partner with.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-section" aria-labelledby="partners-h">
          <div className="m-wrap">
            <h2 id="partners-h" className="m-title">Our Partners</h2>
            <PartnerNames />
            <p className="m-names"><a className="m-link" href="/conference/#executives">See the executives in the room</a></p>
          </div>
        </section>

        <section className="m-section m-alt" aria-labelledby="next-h">
          <div className="m-wrap">
            <h2 id="next-h" className="m-title">Partner With Meridian</h2>
            <p className="m-lead">Meridian is growing from here. Write to us to partner.</p>
            <div className="m-actions">
              <a className="btn btn-ink" href={PARTNER_MAILTO}>Partner with Meridian</a>
              <a className="m-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
