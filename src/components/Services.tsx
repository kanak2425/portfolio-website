import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, Clock, Check, Heart } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';

interface ServicesProps {
  onOpenQuiz: () => void;
  onSelectService: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuiz, onSelectService }) => {
  return (
    <section id="services" className="py-24 md:py-36 relative bg-[#FAF6F3]/85 backdrop-blur-[2px] border-t border-[#F9D8DE]/80">
      {/* Delicate background gingham accents */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gingham opacity-40 rounded-3xl rotate-6 blur-md pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47B89]">
                Bespoke Offerings
              </span>
              <span className="text-xs font-script text-[#B86B7B] text-base">✦ stationery notes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-[#34282C] tracking-tight">
              Design & Architecture Services
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFDFB] hover:bg-[#FCECEF] text-[#34282C] text-xs font-semibold uppercase tracking-wider rounded-full border border-[#F4B8C5] shadow-xs hover:shadow-paper transition-all cursor-pointer group"
            >
              <span>WHAT CAN WE BUILD?</span>
              <ArrowRight className="w-4 h-4 text-[#C47B89] group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-xs font-script text-[#B86B7B] mt-1.5 rotate-[-1deg]">
              tell us about your dream vision ♡
            </span>
          </div>
        </div>

        {/* Stationery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const rotations = ['rotate-[-0.8deg]', 'rotate-[0.9deg]', 'rotate-[-0.6deg]', 'rotate-[0.7deg]', 'rotate-[-1deg]', 'rotate-[0.8deg]'];
            const cardRotation = rotations[index % rotations.length];

            return (
              <div
                key={service.id}
                className={`${cardRotation} hover:rotate-0 transition-transform duration-300 flex`}
              >
                <div className="relative w-full bg-[#FFFDFB] rounded-2xl p-6 sm:p-7 border border-[#F4B8C5]/80 shadow-paper hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                  {/* Subtle stationery washi tape on top of every other card */}
                  {index % 2 === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#F9D8DE]/80 backdrop-blur-2xs rotate-[-1deg] border-l border-r border-[#C47B89]/20 shadow-2xs z-10" />
                  )}

                  <div>
                    {/* Card Top Row: Step Index & Timeline */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#F9D8DE] mb-4">
                      <span className="text-xs font-mono font-bold text-[#C47B89]">
                        {service.step} / 06
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-[#7A646A] bg-[#FFF9FA] px-2.5 py-0.5 rounded-full border border-[#F9D8DE]">
                        <Clock className="w-3 h-3 text-[#C47B89]" />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-serif font-medium text-[#34282C] group-hover:text-[#C47B89] transition-colors mb-2">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-script text-[#B86B7B] text-base leading-snug mb-3">
                      “{service.tagline}”
                    </p>

                    {/* Body description */}
                    <p className="text-sm text-[#59464C] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#34282C]">
                        Includes:
                      </p>
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[#59464C]">
                          <Check className="w-3.5 h-3.5 text-[#C47B89] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA & Pricing */}
                  <div className="pt-4 border-t border-[#F9D8DE]/70 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#7A646A] uppercase tracking-wider block">Investment</span>
                      <span className="text-base font-serif font-semibold text-[#34282C]">
                        from {service.priceStarting}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FCECEF] hover:bg-[#F9D8DE] text-[#34282C] text-xs font-semibold uppercase tracking-wider border border-[#F4B8C5] shadow-2xs transition-colors cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C47B89]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Banner */}
        <div className="mt-16 bg-[#FFFDFB] rounded-3xl p-8 border border-[#F4B8C5] shadow-paper flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FCECEF] border border-[#F4B8C5] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#C47B89]" />
            </div>
            <div>
              <h4 className="text-xl font-serif font-medium text-[#34282C]">
                Need something custom or a hybrid retainer?
              </h4>
              <p className="text-sm text-[#59464C] mt-0.5">
                We also offer monthly creative direction retainers and bespoke micro-app development.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuiz}
            className="px-6 py-3 rounded-full bg-[#34282C] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider hover:bg-[#44373B] transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            Calculate Custom Scope ↗
          </button>
        </div>
      </div>
    </section>
  );
};
