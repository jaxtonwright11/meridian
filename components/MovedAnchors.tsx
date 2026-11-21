'use client';

import { useEffect } from 'react';

// Sections that used to live on the home page. Previously shared deep links
// (for example meridianventura.com/#founder) must still resolve.
const MOVED: Record<string, string> = {
  mission: '/about/',
  beyond: '/conference/',
  'the-day': '/conference/',
  faq: '/contact/',
  'getting-there': '/conference/',
  speakers: '/#executives',
};

export function MovedAnchors() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && MOVED[hash]) window.location.replace(MOVED[hash]);
  }, []);
  return null;
}
