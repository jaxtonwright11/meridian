'use client';

import { useState } from 'react';
import { AnimateIn } from './AnimateIn';
import { CONTACT_EMAIL } from '@/config';
import styles from './FAQ.module.css';

interface Faq {
  q: string;
  a: string;
}

// Add or edit questions here. No markup changes needed.
const faqs: Faq[] = [
  {
    q: 'Is it really free?',
    a: 'Yes. No ticket, no fee, nothing sold.',
  },
  {
    q: 'Do I need to be a certain major or year?',
    a: 'No. Any university student.',
  },
  {
    q: 'Can I bring a friend?',
    a: 'Yes, but they need their own registration. Seats are capped at 400.',
  },
  {
    q: 'What should I wear?',
    a: 'Whatever you would wear to meet someone you respect. No suit required.',
  },
  {
    q: 'Do I have to stay the whole time?',
    a: 'No. Come for what is useful to you.',
  },
  {
    q: 'What if I have never done anything like this?',
    a: 'Most people there have not. The format exists specifically so you do not have to introduce yourself cold.',
  },
  {
    q: 'Is parking available?',
    a: 'Parking details will be posted here the moment the room is contracted. Check back, or watch your email after you register.',
  },
  {
    q: 'Can high school students attend?',
    a: 'The day is built for university students, with high school students from Ventura County and the local area invited as well.',
  },
];

/**
 * Click-to-expand accordion (tap on mobile). Pure component state, no
 * storage, no layout shift for anything above it.
 */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className="chunk">
          <AnimateIn>
            <p className="eyebrow">Questions</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2>Before you ask</h2>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className={styles.list}>
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className={styles.item}>
                    <button
                      className={styles.question}
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      id={`faq-q-${i}`}
                    >
                      <span>{f.q}</span>
                      <span className={`${styles.chev} ${isOpen ? styles.chevOpen : ''}`} aria-hidden>
                        +
                      </span>
                    </button>
                    <div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      className={styles.answer}
                      hidden={!isOpen}
                    >
                      <p>{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className={styles.still}>
              Something else?{' '}
              <a href={`mailto:${CONTACT_EMAIL}?subject=Student%20question`}>Email us</a> and a
              person answers.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
