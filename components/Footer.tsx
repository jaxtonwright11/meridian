import { PRESS_URL } from '@/data/press';
import { CONTACT_EMAIL_PUBLIC, INSTAGRAM_URL, SITE_NAME, SITE_UPDATED } from '@/config';

const cols = [
  { h: 'Meridian', links: [['Conference', '/conference/'], ['Students', '/students/'], ['Executives', '/speakers/'], ['Partners', '/partners/'], ['About', '/about/']] },
  { h: 'Conference', links: [['Leaders', '/leaders/'], ['Demo day', '/demo-day/'], ['FAQ', '/faq/']] },
  { h: 'Company', links: [['About', '/about/'], ['Team', '/team/'], ['Past events', '/past/'], ['Press', PRESS_URL], ['Contact', '/contact/']] },
  { h: 'Legal', links: [['Terms', '/terms/'], ['Privacy', '/privacy/'], ['Accessibility', '/accessibility/']] },
];

export function Footer() {
  return (
    <footer className="m-footer">
      <div className="m-wrap">
        <div className="m-fgrid">
          <div>
            <a className="m-logo" href="/">{SITE_NAME}<span>.</span></a>
            <p style={{ marginTop: 12, color: '#C9B79C', fontSize: 15 }}>
              Students and executives, together in person, by field.
            </p>
            <p style={{ marginTop: 14, fontSize: 15 }}>
              <a href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>{CONTACT_EMAIL_PUBLIC}</a>
            </p>
            {INSTAGRAM_URL && (
              <p style={{ marginTop: 6, fontSize: 15 }}>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@meridianconference</a>
              </p>
            )}
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h3>{c.h}</h3>
              <ul>
                {c.links.map(([l, h]) => (<li key={h}><a href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>{l}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="m-fbottom">
          <span>&copy; {new Date().getFullYear()} {SITE_NAME}</span>
          <span>Last updated {SITE_UPDATED}</span>
        </div>
      </div>
    </footer>
  );
}
