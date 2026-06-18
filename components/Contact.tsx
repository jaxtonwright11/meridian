'use client';

import { useState, FormEvent } from 'react';
import { AnimateIn } from './AnimateIn';
import styles from './Contact.module.css';

export function Contact() {
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
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.layout}>
          <AnimateIn direction="left">
            <div className={styles.info}>
              <p className="eyebrow">Contact</p>
              <h2>Reach out directly</h2>
              <p className={styles.desc}>
                For leaders who want to be in the room, partners, anyone who wants to
                help build it, or a student with a question. This is where it starts.
              </p>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Email</span>
                  <a href="mailto:jaxtonwright11@berkeley.edu">
                    jaxtonwright11@berkeley.edu
                  </a>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Schedule a Call</span>
                  <a
                    href="https://calendly.com/jaxtonwright"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    calendly.com/jaxtonwright
                  </a>
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.15}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>&#10003;</span>
                <h3>Message Sent</h3>
                <p>We&apos;ll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Whatever you have in mind."
                  />
                </div>
                {error && (
                  <p className={styles.error}>
                    Something went wrong. Please email{' '}
                    <a href="mailto:jaxtonwright11@berkeley.edu">jaxtonwright11@berkeley.edu</a> directly.
                  </p>
                )}
                <button type="submit" className="btn btn-gold" disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
