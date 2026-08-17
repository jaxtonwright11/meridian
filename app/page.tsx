'use client';

import { useEffect } from 'react';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Banner } from '@/components/Banner';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Speakers } from '@/components/Speakers';
import { HowItWorks } from '@/components/HowItWorks';
import { Proof } from '@/components/Proof';
import { Future } from '@/components/Future';
import { FAQ } from '@/components/FAQ';
import { GettingThere } from '@/components/GettingThere';
import { Footer } from '@/components/Footer';

// Sections that used to live on this page and moved to /partners. Previously
// shared deep links (e.g. meridianventura.com/#founder) must still resolve.
const MOVED_ANCHORS: Record<string, string> = {
  recap: '/partners/#recap',
  mission: '/partners/#mission',
  partners: '/partners/#partners',
  founder: '/partners/#founder',
  'who-built-this': '/partners/#who-built-this',
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
        <Speakers />
        <HowItWorks />
        <Proof />
        <Future />
        <FAQ />
        <GettingThere />
      </main>
      <Footer />
    </>
  );
}
