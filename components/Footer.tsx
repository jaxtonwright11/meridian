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
            <p className={styles.tagline}>Not a lecture. A meeting.</p>
          </div>
          <nav className={styles.links}>
            <a href="#mission">Mission</a>
            <a href="#recap">Past Events</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#apply">Get Involved</a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.sigLogos}>
              <img src="/opt/berkeley-seal.webp" alt="UC Berkeley" className={styles.sigLogo} />
              <img src="/opt/meridian-m.webp" alt="Meridian" className={styles.sigLogo} />
            </div>
            <p>&copy; {year} Meridian Conference LLC. All rights reserved.</p>
          </div>
          <p className={styles.location}>Ventura County, California</p>
        </div>
      </div>
    </footer>
  );
}
