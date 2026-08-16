'use client';

import { AnimateIn } from './AnimateIn';
import styles from './Future.module.css';

const stops = [
  {
    time: '10:30',
    title: 'Travel in',
    desc: 'Students arrive, get their name, and find their footing before the floor fills.',
    soft: true,
  },
  {
    time: '10:45',
    title: 'Check-in, portraits, ask cards',
    desc: 'Every student sits for a real portrait they keep, then fills an ask card: what you are looking for, and who you want to meet. The card stays on you all day, so a leader can walk up already knowing why.',
  },
  {
    time: '11:15',
    title: 'The open floor',
    desc: 'No stage to wait behind. Partner organizations run stations you can walk up to, a hands-on aerospace engineering lab runs all day, and hosts keep the floor moving so no one is left standing alone.',
  },
  {
    time: 'All day',
    title: 'Student demos',
    desc: 'Students who are already building something get a place to show it. A company, a project, a research thing. Opt in when you register.',
  },
  {
    time: 'All day',
    title: 'The Favor Wall',
    desc: 'Every favor a leader gives gets written up and posted as it happens. By the end of the day the access is not a promise. It is on the wall, in front of everyone.',
    favor: true,
  },
  {
    time: '12:00',
    title: 'Keynote conversations',
    desc: 'A few leaders, in conversation instead of scripted speeches. Each one says out loud the specific favor they are putting on the table that day.',
  },
  {
    time: '12:45',
    title: 'Direct access and the 30-second favor',
    desc: 'The center of the day. Leaders move between small groups and act on the ask cards on the spot. The whole room is built to make a small favor easy to give and impossible to forget.',
  },
  {
    time: '2:15',
    title: 'The close',
    desc: 'Before leaving, every student is entered into the Meridian network with a standing way to ask for help. The follow-up is our job, not theirs.',
  },
  {
    time: 'After 3:00',
    title: 'In-N-Out, on us',
    desc: 'Most conferences end over food. Ours does too. When the day wraps, anyone who wants to is invited to come get In-N-Out with us.',
    soft: true,
  },
];

export function Future() {
  return (
    <section id="the-day" className={styles.section}>
      <div className="container">
       <div className="chunk">
        <AnimateIn>
          <p className="eyebrow">The day</p>
        </AnimateIn>
        <div className={styles.dayHead}>
          <AnimateIn delay={0.1}>
            <h2 className={styles.headline}>What the day looks like</h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <span className={styles.when}>Working schedule &middot; timings adjustable</span>
          </AnimateIn>
        </div>

        <div className={styles.timeline}>
          {stops.map((stop) => (
            <AnimateIn key={stop.title} delay={0.05}>
              <div
                className={`${styles.stop} ${stop.soft ? styles.soft : ''} ${stop.favor ? styles.favor : ''}`}
              >
                <span className={styles.time}>{stop.time}</span>
                <span className={styles.dot} />
                <h3 className={styles.stopTitle}>{stop.title}</h3>
                <p className={styles.stopDesc}>{stop.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
       </div>
      </div>
    </section>
  );
}
