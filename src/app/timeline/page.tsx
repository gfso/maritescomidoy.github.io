import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TimelineHero from './components/TimelineHero';
import TimelineBento from './components/TimelineBento';
import TimelineClosing from './components/TimelineClosing';

export default function TimelinePage() {
  return (
    <>
      <Header />
      <main>
        <TimelineHero />
        <TimelineBento />
        <TimelineClosing />
      </main>
      <Footer />
    </>
  );
}