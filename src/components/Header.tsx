'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Timeline', href: '/timeline' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        } px-4 sm:px-6`}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between pill-nav px-5 sm:px-8 py-3 transition-all duration-500 ${
            scrolled ? 'shadow-lg shadow-primary/10' : ''
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <AppLogo size={32} />
            <span className="font-display text-lg font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
              MomStory
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                  pathname === link?.href
                    ? 'text-primary' :'text-foreground/60 hover:text-foreground'
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backdropFilter: 'blur(20px)', background: 'rgba(250,248,255,0.96)' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-4xl font-semibold transition-colors ${
                pathname === link?.href ? 'text-primary' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              {link?.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}