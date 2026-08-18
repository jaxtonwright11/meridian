'use client';

import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn';
import styles from './HowItWorks.module.css';

const steps = [
  {
    n: '01',
    title: 'Tell us what you need',
    desc: 'One short form when you register. An internship, a mentor, funding, a field you want into. Whatever it is, write it down.',
  },
  {
    n: '02',
    title: 'They come find you',
    desc: 'No lining up, no elevator pitch. CEOs work the room and come to you, already knowing your ask. What you get is concrete: an introduction, a referral, a direct line in.',
  },
  {
    n: '03',
    title: 'Meridian closes the loop',
    desc: 'The day ends, the follow-through starts. Closing out what was promised to you is our job, done within two weeks, not yours.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className="chunk">
          <AnimateIn>
            <p className="eyebrow">How it works</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2>You write down what you need. They come find you.</h2>
          </AnimateIn>

          <StaggerContainer className={styles.steps} staggerDelay={0.08}>
            {steps.map((s) => (
              <StaggerItem key={s.n} className={styles.step}>
                <span className={styles.num}>{s.n}</span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
