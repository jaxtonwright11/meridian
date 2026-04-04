'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Nav.module.css';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          <button className={styles.logo} onClick={() => scrollTo('hero')}>
            MERIDIAN
          </button>

          <div className={styles.links}>
            <button onClick={() => scrollTo('mission')}>Mission</button>
            <button onClick={() => scrollTo('recap')}>Past Events</button>
            <button onClick={() => scrollTo('sponsors')}>Sponsors</button>
            <button onClick={() => scrollTo('apply')}>Get Involved</button>
            <button className={styles.cta} onClick={() => scrollTo('sponsors')}>
              Become a Sponsor
            </button>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen : ''}`} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={() => scrollTo('mission')}>Mission</button>
              <button onClick={() => scrollTo('recap')}>Past Events</button>
              <button onClick={() => scrollTo('sponsors')}>Sponsors</button>
              <button onClick={() => scrollTo('apply')}>Get Involved</button>
              <button className={styles.mobileCta} onClick={() => scrollTo('sponsors')}>
                Become a Sponsor
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile sticky navbar */}
      <nav className={styles.mobileBar}>
        <button className={styles.mobileBarLogo} onClick={() => scrollTo('hero')}>
          MERIDIAN
        </button>
        <div className={styles.mobileBarLinks}>
          <button onClick={() => scrollTo('mission')}>Mission</button>
          <button onClick={() => scrollTo('recap')}>Past Events</button>
          <button onClick={() => scrollTo('founder')}>Founder</button>
          <button onClick={() => scrollTo('apply')}>Apply</button>
        </div>
      </nav>
    </>
  );
}
