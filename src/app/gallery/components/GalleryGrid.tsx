'use client';
import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  year: string;
  span?: 'wide' | 'tall' | 'normal';
}

const initialPhotos: GalleryPhoto[] = [
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczM5JiJhtZwvrF1qVEiBORm9w_HLZhFtjfgwEYHFTUgPqGaCs-qFUHxhOO7S1ejesymoaWZI6IQyzxHLUksmuhP0cgJeluTWv_OeT-_UrY83bfmW9T0twtb0StYBUSRsQLqygI_B5gTKnOp6gId1bf6zLg=w679-h679-s-no-gm?authuser=0",
    alt: 'Wedding ceremony outdoors, bride and groom holding hands, soft afternoon light, floral arch',
    caption: 'Wedding Day — October 3, 1998',
    year: '1998',
    span: 'normal'
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMtpYOpAo1WQsV1jLzYWrgIGfVBb7oSDa6Bb6LqI3jV7R7JuZmfLhbBFvIUs7-aeFwCzMqpTThLeTktcJ5jyNIbi1DpVPDR96sVVkMTWC0lLN3YrebdNBLHIOIzaMGyYk67VPlA8VuT7xlyp3aRrz1mTA=w678-h679-s-no-gm?authuser=0",
    alt: 'Lush tropical garden in full bloom, vibrant green leaves, morning light, Davao landscape',
    caption: 'Home in Tagum City, Davao',
    year: '2000',
    span: 'tall'
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMorJbjzpuE_BOBIiiKYNEA9M68kVObi4Mijbns3HDgqDvtbt44O1ebrN5cTo4BTod-LKjuB4Nkd7L2MyzkL-6NaGsAmVKVn-Yw1xN8cyPKZvX_N3a7PYAX_LXmZgFXFk-iLLEPeVn1RNRUCG__8lDKYg=w509-h679-s-no-gm?authuser=0",
    alt: 'Family gathered around a table outdoors, smiling faces, casual summer clothing, bright sky',
    caption: 'Family Gathering',
    year: '2003',
    span: 'normal'
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPKJcKJFyd1VNEK0_A8TTORToFjcSlB8qkPqOmLwexOkJTY58xElEoq1oJQWcQODB5B27r-rIO4d1cw8drOTxRaYk2BnNSjPF49w1tVTMYXZHkWg6aDlBZW1NgvmWwv6ZUQmxonkcZqMNwA9Ik4EZm-ZA=w905-h679-s-no-gm?authuser=0",
    alt: 'Festive celebration indoors, decorated space, warm glow, joyful family',
    caption: 'Celebrating Together',
    year: '2008',
    span: 'normal'
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMtUulTZOO-UyN-Y6NsrcDTR9DCjjZ21EoOjnG6I_7-tiMzstLYDvQt_pMi4-xqCI61TugRsXuJV7frFxA6_xpgx-R-ydkK2B-7zSgXhf6D57pGzqIUvWqaNFtrjm-2VY1DX77Re32On9j6Ks4VXit6mg=w905-h679-s-no-gm?authuser=0",
    alt: 'Woman in a warm embrace with a loved one, soft indoor lighting, gentle smile',
    caption: 'Moments of Love',
    year: '2010',
    span: 'normal'
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMCTaTrl1k59OYqhCWvNh62broOuXxkHnVu0kgSoxM68nzjm81Dh9i1-Uv3VXyyaxbKMKpoP6-if_2IPE0qW2NWac4zvcG8rCKUHVsFQt_W11dXmaBgZSBV7PbKaujby7azy9nXkpZE4sPpJ5_ypzuoMQ=w676-h679-s-no-gm?authuser=0",
    alt: 'Birthday celebration with candles on a decorated cake, surrounded by family, warm candlelight',
    caption: 'Birthday Celebration',
    year: '2016',
    span: 'wide'
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczM-wZAc0fQtakpc8UZFV339igtmifpUeslYINaRd0MRxdtYCZcFtqmYfra7h9lqGUHFRveCPS_WHTGZtZBLnPqYlz3WM6cpigj-k9s2uD9jcmPjqdUYT9gL_n9zD8ikHz7fruWS6S_gGDsIg6BlUl00Jw=w676-h679-s-no-gm?authuser=0",
    alt: 'Person relaxing in a cozy setting, warm lamp light, peaceful atmosphere',
    caption: 'Quiet Moments',
    year: '2014',
    span: 'normal'
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMrpt_W5fu96KNowubwPYhyGajHBYAEqxMNEz1hoe3mU1lmATdHaPPwnkVs5Wt_UTxxg5Rw0Ur_Sv4rUD3KrqcqhOpLIuX0kl73evUehuPCqHo7CZO2nchWS6XYJfZkbmDxsZy01Vu8hEN-547VMibSdQ=w679-h679-s-no-gm?authuser=0",
    alt: 'Home kitchen with home-cooked food on counter, warm natural light, Filipino home setting',
    caption: 'Cooking with Love',
    year: '2017',
    span: 'normal'
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNuaVHMaH2868C71RXjCBR1Cjnf5Jp-3qiKKRCMVX9XCR01tfbevNP5OqB_KDoEuCcNAUeLInN0bn2qmIFLRehzJhHCeCfVJYX7KSZis5Jz_ZIFtun7EURomsYgtuqUS4SLxwWjnXeAeuNNLeqFiW59Og=w382-h679-s-no-gm?authuser=0",
    alt: 'Scenic landscape at sunrise, misty hills, warm golden light, serene natural setting in Davao',
    caption: 'Beautiful Davao',
    year: '2022',
    span: 'wide'
  }
];

export default function GalleryGrid() {
  // --- STATE MANAGEMENT ---
  const [photos, setPhotos] = useState<GalleryPhoto[]>(initialPhotos);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  
  // Form State
  const [newUrl, setNewUrl] = useState('');
  const [newCaption, setNewCaption] = useState('');
  const [newYear, setNewYear] = useState('');

  const sectionRef = useRef<HTMLDivElement>(null);

  // Function to add a photo
  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl || !newCaption) return;

    const newPhoto: GalleryPhoto = {
      src: newUrl,
      alt: newCaption,
      caption: newCaption,
      year: newYear || new Date().getFullYear().toString(),
      span: 'normal'
    };

    setPhotos([...photos, newPhoto]);
    setNewUrl('');
    setNewCaption('');
    setNewYear('');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [photos]); // Re-observe when photos change

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') setLightboxIdx((i) => i !== null ? (i + 1) % photos.length : null);
      if (e.key === 'ArrowLeft') setLightboxIdx((i) => i !== null ? (i - 1 + photos.length) % photos.length : null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, photos.length]);

  useEffect(() => {
    document.body.classList.toggle('lightbox-open', lightboxIdx !== null);
    return () => document.body.classList.remove('lightbox-open');
  }, [lightboxIdx]);

  return (
    <>
      <section ref={sectionRef} className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="scroll-reveal space-y-3">
            <span className="section-label">Photo Memories</span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-foreground">
              A life in <em className="text-gradient-lavender not-italic">pictures</em>
            </h2>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              Precious moments from Marites Comidoy's life.
            </p>
          </div>

          {/* --- ADD PHOTO FORM --- */}
          <div className="scroll-reveal bg-gray-50 p-6 rounded-[1.5rem] border border-dashed border-gray-300">
            <h3 className="text-lg font-semibold mb-4">Add New Memory</h3>
            <form onSubmit={handleAddPhoto} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input 
                type="text" placeholder="Image URL" value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                className="p-2 border rounded-xl bg-white text-sm"
              />
              <input 
                type="text" placeholder="Caption" value={newCaption}
                onChange={(e) => setNewCaption(e.target.value)}
                className="p-2 border rounded-xl bg-white text-sm"
              />
              <input 
                type="text" placeholder="Year" value={newYear}
                onChange={(e) => setNewYear(e.target.value)}
                className="p-2 border rounded-xl bg-white text-sm"
              />
              <button type="submit" className="bg-black text-white p-2 rounded-xl text-sm font-bold hover:opacity-80 transition-all">
                Add Photo
              </button>
            </form>
          </div>

          {/* Dynamic Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[260px]">
            {photos.map((photo, index) => {
              // Determine grid span classes
              let spanClass = "";
              if (photo.span === 'tall') spanClass = "row-span-2";
              if (photo.span === 'wide') spanClass = "col-span-2";

              return (
                <div
                  key={index}
                  className={`scroll-reveal relative rounded-[1.5rem] overflow-hidden cursor-pointer group ${spanClass}`}
                  onClick={() => setLightboxIdx(index)}>
                  <AppImage 
                    src={photo.src} 
                    alt={photo.alt} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 50vw, 33vw" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-bold">{photo.caption}</p>
                    <p className="text-white/70 text-xs">{photo.year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox - Updated to use dynamic photos array */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setLightboxIdx(null)}>
            <button className="absolute top-4 right-4 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white z-50" onClick={() => setLightboxIdx(null)}>
                <Icon name="XMarkIcon" size={20} className="text-white" />
            </button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white z-50" 
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => i !== null ? (i - 1 + photos.length) % photos.length : null); }}>
                <Icon name="ChevronLeftIcon" size={20} className="text-white" />
            </button>
            <div className="relative w-full max-w-4xl mx-8 aspect-[4/3] rounded-[1.5rem] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <AppImage src={photos[lightboxIdx].src} alt={photos[lightboxIdx].alt} fill className="object-contain" sizes="100vw" />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-bold">{photos[lightboxIdx].caption}</p>
                    <p className="text-white/70 text-sm">{photos[lightboxIdx].year}</p>
                </div>
            </div>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white z-50" 
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => i !== null ? (i + 1) % photos.length : null); }}>
                <Icon name="ChevronRightIcon" size={20} className="text-white" />
            </button>
        </div>
      )}
    </>
  );
}
