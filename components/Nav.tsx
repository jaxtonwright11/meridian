'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { REGISTRATION_FORM_URL, SITE_NAME, EVENT_OVER, INSTAGRAM_URL } from '@/config';

// Header on every page: wordmark, five sections, Register.
// Desktop: the five sections sit in the header. Phones: the header keeps only the
// wordmark and Register, and the five sections show as a row of tabs under it.
const items = [
  { href: '/conference/', label: 'Conference', match: ['/conference', '/leaders', '/demo-day'] },
  { href: '/students/', label: 'Students', match: ['/students'] },
  { href: '/speakers/', label: 'Executives', match: ['/speakers'] },
  { href: '/partners/', label: 'Partners', match: ['/partners'] },
  { href: '/about/', label: 'About', match: ['/about', '/team', '/past', '/press'] },
];

export function Nav({ trail }: { trail?: { label: string; href?: string }[]; home?: boolean }) {
  const path = (usePathname() || '/').replace(/\/$/, '') || '/';
  const tabsRef = useRef<HTMLElement>(null);
  const isCurrent = (match: string[]) => match.some((m) => path === m || path.startsWith(m + '/'));

  // Center the current section's tab in the row. Sets the row's own scroll, never the page's.
  useEffect(() => {
    const row = tabsRef.current;
    const tab = row?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!row || !tab) return;
    row.scrollLeft = Math.max(0, tab.offsetLeft - (row.clientWidth - tab.offsetWidth) / 2);
  }, [path]);

  return (
    <>
      <a className="m-skip" href="#main">Skip to content</a>
      <header className="m-header">
        <div className="m-header-in">
          <a className="m-logo" href="/" aria-label={`${SITE_NAME} home`}>
            {SITE_NAME}<span>.</span>
          </a>
          <a className="btn btn-ink btn-register m-register" href={EVENT_OVER && INSTAGRAM_URL ? INSTAGRAM_URL : REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
            {EVENT_OVER && INSTAGRAM_URL ? 'Instagram' : 'Register'}
          </a>
          <nav className="m-nav" aria-label="Main">
            {items.map((i) => (
              <a key={i.href} className="m-navlink" href={i.href} aria-current={isCurrent(i.match) ? 'page' : undefined}>
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <nav ref={tabsRef} className="m-tabs" aria-label="Main">
        <div className="m-tabs-in">
          {items.map((i) => (
            <a key={i.href} className="m-tab" href={i.href} aria-current={isCurrent(i.match) ? 'page' : undefined}>
              {i.label}
            </a>
          ))}
        </div>
      </nav>
      {trail && (
        <nav className="m-trail" aria-label="Breadcrumb">
          {trail.map((t, i) => (
            <span key={t.label}>
              {i > 0 && ' / '}
              {t.href ? <a href={t.href}>{t.label}</a> : t.label}
            </span>
          ))}
        </nav>
      )}
    </>
  );
}
