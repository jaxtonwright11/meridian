'use client';

import { useState, FormEvent } from 'react';
import { REGISTER_ENDPOINT, CONTACT_EMAIL_PUBLIC } from '@/config';

const field = { display: 'block', width: '100%', padding: '12px 14px', border: '1px solid var(--line-strong)', background: 'var(--surface)', font: 'inherit', color: 'var(--ink)', borderRadius: 2 } as const;
const label = { display: 'block', fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', margin: '18px 0 6px', color: 'var(--ink)' } as const;

/**
 * Partner and executive inquiry form (Formspree). Required: name,
 * organization, email, and what they would like to do with Meridian.
 */
export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch(REGISTER_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      setState(res.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') {
    return <p className="m-lead" role="status">Thank you. Jaxton Wright will write to you directly.</p>;
  }

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 620 }}>
      <label style={label} htmlFor="f-name">Name</label>
      <input style={field} id="f-name" name="name" required autoComplete="name" />
      <label style={label} htmlFor="f-org">Organization</label>
      <input style={field} id="f-org" name="organization" required autoComplete="organization" />
      <label style={label} htmlFor="f-email">Email</label>
      <input style={field} id="f-email" name="email" type="email" required autoComplete="email" />
      <label style={label} htmlFor="f-role">Role (optional)</label>
      <input style={field} id="f-role" name="role" autoComplete="organization-title" />
      <label style={label} htmlFor="f-type">Which describes you (optional)</label>
      <select style={field} id="f-type" name="describes">
        <option value="">Choose one</option>
        <option>Company or brand</option>
        <option>Campus office or department</option>
        <option>Nonprofit or community organization</option>
        <option>University</option>
        <option>Other</option>
      </select>
      <label style={label} htmlFor="f-msg">What would you like to do with Meridian?</label>
      <textarea style={{ ...field, minHeight: 120 }} id="f-msg" name="message" required />
      <p className="m-small" style={{ marginTop: 14 }}>We read every message and reply personally.</p>
      {state === 'error' && (
        <p role="alert" style={{ marginTop: 14 }}>
          Something went wrong. Please write to <a className="m-link" href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>{CONTACT_EMAIL_PUBLIC}</a> directly.
        </p>
      )}
      <div style={{ marginTop: 22 }}>
        <button className="btn btn-ink" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending' : 'Send'}
        </button>
      </div>
    </form>
  );
}
