import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MovedAnchors } from '@/components/MovedAnchors';
import { ExecGrid, Gallery, PartnersBlock, FounderStory, JoinTeam, PartnerLine } from '@/components/site/recap';
import { HEADLINE, WHAT_LINE, ROOM_PHOTO, STUDENTS, EXECUTIVES, STARTUPS, CONFERENCE_DATE } from '@/data/recap';

export const metadata: Metadata = { alternates: { canonical: '/' } };

// The home page is the About page: what Meridian is, who has taken part, who is behind it.
// The conference has its own page; this one stays about the company.
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
            </div>
          </div>
        </section>

        <section className="v-section" id="about" aria-labelledby="about-h">
          <div className="v-wrap v-two">
            <div>
              <h2 id="about-h" className="v-h2">What Meridian does</h2>
              <p className="v-lead">{WHAT_LINE}</p>
            </div>
            <div>
              <h2 className="v-h2">Our first conference</h2>
              <p className="v-lead">
                {CONFERENCE_DATE}, at UCLA, in collaboration with USC. {STUDENTS} students
                and {EXECUTIVES} executives took part, and {STARTUPS} student startups pitched at Demo Day.
              </p>
              <p className="v-links">
                <a href="/conference/">See November 14</a>
                <a href="/demo-day/">See Demo Day</a>
              </p>
            </div>
          </div>
        </section>

        <section className="v-section v-tint" id="executives" aria-labelledby="execs-h">
          <div className="v-wrap">
            <h2 id="execs-h" className="v-h2">Executives</h2>
            <p className="v-lead">The executives who came to get to know students.</p>
            <ExecGrid />
          </div>
        </section>

        <section className="v-section" aria-label="Photos from November 14">
          <div className="v-wrap">
            <Gallery limit={4} />
          </div>
        </section>

        <section className="v-section v-tint" id="partners" aria-labelledby="partners-h">
          <div className="v-wrap">
            <h2 id="partners-h" className="v-h2">Partners</h2>
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
            <div className="v-after"><PartnerLine /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
