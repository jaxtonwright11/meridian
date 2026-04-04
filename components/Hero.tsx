'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Disable on touch/mobile devices
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mouse-x', `${x}%`);
      el.style.setProperty('--mouse-y', `${y}%`);
    };

    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      {/* Animated meridian line SVG background */}
      <svg className={styles.meridianLine} viewBox="0 0 1440 900" preserveAspectRatio="none">
        <motion.path
          d="M0,450 Q360,200 720,450 T1440,450"
          stroke="url(#goldGrad)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,500 Q360,300 720,500 T1440,500"
          stroke="url(#goldGrad)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.08 }}
          transition={{ duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
        />
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
            <stop offset="30%" stopColor="#C9A84C" stopOpacity="1" />
            <stop offset="70%" stopColor="#E8C56A" stopOpacity="1" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className={`container ${styles.content}`}>
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Not a lecture.{' '}
          <span className={styles.headlineAccent}>A meeting.</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          An annual conference where students from Ventura County meet the
          executives and founders who built something.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#sponsors" className="btn btn-gold">Become a Sponsor</a>
          <a href="#mission" className="btn btn-ghost">Learn More</a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
