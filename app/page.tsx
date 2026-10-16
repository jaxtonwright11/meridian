import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MovedAnchors } from '@/components/MovedAnchors';
import {
  MeridianLine, Doors, LeadersBand, TeamStrip, PartnerList,
  PressLinks, RegisterButton,
} from '@/components/site/parts';
import { FirstMeridian } from '@/components/FirstMeridian';
import { CONTACT_EMAIL_PUBLIC, EVENT_DATE_SHORT } from '@/config';
import { press } from '@/data/press';

export default function Home() {
  return (
    <div className="m-page">
      <MovedAnchors />
      <Nav />
      <main id="main">
        {/* 1. Hero */}
        <section className="m-hero m-hero-home">
          <MeridianLine />
          <div className="m-wrap">
            <h1>CEOs Come to You.</h1>
            <p className="m-sub">
              Meridian brings executives and students together. We start with
              a <a className="m-sublink" href="/conference/">conference</a> at UCLA on November 14, free for every student.
            </p>
            <div className="m-actions">
              <RegisterButton>Register for Nov. 14</RegisterButton>
              <a className="btn btn-tan" href="#what-is-meridian">What is Meridian?</a>
            </div>
          </div>
        </section>

        {/* 2. Leaders proof band */}
        <LeadersBand />

        {/* What is Meridian: what the company does, with links into the pages that explain each part. */}
        <section className="m-section" id="what-is-meridian" aria-labelledby="what-h">
          <div className="m-wrap">
            <h2 id="what-h" className="m-title">What Is Meridian?</h2>
            <p className="m-whatp">
              Meridian brings executives and students together in person, by field. It begins with
              the <a href="/conference/">November 14 conference</a>, where executives from every field
              come to get to know students. After November 14, Meridian creates <a href="/partners/">hackathon-style
              events for executives and students</a>. We are building software that matches students
              with opportunities that fit them. Everyone who attends joins the Meridian network.
            </p>
          </div>
        </section>

        {/* What Meridian does, three parts. TODO(jax): approve wording. */}
        <section className="m-section m-alt m-pathsec" aria-labelledby="path-h">
          <div className="m-wrap">
            <h2 id="path-h" className="m-title">Three Parts of Meridian</h2>
            <div className="m-path">
              <details className="m-step">
                <summary><h3>The conference</h3></summary>
                <p>November 14 at UCLA, free for every student. Executives from every field come to get to know you.</p>
              </details>
              <details className="m-step">
                <summary><h3>Hackathon-style events</h3></summary>
                <p>Executives and students team up on a challenge in one field, then compete and present.</p>
              </details>
              <details className="m-step">
                <summary><h3>Matching software</h3></summary>
                <p>Software that connects each student with opportunities nearby that fit their circumstances, values, and goals.</p>
              </details>
            </div>
            <p className="m-whatp" style={{ marginTop: 24 }}>
              Every event brings executives from one field together with students, and everyone who
              attends joins the Meridian network. Each event adds to the next.
            </p>
          </div>
        </section>

        <TeamStrip />

        {/* 3. Three doors */}
        <section className="m-section"><Doors /></section>

        {/* 8. Who is working with us */}
        <section className="m-section">
          <div className="m-wrap">
            <PartnerList home />
            <p className="m-actions"><a className="btn btn-tan" href="/partners/directory/">See all partners</a></p>
          </div>
        </section>

        {/* In the press */}
        {press.length > 0 && (
          <section className="m-section">
            <div className="m-wrap">
              <h2 className="m-title">In the Press</h2>
              <PressLinks />
            </div>
          </section>
        )}

        {/* 10. The first Meridian */}
        <FirstMeridian />

        {/* 12. Closing band */}
        <section className="m-section">
          <div className="m-wrap">
            <div className="m-closing">
              <h2 className="m-title" style={{ marginBottom: 8 }}>Questions?</h2>
              <div className="m-actions">
                <a className="btn btn-ink" href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>Write to us</a>
                <a className="btn btn-tan" href="/faq/">Read the FAQ</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
