import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://meridianventura.com';
// Every public page. /dev/palettes is deliberately left out.
const PATHS = [
  '/', '/conference/', '/students/', '/speakers/', '/partners/', '/partners/directory/', '/about/', '/team/', '/past/',
  '/leaders/', '/demo-day/', '/faq/', '/contact/', '/terms/', '/privacy/', '/accessibility/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${BASE}${p}`, lastModified: new Date('2026-10-16') }));
}
