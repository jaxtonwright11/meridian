'use client';

import { useEffect } from 'react';

// Sections that used to live on the home page. Previously shared deep links
// (for example meridianventura.com/#founder) must still resolve.
const MOVED: Record<string, string> = {
  recap: '/past/',
  mission: '/about/',
  founder: '/about/#founder',
  beyond: '/past/',
  'the-day': '/conference/#the-day',
  faq: '/faq/',
  'getting-there': '/conference/#getting-there',
  partners: '/partners/',
  speakers: '/leaders/',
};

export function MovedAnchors() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && MOVED[hash]) window.location.replace(MOVED[hash]);
  }, []);
  return null;
}
