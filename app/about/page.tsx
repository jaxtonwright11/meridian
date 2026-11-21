import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Proof, FounderStory, JoinTeam, PartnerLine } from '@/components/site/recap';
import { COMPANY_LINE, PROOF_LINE, ROOM_PHOTO } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'About',
  `${COMPANY_LINE} ${PROOF_LINE}`,
  '/about/',
);

export default function AboutPage() {
  return (
    <div className="m-page v-page">
      <Nav />
      <main id="main">
        <section className="v-section v-top">
          <div className="v-wrap">
            <p className="v-eyebrow">About</p>
            <h1 className="v-h1">{COMPANY_LINE}</h1>
            <p className="v-lead">
              At a Meridian conference, executives get to know students for who they are, not their resumes.
              It is a conference in reverse: the executives come to the students.
            </p>
            <p className="v-lead">{PROOF_LINE}</p>
          </div>
        </section>

        <picture>
          <source media="(max-width: 700px)" srcSet={ROOM_PHOTO.small} />
          <img className="v-banner" src={ROOM_PHOTO.src} alt={ROOM_PHOTO.alt} width={1800} height={1200} />
        </picture>

        <section className="v-band" aria-label="In numbers">
          <div className="v-wrap"><Proof /></div>
        </section>

        <section className="v-section" id="founder" aria-labelledby="founder-h">
          <div className="v-wrap">
            <h2 id="founder-h" className="v-h2">The founder</h2>
            <FounderStory full />
            <p className="v-links v-after"><a href="/past/">Before Meridian: December 2025</a></p>
          </div>
        </section>

        <section className="v-section v-tint" aria-labelledby="join-h">
          <div className="v-wrap">
            <JoinTeam />
            <p className="v-links v-after"><a href="/team/">Meet the team</a></p>
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
