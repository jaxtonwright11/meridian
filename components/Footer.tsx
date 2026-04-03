'use client';

import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.wordmark}>MERIDIAN</span>
            <p className={styles.tagline}>Access changes everything.</p>
          </div>
          <nav className={styles.links}>
            <a href="#mission">Mission</a>
            <a href="#recap">Past Events</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {year} Meridian Conference LLC. All rights reserved.</p>
          <p className={styles.location}>Ventura County, California</p>
        </div>
      </div>
    </footer>
  );
}
