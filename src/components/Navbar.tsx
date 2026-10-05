import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Heart, RotateCcw } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onOpenQuiz: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onOpenAbout,
  onOpenQuiz,
  onReplayIntro,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FFFDFB]/90 border-b border-[#F9D8DE]/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2 text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#34282C] hover:text-[#C47B89] transition-colors"
        >
          <span>AI ADDA AGENCY</span>
          <span className="text-sm font-sans font-medium text-[#C47B89] group-hover:rotate-12 transition-transform inline-block">
            ♡
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links with subtle hover underline */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-[#59464C]">
          <button
            onClick={() => scrollTo('work')}
            className="hover:text-[#C47B89] transition-colors cursor-pointer py-1 relative group"
          >
            Selected Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C47B89] group-hover:w-full transition-all duration-250" />
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="hover:text-[#C47B89] transition-colors cursor-pointer py-1 relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C47B89] group-hover:w-full transition-all duration-250" />
          </button>
          <button
            onClick={() => scrollTo('process')}
            className="hover:text-[#C47B89] transition-colors cursor-pointer py-1 relative group"
          >
            Process
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C47B89] group-hover:w-full transition-all duration-250" />
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-[#C47B89] transition-colors cursor-pointer py-1 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C47B89] group-hover:w-full transition-all duration-250" />
          </button>
          <button
            onClick={() => scrollTo('testimonials')}
            className="hover:text-[#C47B89] transition-colors cursor-pointer py-1 relative group"
          >
            Love Notes
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C47B89] group-hover:w-full transition-all duration-250" />
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#7A646A] hover:text-[#34282C] hover:bg-[#FCECEF] rounded-full border border-[#F9D8DE] transition-colors cursor-pointer"
              title="Replay cinematic paper opening"
            >
              <RotateCcw className="w-3 h-3 text-[#C47B89]" />
              <span className="hidden sm:inline font-mono text-[11px]">Replay Intro</span>
            </button>
          )}

          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#34282C] bg-[#FCECEF] hover:bg-[#F9D8DE] border border-[#F4B8C5] rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>Let’s Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C47B89]" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#34282C] hover:text-[#C47B89] rounded-lg hover:bg-[#FCECEF]/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDFB] border-b border-[#F9D8DE] px-6 py-6 shadow-paper transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#44373B]">
            <button
              onClick={() => scrollTo('work')}
              className="text-left py-2 border-b border-[#FCECEF] flex items-center justify-between hover:text-[#C47B89]"
            >
              <span>Selected Work</span>
              <span className="text-xs text-[#C47B89]">01</span>
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-left py-2 border-b border-[#FCECEF] flex items-center justify-between hover:text-[#C47B89]"
            >
              <span>Services</span>
              <span className="text-xs text-[#C47B89]">02</span>
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="text-left py-2 border-b border-[#FCECEF] flex items-center justify-between hover:text-[#C47B89]"
            >
              <span>Process</span>
              <span className="text-xs text-[#C47B89]">03</span>
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-left py-2 border-b border-[#FCECEF] flex items-center justify-between hover:text-[#C47B89]"
            >
              <span>About The Agency</span>
              <span className="text-xs text-[#C47B89]">04</span>
            </button>
            <button
              onClick={() => scrollTo('testimonials')}
              className="text-left py-2 border-b border-[#FCECEF] flex items-center justify-between hover:text-[#C47B89]"
            >
              <span>Love Notes & Proof</span>
              <span className="text-xs text-[#C47B89]">05</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full mt-4 py-3 bg-[#FCECEF] hover:bg-[#F9D8DE] text-[#34282C] font-semibold text-xs uppercase tracking-wider rounded-full border border-[#F4B8C5] shadow-sm flex items-center justify-center gap-2"
            >
              <span>Let’s Work Together</span>
              <ArrowUpRight className="w-4 h-4 text-[#C47B89]" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
