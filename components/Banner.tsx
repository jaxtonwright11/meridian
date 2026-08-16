'use client';

import { useState } from 'react';
import { REGISTRATION_FORM_URL, SEATS_LINE } from '@/config';
import styles from './Banner.module.css';

/**
 * Registration-status bar. Dismissal lives in component state only, per the
 * standing no-localStorage rule, so it reappears on reload. That is fine: the
 * whole point is one visit, one decision.
 */
export function Banner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className={styles.banner} role="region" aria-label="Registration status">
      <p className={styles.text}>
        Registration is open. {SEATS_LINE}.{' '}
        <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
          Reserve your spot &rarr;
        </a>
      </p>
      <button
        className={styles.close}
        onClick={() => setDismissed(true)}
        aria-label="Dismiss registration banner"
      >
        &times;
      </button>
    </div>
  );
}
