import { CALENDLY_URL, CONTACT_EMAIL_PUBLIC } from '@/config';

/** A person to write to, not an anonymous inbox. */
export function PersonContact() {
  return (
    <div className="m-person-block">
      <img src="/opt/unnamed__3_.webp" alt="Jaxton Wright" width={280} height={280} loading="lazy" />
      <div>
        <h3 style={{ fontSize: 24, marginBottom: 6 }}>Write to Jaxton Wright, Founder</h3>
        <p><a className="m-link" href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>{CONTACT_EMAIL_PUBLIC}</a></p>
        <p><a className="m-link" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">calendly.com/jaxtonwright</a></p>
        <p style={{ marginTop: 8 }}>We reply personally.</p>
      </div>
    </div>
  );
}
