'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { REGISTRATION_FORM_URL, SITE_NAME, EVENT_OVER, INSTAGRAM_URL } from '@/config';

// Header on every page: wordmark, five sections, Register.
const items = [
  { href: '/conference/', label: 'Conference', match: ['/conference', '/leaders', '/demo-day'] },
  { href: '/students/', label: 'Students', match: ['/students'] },
  { href: '/speakers/', label: 'Executives', match: ['/speakers'] },
  { href: '/partners/', label: 'Partners', match: ['/partners'] },
  { href: '/about/', label: 'About', match: ['/about', '/team', '/past', '/press'] },
];

export function Nav({ trail }: { trail?: { label: string; href?: string }[]; home?: boolean }) {
  const path = (usePathname() || '/').replace(/\/$/, '') || '/';
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Opened menu: move focus to its first link; Escape closes it and returns focus to the button.
  useEffect(() => {
    if (!open) return;
    navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <a className="m-skip" href="#main">Skip to content</a>
      <header className="m-header">
        <div className="m-header-in">
          <a className="m-logo" href="/" aria-label={`${SITE_NAME} home`}>
            {SITE_NAME}<span>.</span>
          </a>
          <a className="btn btn-ink btn-register m-register" href={EVENT_OVER && INSTAGRAM_URL ? INSTAGRAM_URL : REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
            {EVENT_OVER ? 'Instagram' : 'Register'}
          </a>
          <nav ref={navRef} className={`m-nav ${open ? 'open' : ''}`} aria-label="Main">
            {items.map((i) => {
              const current = i.match.some((m) => path === m || path.startsWith(m + '/'));
              return (
                <a key={i.href} className="m-navlink" href={i.href} aria-current={current ? 'page' : undefined}>
                  {i.label}
                </a>
              );
            })}
          </nav>
          <button ref={btnRef} className="m-menu" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>
      {trail && (
        <div className="m-trail" aria-label="Breadcrumb">
          {trail.map((t, i) => (
            <span key={t.label}>
              {i > 0 && ' / '}
              {t.href ? <a href={t.href}>{t.label}</a> : t.label}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
