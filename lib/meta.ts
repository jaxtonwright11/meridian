import type { Metadata } from 'next';

const BASE = 'https://meridianventura.com';
/** Link preview image: the full room on November 14 (1200 by 630). */
export const OG_IMAGE = { url: '/og-room.jpg', width: 1200, height: 630, alt: 'The full room at the first Meridian conference: students and executives at round tables' };

/**
 * Per-page metadata with its own share preview. Without this, pages inherit the
 * home page's Open Graph title and description. `title` takes the page name; the
 * " | Meridian" suffix is added. Pass `absolute` for a full title (the conference page).
 */
export function pageMeta(title: string, description: string, path: string, absolute?: string): Metadata {
  const full = absolute ?? `${title} | Meridian`;
  return {
    title: absolute ? { absolute } : title,
    description,
    alternates: { canonical: `${BASE}${path}` },
    openGraph: { title: full, description, url: `${BASE}${path}`, siteName: 'Meridian', type: 'website', images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title: full, description, images: [OG_IMAGE] },
  };
}
