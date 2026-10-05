import React from 'react';
import { Heart, ArrowUp, Instagram, Linkedin, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF6F3] border-t border-[#F9D8DE] py-16 relative overflow-hidden">
      {/* Background delicate gingham strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gingham opacity-80" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#F9D8DE]/80">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-serif font-bold text-[#34282C] hover:text-[#C47B89] transition-colors"
            >
              AI ADDA AGENCY
            </a>
            <p className="text-xs text-[#7A646A] mt-1">
              Aesthetic web design & digital flagships for modern creators.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#59464C]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C47B89] transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4 text-[#C47B89]" />
              <span>Instagram</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C47B89] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4 text-[#C47B89]" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:hello@aiaddaagency.com"
              className="hover:text-[#C47B89] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-[#C47B89]" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top with heart */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFDFB] hover:bg-[#FCECEF] text-xs font-medium text-[#59464C] rounded-full border border-[#F4B8C5] shadow-2xs transition-all cursor-pointer group"
            >
              <span>Back to top</span>
              <Heart className="w-3.5 h-3.5 fill-[#F9D8DE] text-[#C47B89] group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A646A]">
          <p>© {new Date().getFullYear()} AI ADDA AGENCY. All rights reserved.</p>

          <p className="font-script text-xl text-[#B86B7B] rotate-[-1deg]">
            designed with intention ♡
          </p>

          <p className="font-mono text-[11px] text-[#A68F95]">
            100% bespoke · Paris / Tokyo / Remote
          </p>
        </div>
      </div>
    </footer>
  );
};
