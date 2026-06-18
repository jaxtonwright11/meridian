'use client';

import { useState, FormEvent } from 'react';
import styles from './Hero.module.css';

export function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const data = new FormData(e.currentTarget);
    data.append('interest', 'waitlist');
    try {
      const res = await fetch('https://formspree.io/f/xqegkaaa', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSubmitted(true);
      else throw new Error('failed');
    } catch {
      setError(true);
      setSending(false);
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.sheet}>
          {/* Masthead */}
          <div className={styles.masthead}>
            <div className={styles.wordmark}>Meridian<span>.</span></div>
            <div className={styles.mastMeta}>
              The conference &middot; This November<br />
              A major Los Angeles university campus<br />
              11 AM&ndash;3 PM &middot; meridianventura.com
            </div>
          </div>

          {/* Lead */}
          <div className={styles.blurb}>
            <span className={`eyebrow ${styles.eyebrow}`}>What Meridian is</span>
            <h1 className={styles.headline}>
              A free conference that brings students face to face with founders,
              executives, and leaders.
            </h1>
            <p className={styles.lead}>
              Meridian is a free, student-run conference. It puts university students
              from across Los Angeles in direct conversation with founders, executives,
              and industry leaders. Rather than students lining up to introduce themselves,
              the leaders work the room and come to the students.
            </p>
            <p className={styles.leadSub}>
              It is built and run by a UC Berkeley undergraduate from Oxnard. The first
              event, in December 2025, brought about 150 students together with leaders
              from Netflix, OpenAI, and Chase Bank. This November it returns, built for 400.
            </p>

            {/* Waitlist capture */}
            <div id="waitlist" className={styles.waitlist}>
              <div className={styles.waitlistHead}>
                <span className={styles.waitlistTitle}>Join the waitlist</span>
                <span className={styles.waitlistNote}>Free for every student. This November.</span>
              </div>
              {submitted ? (
                <p className={styles.waitlistSuccess}>
                  You&apos;re on the list. We&apos;ll be in touch as the day approaches.
                </p>
              ) : (
                <form className={styles.waitlistForm} onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    aria-label="Email address"
                  />
                  <button type="submit" className="btn btn-ink" disabled={sending}>
                    {sending ? 'Sending…' : 'RSVP'}
                  </button>
                </form>
              )}
              {error && (
                <p className={styles.waitlistError}>
                  Something went wrong. Email{' '}
                  <a href="mailto:jaxtonwright11@berkeley.edu">jaxtonwright11@berkeley.edu</a> instead.
                </p>
              )}
            </div>
            <a href="#the-day" className={styles.seeDay}>What the day looks like &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
