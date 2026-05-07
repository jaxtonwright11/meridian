import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meridianventura.com'),
  title: 'Meridian Conference | Not a lecture. A meeting.',
  description: 'A free youth leadership conference connecting students from Los Angeles and Ventura Counties to the rooms, people, and opportunities they deserve. Late November 2026.',
  keywords: ['Meridian Conference', 'youth leadership', 'Los Angeles County, Ventura County, Southern California', 'student opportunity', 'conference 2026'],
  authors: [{ name: 'Jaxton Wright' }],
  openGraph: {
    title: 'Meridian Conference | Not a lecture. A meeting.',
    description: 'A free youth leadership conference serving Los Angeles and Ventura Counties. Direct access to executives, founders, and leaders. November 2026.',
    url: 'https://meridianventura.com',
    siteName: 'Meridian Conference',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Meridian Conference. Access Changes Everything' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meridian Conference | Not a lecture. A meeting.',
    description: 'A free youth leadership conference serving Los Angeles and Ventura Counties. Direct access to executives, founders, and leaders. November 2026.',
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
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* POSTHOG SNIPPET - JAX TO ADD KEY HERE */}
      </head>
      <body className="grain">
        {children}
      </body>
    </html>
  );
}
