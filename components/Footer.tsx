'use client';

import { CONTACT_EMAIL, CONTACT_EMAIL_TEAM } from '@/config';
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
            <a href="/#faq">FAQ</a>
            <a href="/partners/">Partners</a>
            <a href="/speakers/">For speakers</a>
            <a href="/terms/">Terms</a>
          </nav>
        </div>

        <div id="contact" className={styles.contactRoutes}>
          <span className={styles.routeLabel}>Contact us</span>
          <div className={styles.emails}>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={`mailto:${CONTACT_EMAIL_TEAM}`}>{CONTACT_EMAIL_TEAM}</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} Meridian Conference. A California 501(c)(3) nonprofit organization.
          </p>
          <p className={styles.location}>meridianventura.com</p>
        </div>
      </div>
    </footer>
  );
}
