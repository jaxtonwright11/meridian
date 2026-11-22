'use client';

import { useState, FormEvent } from 'react';
import { REGISTER_ENDPOINT } from '@/config';
import { EMAIL } from '@/data/recap';

/** Contact form (Formspree): name, email, company or school (optional), message. No category to pick. */
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
    return <p className="v-lead" role="status">Thank you. We will write back.</p>;
  }

  return (
    <form className="v-form" onSubmit={onSubmit}>
      <label htmlFor="f-name">Name</label>
      <input id="f-name" name="name" required autoComplete="name" />
      <label htmlFor="f-email">Email</label>
      <input id="f-email" name="email" type="email" required autoComplete="email" />
      <label htmlFor="f-org">Company or school (optional)</label>
      <input id="f-org" name="organization" autoComplete="organization" />
      <label htmlFor="f-msg">Message</label>
      <textarea id="f-msg" name="message" required rows={5} />
      {state === 'error' && (
        <p role="alert" className="v-form-error">
          That did not send. Please write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      )}
      <button className="v-btn" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending' : 'Send'}
      </button>
    </form>
  );
}
