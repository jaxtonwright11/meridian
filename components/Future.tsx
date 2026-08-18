'use client';

import { AnimateIn } from './AnimateIn';
import styles from './Future.module.css';

const stops = [
  {
    time: '10:30',
    title: 'Arrive',
    desc: 'Doors are open. Come in, get your name tag, and settle in.',
    soft: true,
  },
  {
    time: '10:45',
    title: 'Check-in, portraits, ask cards',
    desc: 'You sit for a real portrait you keep. Then you write your ask card: what you are looking for and who you want to meet. You wear it all day, so a leader can walk up already knowing why.',
  },
  {
    time: '11:15',
    title: 'The open floor',
    desc: 'Leaders and students mix in one room. Partner organizations run tables you can walk up to, a hands-on aerospace lab runs all day, and hosts make introductions so nobody stands alone.',
  },
  {
    time: 'All day',
    title: 'Student demos',
    desc: 'Already building something? A company, a project, a research idea? You get a table to show it. Sign up when you register.',
  },
  {
    time: 'All day',
    title: 'The Favor Wall',
    desc: 'When a leader offers something, it goes up on the wall as it happens. By the end of the day you can see everything that was offered, in front of everyone.',
    favor: true,
  },
  {
    time: '12:00',
    title: 'Keynote conversations',
    desc: 'A few leaders talk about their path, then take questions. Conversations, not speeches.',
  },
  {
    time: '12:45',
    title: 'Direct access',
    desc: 'The center of the day. Leaders sit with small groups and answer the asks on your cards: an introduction, a referral, a direct line in.',
  },
  {
    time: '2:15',
    title: 'The close',
    desc: 'Everyone joins the Meridian network, so you have a place to ask for help after the day ends.',
  },
  {
    time: 'After 3:00',
    title: 'In-N-Out, on us',
    desc: 'Most conferences end over food. Ours does too. Anyone who wants to come is invited.',
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
