'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { SITE_NAME } from '@/config';
import { PARTNER_MAILTO } from '@/data/recap';

// Header on every page: wordmark, five sections, Partner With Us.
// Desktop: the five sections sit in the header. Phones: the header keeps only the
// wordmark and Partner With Us, and the five sections show as a row of tabs under it.
const items = [
  { href: '/conference/', label: 'Conference', match: ['/conference'] },
  { href: '/students/', label: 'Students', match: ['/students'] },
  { href: '/speakers/', label: 'Executives', match: ['/speakers'] },
  { href: '/partners/', label: 'Partners', match: ['/partners'] },
  { href: '/about/', label: 'About', match: ['/about', '/team', '/contact'] },
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
    // Keep a sliver of the first tab visible so the row still reads as scrollable.
    const first = row.querySelector<HTMLElement>('.m-tab');
    const cap = first ? first.offsetLeft + first.offsetWidth - 28 : Infinity;
    row.scrollLeft = Math.min(cap, Math.max(0, tab.offsetLeft - (row.clientWidth - tab.offsetWidth) / 2));
  }, [path]);

  return (
    <>
      <a className="m-skip" href="#main">Skip to content</a>
      <header className="m-header">
        <div className="m-header-in">
          <a className="m-logo" href="/" aria-label={`${SITE_NAME} home`}>
            {SITE_NAME}<span>.</span>
          </a>
          <a className="btn btn-ink btn-register m-register" href={PARTNER_MAILTO}>
            Partner With Us
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
