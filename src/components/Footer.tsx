import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-display text-base font-semibold text-foreground/70 tracking-tight">
            MomStory
          </span>
        </div>

        {/* Dedication */}
        <p className="font-display italic text-muted-foreground text-sm max-w-xs leading-relaxed">
          "With love, from the Comidoy Family — forever in our hearts."
        </p>

        {/* Nav links */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {[
            { label: 'About', href: '/about' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Timeline', href: '/timeline' },
            { label: 'Facebook', href: 'https://www.facebook.com/marites.comidoy.73' },
          ]?.map((link) => (
            <Link
              key={link?.label}
              href={link?.href}
              target={link?.href?.startsWith('http') ? '_blank' : undefined}
              rel={link?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
            >
              {link?.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-muted-foreground/60 font-medium">
          © 2026 Comidoy Family · All memories preserved with love
        </p>
      </div>
    </footer>
  );
}