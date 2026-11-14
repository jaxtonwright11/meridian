import { CALENDLY_URL, CONTACT_EMAIL_PUBLIC } from '@/config';

/** The team's inbox and a call booking link. Writes to the team, not to one person. */
export function TeamContact({ primary = false }: { primary?: boolean }) {
  return (
    <div className="m-actions" style={{ marginTop: 0 }}>
      {primary && <a className="btn btn-ink" href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>Write to us</a>}
      <a className="m-link" href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>{CONTACT_EMAIL_PUBLIC}</a>
      <a className="m-link" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a call</a>
    </div>
  );
}
