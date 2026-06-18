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
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meridianventura.com'),
  title: 'Meridian Conference',
  description:
    'A free, student-run conference that brings university students from across Los Angeles face to face with founders, executives, and industry leaders. This November.',
  keywords: ['Meridian Conference', 'student access', 'Los Angeles', 'founders', 'executives', 'conference 2026'],
  authors: [{ name: 'Jaxton Wright' }],
  openGraph: {
    title: 'Meridian Conference',
    description:
      'A free conference that brings students face to face with founders, executives, and leaders. Rather than students lining up to introduce themselves, the leaders work the room and come to the students.',
    url: 'https://meridianventura.com',
    siteName: 'Meridian Conference',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Meridian Conference' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meridian Conference',
    description:
      'A free conference that brings students face to face with founders, executives, and leaders. This November.',
    images: ['/og-image.jpg'],
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
