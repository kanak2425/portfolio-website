import React from 'react';
import { ArrowRight, Heart, Sparkles, Coffee, Palette, Code2 } from 'lucide-react';
import { DESIGNER_POLAROID } from '../data/portfolioData';

interface AboutScrapbookProps {
  onOpenAboutModal: () => void;
}

export const AboutScrapbook: React.FC<AboutScrapbookProps> = ({ onOpenAboutModal }) => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#FAF6F3]/85 backdrop-blur-[2px] overflow-hidden border-y border-[#F9D8DE]/80">
      {/* Delicate background gingham strip */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gingham opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gingham opacity-60" />

      {/* Floating decorative elements */}
      <div className="absolute -top-10 right-1/4 w-72 h-72 bg-[#FCECEF] rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-60 h-60 bg-[#F9D8DE] rounded-full blur-3xl opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Scrapbook Composition with Polaroid, Paper Clips & Notes */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Layer 1: Background cream stationery card with subtle rotation */}
              <div className="absolute inset-0 bg-[#FFFDF9] rounded-2xl rotate-[-3deg] border border-[#F4B8C5]/60 shadow-paper -z-10" />

              {/* Layer 2: Polaroid Frame with realistic tape */}
              <div className="relative bg-[#FFFDFB] p-4 sm:p-5 rounded-xl shadow-polaroid border border-[#F0D0D7] rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
                {/* Washi tape at top */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#F9D8DE]/90 backdrop-blur-xs rotate-[-1deg] border-l-2 border-r-2 border-dashed border-[#C47B89]/40 shadow-xs z-10" />

                {/* Photo container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded bg-[#F8EFEA] mb-4 group">
                  <img
                    src={DESIGNER_POLAROID}
                    alt="Kanak & Harshi in their sunlit design studio"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#FFFDFB]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-medium text-[#34282C] flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C47B89]" />
                    Studio 04, Paris & Remote
                  </div>
                </div>

                {/* Polaroid handwritten caption */}
                <div className="px-2 pb-1 flex items-center justify-between">
                  <p className="font-script text-xl text-[#59464C]">
                    “in the studio, coffee & typography ♡”
                  </p>
                  <span className="text-xs font-serif italic text-[#9E5262]">est. 2022</span>
                </div>
              </div>

              {/* Layer 3: Pinned cute stationery sticky note */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#FFFDF9] p-4 rounded-xl shadow-paper border border-[#F9D8DE] rotate-[-4deg] max-w-[200px] z-20">
                <div className="flex items-center gap-1.5 mb-1 text-[#C47B89]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#34282C]">Aesthetic DNA</span>
                </div>
                <p className="text-xs font-script text-[#6F555C] leading-snug">
                  Pinterest moodboards turned into clean production code.
                </p>
              </div>

              {/* Decorative pin icon / heart sticker */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FCECEF] border border-[#F4B8C5] shadow-xs flex items-center justify-center -rotate-12 z-20">
                <Heart className="w-4 h-4 text-[#C47B89] fill-[#C47B89]" />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio, Philosophy & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47B89]">
                Behind The Studio
              </span>
              <span className="text-xs font-script text-[#B86B7B] text-base">✦ nice to meet you</span>
            </div>

            {/* Editorial Title */}
            <h2 className="text-4xl sm:text-5xl font-serif font-medium text-[#34282C] leading-[1.15] mb-6">
              Hi, We’re Kanak & Harshi — <br />
              <span className="italic font-normal text-[#C47B89]">We turn romantic vision</span> into high-converting digital flagships.
            </h2>

            {/* Bio Prose */}
            <div className="space-y-4 text-base md:text-lg text-[#59464C] leading-relaxed mb-8">
              <p>
                We are an independent web design, art direction, and creative engineering duo.
                Over the past 5 years, we’ve worked with boutique hospitality retreats, luxury salons,
                architectural studios, and avant-garde creators globally.
              </p>
              <p>
                Too much of the modern web feels identical: stark tech boxes, generic SaaS templates,
                and cold corporate grids. We believe your website should feel like walking into a luxury
                boutique — tactile, inspiring, deeply personal, and completely unforgettable.
              </p>
            </div>

            {/* 3 Editorial Value Badges (Unboxed metadata style) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 pb-8 border-t border-b border-[#F9D8DE]/80 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#F4B8C5] flex items-center justify-center shrink-0 shadow-2xs">
                  <Palette className="w-4 h-4 text-[#C47B89]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#34282C]">Editorial Taste</h4>
                  <p className="text-xs text-[#7A646A] mt-0.5">Curation with warmth, never generic AI slop.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#F4B8C5] flex items-center justify-center shrink-0 shadow-2xs">
                  <Code2 className="w-4 h-4 text-[#C47B89]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#34282C]">Bespoke Engineering</h4>
                  <p className="text-xs text-[#7A646A] mt-0.5">Pixel-perfect code, ultra fast load times.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#F4B8C5] flex items-center justify-center shrink-0 shadow-2xs">
                  <Coffee className="w-4 h-4 text-[#C47B89]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#34282C]">White-Glove Care</h4>
                  <p className="text-xs text-[#7A646A] mt-0.5">Direct 1-on-1 collaboration from brief to launch.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex items-center gap-6">
              <button
                onClick={onOpenAboutModal}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#FFFDF9] hover:bg-[#FCECEF] text-[#34282C] text-xs font-semibold uppercase tracking-wider rounded-full border border-[#F4B8C5] shadow-xs hover:border-[#C47B89] transition-all duration-200 cursor-pointer"
              >
                <span>GET TO KNOW ME</span>
                <ArrowRight className="w-4 h-4 text-[#C47B89] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="font-script text-lg text-[#B86B7B] rotate-[-2deg]">
                read my design philosophy ✍︎
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
