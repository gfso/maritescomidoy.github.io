'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const milestones = [
{
  id: 'birth',
  year: '1976',
  title: 'A New Beginning',
  description: 'Born on February 15, 1976 in Tagum, Davao — Marites came into the world with a warmth that would touch everyone around her. From the very beginning, she had a spirit that made people feel at home.',
  image: "https://lh3.googleusercontent.com/pw/AP1GczNEy3G4MCJrBRRMvE9QlHOCwkCZ_2L-h_K3LtASjeCzwnoE9YktnQxcrPBNf7OQl44LoELgygMnycAAlmD777P-erJltKKF_ukg-kSkx6jrm0szdZoIYyo7GwUbSgei_7BHVURspJS7o1rODO5laGWYsA=w510-h679-s-no-gm?authuser=0",
  imageAlt: 'Vintage baby shoes and a soft blanket, warm nostalgic tones, gentle morning light',
  accent: '#8B7DB5',
  span: 'normal' as const
},
{
  id: 'growing-up',
  year: '1980s',
  title: 'Growing Up in Davao',
  description: 'Marites grew up in Tagum City, Davao — a place she has always called home. Her childhood was shaped by the warmth of family, the beauty of Davao, and the values that would guide her throughout her life.',
  image: "https://lh3.googleusercontent.com/pw/AP1GczPuO7aMrkZ75Drxu0Jroa3W2S91wPoBDdCOy32CaSdFMOhpGnMi_vQ9pogHeYlwsbSEjw-1uhCsWsp_7fCQ9v6hSjuFE3Zg3WShjES7QqvCeGry4otgqjiCVxVw0eqNx2aDzCrVPNP0pxhWYjyOTfFOmw=w509-h679-s-no-gm?authuser=0",
  imageAlt: 'Tropical landscape with lush green trees, warm sunlight, peaceful Filipino countryside',
  accent: '#7ECAB0',
  span: 'normal' as const
},
{
  id: 'marriage',
  year: '1998',
  title: 'A Love Story',
  description: 'On October 3, 1998, Marites married and began building a family of her own. Their union became the foundation of a home filled with love, laughter, and the kind of warmth that only a devoted family can create.',
  image: "https://lh3.googleusercontent.com/pw/AP1GczOx05qHcU9W3OYJGbgqAuy8OztWvDHv82rpTPNEfeBJHVQC84mqmiFXW7o9y7hDWCwPwSZ1AhOiWCAOFAvQqL3cGamoqp1F5ET-oBBI2BtemLMbdlz6PxLAqb8ZI3AxS2OvrAFS1SSvvpNEqlWacUW5lQ=w509-h679-s-no-gm?authuser=0",
  imageAlt: 'Wedding ceremony outdoors with floral decorations, soft afternoon light, couple holding hands',
  accent: '#C4A8D4',
  span: 'normal' as const
},
{
  id: 'family',
  year: '1998–Present',
  title: 'The Heart of the Family',
  description: 'Marites is the heart of her family — kind, hardworking, and caring. She has dedicated herself to her loved ones with unwavering devotion. Her home in Tagum City is a place of warmth and belonging, where family always comes first and every moment together is cherished.',
  image: "https://lh3.googleusercontent.com/pw/AP1GczM5JiJhtZwvrF1qVEiBORm9w_HLZhFtjfgwEYHFTUgPqGaCs-qFUHxhOO7S1ejesymoaWZI6IQyzxHLUksmuhP0cgJeluTWv_OeT-_UrY83bfmW9T0twtb0StYBUSRsQLqygI_B5gTKnOp6gId1bf6zLg=w679-h679-s-no-gm?authuser=0",
  imageAlt: 'Family gathered outdoors on a sunny afternoon, multiple generations, casual and joyful atmosphere',
  accent: '#8B7DB5',
  span: 'wide' as const
},
{
  id: 'community',
  year: '2000s',
  title: 'Community & Connection',
  description: 'Marites has always been active in her community — sharing updates, everyday moments, and photos with friends and neighbors. Her Facebook presence reflects her genuine love for people and her desire to stay connected.',
  image: "https://lh3.googleusercontent.com/pw/AP1GczMtpYOpAo1WQsV1jLzYWrgIGfVBb7oSDa6Bb6LqI3jV7R7JuZmfLhbBFvIUs7-aeFwCzMqpTThLeTktcJ5jyNIbi1DpVPDR96sVVkMTWC0lLN3YrebdNBLHIOIzaMGyYk67VPlA8VuT7xlyp3aRrz1mTA=w678-h679-s-no-gm?authuser=0",
  imageAlt: 'Community gathering with people smiling and connecting, warm outdoor setting',
  accent: '#7ECAB0',
  span: 'normal' as const
},
{
  id: 'legacy',
  year: '2010–Present',
  title: 'A Life Full of Love',
  description: 'Today, Marites Comidoy continues to be the anchor of her family in Tagum City, Davao. Her story is one of quiet strength, everyday kindness, and a love that radiates to everyone fortunate enough to know her. She is, simply put, irreplaceable.',
  image: "https://lh3.googleusercontent.com/pw/AP1GczMorJbjzpuE_BOBIiiKYNEA9M68kVObi4Mijbns3HDgqDvtbt44O1ebrN5cTo4BTod-LKjuB4Nkd7L2MyzkL-6NaGsAmVKVn-Yw1xN8cyPKZvX_N3a7PYAX_LXmZgFXFk-iLLEPeVn1RNRUCG__8lDKYg=w509-h679-s-no-gm?authuser=0",
  imageAlt: 'Woman sitting peacefully in a garden, warm afternoon light, tender and serene moment',
  accent: '#C4A8D4',
  span: 'full' as const
}];


export default function TimelineBento() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Row 1: Birth, Growing Up, Marriage — 3 equal cols */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {milestones.slice(0, 3).map((m, i) =>
          <MilestoneCard
            key={m.id}
            milestone={m}
            className={`scroll-reveal scroll-reveal-delay-${i + 1}`} />
          )}
        </div>

        {/* Row 2: Family (wide cs-2) + Community (cs-1) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Family — col-span-2 */}
          <div className="sm:col-span-2 scroll-reveal scroll-reveal-delay-1">
            <MilestoneCard milestone={milestones[3]} className="" isWide />
          </div>
          {/* Community — col-span-1 */}
          <div className="scroll-reveal scroll-reveal-delay-2">
            <MilestoneCard milestone={milestones[4]} className="" />
          </div>
        </div>

        {/* Row 3: Legacy — full width */}
        <div className="scroll-reveal scroll-reveal-delay-1">
          <MilestoneCard milestone={milestones[5]} className="" isFull />
        </div>
      </div>
    </section>);
}

function MilestoneCard({
  milestone,
  className,
  isWide,
  isFull
}: {milestone: typeof milestones[0];className: string;isWide?: boolean;isFull?: boolean;}) {
  return (
    <div
      className={`relative rounded-[2rem] overflow-hidden group cursor-default ${className} ${
      isFull ? 'h-72 sm:h-80' : isWide ? 'h-64 sm:h-72' : 'h-64'}`
      }>

      {/* Background image */}
      <AppImage
        src={milestone.image}
        alt={milestone.imageAlt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes={isFull ? '100vw' : isWide ? '66vw' : '33vw'} />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(160deg, ${milestone.accent}99 0%, rgba(20,15,35,0.85) 100%)`
        }} />

      {/* Content */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
        {/* Year badge */}
        <span
          className="self-start text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full text-white"
          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
          {milestone.year}
        </span>

        {/* Text */}
        <div className="space-y-2">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-tight">
            {milestone.title}
          </h3>
          <p className={`text-white/80 text-sm leading-relaxed ${isFull || isWide ? 'max-w-2xl' : 'line-clamp-3'}`}>
            {milestone.description}
          </p>
        </div>
      </div>
    </div>);
}