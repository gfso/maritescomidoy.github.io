import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function TimelineHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden grain-overlay">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] -z-10 opacity-30"
      style={{ background: 'radial-gradient(circle, #B8A9D9 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] -z-10 opacity-20"
      style={{ background: 'radial-gradient(circle, #A8DFD0 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 animate-fade-slide">
          <span className="section-label">Her Journey</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-foreground">
            Milestones of a{' '}
            <em className="text-gradient-lavender not-italic">remarkable</em>{' '}
            life.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            From February 15, 1976 in Tagum, Davao — to decades of love, family, and
            leaving every room a little warmer. Here are the chapters that shaped Marites Comidoy.
          </p>
        </div>

        <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
            <AppImage
              src="https://lh3.googleusercontent.com/pw/AP1GczN5_p2mj8uAlMJUoibBBJsbjHEBIU6Q0vIkkwfL4jHgFmWNqGnyXn2fvWkIH0N2CltUnV1bNtkKypzMKHRBXe-768YANVZ4U4SW7NLqcPqYOwr3SvezmZqwYk0F-NPMGF-iyLU7KEPrrMnOcLeq0WRaKg=w676-h679-s-no-gm?authuser=0"
              alt="Vintage photos and letters laid on a wooden table, warm nostalgic tones, soft afternoon light"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority />

            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          </div>
          {/* Floating year badge */}
          <div className="absolute -bottom-5 -left-5 glass-card rounded-2xl px-6 py-4 shadow-xl animate-float">
            <p className="font-display text-3xl font-bold text-primary">1976</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Where it began</p>
          </div>
        </div>
      </div>
    </section>);

}