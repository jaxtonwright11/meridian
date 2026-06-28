'use client';

import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

// Jump-nav follows the page order. "Who helped" sits immediately after
// "Founder" and targets the existing #who-built-this section.
const links = [
  { id: 'recap', label: 'Past' },
  { id: 'the-day', label: 'The day' },
  { id: 'partners', label: 'Partners' },
  { id: 'founder', label: 'Founder' },
  { id: 'who-built-this', label: 'Who helped' },
  { id: 'contact', label: 'Contact' },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element, o?: object) => void } }).lenis;
  if (lenis?.scrollTo) {
    lenis.scrollTo(el, { offset: -72, duration: 1.1 });
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => scrollToId('hero')} aria-label="Back to top">
          Meridian<span>.</span>
        </button>

        <div className={styles.scroller}>
          <div className={styles.pills}>
            {links.map((l) => (
              <button key={l.id} className={styles.pill} onClick={() => scrollToId(l.id)}>
                {l.label}
              </button>
            ))}
            <button
              className={`${styles.pill} ${styles.cta}`}
              onClick={() => scrollToId('register')}
            >
              RSVP
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
