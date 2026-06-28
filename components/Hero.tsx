'use client';

import { RegisterForm } from './RegisterForm';
import { EVENT_DATE, EVENT_DATE_SHORT, EVENT_VENUE, EVENT_TIME } from '@/config';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.sheet}>
          {/* Masthead */}
          <div className={styles.masthead}>
            <div className={styles.wordmark}>Meridian<span>.</span></div>
            <div className={styles.mastMeta}>
              The conference &middot; {EVENT_DATE}<br />
              {EVENT_VENUE}<br />
              {EVENT_TIME} &middot; meridianventura.com
            </div>
          </div>

          {/* Lead */}
          <div className={styles.blurb}>
            <span className={`eyebrow ${styles.eyebrow}`}>What Meridian is</span>
            <h1 className={styles.headline}>The leaders come to you.</h1>
            <p className={styles.lead}>
              Meridian is a free, student-run conference that puts university students
              from across Los Angeles face to face with founders, executives, and
              industry leaders. Rather than students lining up to introduce themselves,
              the leaders work the room and come to the students.
            </p>
            <p className={styles.leadSub}>
              It is built and run by a UC Berkeley undergraduate from Oxnard. The first
              event, in December 2025, brought about 150 students together with leaders
              from Netflix, OpenAI, and Chase Bank. It returns {EVENT_DATE_SHORT}, built for 400.
            </p>

            {/* Registration capture (always visible) */}
            <div id="register" className={styles.register}>
              <div className={styles.registerHead}>
                <span className={styles.registerTitle}>Reserve your spot</span>
                <span className={styles.registerNote}>Free for every student &middot; {EVENT_DATE_SHORT}</span>
              </div>
              <RegisterForm source="hero" buttonLabel="RSVP" />
            </div>

            <a href="#the-day" className={styles.seeDay}>What the day looks like &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
