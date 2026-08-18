'use client';

import { AnimateIn } from './AnimateIn';
import { EVENT_DATE, EVENT_VENUE } from '@/config';
import styles from './PartnersIntro.module.css';

export function PartnersIntro() {
  return (
    <section id="mission" className={styles.section}>
      <div className="container">
        <div className="chunk">
          <AnimateIn>
            <p className="eyebrow">For partners</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className={styles.headline}>Reverse gatekeeping.</h1>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className={styles.dateline}>
              {EVENT_DATE} &middot; {EVENT_VENUE} &middot; Free for every student
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className={styles.lead}>
              Students are not short on ability. They are short on the informal
              machinery that turns ability into access. Meridian supplies it. The rooms
              that change a person&apos;s path should not require a last name or a zip
              code to enter.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className={styles.sub}>
              This page is for organizations and funders. What follows is the first
              event&apos;s result, who is behind the conference, and how to reach us
              about sponsorship and partnership.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
