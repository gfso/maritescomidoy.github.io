'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function TimelineClosing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.2 }
    );
    ref?.current?.querySelectorAll('.scroll-reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #EDE9F7 50%, #E8F8F4 100%)' }}>
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="scroll-reveal space-y-5">
          <span className="section-label">Her Legacy</span>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold leading-tight text-foreground">
            Some people make the world{' '}
            <em className="text-gradient-lavender not-italic">warmer</em>{' '}
            just by being in it.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Marites Comidoy is one of those people. Her story continues every day —
            in the love she gives, the family she nurtures, and the lives she touches in Tagum City, Davao.
          </p>
        </div>

        <div className="scroll-reveal scroll-reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/gallery"
            className="px-8 py-4 rounded-full font-bold text-sm text-white transition-all shadow-lg hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #8B7DB5, #7ECAB0)' }}
          >
            View Her Gallery
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 rounded-full font-bold text-sm border-2 border-primary/30 text-primary hover:bg-primary/10 transition-all"
          >
            Read Her Story
          </Link>
        </div>

        {/* Decorative floral divider */}
        <div className="scroll-reveal scroll-reveal-delay-3 flex items-center justify-center gap-4 pt-4">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-primary/30" />
          <span className="text-2xl">🌸</span>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>
    </section>
  );
}