'use client';

import { useState, useEffect } from 'react';
import { REGISTRATION_FORM_URL } from '@/config';
import styles from './Nav.module.css';

// Three items only. Everything else still exists at its anchor (or on
// /partners and /speakers, linked from the footer); it just is not surfaced
// here. Students get one path: understand the day, see the room, register.
const links = [
  { id: 'the-day', label: 'The day' },
  // { id: 'speakers', label: 'Speakers' } returns with the speakers section.
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

interface NavProps {
  /** False on /partners, /speakers, /terms: anchors then link back to /#… */
  home?: boolean;
}

export function Nav({ home = true }: NavProps) {
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
        {home ? (
          <button className={styles.logo} onClick={() => scrollToId('hero')} aria-label="Back to top">
            Meridian<span>.</span>
          </button>
        ) : (
          <a className={styles.logo} href="/" aria-label="Meridian home">
            Meridian<span>.</span>
          </a>
        )}

        <div className={styles.scroller}>
          <div className={styles.pills}>
            {links.map((l) =>
              home ? (
                <button key={l.id} className={styles.pill} onClick={() => scrollToId(l.id)}>
                  {l.label}
                </button>
              ) : (
                <a key={l.id} className={styles.pill} href={`/#${l.id}`}>
                  {l.label}
                </a>
              ),
            )}
            <a
              className={`${styles.pill} ${styles.cta}`}
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
