import { SITE_NAME } from '@/config';
import { TAGLINE, EMAIL, INSTAGRAM, LINKEDIN, PARTNERS_SHORT } from '@/data/recap';

const cols = [
  { h: 'Meridian', links: [['About', '/'], ['November 14', '/conference/'], ['Demo Day', '/demo-day/'], ['Team', '/team/']] },
  { h: 'More', links: [['Before Meridian', '/past/'], ['Contact', '/contact/'], ['Terms', '/terms/'], ['Privacy', '/privacy/'], ['Accessibility', '/accessibility/']] },
];

export function Footer() {
  return (
    <footer className="m-footer">
      <div className="m-wrap">
        <div className="m-fgrid v-fgrid">
          <div>
            <a className="m-logo" href="/">{SITE_NAME}<span>.</span></a>
            <p className="v-foot-tag">{TAGLINE}</p>
            <p className="v-foot-contact">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
              <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer">Instagram {INSTAGRAM.handle}</a><br />
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
          <div>
            <h3>Partners</h3>
            <ul className="v-foot-names">
              {PARTNERS_SHORT.map((p) => (<li key={p}>{p}</li>))}
              <li><a href="/#partners">All partners</a></li>
            </ul>
          </div>
        </div>
        <div className="m-fbottom">
          <span>&copy; {new Date().getFullYear()} {SITE_NAME}</span>
        </div>
      </div>
    </footer>
  );
}
