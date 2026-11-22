import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { DemoDay } from '@/components/site/DemoDay';
import { PartnerLine } from '@/components/site/recap';
import { CONFERENCE_DATE, STARTUPS, PHOTO_CREDIT } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'Demo Day',
  `${STARTUPS} student startups pitched at Demo Day at Meridian's first conference, ${CONFERENCE_DATE}, at UCLA.`,
  '/demo-day/',
);

export default function DemoDayPage() {
  return (
    <div className="m-page v-page">
      <Nav />
      <main id="main">
        <section className="v-section v-top">
          <div className="v-wrap">
            <p className="v-eyebrow">{CONFERENCE_DATE} · UCLA</p>
            <h1 className="v-h1">Demo Day.</h1>
            <p className="v-lead">{STARTUPS} student startups pitched at Meridian&rsquo;s first conference. Here they are, in pitch order.</p>
          </div>
        </section>
        <section className="v-section v-tint" aria-label="The startups">
          <div className="v-wrap">
            <DemoDay />
            <p className="v-credit">{PHOTO_CREDIT}</p>
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
