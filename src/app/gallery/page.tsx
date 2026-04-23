import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SlideshowSection from './components/SlideshowSection';
import GalleryGrid from './components/GalleryGrid';

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <SlideshowSection />
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}