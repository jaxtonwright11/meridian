import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Gallery, PartnersBlock } from '@/components/site/recap';
import { CONFERENCE_DATE, STUDENTS, EXECUTIVES, STARTUPS, ROOM_PHOTO } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'November 14',
  `Meridian launched with a conference at UCLA, in collaboration with USC, on ${CONFERENCE_DATE}: ${STUDENTS} students and ${EXECUTIVES} executives.`,
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
            <h1 className="v-h1">November 14, 2026.</h1>
            <p className="v-lead">
              Meridian launched with a conference at UCLA, in collaboration with USC. {STUDENTS} students
              and {EXECUTIVES} executives took part. Executives got to know students by field, for who they are and not their resumes,
              and {STARTUPS} student startups pitched at Demo Day.
            </p>
            <p className="v-links">
              <a href="/#executives">See the executives</a>
              <a href="/demo-day/">See all {STARTUPS} startups</a>
            </p>
          </div>
        </section>

        <picture>
          <source media="(max-width: 700px)" srcSet={ROOM_PHOTO.small} />
          <img className="v-banner" src={ROOM_PHOTO.src} alt={ROOM_PHOTO.alt} width={1800} height={1200} />
        </picture>

        <section className="v-section" aria-labelledby="photos-h">
          <div className="v-wrap">
            <h2 id="photos-h" className="v-h2">The day</h2>
            <p className="v-lead">
              Dr. Bob Dodge spoke to the full room. Then the executives got to know students, by field.
              The Petersen Automotive Museum brought cars, and Bruin Formula Racing&rsquo;s car was there.
            </p>
            <Gallery />
          </div>
        </section>

        <section className="v-section v-tint" aria-labelledby="partners-h">
          <div className="v-wrap">
            <h2 id="partners-h" className="v-h2">Partners</h2>
            <PartnersBlock />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
