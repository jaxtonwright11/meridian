'use client';

import { RegisterCta } from './RegisterCta';
import { EVENT_DATE, EVENT_VENUE, EVENT_TIME } from '@/config';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.sheet}>
          {/* Masthead. The meta block is desktop-only (hidden on mobile via CSS). */}
          <div className={styles.masthead}>
            <div className={styles.wordmark}>Meridian<span>.</span></div>
            <div className={styles.mastMeta}>
              The conference &middot; {EVENT_DATE}<br />
              {EVENT_VENUE}, Los Angeles<br />
              {EVENT_TIME} &middot; meridianventura.com
            </div>
          </div>

          {/* Lead. The register button must clear the fold on a 375px viewport,
              so it sits directly under the subhead; prose follows. */}
          <div className={styles.blurb}>
            <span className={`eyebrow ${styles.eyebrow}`}>What Meridian is</span>
            <h1 className={styles.headline}>CEOs come to you.</h1>
            <p className={styles.subhead}>24 executives. 400 students.</p>

            <RegisterCta id="register" />

            <p className={styles.lead}>
              Meridian is a free conference on {EVENT_DATE} at {EVENT_VENUE}, for
              university students across Los Angeles and Ventura Counties. It is built
              and run by a UC Berkeley undergraduate from Oxnard.
            </p>
            <p className={styles.leadSub}>
              The format is inverted. Leaders don&apos;t speak from a stage and leave.
              They circulate, sit with students, and each one names a single concrete
              thing they can do for someone in the room. Every commitment made that day
              is tracked and closed out by Meridian within two weeks, so students never
              have to chase anyone.
            </p>

            <a href="#the-day" className={styles.seeDay}>What the day looks like &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
