'use client';

import { AnimateIn } from './AnimateIn';
import { RegisterCta } from './RegisterCta';
import { EVENT_VENUE, EVENT_DATE, EVENT_TIME, VENUE_DETAILS, INSTAGRAM_URL } from '@/config';
import styles from './GettingThere.module.css';

const rows = [
  { label: 'Building', value: VENUE_DETAILS.building },
  { label: 'Address', value: VENUE_DETAILS.address },
  { label: 'Date', value: `${EVENT_DATE}, ${EVENT_TIME}` },
];

export function GettingThere() {
  return (
    <section id="getting-there" className={styles.section}>
      <div className="container">
        <div className="chunk">
          <AnimateIn>
            <p className="eyebrow">Getting there</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2>
              {VENUE_DETAILS.building} at {EVENT_VENUE}
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className={styles.lead}>
              We are at {VENUE_DETAILS.building}, {VENUE_DETAILS.address}. Put that
              address into your maps app and it will take you to the door.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <dl className={styles.details}>
              {rows.map((r) => (
                <div key={r.label} className={styles.row}>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </AnimateIn>

          <AnimateIn delay={0.25}>
            <p className={styles.updates}>
              {INSTAGRAM_URL ? (
                <>
                  Follow{' '}
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    Meridian on Instagram
                  </a>{' '}
                  for parking and day-of updates.
                </>
              ) : (
                <>Follow Meridian on Instagram for parking and day-of updates.</>
              )}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <RegisterCta />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
