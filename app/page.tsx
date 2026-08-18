'use client';

import { useEffect } from 'react';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Banner } from '@/components/Banner';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { WhoBuiltThis } from '@/components/WhoBuiltThis';
import { BehindMeridian } from '@/components/BehindMeridian';
import { Future } from '@/components/Future';
import { FAQ } from '@/components/FAQ';
import { GettingThere } from '@/components/GettingThere';
import { Footer } from '@/components/Footer';

// Sections that used to live on this page and moved to /partners. Previously
// shared deep links (e.g. meridianventura.com/#founder) must still resolve.
const MOVED_ANCHORS: Record<string, string> = {
  recap: '/partners/#recap',
  mission: '/partners/#mission',
  founder: '/partners/#founder',
  beyond: '/partners/#recap',
};

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && MOVED_ANCHORS[hash]) {
      window.location.replace(MOVED_ANCHORS[hash]);
    }
  }, []);

  return (
    <>
      <SmoothScroll />
      <Banner />
      <Nav />
      <main>
        <Hero />
        {/* Speakers section (components/Speakers.tsx) is parked until speaker
            cards with photos are ready — re-import <Speakers /> here and
            restore the nav/footer "Speakers" links to bring it back. */}
        <HowItWorks />
        <WhoBuiltThis />
        <BehindMeridian />
        <Future />
        <FAQ />
        <GettingThere />
      </main>
      <Footer />
    </>
  );
}
