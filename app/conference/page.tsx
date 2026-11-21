import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { RECAP_LINES, Proof, ExecGrid, Gallery, PartnersBlock, PartnerLine } from '@/components/site/recap';
import { CONFERENCE_DATE, STUDENTS, EXECUTIVES, STARTUPS, ROOM_PHOTO } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'November 14',
  `Meridian's first conference: ${STUDENTS} students and ${EXECUTIVES} executives at UCLA, in collaboration with USC, on ${CONFERENCE_DATE}.`,
  '/conference/',
);

export default function ConferencePage() {
  return (
    <div className="m-page v-page">
      <Nav />
      <main id="main">
        <section className="v-section v-top">
          <div className="v-wrap">
            <p className="v-eyebrow">{CONFERENCE_DATE} · UCLA</p>
            <h1 className="v-h1">Our first conference.</h1>
            <ul className="v-facts">
              {RECAP_LINES.map((l) => (<li key={l}>{l}</li>))}
            </ul>
          </div>
        </section>

        <picture>
          <source media="(max-width: 700px)" srcSet={ROOM_PHOTO.small} />
          <img className="v-banner" src={ROOM_PHOTO.src} alt={ROOM_PHOTO.alt} width={1800} height={1200} />
        </picture>

        <section className="v-band" aria-label="In numbers">
          <div className="v-wrap"><Proof /></div>
        </section>

        <section className="v-section" id="executives" aria-labelledby="execs-h">
          <div className="v-wrap">
            <h2 id="execs-h" className="v-h2">Executives in the room</h2>
            <p className="v-lead">Dr. Bob Dodge spoke to the full room. Then the executives got to know students, by field.</p>
            <ExecGrid />
          </div>
        </section>

        <section className="v-section v-tint" id="demo-day" aria-labelledby="demo-h">
          <div className="v-wrap">
            <h2 id="demo-h" className="v-h2">Demo Day</h2>
            <p className="v-lead">{STARTUPS} student startups pitched at Demo Day.</p>
            <p className="v-links"><a href="/demo-day/">See all {STARTUPS} startups</a></p>
          </div>
        </section>

        <section className="v-section" aria-labelledby="photos-h">
          <div className="v-wrap">
            <h2 id="photos-h" className="v-h2">The day</h2>
            <p className="v-lead">The Petersen Automotive Museum brought cars, and Bruin Formula Racing&rsquo;s car was there.</p>
            <Gallery />
          </div>
        </section>

        <section className="v-section v-tint" aria-labelledby="partners-h">
          <div className="v-wrap">
            <h2 id="partners-h" className="v-h2">Partners and organizations</h2>
            <PartnersBlock />
          </div>
        </section>

        <section className="v-section v-section-quiet" aria-label="For companies and organizations">
          <div className="v-wrap"><PartnerLine /></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
