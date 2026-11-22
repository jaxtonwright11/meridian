'use client';

import { useEffect, useState, FormEvent } from 'react';
import { REGISTER_ENDPOINT } from '@/config';
import { EMAIL } from '@/data/recap';

/** Who is writing. Links can preselect one with ?as=company|executive|student|team. */
const WRITING_AS = [
  { id: 'company', label: 'Company or organization' },
  { id: 'executive', label: 'Executive' },
  { id: 'student', label: 'Student' },
  { id: 'team', label: 'Joining the team' },
];

/** Contact form (Formspree). Who is writing, name, email and a message; company or school is optional. */
export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [as, setAs] = useState('');

  // Static export: read the query string in the browser, after the first render.
  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get('as');
    const match = WRITING_AS.find((o) => o.id === v);
    if (match) setAs(match.label);
  }, []);

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
      <label htmlFor="f-as">I&rsquo;m writing as</label>
      <select id="f-as" name="writing_as" required value={as} onChange={(e) => setAs(e.target.value)}>
        <option value="" disabled>Choose one</option>
        {WRITING_AS.map((o) => (<option key={o.id} value={o.label}>{o.label}</option>))}
      </select>
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
