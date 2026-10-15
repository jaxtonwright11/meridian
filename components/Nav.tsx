'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { REGISTRATION_FORM_URL, SITE_NAME } from '@/config';

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

  return (
    <>
      <header className="m-header">
        <div className="m-header-in">
          <a className="m-logo" href="/" aria-label={`${SITE_NAME} home`}>
            {SITE_NAME}<span>.</span>
          </a>
          <nav className={`m-nav ${open ? 'open' : ''}`} aria-label="Main">
            {items.map((i) => {
              const current = i.match.some((m) => path === m || path.startsWith(m + '/'));
              return (
                <a key={i.href} className="m-navlink" href={i.href} aria-current={current ? 'page' : undefined}>
                  {i.label}
                </a>
              );
            })}
          </nav>
          <a className="btn btn-ink m-register" href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
            Register
          </a>
          <button className="m-menu" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
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
