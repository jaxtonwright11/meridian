import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MovedAnchors } from '@/components/MovedAnchors';
import {
  MeridianLine, Doors, SlimConferenceBand, LeadersBand, TeamStrip, PartnerList,
  PressLinks, RegisterButton, WhatMeridianDoes, NameNote,
} from '@/components/site/parts';
import { FirstMeridian } from '@/components/FirstMeridian';
import { CONTACT_EMAIL_PUBLIC, EVENT_DATE_SHORT } from '@/config';
import { press } from '@/data/press';

const SUBHEAD =
  'We start with a conference in Los Angeles on November 14, free for every student, then scale into 25 in-person meetups across six fields.';

export default function Home() {
  return (
    <div className="m-page">
      <MovedAnchors />
      <Nav />
      <main id="main">
        {/* 1. Hero */}
        <section className="m-hero">
          <MeridianLine />
          <div className="m-wrap">
            <span className="m-eyebrow">Los Angeles</span>
            <h1>Meridian brings students and executives together in person, by field.</h1>
            <p className="m-lead">{SUBHEAD}</p>
            <div className="m-actions">
              <RegisterButton>Register for {EVENT_DATE_SHORT}</RegisterButton>
              <a className="m-link" href="/partners/">Partner with Meridian</a>
            </div>
          </div>
        </section>

        {/* 2. Leaders proof band */}
        <LeadersBand />

        {/* 3. Three doors */}
        <section className="m-section"><Doors /></section>

        {/* 4. The idea */}
        <section className="m-section">
          <div className="m-wrap">
            <p className="m-display">
              College and networking were supposed to open doors, and instead the goalposts
              keep moving further out. Meridian exists to <strong>reverse gatekeeping</strong>.
              We bring students into the same room as the people in their field, in person,
              as an ongoing part of what we do.
            </p>
          </div>
        </section>

        {/* 5. What Meridian does */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">What Meridian does</span>
            <WhatMeridianDoes />
          </div>
        </section>

        {/* 6. The name */}
        <NameNote />

        {/* 7. Slim conference band */}
        <SlimConferenceBand />

        <TeamStrip />

        {/* 8. Who is working with us */}
        <section className="m-section">
          <div className="m-wrap">
            <PartnerList home />
            <p className="m-names"><a className="m-link" href="/partners/directory/">See all partners</a></p>
          </div>
        </section>

        {/* 9. In the press */}
        {press.length > 0 && (
          <section className="m-section">
            <div className="m-wrap">
              <span className="m-eyebrow">In the press</span>
              <h2 className="m-display m-h2">Recent media</h2>
              <PressLinks />
            </div>
          </section>
        )}

        {/* 10. The first Meridian */}
        <FirstMeridian />

        {/* 11. About strip */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">About</span>
            <p className="m-lead">
              A team across UCLA, USC, and UC Berkeley. Founded by Jaxton Wright.{' '}
              <a className="m-link" href="/about/">About Meridian</a>
            </p>
          </div>
        </section>

        {/* 12. Closing band */}
        <section className="m-section">
          <div className="m-wrap">
            <h2 className="m-display m-h2">Questions?</h2>
            <p className="m-lead">We reply personally.</p>
            <div className="m-actions">
              <a className="btn btn-ink" href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>Write to us</a>
              <a className="m-link" href="/faq/">Read the FAQ</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
