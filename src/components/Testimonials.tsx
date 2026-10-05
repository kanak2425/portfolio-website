import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-36 relative bg-[#FFFDFB]/75 backdrop-blur-[2px] overflow-hidden">
      {/* Background soft pink blush circles */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#FCECEF] opacity-50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gingham-soft opacity-40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47B89]">
              Kind Words & Proof
            </span>
            <span className="text-xs font-script text-[#B86B7B] text-base">✦ real love notes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-[#34282C] tracking-tight mb-4">
            Notes From My Clients
          </h2>
          <p className="text-base sm:text-lg text-[#59464C]">
            Thoughtful words from founders and creative directors who trusted me to transform their digital presence.
          </p>
        </div>

        {/* Testimonials Masonry / Grid with imperfect positioning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((item, idx) => {
            return (
              <div
                key={item.id}
                style={{ transform: `rotate(${item.rotation})` }}
                className="hover:!rotate-0 transition-transform duration-300 flex"
              >
                <div className="relative w-full bg-[#FFFDFB] rounded-2xl p-7 sm:p-9 border border-[#F4B8C5]/80 shadow-polaroid hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                  {/* Subtle top washi tape accent */}
                  <div className="absolute -top-3 left-10 w-20 h-5 bg-[#F9D8DE]/80 backdrop-blur-2xs rotate-[-2deg] border-l border-r border-[#C47B89]/30 shadow-2xs z-10" />

                  <div>
                    {/* Stars + Metric */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#F9D8DE] mb-5">
                      <div className="flex items-center gap-1 text-[#C47B89]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F4B8C5] text-[#C47B89]" />
                        ))}
                      </div>

                      <span className="text-xs font-semibold font-sans text-[#C47B89] bg-[#FFF9FA] border border-[#F9D8DE] px-3 py-0.5 rounded-full">
                        {item.metric}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="font-serif italic text-lg sm:text-xl text-[#34282C] leading-relaxed mb-6">
                      {item.quote}
                    </p>
                  </div>

                  {/* Author Lockup */}
                  <div className="pt-4 border-t border-[#F9D8DE]/80 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-[#34282C]">
                        {item.author}
                      </h4>
                      <p className="text-xs text-[#7A646A]">
                        {item.role}, <span className="text-[#C47B89] font-medium">{item.company}</span>
                      </p>
                    </div>

                    <div className="font-script text-base text-[#B86B7B] rotate-[-2deg] flex items-center gap-1">
                      <span>verified client</span>
                      <Heart className="w-3.5 h-3.5 fill-[#F9D8DE] text-[#C47B89]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Stamp */}
        <div className="mt-16 text-center">
          <p className="font-script text-2xl text-[#87636D]">
            every client relationship is built on warmth, precision & mutual respect ♡
          </p>
        </div>
      </div>
    </section>
  );
};
