import React from 'react';
import { Heart, Sparkles, Check, ArrowRight } from 'lucide-react';
import { WHY_US_PILLARS } from '../data/portfolioData';

interface WhyWorkWithMeProps {
  onOpenContact: () => void;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 md:py-36 relative bg-[#FAF6F3]/85 backdrop-blur-[2px] border-y border-[#F9D8DE]/80 overflow-hidden">
      {/* Delicate background gingham strip */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gingham opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gingham opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47B89]">
                The Design Philosophy
              </span>
              <span className="text-xs font-script text-[#B86B7B] text-base">✦ non-negotiables</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-[#34282C] tracking-tight">
              Why Work With Me
            </h2>
          </div>

          <div className="font-script text-xl sm:text-2xl text-[#87636D] rotate-[-2deg]">
            “life is too short for boring templates” ♡
          </div>
        </div>

        {/* 4 Pillars with Oversized Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WHY_US_PILLARS.map((pillar, idx) => {
            const rotations = ['rotate-[-0.6deg]', 'rotate-[0.8deg]', 'rotate-[0.6deg]', 'rotate-[-0.8deg]'];
            const cardRotation = rotations[idx % rotations.length];

            return (
              <div
                key={pillar.title}
                className={`${cardRotation} hover:rotate-0 transition-transform duration-300`}
              >
                <div className="relative bg-[#FFFDFB] p-8 sm:p-10 rounded-3xl border border-[#F4B8C5] shadow-paper hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                  {/* Decorative tiny heart in corner */}
                  <div className="absolute top-6 right-6">
                    <Heart className="w-5 h-5 text-[#F4B8C5] fill-[#FCECEF]" />
                  </div>

                  <div>
                    {/* Highlight Tag */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C47B89] uppercase tracking-wider mb-4">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{pillar.highlight}</span>
                    </div>

                    {/* Oversized Headline */}
                    <h3 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-medium text-[#34282C] leading-tight mb-3">
                      {pillar.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm font-semibold text-[#7A646A] uppercase tracking-wider mb-4">
                      {pillar.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-base text-[#59464C] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Accent line */}
                  <div className="pt-6 mt-6 border-t border-[#F9D8DE] flex items-center justify-between text-xs text-[#7A646A]">
                    <span className="font-mono font-bold text-[#C47B89]">0{idx + 1} / 04</span>
                    <span className="font-script text-base text-[#87636D]">designed with intention ♡</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#34282C] hover:bg-[#44373B] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-full shadow-paper transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Let’s Build Something Distinctive</span>
            <ArrowRight className="w-4 h-4 text-[#F9D8DE]" />
          </button>
        </div>
      </div>
    </section>
  );
};
