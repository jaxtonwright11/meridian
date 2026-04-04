import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://meridianventura.com'),
  title: 'Meridian Conference | The Room Changes Everything',
  description: 'Youth leadership conference connecting students from Ventura County to the rooms, people, and opportunities they didn\'t know they could access. December 2026.',
  keywords: ['Meridian Conference', 'youth leadership', 'Ventura County', 'student opportunity', 'conference 2026'],
  authors: [{ name: 'Jaxton Wright' }],
  openGraph: {
    title: 'Meridian Conference | The Room Changes Everything',
    description: 'Connecting students from Ventura County to the rooms, people, and opportunities they didn\'t know they could access.',
    url: 'https://meridianventura.com',
    siteName: 'Meridian Conference',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Meridian Conference. Access Changes Everything' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meridian Conference | The Room Changes Everything',
    description: 'Connecting students from Ventura County to the rooms, people, and opportunities they didn\'t know they could access.',
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
    <html lang="en">
      <head>
        {/* POSTHOG SNIPPET - JAX TO ADD KEY HERE */}
      </head>
      <body className="grain">
        {children}
      </body>
    </html>
  );
}
