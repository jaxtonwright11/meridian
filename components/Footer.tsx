import { SITE_NAME } from '@/config';
import { TAGLINE, EMAIL, INSTAGRAM, LINKEDIN } from '@/data/recap';

// Short on purpose: wordmark and tagline, one wrapping row of links, contact on the bottom line.
// Partners are on the home page, so the footer does not list them.
const links = [
  ['About', '/'], ['November 14', '/conference/'], ['Demo Day', '/demo-day/'], ['Team', '/team/'],
  ['Contact', '/contact/'], ['Before Meridian', '/past/'], ['Terms', '/terms/'], ['Privacy', '/privacy/'],
  ['Accessibility', '/accessibility/'],
];

export function Footer() {
  return (
    <footer className="m-footer v-foot">
      <div className="m-wrap">
        <div className="v-foot-top">
          <div>
            <a className="m-logo" href="/">{SITE_NAME}<span>.</span></a>
            <p className="v-foot-tag">{TAGLINE}</p>
          </div>
          <nav className="v-foot-links" aria-label="Footer">
            {links.map(([l, h]) => (<a key={h} href={h}>{l}</a>))}
          </nav>
        </div>
        <div className="m-fbottom v-foot-bottom">
          <span className="v-foot-contact">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={LINKEDIN.url} target="_blank" rel="noopener noreferrer">LinkedIn (Jaxton Wright)</a>
          </span>
          <span>&copy; {new Date().getFullYear()} {SITE_NAME}</span>
        </div>
      </div>
    </footer>
  );
}
