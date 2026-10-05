import React from 'react';
import { ArrowUpRight, ArrowDown, Heart, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: () => void;
  onScrollToWork: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact, onScrollToWork }) => {
  return (
    <section className="py-24 md:py-36 relative bg-[#FFFDFB]/75 backdrop-blur-[2px] overflow-hidden">
      {/* Background delicate gingham & soft blush aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#FCECEF] opacity-70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Large Pink Paper/Card Composition with floating hearts */}
        <div className="relative bg-[#FFFDFB] rounded-3xl p-8 sm:p-14 md:p-16 border-2 border-[#F4B8C5] shadow-2xl text-center overflow-hidden">
          
          {/* Subtle Gingham Header Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gingham opacity-75" />

          {/* Top Washi Tape Decoration */}
          <div className="w-28 h-6 bg-[#F9D8DE] mx-auto -mt-10 sm:-mt-16 mb-8 rotate-[-1.5deg] border-l-2 border-r-2 border-dashed border-[#C47B89]/40 shadow-xs" />

          {/* Floating Paper Hearts around card */}
          <div className="absolute top-8 left-8 w-10 h-10 rounded-full bg-[#FFF9FA] border border-[#F4B8C5] shadow-xs flex items-center justify-center -rotate-12 pointer-events-none">
            <Heart className="w-5 h-5 text-[#C47B89] fill-[#C47B89]" />
          </div>

          <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full bg-[#FFF9FA] border border-[#F4B8C5] shadow-xs flex items-center justify-center rotate-12 pointer-events-none">
            <Heart className="w-6 h-6 text-[#C47B89] fill-[#FCECEF]" />
          </div>

          {/* Top note */}
          <div className="inline-flex items-center gap-2 bg-[#FFF9FA] border border-[#F9D8DE] px-4 py-1 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C47B89]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#34282C]">
              Currently Welcoming New Clients
            </span>
            <span className="text-xs font-script text-[#C47B89] text-base">✦ Q2/Q3</span>
          </div>

          {/* Prominent Large Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-medium leading-[1.1] text-[#34282C] tracking-tight mb-6">
            YOUR NEXT WEBSITE <br />
            <span className="italic font-normal text-[#C47B89]">COULD LOOK</span> THIS GOOD.
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#59464C] max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Let’s create something people remember. Tell me about your dream project,
            and let’s craft a digital world that elevates your brand forever.
          </p>

          {/* Prominent Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onScrollToWork}
              className="group inline-flex items-center gap-3 px-9 py-4 bg-[#34282C] hover:bg-[#44373B] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-full shadow-paper transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer active:scale-95"
            >
              <span>SEE OUR WORK</span>
              <ArrowDown className="w-4 h-4 text-[#F9D8DE] group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Handwritten Closing Note */}
          <div className="mt-10 font-script text-2xl text-[#87636D] rotate-[-1deg]">
            “you bring the passion, I’ll bring the poetry & code” ♡
          </div>
        </div>
      </div>
    </section>
  );
};
