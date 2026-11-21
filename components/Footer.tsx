import { SITE_NAME } from '@/config';
import { COMPANY_LINE, EMAIL, INSTAGRAM, LINKEDIN } from '@/data/recap';

const cols = [
  { h: 'Meridian', links: [['Conference', '/conference/'], ['Students', '/students/'], ['Executives', '/speakers/'], ['Partners', '/partners/']] },
  { h: 'Company', links: [['About', '/about/'], ['Team', '/team/'], ['Contact', '/contact/']] },
  { h: 'Legal', links: [['Terms', '/terms/'], ['Privacy', '/privacy/'], ['Accessibility', '/accessibility/']] },
];

export function Footer() {
  return (
    <footer className="m-footer">
      <div className="m-wrap">
        <div className="m-fgrid">
          <div>
            <a className="m-logo" href="/">{SITE_NAME}<span>.</span></a>
            <p style={{ marginTop: 12, color: '#C9B79C', fontSize: 15 }}>{COMPANY_LINE}</p>
            <p style={{ marginTop: 14, fontSize: 15 }}>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p style={{ marginTop: 6, fontSize: 15 }}>
              <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer">Instagram {INSTAGRAM.handle}</a>
            </p>
            <p style={{ marginTop: 6, fontSize: 15 }}>
              <a href={LINKEDIN.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h3>{c.h}</h3>
              <ul>
                {c.links.map(([l, h]) => (<li key={h}><a href={h}>{l}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="m-fbottom">
          <span>&copy; {new Date().getFullYear()} {SITE_NAME}</span>
        </div>
      </div>
    </footer>
  );
}
