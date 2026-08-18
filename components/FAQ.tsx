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
    q: 'Who can come?',
    a: 'Anyone who is excited to be there. University students of any major or year, high school students, and people who already graduated. There is no cutoff. If you are ready to meet people, you belong in the room.',
  },
  {
    q: 'Can I bring a friend?',
    a: 'Yes, but they need their own registration. Seats are capped at 400.',
  },
  {
    q: 'What should I wear?',
    a: 'Business casual is ideal. If that is not something you have, wear whatever you would wear to meet people you respect. Nobody is checking.',
  },
  {
    q: 'Do I have to stay the whole time?',
    a: 'Stay the whole time. The best conversations happen late in the day, after people have loosened up and the room knows who you are. The students who arrive first and leave last get the most out of it.',
  },
  {
    q: 'What if I have never done anything like this?',
    a: 'Many people there have not. You introduce yourself, they introduce themselves, and it goes from there. Your ask card does a lot of the work for you, because people can see what you are looking for before they walk up.',
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
              Something else? Email us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}?subject=Student%20question`}>{CONTACT_EMAIL}</a>
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
