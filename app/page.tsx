'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { Nav } from '@/components/Nav';
import { SideNav } from '@/components/SideNav';
import { Hero } from '@/components/Hero';
import { StatBar } from '@/components/StatBar';
import { BusinessModel } from '@/components/BusinessModel';
import { EventPhotos } from '@/components/EventPhotos';
import { Mission } from '@/components/Mission';
import { Recap } from '@/components/Recap';
import { Speakers } from '@/components/Speakers';
import { History2024 } from '@/components/History2024';
import { WhoBuiltThis } from '@/components/WhoBuiltThis';
import { Future } from '@/components/Future';
import { WhatsNext } from '@/components/WhatsNext';
import { Founder } from '@/components/Founder';
import { Sponsors } from '@/components/Sponsors';
import { InterestForm } from '@/components/InterestForm';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Nav />
      <SideNav />
      <main>
        <Hero />
        <StatBar />
        <BusinessModel />
        <EventPhotos />
        <Mission />
        <Recap />
        <Speakers />
        <History2024 />
        <WhoBuiltThis />
        <Future />
        <WhatsNext />
        <Founder />
        <Sponsors />
        <InterestForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
