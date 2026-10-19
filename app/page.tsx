import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MovedAnchors } from '@/components/MovedAnchors';
import {
  Doors, Spotlight, LeadersBand, TeamStrip, PartnerList,
  PressLinks, RegisterButton,
} from '@/components/site/parts';
import { FirstMeridian } from '@/components/FirstMeridian';
import { CONTACT_EMAIL_PUBLIC, EVENT_DATE_SHORT, EVENT_OVER } from '@/config';
import { press } from '@/data/press';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <div className="m-page">
      <MovedAnchors />
      <Nav />
      <main id="main">
        {/* 1. Hero */}
        <section className="m-hero m-hero-home">
          <div className="m-wrap">
            <h1>CEOs Come to You.</h1>
            <p className="m-sub">
              Meridian brings <strong>executives</strong> and <strong>students</strong> together.{' '}
              {EVENT_OVER
                ? <>Our first <a className="m-sublink" href="/conference/">conference</a> took place at UCLA on November 14.</>
                : <>We start with a <a className="m-sublink" href="/conference/">conference</a> at UCLA on November 14.</>}
            </p>
            <div className="m-actions">
              <RegisterButton>Register for Nov. 14</RegisterButton>
              <a className="btn btn-tan" href="/partners/">Partner With Us</a>
            </div>
          </div>
        </section>

        {/* 2. Leaders proof band */}
        {/* What is Meridian: what the company does, with links into the pages that explain each part. */}
        <section className="m-section m-alt" id="what-is-meridian" aria-labelledby="what-h">
          <div className="m-wrap m-what">
            <h2 id="what-h" className="m-title">What Is Meridian?</h2>
            <p className="m-whatp">
              Meridian brings executives and students together in person, by field. It begins with
              the <a href="/conference/">November 14 conference</a>, where executives from every field
              come to get to know students. After November 14, Meridian creates <a href="/partners/">hackathon-style
              events for executives and students</a>. We are building software that matches students
              with opportunities that fit them. Everyone who attends joins the Meridian network.
            </p>
            <Spotlight />
          </div>
        </section>

        <LeadersBand />

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
