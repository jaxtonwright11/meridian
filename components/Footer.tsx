'use client';

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
            <a href="#mission">Mission</a>
            <a href="#the-day">The day</a>
            <a href="#recap">Past</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {year} Meridian Conference LLC</p>
          <p className={styles.location}>jaxtonwright11@berkeley.edu &middot; calendly.com/jaxtonwright</p>
        </div>
      </div>
    </footer>
  );
}
