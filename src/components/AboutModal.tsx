import React from 'react';
import { X, Heart, Sparkles, Coffee, Palette, Code2, Music, Check, ArrowRight } from 'lucide-react';
import { DESIGNER_POLAROID } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const tools = [
    { name: 'Figma', category: 'Art Direction & Prototyping' },
    { name: 'React & Next.js', category: 'Frontend Architecture' },
    { name: 'Tailwind CSS', category: 'Tactile Styling' },
    { name: 'Framer Motion', category: 'Buttery Micro-Interactions' },
    { name: 'Shopify Plus / Liquid', category: 'E-Commerce Infrastructure' },
    { name: 'Generative AI Tools', category: 'Creative Ideation & Sandboxing' },
  ];

  const studioRules = [
    'No cookie-cutter templates. Ever.',
    'Aesthetics and speed are not enemies—both must be 100/100.',
    'Every interaction should feel tactile and intentional.',
    'Clear, respectful communication with zero ghosting.',
    'Design for dwell time: create websites people linger on.',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#2B2326]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#FFFDFB] rounded-3xl shadow-2xl border border-[#F4B8C5] p-6 sm:p-10 text-[#34282C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Washi tape at top */}
        <div className="w-28 h-5 bg-[#F9D8DE]/90 mx-auto -mt-3 mb-6 rotate-[-1deg] border-l border-r border-[#C47B89]/30 shadow-2xs" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#FFF9FA] hover:bg-[#FCECEF] text-[#59464C] hover:text-[#34282C] border border-[#F9D8DE] transition-colors cursor-pointer"
          aria-label="Close about modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47B89]">
              The Studio Story
            </span>
            <span className="text-xs font-script text-[#B86B7B] text-base">✦ get to know me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#34282C]">
            Crafting Digital Poetry With Precision Code
          </h2>
        </div>

        {/* Content Layout */}
        <div className="space-y-8 text-[#59464C]">
          {/* Studio Story Prose */}
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              We founded AI ADDA AGENCY with a simple conviction: 
              <strong> the internet shouldn't feel like a sterile office building.</strong>
            </p>
            <p>
              Growing up, Kanak & Harshi spent hours collecting vintage fashion magazines, Japanese stationery,
              and textured art papers. When we transitioned into software engineering and bespoke web design,
              we noticed how cold and robotic most modern websites had become. Tech founders and boutique
              creators were forced to pick between clunky DIY builders or generic, corporate SaaS templates.
            </p>
            <p>
              Today, we blend tactile physical nostalgia—paper grain, gingham checks, delicate serifs,
              warm blush palettes—with modern web engineering, lightning-fast Core Web Vitals, and
              conversion-tested UX architecture.
            </p>
          </div>

          {/* Studio Rules */}
          <div className="bg-[#FAF6F3] p-6 rounded-2xl border border-[#F4B8C5]/70 shadow-2xs">
            <h3 className="text-lg font-serif font-medium text-[#34282C] mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C47B89]" />
              <span>Studio Non-Negotiables</span>
            </h3>
            <ul className="space-y-2.5">
              {studioRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#44373B]">
                  <Check className="w-4 h-4 text-[#C47B89] shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Stack */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#34282C] mb-4">
              Creative & Technical Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="p-3 bg-[#FFF9FA] border border-[#F9D8DE] rounded-xl flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-[#34282C]">{t.name}</span>
                  <span className="text-xs text-[#7A646A]">{t.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Studio Vibe / Music */}
          <div className="p-4 bg-[#FFFDFB] border border-[#F4B8C5] rounded-xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FCECEF] flex items-center justify-center shrink-0">
              <Music className="w-5 h-5 text-[#C47B89]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#34282C]">
                Studio Playlist On Repeat
              </p>
              <p className="text-xs text-[#7A646A]">
                Bossa nova vinyl, French bedroom pop, and quiet piano lo-fi.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-8 mt-8 border-t border-[#F9D8DE] flex flex-wrap items-center justify-between gap-4">
          <span className="font-script text-lg text-[#B86B7B]">
            let’s make something beautiful together ♡
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#F4B8C5] text-xs font-semibold text-[#59464C] hover:bg-[#FCECEF] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#34282C] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider hover:bg-[#44373B] transition-colors cursor-pointer shadow-paper"
            >
              <span>Work With Kanak & Harshi</span>
              <ArrowRight className="w-4 h-4 text-[#F9D8DE]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
