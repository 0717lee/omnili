import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: { absolute: 'Fengmin — 把想法做成产品' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </>
  );
}
