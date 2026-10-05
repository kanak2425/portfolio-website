import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDown, Heart, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onScrollToWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onScrollToWork }) => {
  // Gentle parallax calculation based on mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // max 10px shift
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-[#FFFDFB]/75 backdrop-blur-[2px]">
      {/* Background delicate gingham accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gingham-soft rounded-full opacity-60 blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gingham opacity-40 rounded-3xl rotate-12 blur-xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top handwritten note + availability status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9] border border-[#F9D8DE] px-4 py-1.5 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#C47B89] animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-[#59464C]">
              Booking Q2 & Q3 Projects
            </span>
            <span className="text-[#C47B89] text-xs">·</span>
            <span className="text-xs font-serif italic text-[#87636D]">2 client spots remaining</span>
          </div>

          <div className="flex items-center gap-1.5 text-lg font-script text-[#B86B7B] rotate-[-2deg] select-none">
            <span>made with love</span>
            <Heart className="w-4 h-4 fill-[#F9D8DE] text-[#C47B89] inline" />
          </div>
        </div>

        {/* Hero Headline & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Kicker */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47B89]">
                Creative Direction & Web Architecture
              </span>
              <div className="w-12 h-px bg-[#F4B8C5]" />
            </div>

            {/* Massive Editorial Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium leading-[1.08] tracking-tight text-[#34282C] mb-6">
              I BUILD WEBSITES <br />
              <span className="italic font-normal text-[#C47B89]">PEOPLE WANT</span> TO{' '}
              <span className="relative inline-block">
                STAY ON.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#F4B8C5]/70"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5C52.5 2 147.5 1.5 197.5 7"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-lg md:text-xl text-[#59464C] leading-relaxed max-w-xl mb-10 font-normal">
              Beautiful, conversion-focused websites designed for modern brands,
              luxury boutiques, and forward-thinking creators who refuse to look cookie-cutter.
            </p>

            {/* Two Strong Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#34282C] hover:bg-[#44373B] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-full shadow-paper transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                <span>LET’S WORK TOGETHER</span>
                <ArrowUpRight className="w-4 h-4 text-[#F9D8DE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onScrollToWork}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#FFFDFB] hover:bg-[#FCECEF]/60 text-[#34282C] text-xs font-semibold uppercase tracking-widest rounded-full border border-[#F4B8C5] shadow-xs hover:border-[#C47B89] transition-all duration-300 cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 text-[#C47B89] group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Subtle editorial trust metrics */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#F9D8DE]/80">
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-[#34282C] tabular-nums">
                  4.2<span className="text-lg font-sans font-normal text-[#C47B89]">x</span>
                </p>
                <p className="text-xs text-[#7A646A] uppercase tracking-wider mt-0.5">Avg Dwell Time</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-[#34282C] tabular-nums">
                  +160<span className="text-lg font-sans font-normal text-[#C47B89]">%</span>
                </p>
                <p className="text-xs text-[#7A646A] uppercase tracking-wider mt-0.5">Client Conversion</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-[#34282C] tabular-nums">
                  100<span className="text-lg font-sans font-normal text-[#C47B89]">%</span>
                </p>
                <p className="text-xs text-[#7A646A] uppercase tracking-wider mt-0.5">Bespoke Design</p>
              </div>
            </div>
          </div>

          {/* Hero Visual: Floating realistic device/browser mockup with paper scraps & annotations */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg) translateY(${mousePos.y * 0.3}px)`,
              }}
            >
              {/* Layer 1: Background paper scrap with subtle tilt */}
              <div
                className="absolute -top-6 -left-6 w-full h-full bg-[#FCECEF] rounded-2xl -rotate-2 border border-[#F4B8C5]/50 -z-10 shadow-paper"
              />

              {/* Layer 2: Gingham paper note pinned on the top right */}
              <div
                className="absolute -top-7 -right-4 z-20 bg-[#FFFDF9] border border-[#F9D8DE] px-4 py-2 rounded-xl shadow-paper rotate-3 flex items-center gap-2"
                style={{
                  transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px) rotate(3deg)`,
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8A5B3]" />
                <span className="text-xs font-script text-[#59464C] text-sm">
                  100% custom typography ♡
                </span>
              </div>

              {/* Layer 3: Main Browser Window Mockup */}
              <div className="bg-[#FFFDFB] p-2.5 sm:p-3 rounded-2xl shadow-paper border border-[#F4B8C5]/60 overflow-hidden">
                {/* Browser Header Bar with aesthetic pastel dots */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#F9D8DE] bg-[#FFF9FA] rounded-t-xl mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F4B8C5]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F9D8DE]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5D2D6]" />
                  </div>
                  <a
                    href="https://kavya-ocean-mountains-reserve.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-sans tracking-wide text-[#87636D] hover:text-[#C47B89] bg-[#FFFDFB] px-4 py-0.5 rounded-full border border-[#F9D8DE]/80 shadow-2xs transition-colors flex items-center gap-1"
                  >
                    <span>kavya-ocean-mountains-reserve.vercel.app</span>
                    <Sparkles className="w-3 h-3 text-[#C47B89]" />
                  </a>
                  <div className="w-8" />
                </div>

                {/* Browser Content Image */}
                <div className="relative overflow-hidden rounded-lg group aspect-[16/10] bg-[#FAF8F5]">
                  <img
                    src={HERO_IMAGE}
                    alt="Luxury aesthetic website designed by Kanak & Harshi"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#34282C]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Layer 4: Polaroid aesthetic note pinned on bottom left */}
              <div
                className="absolute -bottom-8 -left-6 z-20 bg-[#FFFDFB] p-3 rounded-xl shadow-polaroid border border-[#F9D8DE] -rotate-3 max-w-[210px]"
                style={{
                  transform: `translate(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px) rotate(-3deg)`,
                }}
              >
                {/* Washi tape strip visual */}
                <div className="w-14 h-4 bg-[#F9D8DE]/90 mx-auto -mt-5 mb-2 rotate-2 border-l border-r border-[#C47B89]/20 shadow-2xs" />
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C47B89]" />
                  <span className="text-[11px] font-semibold tracking-wider text-[#34282C] uppercase">
                    Aesthetic + Speed
                  </span>
                </div>
                <p className="text-[11px] font-script text-[#7A646A] leading-snug">
                  Designed for 100/100 Google performance without losing poetry.
                </p>
              </div>

              {/* Layer 5: Cute bottom right heart sticker */}
              <div
                className="absolute -bottom-5 -right-3 z-20 w-12 h-12 rounded-full bg-[#FCECEF] border border-[#F4B8C5] shadow-paper flex items-center justify-center rotate-6 hover:rotate-12 transition-transform cursor-pointer"
                title="curated with passion"
              >
                <Heart className="w-6 h-6 text-[#C47B89] fill-[#C47B89]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
