'use client';

import { REGISTRATION_FORM_URL, EVENT_DATE_SHORT } from '@/config';
import styles from './RegisterCta.module.css';

interface RegisterCtaProps {
  /** Renders the id used by nav / deep links; only one instance should own #register. */
  id?: string;
  className?: string;
  compact?: boolean;
}

/**
 * The one call to action. Registration is the live Google Form; every button
 * on the site is this same link.
 */
export function RegisterCta({ id, className = '', compact = false }: RegisterCtaProps) {
  return (
    <div id={id} className={`${styles.wrap} ${compact ? styles.compact : ''} ${className}`}>
      <a
        href={REGISTRATION_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn-ink ${styles.button}`}
      >
        Register for {EVENT_DATE_SHORT}
      </a>
      {!compact && (
        <p className={styles.note}>
          Free for every student. Tell us what you need, one short form when you register.
        </p>
      )}
    </div>
  );
}
