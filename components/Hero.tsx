'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export function Hero() {
  const words = ['The', 'Room', 'Changes', 'Everything.'];

  return (
    <section id="hero" className={styles.hero}>
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
        {/* CONTENT NEEDED FROM JAX:
            - What: Meridian Conference logo (for hero placement)
            - Format: SVG, white or gold on transparent
            - Replace: Remove this comment block and add <img> tag
            - Notes: Optional. Hero may work better without logo, just the wordmark in nav
        */}

        <h1 className={styles.headline}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={word === 'Everything.' ? 'shimmer' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </h1>

        {/* CONTENT NEEDED FROM JAX:
            - What: Final hero headline copy (confirm or replace "The Room Changes Everything.")
            - Format: Text string, max 6 words
            - Replace: The words array above
            - Notes: Current copy is strong. Only replace if Jax has a clear preference.
        */}

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Connecting young people from Ventura County to the people, rooms,
          and opportunities they didn&apos;t know they could access.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
