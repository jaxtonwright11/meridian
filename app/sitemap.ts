import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://meridianventura.com';
// Every public page. /dev/palettes is deliberately left out.
const PATHS = [
  '/', '/conference/', '/students/', '/speakers/', '/partners/', '/about/', '/team/',
  '/contact/', '/terms/', '/privacy/', '/accessibility/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${BASE}${p}`, lastModified: new Date('2026-11-21') }));
}
