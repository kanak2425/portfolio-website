import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, RotateCcw, Heart, Calendar, Palette, Layers } from 'lucide-react';

interface ProjectQuizProps {
  onOpenContactWithBrief: (brief: {
    scope: string;
    timeline: string;
    aesthetic: string;
    estimatedPrice: string;
  }) => void;
}

export const ProjectQuiz: React.FC<ProjectQuizProps> = ({ onOpenContactWithBrief }) => {
  const [scope, setScope] = useState<string>('full-website');
  const [timeline, setTimeline] = useState<string>('standard');
  const [aesthetic, setAesthetic] = useState<string>('editorial-chic');

  const scopeOptions = [
    { id: 'landing-page', label: 'High-Converting Landing Page', price: 2800, weeks: '1 – 2 Weeks' },
    { id: 'full-website', label: 'Complete Brand Website (5-8 Pages)', price: 5800, weeks: '3 – 4 Weeks' },
    { id: 'ecommerce', label: 'Shopify / Boutique E-Commerce', price: 4800, weeks: '2 – 3 Weeks' },
    { id: 'redesign-ai', label: 'Full Redesign + AI Interactive Tool', price: 6800, weeks: '4 – 5 Weeks' },
  ];

  const timelineOptions = [
    { id: 'rush', label: 'Rush / Express (Within 2 Weeks)', multiplier: 1.2 },
    { id: 'standard', label: 'Standard Pace (Ideal for depth)', multiplier: 1.0 },
    { id: 'flexible', label: 'Flexible / Next Quarter Launch', multiplier: 0.95 },
  ];

  const aestheticOptions = [
    { id: 'editorial-chic', label: 'Soft Editorial & Chic', desc: 'Blush, cream, delicate serif, French Vogue flair' },
    { id: 'pinterest-scrapbook', label: 'Pinterest Moodboard & Tactile', desc: 'Washi tape, polaroid scraps, cozy warmth' },
    { id: 'minimalist-luxury', label: 'High-End Architectural Minimalist', desc: 'Airy whitespace, stark elegance, subtle motion' },
    { id: 'dreamy-ai', label: 'Pastel Dreamscape & Creative AI', desc: 'Soft lilac/coral clouds, glass cards, micro-tools' },
  ];

  const selectedScopeObj = scopeOptions.find((s) => s.id === scope) || scopeOptions[1];
  const selectedTimelineObj = timelineOptions.find((t) => t.id === timeline) || timelineOptions[1];
  const selectedAestheticObj = aestheticOptions.find((a) => a.id === aesthetic) || aestheticOptions[0];

  const estimatedTotal = Math.round(selectedScopeObj.price * selectedTimelineObj.multiplier);

  const handleSendBrief = () => {
    onOpenContactWithBrief({
      scope: selectedScopeObj.label,
      timeline: selectedTimelineObj.label,
      aesthetic: selectedAestheticObj.label,
      estimatedPrice: `$${estimatedTotal.toLocaleString()}`,
    });
  };

  return (
    <section id="estimate" className="py-24 md:py-36 relative bg-[#FAF6F3]/85 backdrop-blur-[2px] border-t border-[#F9D8DE]/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47B89]">
              Instant Project Planner
            </span>
            <span className="text-xs font-script text-[#B86B7B] text-base">✦ 60 seconds</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-[#34282C] tracking-tight mb-3">
            Estimate Your Dream Project
          </h2>
          <p className="text-base text-[#59464C]">
            Select your scope, desired timeframe, and aesthetic mood to generate an instant estimate and tailored project blueprint.
          </p>
        </div>

        {/* Interactive Stationery Calculator Box */}
        <div className="relative bg-[#FFFDFB] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#F4B8C5] shadow-paper">
          {/* Top washi tape */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#F9D8DE]/90 backdrop-blur-2xs rotate-[-1deg] border-l border-r border-[#C47B89]/30 shadow-2xs z-10" />

          {/* Step 1: Project Scope */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-[#FCECEF] text-[#C47B89] font-mono text-xs font-bold flex items-center justify-center border border-[#F4B8C5]">
                1
              </span>
              <h3 className="text-lg font-serif font-medium text-[#34282C]">
                What type of website are we creating?
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scopeOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setScope(opt.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    scope === opt.id
                      ? 'bg-[#FFF9FA] border-[#C47B89] shadow-sm ring-1 ring-[#C47B89]/30'
                      : 'bg-[#FFFDFB] border-[#F9D8DE] hover:border-[#F4B8C5]'
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold text-[#34282C]">{opt.label}</p>
                    <p className="text-xs text-[#7A646A] mt-0.5 font-mono">Est. {opt.weeks}</p>
                  </div>
                  {scope === opt.id && (
                    <div className="w-5 h-5 rounded-full bg-[#C47B89] flex items-center justify-center text-white shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Desired Aesthetic Mood */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-[#FCECEF] text-[#C47B89] font-mono text-xs font-bold flex items-center justify-center border border-[#F4B8C5]">
                2
              </span>
              <h3 className="text-lg font-serif font-medium text-[#34282C]">
                Choose your signature aesthetic direction
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aestheticOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAesthetic(opt.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    aesthetic === opt.id
                      ? 'bg-[#FFF9FA] border-[#C47B89] shadow-sm ring-1 ring-[#C47B89]/30'
                      : 'bg-[#FFFDFB] border-[#F9D8DE] hover:border-[#F4B8C5]'
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold text-[#34282C]">{opt.label}</p>
                    <p className="text-xs text-[#7A646A] mt-0.5">{opt.desc}</p>
                  </div>
                  {aesthetic === opt.id && (
                    <div className="w-5 h-5 rounded-full bg-[#C47B89] flex items-center justify-center text-white shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Launch Timeline */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-[#FCECEF] text-[#C47B89] font-mono text-xs font-bold flex items-center justify-center border border-[#F4B8C5]">
                3
              </span>
              <h3 className="text-lg font-serif font-medium text-[#34282C]">
                What is your target launch schedule?
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {timelineOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setTimeline(opt.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    timeline === opt.id
                      ? 'bg-[#FFF9FA] border-[#C47B89] shadow-sm ring-1 ring-[#C47B89]/30'
                      : 'bg-[#FFFDFB] border-[#F9D8DE] hover:border-[#F4B8C5]'
                  }`}
                >
                  <p className="text-sm font-medium text-[#34282C]">{opt.label}</p>
                  {timeline === opt.id && (
                    <div className="w-4 h-4 rounded-full bg-[#C47B89] flex items-center justify-center text-white shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Calculation Output Box */}
          <div className="p-6 bg-[#FAF6F3] rounded-2xl border border-[#F4B8C5]/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C47B89] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated Investment & Turnaround</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#34282C]">
                  ${estimatedTotal.toLocaleString()}
                </span>
                <span className="text-xs text-[#7A646A] font-mono">
                  / est. {selectedScopeObj.weeks}
                </span>
              </div>
              <p className="text-xs text-[#7A646A] mt-1 font-script text-base">
                Includes bespoke Figma designs, full responsive build & 30-day support ♡
              </p>
            </div>

            <button
              onClick={handleSendBrief}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#34282C] hover:bg-[#44373B] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded-full shadow-paper transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap active:scale-95"
            >
              <span>Apply With This Estimate</span>
              <ArrowRight className="w-4 h-4 text-[#F9D8DE]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
