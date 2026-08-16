'use client';

import { AnimateIn } from './AnimateIn';
import { RegisterCta } from './RegisterCta';
import { EVENT_VENUE, VENUE_DETAILS, CONTACT_EMAIL } from '@/config';
import styles from './GettingThere.module.css';

// Renders real directions once VENUE_DETAILS is filled in (config.ts);
// placeholders until then. UCLA is confirmed; the room is not, and the likely
// building is on the hill rather than central campus, so no address goes up
// until it is contracted.
const rows: { label: string; value: string | null }[] = [
  { label: 'Building', value: VENUE_DETAILS.building },
  { label: 'Address', value: VENUE_DETAILS.address },
  {
    label: 'Parking',
    value: VENUE_DETAILS.parkingStructure
      ? `${VENUE_DETAILS.parkingStructure}${
          VENUE_DETAILS.parkingIsPaid == null
            ? ''
            : VENUE_DETAILS.parkingIsPaid
              ? ', paid'
              : ', free'
        }`
      : null,
  },
  { label: 'Transit', value: VENUE_DETAILS.transitStop },
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
            <h2>{EVENT_VENUE}, exact building coming</h2>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className={styles.lead}>
              The room is being finalized. The building, street address, parking, and
              the closest transit stop will be posted here the moment it is contracted,
              and emailed to everyone registered. Do not navigate to campus from memory
              on the day, check here first.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <dl className={styles.details}>
              {rows.map((r) => (
                <div key={r.label} className={styles.row}>
                  <dt>{r.label}</dt>
                  <dd className={r.value ? '' : styles.tba}>{r.value ?? 'To be posted'}</dd>
                </div>
              ))}
            </dl>
          </AnimateIn>

          <AnimateIn delay={0.25}>
            <p className={styles.access}>
              Need an accommodation? Mobility, hearing, vision, anything else: email{' '}
              <a href={`mailto:${CONTACT_EMAIL}?subject=Accessibility`}>{CONTACT_EMAIL}</a>{' '}
              and we will make it work. There is also a question for this on the
              registration form.
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
