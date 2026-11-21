import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MovedAnchors } from '@/components/MovedAnchors';
import { TeamStrip } from '@/components/site/parts';
import { RecapLines, Gallery, ExecsInRoom, PartnerNames, NextSteps } from '@/components/site/recap';
import { COMPANY_LINE, PROOF_LINE, PARTNER_MAILTO, NETWORK_FORM_URL, STARTUPS_WORD } from '@/data/recap';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <div className="m-page">
      <MovedAnchors />
      <Nav />
      <main id="main">
        <section className="m-hero m-hero-home">
          <div className="m-wrap">
            <h1 className="m-h1-line">{COMPANY_LINE}</h1>
            <p className="m-sub">{PROOF_LINE}</p>
            <div className="m-actions">
              <a className="btn btn-ink" href={PARTNER_MAILTO}>Partner with Meridian</a>
              <a className="btn btn-tan" href={NETWORK_FORM_URL} target="_blank" rel="noopener noreferrer">Join the Meridian Network</a>
            </div>
          </div>
        </section>

        <section className="m-section m-alt" id="recap" aria-labelledby="recap-h">
          <div className="m-wrap">
            <span className="m-eyebrow">November 14, 2026</span>
            <h2 id="recap-h" className="m-title">Our First Conference</h2>
            <RecapLines />
            <Gallery limit={8} />
            <p className="m-names"><a className="m-link" href="/conference/">More from the conference</a></p>
          </div>
        </section>

        <section className="m-section" id="executives" aria-labelledby="execs-h">
          <div className="m-wrap">
            <h2 id="execs-h" className="m-title">Executives in the Room</h2>
            <ExecsInRoom />
          </div>
        </section>

        <section className="m-section m-alt" aria-labelledby="partners-h">
          <div className="m-wrap">
            <h2 id="partners-h" className="m-title">Partners</h2>
            <PartnerNames />
          </div>
        </section>

        <section className="m-section" aria-labelledby="demo-h">
          <div className="m-wrap">
            <h2 id="demo-h" className="m-title">Demo Day</h2>
            <p className="m-lead">{STARTUPS_WORD} student startups pitched at Demo Day.</p>
          </div>
        </section>

        <TeamStrip />

        <section className="m-section" aria-labelledby="next-h">
          <div className="m-wrap">
            <h2 id="next-h" className="m-title">Work With Meridian</h2>
            <NextSteps />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
