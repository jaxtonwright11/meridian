import type { Metadata } from 'next';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Nav } from '@/components/Nav';
import { PartnersIntro } from '@/components/PartnersIntro';
import { Recap } from '@/components/Recap';
import { Founder } from '@/components/Founder';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'For Partners | Meridian Conference',
  description:
    'Who funds and builds Meridian: the General Atomics Sciences Education Foundation, George Leis, and the December 2025 result the conference is built on. Sponsorship and partnership inquiries.',
};

export default function PartnersPage() {
  return (
    <>
      <SmoothScroll />
      <Nav home={false} />
      <main>
        <PartnersIntro />
        <Recap />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
