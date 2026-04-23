'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function QuoteSection() {
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
    <section ref={ref} className="py-20 px-4 sm:px-6" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #EDE9F7 100%)' }}>
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="scroll-reveal space-y-6">
          <p className="font-display text-5xl sm:text-7xl font-semibold italic leading-tight text-gradient-lavender">
            "Family is everything — and she is the heart of ours."
          </p>
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground">
            — The Comidoy Family
          </p>
        </div>

        <div className="scroll-reveal scroll-reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/gallery"
            className="px-8 py-4 rounded-full font-bold text-sm text-white transition-all shadow-lg hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #8B7DB5, #7ECAB0)' }}
          >
            See Her Gallery
          </Link>
          <Link
            href="/timeline"
            className="px-8 py-4 rounded-full font-bold text-sm border-2 border-primary/30 text-primary hover:bg-primary/10 transition-all"
          >
            Her Life Timeline
          </Link>
        </div>
      </div>
    </section>
  );
}