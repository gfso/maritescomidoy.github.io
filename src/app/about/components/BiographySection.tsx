'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const bioParagraphs = [
`Marites Comidoy is the heart of our family — kind, hardworking, and caring. Born on February 15, 1976, she grew up in Tagum City, Davao, where she has built a life full of warmth, love, and dedication to the people around her.`,
`She has always been the kind of person who puts family first. Whether it's preparing a meal, lending a helping hand, or simply being present, Marites brings a quiet strength and gentle spirit to everything she does.`,
`On October 3, 1998, she married and began building a family of her own. Her home became a place of comfort and belonging — a space where love is felt in every corner and every shared moment.`,
`Marites is known for her everyday moments of joy — her updates and photos shared with the community, her warmth in every interaction, and her ability to make everyone around her feel seen and valued.`];


export default function BiographySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = sectionRef?.current?.querySelectorAll('.scroll-reveal');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        {/* Number + heading column */}
        <div className="lg:col-span-1 hidden lg:block">
          <span className="font-display text-5xl font-bold opacity-10 text-foreground select-none">01</span>
        </div>

        {/* Photo + quote column */}
        <div className="lg:col-span-5 space-y-8 scroll-reveal">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]">
            <AppImage
              src="https://lh3.googleusercontent.com/pw/AP1GczOx05qHcU9W3OYJGbgqAuy8OztWvDHv82rpTPNEfeBJHVQC84mqmiFXW7o9y7hDWCwPwSZ1AhOiWCAOFAvQqL3cGamoqp1F5ET-oBBI2BtemLMbdlz6PxLAqb8ZI3AxS2OvrAFS1SSvvpNEqlWacUW5lQ=w509-h679-s-no-gm?authuser=0"
              alt="Woman in a sunlit garden, surrounded by blooming flowers, warm afternoon light, peaceful expression"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw" />

            {/* Subtle scrim for bottom text */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Pull quote card */}
          <div className="glass-card rounded-[2rem] p-8 space-y-4 shadow-sm scroll-reveal scroll-reveal-delay-2">
            <Icon name="ChatBubbleLeftRightIcon" size={28} className="text-primary opacity-50" />
            <p className="font-display italic text-xl text-foreground leading-relaxed">
              "She never missed a moment, never forgot a face, and never let you leave without feeling loved."
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              — The Comidoy Family
            </p>
          </div>
        </div>

        {/* Biography text column */}
        <div className="lg:col-span-6 space-y-10 lg:pt-12">
          <div className="space-y-4 scroll-reveal">
            <span className="section-label">Her Story</span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-foreground">
              A woman who makes{' '}
              <em className="text-gradient-lavender not-italic">every moment</em>{' '}
              count.
            </h2>
          </div>

          <div className="space-y-6">
            {bioParagraphs?.map((para, i) =>
            <p
              key={i}
              className={`text-base text-muted-foreground leading-relaxed scroll-reveal scroll-reveal-delay-${i + 1}`}>
                {para}
              </p>
            )}
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 gap-4 pt-4 scroll-reveal scroll-reveal-delay-4">
            {[
            { label: 'Full Name', value: 'Marites Comidoy' },
            { label: 'Lives In', value: 'Tagum City, Davao' },
            { label: 'Birthday', value: 'February 15, 1976' },
            { label: 'Married', value: 'October 3, 1998' }]?.
            map((s) =>
            <div key={s?.label} className="flex items-center gap-4 border-l-2 border-accent pl-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground w-24 shrink-0">{s?.label}</p>
                <p className="font-display text-base font-semibold text-primary">{s?.value}</p>
              </div>
            )}
          </div>

          {/* Facebook link */}
          <div className="scroll-reveal scroll-reveal-delay-4 pt-2">
            <a
              href="https://www.facebook.com/marites.comidoy.73"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all shadow-lg hover:scale-105 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #1877F2, #42A5F5)' }}>
              Visit Her Facebook Profile
            </a>
          </div>
        </div>
      </div>
    </section>);

}