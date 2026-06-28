'use client';

import { AnimateIn } from './AnimateIn';
import styles from './Future.module.css';

const stops = [
  {
    time: 'Before 11',
    title: 'Doors open',
    desc: 'Students arrive, get their name, and find their footing before the floor fills.',
    soft: true,
  },
  {
    time: '10:45',
    title: 'Check-in, portraits, ask cards',
    desc: 'Every student sits for a real portrait they keep. Then they fill an ask card: what they are looking for, and who they want to meet. The card stays on them all day, so a leader can walk up already knowing why.',
  },
  {
    time: '11:15',
    title: 'The open floor',
    desc: 'No stage to wait behind. The leaders move through the room and come to the students. Partner organizations run stations you can walk up to, and hosts keep the floor moving so no one is left standing alone.',
  },
  {
    time: '12:00',
    title: 'Keynote conversations',
    desc: 'A few leaders, in conversation instead of scripted speeches. Each one says out loud the specific favor they are putting on the table that day.',
  },
  {
    time: '12:45',
    title: 'Direct access and the 30-second favor',
    desc: 'The center of the day. Leaders move between small groups and act on the ask cards on the spot: an introduction, a referral, a direct line in. The whole room is built to make a small favor easy to give and impossible to forget.',
    favor: true,
  },
  {
    time: '2:15',
    title: 'The close',
    desc: 'Before they leave, every student is entered into the Meridian network with a standing way to ask for help, and will hear from Meridian within two weeks. The follow-up is our job, not theirs.',
  },
  {
    time: 'After 3:00',
    title: 'In-N-Out, on us',
    desc: 'Most conferences end over food. Ours does too. When the day wraps, anyone who wants to is invited to come get In-N-Out with us.',
    soft: true,
  },
];

const beyond = [
  {
    title: 'A standing network',
    items: [
      'Students join an ongoing network, not a one-off event.',
      'Every attendee is a member by default, with a closer community for those who want to stay active.',
      'For leaders and partners, the connection stays part of the network after the event.',
    ],
  },
  {
    title: 'Content, start to finish',
    items: [
      'Before: the build and the lead-up are documented.',
      'During: a portrait for every student, candid interviews, and leaders on camera, with every favor posted to the Favor Wall.',
      'After: a recap film, and each student receives their own media to keep and share.',
    ],
  },
  {
    title: 'The follow-through',
    items: [
      'Every student is put forward for a real connection and hears from Meridian within two weeks.',
      'The work of delivering on it sits with Meridian and our partners.',
      'What comes back is concrete: an introduction, a referral, or a direct line to someone who can help.',
    ],
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

        <AnimateIn delay={0.15}>
          <p className={styles.intro}>
            Rather than students lining up to introduce themselves, the leaders work
            the room and come to the students. Founders and executives attend to meet
            students directly, and each one commits to offering something concrete: an
            introduction, a referral, a direct line in.
          </p>
        </AnimateIn>

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

        <AnimateIn delay={0.1}>
          <div className={`addon ${styles.addon}`}>
            <span className="k">The Favor Wall</span>
            <p>
              One wall in the room fills through the day. Every favor a leader gives gets
              written up and posted as it happens, so the access is not a promise. It is
              on the wall, in front of everyone, by the time the day ends.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className={`addon ${styles.addon}`}>
            <span className="k">On the floor</span>
            <p>
              Through the General Atomics Sciences Education Foundation, students get a
              hands-on aerospace engineering lab. Real building, not a talk.
            </p>
          </div>
        </AnimateIn>
       </div>

        {/* Beyond the day */}
        <div id="beyond" className={`chunk ${styles.beyond}`}>
          <AnimateIn>
            <p className="eyebrow">Beyond the day</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className={styles.headline}>It does not end at 3 PM</h2>
          </AnimateIn>

          <div className={styles.bgrid}>
            {beyond.map((group) => (
              <AnimateIn key={group.title} delay={0.1}>
                <div className={styles.grp}>
                  <h4 className={styles.grpTitle}>{group.title}</h4>
                  <ul className={styles.grpList}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.2}>
            <div className={styles.ctaWrap}>
              <a href="#register" className="btn btn-ink">Reserve your spot</a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
