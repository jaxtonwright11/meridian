import type { Metadata } from 'next';
import { Fraunces, Hanken_Grotesk, Spline_Sans_Mono } from 'next/font/google';
import './globals.css';

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

// One canonical description everywhere (meta, og, twitter): free, seat-capped,
// UCLA, and the inverted format, in one breath.
const DESCRIPTION =
  'A free conference on Saturday, November 14, 2026 at UCLA. 400 university students meet founders, executives, and senior leaders who work the room and come to them. Registration open.';

// Cache-busted OG image (v2, the wordmark) so existing shares refresh.
const OG_IMAGE = {
  url: '/og-image-v2.jpg',
  width: 1200,
  height: 630,
  alt: 'Meridian Conference, Saturday, November 14, 2026 at UCLA',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://meridianventura.com'),
  title: 'Meridian Conference',
  description: DESCRIPTION,
  keywords: ['Meridian Conference', 'student access', 'UCLA', 'Los Angeles', 'founders', 'executives', 'conference 2026'],
  authors: [{ name: 'Jaxton Wright' }],
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Meridian Conference',
    description: DESCRIPTION,
    url: 'https://meridianventura.com',
    siteName: 'Meridian Conference',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meridian Conference',
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
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
        {children}
      </body>
    </html>
  );
}
