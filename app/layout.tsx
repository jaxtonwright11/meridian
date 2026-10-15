import type { Metadata } from 'next';
import { Fraunces, Hanken_Grotesk, Spline_Sans_Mono } from 'next/font/google';
import './globals.css';
import './site.css';
import { SITE_NAME } from '@/config';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
});

const splineMono = Spline_Sans_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

// One canonical description everywhere (meta, og, twitter).
const DESCRIPTION =
  'Meridian brings students and executives together in person, by field. It starts with a conference at UCLA on Saturday, November 14, 2026, free for every student, then scales into 25 in-person meetups across six fields.';

const HOME_TITLE = 'Meridian | Students and executives, together in person, by field';

// TODO(jax): the share image may still say "Meridian Conference". Not changed.
const OG_IMAGE = {
  url: '/og-image-v2.jpg',
  width: 1200,
  height: 630,
  alt: 'Meridian',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://meridianventura.com'),
  title: { default: HOME_TITLE, template: '%s | Meridian' },
  description: DESCRIPTION,
  keywords: ['Meridian', 'students', 'executives', 'Los Angeles', 'meetups by field', 'UCLA'],
  authors: [{ name: 'Jaxton Wright' }],
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: HOME_TITLE,
    description: DESCRIPTION,
    url: 'https://meridianventura.com',
    siteName: SITE_NAME,
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: 'https://meridianventura.com',
  description: DESCRIPTION,
  founder: { '@type': 'Person', name: 'Jaxton Wright' },
  sameAs: ['https://www.instagram.com/meridianconference/'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${splineMono.variable}`}
    >
      <head>
        {/* POSTHOG SNIPPET - JAX TO ADD KEY HERE */}
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
        {children}
      </body>
    </html>
  );
}
