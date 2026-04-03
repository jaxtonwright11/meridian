'use client';

import { useState, FormEvent } from 'react';
import { AnimateIn } from './AnimateIn';
import styles from './InterestForm.module.css';

export function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xqegkaaa', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setError(true);
      setSending(false);
    }
  };

  return (
    <section id="apply" className={styles.section}>
      <div className="container">
        <AnimateIn>
          <h2 className={styles.headline}>Be In The Room, June 2026</h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          {submitted ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>&#10003;</span>
              <h3>You&apos;re In</h3>
              <p>We will be in touch as June 2026 approaches.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="interest-name">Full Name</label>
                <input
                  type="text"
                  id="interest-name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="interest-email">Email</label>
                <input
                  type="email"
                  id="interest-email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="interest-role">I am interested in</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="interest" value="attending" required />
                    <span>Attending as a student</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="interest" value="sponsoring" />
                    <span>Becoming a sponsor</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="interest" value="volunteering" />
                    <span>Volunteering</span>
                  </label>
                </div>
              </div>
              {error && (
                <p className={styles.error}>
                  Something went wrong. Please try again or email{' '}
                  <a href="mailto:jaxtonwright11@gmail.com">jaxtonwright11@gmail.com</a> directly.
                </p>
              )}
              <button type="submit" className="btn btn-gold" disabled={sending}>
                {sending ? 'Submitting...' : 'Express Interest'}
              </button>
            </form>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
