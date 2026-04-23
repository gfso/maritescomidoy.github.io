import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import BiographySection from './components/BiographySection';
import QuoteSection from './components/QuoteSection';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BiographySection />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}