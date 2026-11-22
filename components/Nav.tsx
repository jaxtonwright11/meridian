'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { SITE_NAME } from '@/config';
import { JOIN_TEAM_MAILTO } from '@/data/recap';

// Header on every page: wordmark, four sections, Contact us and Join the team.
// Desktop: the sections sit in the header. Phones: the header keeps the wordmark and
// Join the team, and the sections show as a row of tabs under it.
const items = [
  { href: '/', label: 'About', match: ['/'] },
  { href: '/conference/', label: 'November 14', match: ['/conference'] },
  { href: '/demo-day/', label: 'Demo Day', match: ['/demo-day'] },
  { href: '/team/', label: 'Team', match: ['/team'] },
];

export function Nav({ trail }: { trail?: { label: string; href?: string }[]; home?: boolean }) {
  const path = (usePathname() || '/').replace(/\/$/, '') || '/';
  const tabsRef = useRef<HTMLElement>(null);
  // '/' matches the home page only; Contact and Before Meridian show no current tab.
  const isCurrent = (match: string[]) => match.some((m) => path === m || (m !== '/' && path.startsWith(m + '/')));

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
          <span className="v-head-actions">
            <a className="v-btn v-btn-head" href="/contact/">Contact us</a>
            <a className="v-btn v-btn-head v-btn-line" href={JOIN_TEAM_MAILTO}>Join the team</a>
          </span>
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
