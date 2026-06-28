'use client';

import { useState, useId, FormEvent } from 'react';
import { REGISTER_ENDPOINT } from '@/config';
import styles from './RegisterForm.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'sending' | 'success' | 'error';

interface RegisterFormProps {
  /** Where this submission came from, recorded in the sheet (e.g. 'hero', 'popup'). */
  source: string;
  buttonLabel?: string;
  placeholder?: string;
  className?: string;
  onSuccess?: () => void;
}

export function RegisterForm({
  source,
  buttonLabel = 'Reserve my spot',
  placeholder = 'your@email.com',
  className = '',
  onSuccess,
}: RegisterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const inputId = useId();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending' || status === 'success') return; // prevent double-submit

    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setMessage('');

    const payload = JSON.stringify({
      email: value,
      ts: new Date().toISOString(),
      source,
    });

    try {
      if (REGISTER_ENDPOINT) {
        // Google Apps Script Web Apps don't return CORS headers, so we POST with
        // mode 'no-cors'. The response is opaque (unreadable), so a completed
        // request is treated as success — confirm a real submission lands a row
        // in the sheet. Content-Type text/plain keeps it a "simple" request (no
        // preflight); Apps Script still reads e.postData.contents as JSON.
        await fetch(REGISTER_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: payload,
        });
      } else {
        // Endpoint not configured yet (see config.ts). Show the success state so
        // the flow can be demoed; no row is written until the URL is filled in.
        // eslint-disable-next-line no-console
        console.warn('[Meridian] REGISTER_ENDPOINT is empty — set it in config.ts to record signups.');
      }
      setStatus('success');
      onSuccess?.();
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again, or email jaxtonwright11@berkeley.edu.');
    }
  };

  if (status === 'success') {
    return (
      <p className={`${styles.success} ${className}`} role="status">
        You&apos;re in. Watch your inbox — we&apos;ll be in touch as the day approaches.
      </p>
    );
  }

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit} noValidate>
      <label htmlFor={inputId} className={styles.srOnly}>Email address</label>
      <input
        id={inputId}
        type="email"
        name="email"
        inputMode="email"
        autoComplete="email"
        required
        placeholder={placeholder}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === 'error') {
            setStatus('idle');
            setMessage('');
          }
        }}
        aria-invalid={status === 'error'}
        className={styles.input}
      />
      <button type="submit" className={styles.button} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : buttonLabel}
      </button>
      {status === 'error' && message && (
        <p className={styles.error} role="alert">{message}</p>
      )}
    </form>
  );
}
