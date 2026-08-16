'use client';

import { CONTACT_ROUTES } from '@/config';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container-narrow">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.wordmark}>Meridian<span className={styles.dot}>.</span></span>
          </div>
          <nav className={styles.links}>
            <a href="/#the-day">The day</a>
            <a href="/#speakers">Speakers</a>
            <a href="/#faq">FAQ</a>
            <a href="/partners/">For partners</a>
            <a href="/speakers/">For speakers</a>
            <a href="/terms/">Terms</a>
          </nav>
        </div>

        {/* Labeled contact routes. One inbox for now; the labels and subjects
            keep student mail, speaker mail, and press separable. */}
        <div id="contact" className={styles.contactRoutes}>
          {CONTACT_ROUTES.map((r) => (
            <a
              key={r.label}
              href={`mailto:${r.email}?subject=${encodeURIComponent(r.subject)}`}
              className={styles.route}
            >
              <span className={styles.routeLabel}>{r.label}</span>
              <span className={styles.routeEmail}>{r.email}</span>
            </a>
          ))}
        </div>

        <div className={styles.bottom}>
          <div>
            <p className={styles.copy}>&copy; {year} Meridian Conference</p>
            <p className={styles.nonprofit}>A California 501(c)(3) nonprofit organization.</p>
          </div>
          <p className={styles.location}>meridianventura.com</p>
        </div>
      </div>
    </footer>
  );
}
