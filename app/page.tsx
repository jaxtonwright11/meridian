import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MovedAnchors } from '@/components/MovedAnchors';
import { Proof, ExecGrid, Gallery, PartnersBlock, FounderStory, JoinTeam, PartnerLine } from '@/components/site/recap';
import { DemoDay } from '@/components/site/DemoDay';
import { COMPANY_LINE, PROOF_LINE, HEADLINE, ROOM_PHOTO, STARTUPS, EXECUTIVES } from '@/data/recap';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <div className="m-page v-page">
      <MovedAnchors />
      <Nav />
      <main id="main">
        <section className="v-hero" aria-labelledby="hero-h">
          <picture>
            <source media="(max-width: 700px)" srcSet={ROOM_PHOTO.small} />
            <img className="v-hero-img" src={ROOM_PHOTO.src} alt={ROOM_PHOTO.alt} width={1800} height={1200} fetchPriority="high" />
          </picture>
          <div className="v-hero-text">
            <div className="v-wrap">
              <h1 id="hero-h" className="v-h1">{HEADLINE}</h1>
              <p className="v-hero-sub">{COMPANY_LINE} {PROOF_LINE}</p>
            </div>
          </div>
        </section>

        <section className="v-band" aria-label="In numbers">
          <div className="v-wrap"><Proof /></div>
        </section>

        <section className="v-section" id="executives" aria-labelledby="execs-h">
          <div className="v-wrap">
            <p className="v-eyebrow">November 14, 2026 · UCLA</p>
            <h2 id="execs-h" className="v-h2">Executives in the room</h2>
            <p className="v-lead">{EXECUTIVES} executives came to get to know students for who they are, not their resumes.</p>
            <ExecGrid />
          </div>
        </section>

        <section className="v-section v-tint" id="demo-day" aria-labelledby="demo-h">
          <div className="v-wrap">
            <h2 id="demo-h" className="v-h2">Demo Day</h2>
            <p className="v-lead">{STARTUPS} student startups pitched, in this order.</p>
          </div>
          <DemoDay carousel />
        </section>

        <section className="v-section" aria-labelledby="photos-h">
          <div className="v-wrap">
            <h2 id="photos-h" className="v-h2">The day</h2>
            <Gallery />
          </div>
        </section>

        <section className="v-section v-tint" id="partners" aria-labelledby="partners-h">
          <div className="v-wrap">
            <h2 id="partners-h" className="v-h2">Partners and organizations</h2>
            <PartnersBlock />
          </div>
        </section>

        <section className="v-section" id="founder" aria-labelledby="founder-h">
          <div className="v-wrap">
            <h2 id="founder-h" className="v-h2">The founder</h2>
            <FounderStory />
          </div>
        </section>

        <section className="v-section v-tint" aria-labelledby="join-h">
          <div className="v-wrap">
            <JoinTeam />
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
