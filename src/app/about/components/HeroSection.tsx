'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const heroPhotos = [
{
  src: "https://lh3.googleusercontent.com/pw/AP1GczN5_p2mj8uAlMJUoibBBJsbjHEBIU6Q0vIkkwfL4jHgFmWNqGnyXn2fvWkIH0N2CltUnV1bNtkKypzMKHRBXe-768YANVZ4U4SW7NLqcPqYOwr3SvezmZqwYk0F-NPMGF-iyLU7KEPrrMnOcLeq0WRaKg=w676-h679-s-no-gm?authuser=0",
  alt: 'Portrait of a woman with warm smile, soft natural lighting, blurred garden background',
  className: 'absolute top-0 right-0 w-[58%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10',
  aspectClass: 'aspect-[3/4]',
  animClass: 'animate-float',
  style: {}
},
{
  src: "https://lh3.googleusercontent.com/pw/AP1GczNEy3G4MCJrBRRMvE9QlHOCwkCZ_2L-h_K3LtASjeCzwnoE9YktnQxcrPBNf7OQl44LoELgygMnycAAlmD777P-erJltKKF_ukg-kSkx6jrm0szdZoIYyo7GwUbSgei_7BHVURspJS7o1rODO5laGWYsA=w510-h679-s-no-gm?authuser=0",
  alt: 'Woman laughing outdoors, bright sunny day, green trees in background, candid joyful moment',
  className: 'absolute top-[22%] left-0 w-[48%] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white z-20',
  aspectClass: 'aspect-square',
  animClass: 'animate-float-slow',
  style: { animationDelay: '1.5s' }
},
{
  src: "https://lh3.googleusercontent.com/pw/AP1GczPuO7aMrkZ75Drxu0Jroa3W2S91wPoBDdCOy32CaSdFMOhpGnMi_vQ9pogHeYlwsbSEjw-1uhCsWsp_7fCQ9v6hSjuFE3Zg3WShjES7QqvCeGry4otgqjiCVxVw0eqNx2aDzCrVPNP0pxhWYjyOTfFOmw=w509-h679-s-no-gm?authuser=0",
  alt: 'Close-up of hands holding flowers, warm golden hour light, soft focus background',
  className: 'absolute bottom-0 left-[20%] w-[38%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-30',
  aspectClass: 'aspect-[3/4]',
  animClass: 'animate-float',
  style: { animationDelay: '3s' }
}];


export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const photos = el.querySelectorAll<HTMLElement>('[data-parallax]');
      photos.forEach((photo, i) => {
        const depth = (i + 1) * 6;
        photo.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden grain-overlay">

      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[120px] -z-10 opacity-40"
      style={{ background: 'radial-gradient(circle, #C4B8E8 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full blur-[100px] -z-10 opacity-30"
      style={{ background: 'radial-gradient(circle, #A8DFD0 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3 animate-fade-slide">
            <span className="section-label">A Life Beautifully Lived</span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground">
              The story of{' '}
              <em className="text-gradient-lavender not-italic">
                Marites
              </em>
              <br />
              <em className="text-gradient-lavender not-italic">Comidoy</em>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-slide"
          style={{ animationDelay: '0.15s' }}>
            Mother, wife, and the heart of our family — kind, hardworking, and caring.
            Born in Tagum, Davao and living her beautiful story every single day.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-slide" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/gallery"
              className="px-8 py-4 rounded-full font-bold text-sm text-white transition-all shadow-lg hover:scale-105 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #8B7DB5, #7ECAB0)' }}>
              View Her Photos
            </Link>
            <Link
              href="/timeline"
              className="px-8 py-4 rounded-full font-bold text-sm border-2 border-primary/30 text-primary hover:bg-primary/10 transition-all">
              Her Milestones
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 animate-fade-slide" style={{ animationDelay: '0.45s' }}>
            {[
            { num: '1976', label: 'Year of Birth' },
            { num: 'Feb 15', label: 'Birthday' },
            { num: '1998', label: 'Married Since' }].
            map((s) =>
            <div key={s.label}>
                <p className="font-display text-3xl font-bold text-primary">{s.num}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right — Overlapping Photo Collage */}
        <div className="lg:col-span-6 relative h-[480px] sm:h-[560px] hidden sm:block">
          {heroPhotos.map((photo, i) =>
          <div
            key={i}
            data-parallax="true"
            className={`${photo.className} transition-transform duration-300 ease-out`}
            style={photo.style}>

              <div className={`${photo.animClass} ${photo.aspectClass} w-full`}>
                <AppImage
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority={i === 0} />
              </div>
            </div>
          )}

          {/* Floating tag */}
          <div className="absolute bottom-[15%] right-2 z-40 glass-card rounded-2xl px-5 py-3 shadow-lg animate-float-slow"
          style={{ animationDelay: '2s' }}>
            <p className="font-display italic text-sm text-primary font-semibold">
              "Always caring" 🌸
            </p>
          </div>
        </div>

        {/* Mobile single photo */}
        <div className="sm:hidden w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
          <AppImage
            src={heroPhotos[0].src}
            alt={heroPhotos[0].alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority />
        </div>
      </div>
    </section>);

}