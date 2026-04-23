'use client';
import React, { useState, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const slides = [
{
  src: "https://lh3.googleusercontent.com/pw/AP1GczM-wZAc0fQtakpc8UZFV339igtmifpUeslYINaRd0MRxdtYCZcFtqmYfra7h9lqGUHFRveCPS_WHTGZtZBLnPqYlz3WM6cpigj-k9s2uD9jcmPjqdUYT9gL_n9zD8ikHz7fruWS6S_gGDsIg6BlUl00Jw=w676-h679-s-no-gm?authuser=0",
  alt: 'Portrait of a woman smiling warmly, soft studio lighting, blurred neutral background, peaceful expression',
  caption: 'Marites — always smiling, always loving',
  year: '1998'
},
{
  src: "https://lh3.googleusercontent.com/pw/AP1GczMrpt_W5fu96KNowubwPYhyGajHBYAEqxMNEz1hoe3mU1lmATdHaPPwnkVs5Wt_UTxxg5Rw0Ur_Sv4rUD3KrqcqhOpLIuX0kl73evUehuPCqHo7CZO2nchWS6XYJfZkbmDxsZy01Vu8hEN-547VMibSdQ=w679-h679-s-no-gm?authuser=0",
  alt: 'Woman laughing outdoors, bright sunny day, green trees in background, candid joyful moment',
  caption: 'Family moments in Tagum City',
  year: '2005'
},
{
  src: "https://lh3.googleusercontent.com/pw/AP1GczNuaVHMaH2868C71RXjCBR1Cjnf5Jp-3qiKKRCMVX9XCR01tfbevNP5OqB_KDoEuCcNAUeLInN0bn2qmIFLRehzJhHCeCfVJYX7KSZis5Jz_ZIFtun7EURomsYgtuqUS4SLxwWjnXeAeuNNLeqFiW59Og=w382-h679-s-no-gm?authuser=0",
  alt: 'Woman standing in a sunlit field, golden hour light, soft warm tones, serene expression',
  caption: 'Everyday joy in Davao',
  year: '2012'
},
{
  src: "https://lh3.googleusercontent.com/pw/AP1GczMQjW4jK3NntMD4jWu1D8XtgnLfkOClFelFSFrRQ2LQVQvPdjJq310AjAyrTDxjGbTQTHRvxFqaVel1o4Mk8E8D2vmURqpAGI1lD4HxsjAeqM0diRFC91FVyn7HCH8_Kaf2T_Lomfmmio4cL2n2jJjrkA=w373-h679-s-no-gm?authuser=0",
  alt: 'Close portrait of a woman with gentle eyes, soft natural window light, warm cream tones',
  caption: 'A life filled with love and warmth',
  year: '2020'
}];


export default function SlideshowSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end pt-20 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) =>
      <div
        key={i}
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: i === current && !isTransitioning ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
        aria-hidden={i !== current}>

          <AppImage
          src={slide.src}
          alt={slide.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={i === 0} />

          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-8">
        {/* Caption */}
        <div
          className="transition-all duration-500"
          style={{ opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? 'translateY(12px)' : 'translateY(0)' }}>

          <span className="inline-block glass-card text-white/80 text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-4">
            {slides[current].year}
          </span>
          <p className="font-display italic text-3xl sm:text-5xl text-white font-semibold leading-tight max-w-2xl">
            {slides[current].caption}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/30 transition-all min-w-[44px] min-h-[44px]"
            aria-label="Previous photo">

            <Icon name="ChevronLeftIcon" size={20} className="text-white" />
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {slides.map((_, i) =>
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center`}
              aria-label={`Go to slide ${i + 1}`}>

                <span
                className={`block rounded-full transition-all duration-300 ${
                i === current ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`
                } />

              </button>
            )}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/30 transition-all min-w-[44px] min-h-[44px]"
            aria-label="Next photo">

            <Icon name="ChevronRightIcon" size={20} className="text-white" />
          </button>

          {/* Counter */}
          <span className="ml-auto text-white/60 text-sm font-bold font-display">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>);

}