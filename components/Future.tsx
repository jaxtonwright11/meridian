'use client';

import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn';
import styles from './Future.module.css';

const timeline = [
  {
    icon: '01',
    title: 'Keynote Conversations',
    desc: 'Industry leaders share their path, then open the floor. No scripts. Direct access.',
  },
  {
    icon: '02',
    title: 'The 30-Second Favors',
    desc: 'Speakers offer real help on stage: internship intros, mentorship, career guidance with follow-through.',
  },
  {
    icon: '03',
    title: 'Direct Access Sessions',
    desc: 'Small-group conversations between students and leaders. The rooms where trajectories change.',
  },
];

export function Future() {
  return (
    <section id="future" className={styles.future}>
      <div className="container">
        <AnimateIn>
          <p className="caption">What Comes Next</p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className={styles.headline}>December 2026</h2>
        </AnimateIn>

        <div className={styles.grid}>
          <AnimateIn delay={0.2}>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Event</span>
              <span className={styles.cardValue}>December 2026</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Location</span>
              <span className={styles.cardValue}>Ventura County</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Target</span>
              <span className={styles.cardValue}>400 Students</span>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.5}>
          <p className={styles.body}>
            Meridian Conference returns in December 2026, bringing 400 students
            from Ventura County face to face with executives, founders, and leaders.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.6}>
          <p className={styles.body}>
            The day includes panels, workshops, and direct access sessions.
            Structured conversations between students and the people building
            things, designed for real exchange, not performance.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.7}>
          <h3 className={styles.subhead}>What the Day Looks Like</h3>
        </AnimateIn>

        <StaggerContainer className={styles.timeline} staggerDelay={0.1}>
          {timeline.map((item) => (
            <StaggerItem key={item.icon} className={styles.timelineCard}>
              <span className={styles.timelineIcon}>{item.icon}</span>
              <h4 className={styles.timelineTitle}>{item.title}</h4>
              <p className={styles.timelineDesc}>{item.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.9}>
          <div className={styles.ctaWrap}>
            <a href="#apply" className="btn btn-gold">
              Express Interest
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
