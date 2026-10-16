import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Explore, RegisterButton, WhatMeridianDoes, MeridianLine, TeamTile } from '@/components/site/parts';
import { founder, team } from '@/data/team';

import { PRESS_URL } from '@/data/press';
import { INSTAGRAM_FOUNDER_URL, LINKEDIN_FOUNDER_URL } from '@/config';
import { leaders } from '@/data/leaders';

export const metadata: Metadata = pageMeta(
  'About',
  'Meridian brings executives and students together in person, by field. It starts with a conference at UCLA on November 14 and expands into in-person events by field.',
  '/about/',
);

// Founder bio: brief section 15. TODO(jax): approve the wording.
// Harvard appears here and nowhere else on the site (brief 10.1).
const FOUNDER_BIO =
  'Jaxton Wright is from Oxnard, California, and studies Honors Economics and Political Science at UC Berkeley. In July 2025, he gave a speech at Harvard, and afterward he created Meridian, which brings executives and students together in person, by field. Meridian starts with a free conference on November 14, where executives get to know students and each one is looking to help with opportunities they manage. The day includes a demo day for student founders and researchers and a design lab led by NASA engineers. Starting November 14, Meridian creates hackathon-style events by field, beginning with engineering, pre-med, and business. Each brings executives from that field together with students from across Los Angeles campuses, with student teams working the same challenge side by side, and everyone who attends joins the Meridian network.';

export default function AboutPage() {
  const george = leaders.find((l) => l.slug === 'george-leis')!;
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 40 }}>
          <div className="m-wrap">
            <h1 className="m-h1-long">Meridian brings executives and students together in person, by field.</h1>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">The Idea</span>
            <p className="m-idea">
              College and networking were supposed to open doors, and instead the goalposts keep
              moving further out. Meridian exists to <strong>reverse gatekeeping</strong>. We bring
              students into the same room as the people in their field, in person, and make that an
              ongoing part of what we do.
            </p>
          </div>
        </section>

        <section className="m-section" id="founder">
          <div className="m-wrap">
            <span className="m-eyebrow">The Founder</span>
            <div className="m-person-block" style={{ gridTemplateColumns: 'minmax(0, 260px) 1fr', gap: 40 }}>
              <img src="/opt/unnamed__3_.webp" alt="Jaxton Wright, founder of Meridian" width={520} height={650}
                   style={{ width: '100%', height: 'auto', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 0 }} />
              <div>
                <h2 className="m-h2" style={{ marginBottom: 6 }}>Jaxton Wright</h2>
                <p className="m-small" style={{ marginBottom: 18 }}>Founder. Junior, Honors Economics, UC Berkeley.</p>
                <p className="m-lead">{FOUNDER_BIO}</p>
                <p style={{ marginTop: 16, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  <a className="m-link" href={INSTAGRAM_FOUNDER_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a className="m-link" href={LINKEDIN_FOUNDER_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">The Team</span>
            <p className="m-lead" style={{ marginBottom: 18 }}>A team across UCLA, USC, and UC Berkeley.</p>
            <div className="m-people m-team">
              {[founder, ...team].map((m) => (<TeamTile m={m} key={m.slug} />))}
            </div>
            <p className="m-names"><a className="m-link" href="/team/">Meet the team</a></p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Who Backs This</span>
            <div className="m-person-block" style={{ gridTemplateColumns: 'minmax(0, 160px) 1fr', gap: 32 }}>
              <img src={george.photo} alt={george.name} width={320} height={320} loading="lazy" style={{ width: '100%', height: 'auto', aspectRatio: '1', borderRadius: 0 }} />
              <div>
                <h3 style={{ fontSize: 26, marginBottom: 4 }}>{george.name}</h3>
                <p className="m-small" style={{ marginBottom: 14 }}>{george.roles.join('. ')}</p>
                {george.bioApproved && george.bio?.split('\n\n').map((para) => (<p key={para} style={{ marginBottom: 12 }}>{para}</p>))}
              </div>
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <p className="m-lead">The General Atomics Sciences Education Foundation funds Meridian and the aerospace design lab.</p>
            <p className="m-small" style={{ marginTop: 12 }}>
              <a className="m-link" href="/past/">Past events</a>{' '}&nbsp;{' '}
              <a className="m-link" href={PRESS_URL} target="_blank" rel="noopener">Press</a>{' '}&nbsp;{' '}
              <a className="m-link" href="/contact/">Contact</a>
            </p>
            <div className="m-actions" style={{ marginTop: 24 }}><RegisterButton /></div>
          </div>
        </section>
      </main>
      <Explore links={[['Team', '/team/'], ['Past events', '/past/'], ['Partners', '/partners/'], ['Press', PRESS_URL]]} />
      <Footer />
    </div>
  );
}
