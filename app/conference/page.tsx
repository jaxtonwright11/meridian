import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { RecapLines, Gallery, ExecsInRoom, PartnerNames, NextSteps } from '@/components/site/recap';
import { CONFERENCE_DATE, STUDENTS, EXECUTIVES, STARTUPS_WORD } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'Our First Conference',
  `Meridian's first conference: ${STUDENTS} students and ${EXECUTIVES} executives at UCLA, in collaboration with USC, on ${CONFERENCE_DATE}.`,
  '/conference/',
);

export default function ConferencePage() {
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 40 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">{CONFERENCE_DATE} · UCLA</span>
            <h1>Our First Conference.</h1>
            <RecapLines />
          </div>
        </section>

        <section className="m-section m-alt" aria-labelledby="photos-h">
          <div className="m-wrap">
            <h2 id="photos-h" className="sr-only">Photos</h2>
            <Gallery />
          </div>
        </section>

        <section className="m-section" id="executives" aria-labelledby="execs-h">
          <div className="m-wrap">
            <h2 id="execs-h" className="m-title">Executives in the Room</h2>
            <ExecsInRoom />
          </div>
        </section>

        <section className="m-section m-alt" id="demo-day" aria-labelledby="demo-h">
          <div className="m-wrap">
            <h2 id="demo-h" className="m-title">Demo Day</h2>
            <p className="m-lead">{STARTUPS_WORD} student startups pitched at Demo Day.</p>
          </div>
        </section>

        <section className="m-section" aria-labelledby="partners-h">
          <div className="m-wrap">
            <h2 id="partners-h" className="m-title">Partners</h2>
            <PartnerNames />
          </div>
        </section>

        <section className="m-section m-alt" aria-labelledby="next-h">
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
