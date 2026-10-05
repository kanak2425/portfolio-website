import React from 'react';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-36 relative bg-[#FFFDFB]/75 backdrop-blur-[2px] overflow-hidden">
      {/* Decorative background paper patches */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gingham-soft opacity-30 rounded-3xl blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47B89]">
              How We Work
            </span>
            <span className="text-xs font-script text-[#B86B7B] text-base">✦ step-by-step calm</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-[#34282C] tracking-tight mb-4">
            The 4-Step Creative Journey
          </h2>
          <p className="text-base sm:text-lg text-[#59464C]">
            A transparent, collaborative roadmap designed to make creating your dream website feel organized, effortless, and deeply inspiring.
          </p>
        </div>

        {/* Process Timeline Cards */}
        <div className="relative">
          {/* Delicate editorial dashed line connecting steps on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 border-t-2 border-dashed border-[#F4B8C5] -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => {
              const rotations = ['rotate-[-1.2deg]', 'rotate-[1.4deg]', 'rotate-[-1deg]', 'rotate-[1.2deg]'];
              const cardRotation = rotations[idx % rotations.length];

              return (
                <div
                  key={step.number}
                  className={`${cardRotation} hover:rotate-0 transition-transform duration-300 flex`}
                >
                  <div className="relative w-full bg-[#FFFDFB] rounded-2xl p-6 sm:p-7 border border-[#F4B8C5]/80 shadow-paper flex flex-col justify-between group">
                    {/* Metallic Pin or Washi Tape top accent */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#FAF0F2] border-2 border-[#C47B89] flex items-center justify-center shadow-xs">
                      <div className="w-2 h-2 rounded-full bg-[#C47B89]" />
                    </div>

                    <div>
                      {/* Step Number + Title */}
                      <div className="text-center pt-2 pb-4 border-b border-[#F9D8DE] mb-4">
                        <span className="text-xs font-mono font-bold text-[#C47B89] tracking-widest block mb-1">
                          PHASE {step.number}
                        </span>
                        <h3 className="text-2xl font-serif font-medium text-[#34282C]">
                          {step.title}
                        </h3>
                        <p className="text-xs text-[#7A646A] font-medium mt-0.5">
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#59464C] leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Details Bullet points */}
                      <div className="space-y-2 mb-6">
                        {step.details.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-[#44373B]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C47B89] shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Handwritten sticky note note */}
                    <div className="pt-3 border-t border-[#F9D8DE]/80 text-center">
                      <p className="font-script text-base text-[#B86B7B] rotate-[-1deg]">
                        {step.note}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Guarantee Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[#FFFDF9] border border-[#F9D8DE] px-6 py-2.5 rounded-full shadow-xs">
            <Heart className="w-4 h-4 fill-[#F9D8DE] text-[#C47B89]" />
            <span className="text-xs sm:text-sm font-medium text-[#59464C]">
              Zero ghosting guarantee: regular weekly Loom video reviews & shared Notion dashboard
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
