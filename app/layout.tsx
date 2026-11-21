import type { Metadata } from 'next';
import { Fraunces, Hanken_Grotesk, Spline_Sans_Mono } from 'next/font/google';
import './globals.css';
import './site.css';
import { SITE_NAME } from '@/config';
import { COMPANY_LINE, PROOF_LINE, INSTAGRAM, LINKEDIN } from '@/data/recap';
import { OG_IMAGE } from '@/lib/meta';
import { RevealOnScroll } from '@/components/RevealOnScroll';

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
const DESCRIPTION = `${COMPANY_LINE} ${PROOF_LINE}`;

const HOME_TITLE = 'Meridian | Connecting Executives With Student Talent';
const SHARE_TITLE = 'Meridian: Connecting Executives With Student Talent';


export const metadata: Metadata = {
  metadataBase: new URL('https://meridianventura.com'),
  title: { default: HOME_TITLE, template: '%s | Meridian' },
  description: DESCRIPTION,
  keywords: ['Meridian', 'executives', 'talent', 'students', 'UCLA', 'USC'],
  authors: [{ name: 'Jaxton Wright' }],
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: SHARE_TITLE,
    description: DESCRIPTION,
    url: 'https://meridianventura.com',
    siteName: SITE_NAME,
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SHARE_TITLE,
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
  sameAs: [INSTAGRAM.url, LINKEDIN.url],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${splineMono.variable}`}
    >
      <head>
        {/* POSTHOG SNIPPET - JAX TO ADD KEY HERE */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
