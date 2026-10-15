import { CALENDLY_URL, CONTACT_EMAIL_PUBLIC } from '@/config';

/** A person to write to, not an anonymous inbox (brief v3 19.3). */
export function PersonContact({ primary = false }: { primary?: boolean }) {
  return (
    <div className="m-person-block">
      <img src="/opt/unnamed__3_.webp" alt="Jaxton Wright" width={280} height={280} loading="lazy" />
      <div>
        <h3 style={{ fontSize: 24, marginBottom: 6 }}>Write to Jaxton Wright, Founder</h3>
        <p>We reply personally.</p>
        <div className="m-actions" style={{ marginTop: 14 }}>
          {primary ? (
            <a className="btn btn-ink" href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>Write to us</a>
          ) : (
            <a className="m-link" href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>{CONTACT_EMAIL_PUBLIC}</a>
          )}
          <a className="m-link" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a call</a>
        </div>
      </div>
    </div>
  );
}
