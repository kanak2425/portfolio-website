import React, { useState } from 'react';
import { X, ArrowUpRight, Check, Heart, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'palette' | 'deliverables'>('overview');

  if (!project) return null;

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#2B2326]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#FFFDFB] rounded-3xl shadow-2xl border border-[#F4B8C5] p-6 sm:p-8 md:p-10 text-[#34282C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Washi tape visual at top */}
        <div className="w-24 h-5 bg-[#F9D8DE]/90 mx-auto -mt-3 mb-6 rotate-[-1deg] border-l border-r border-[#C47B89]/30 shadow-2xs" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#FFF9FA] hover:bg-[#FCECEF] text-[#59464C] hover:text-[#34282C] border border-[#F9D8DE] transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A646A] mb-3">
          <span className="font-semibold uppercase tracking-wider text-[#C47B89]">
            {project.category}
          </span>
          <span>·</span>
          <span>{project.industry}</span>
          <span>·</span>
          <span>Launched {project.year}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#34282C] mb-3">
          {project.name}
        </h2>

        <p className="text-base sm:text-lg text-[#59464C] max-w-2xl mb-6">
          {project.tagline}
        </p>

        {/* Key Metric Highlight Banner */}
        <div className="inline-flex items-center gap-4 bg-[#FFF9FA] border border-[#F9D8DE] px-5 py-2.5 rounded-2xl mb-8 shadow-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C47B89]" />
            <span className="text-xs uppercase tracking-wider font-semibold text-[#34282C]">
              Verified Outcome
            </span>
          </div>
          <span className="text-sm font-sans font-bold text-[#C47B89] bg-[#FFFDFB] px-3 py-1 rounded-full border border-[#F4B8C5]">
            {project.metrics.value} {project.metrics.label}
          </span>
        </div>

        {/* Browser Mockup Frame */}
        <div className="bg-[#FAF6F3] p-3 sm:p-4 rounded-2xl border border-[#F4B8C5]/60 shadow-paper mb-8">
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#F9D8DE] bg-[#FFFDFB] rounded-t-xl mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4B8C5]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F9D8DE]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5D2D6]" />
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#87636D] hover:text-[#C47B89] font-mono tracking-tight flex items-center gap-1.5 transition-colors underline"
            >
              <span>{project.liveUrl}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C47B89]" />
            </a>
            <span className="text-xs font-script text-[#C47B89]">live deployment ✦</span>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#FAF8F5]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Tabs for details */}
        <div className="flex items-center gap-2 border-b border-[#F9D8DE] pb-3 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#FCECEF] text-[#34282C] border border-[#F4B8C5]'
                : 'text-[#7A646A] hover:text-[#34282C]'
            }`}
          >
            Case Study Overview
          </button>
          <button
            onClick={() => setActiveTab('palette')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
              activeTab === 'palette'
                ? 'bg-[#FCECEF] text-[#34282C] border border-[#F4B8C5]'
                : 'text-[#7A646A] hover:text-[#34282C]'
            }`}
          >
            Color Swatches & Palette
          </button>
          <button
            onClick={() => setActiveTab('deliverables')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
              activeTab === 'deliverables'
                ? 'bg-[#FCECEF] text-[#34282C] border border-[#F4B8C5]'
                : 'text-[#7A646A] hover:text-[#34282C]'
            }`}
          >
            Scope & Deliverables
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6 text-[#59464C]">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#34282C] mb-2">
                The Brand Vision & Challenge
              </h4>
              <p className="text-base leading-relaxed">{project.challenges}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#34282C] mb-2">
                The Creative & Technical Solution
              </h4>
              <p className="text-base leading-relaxed">{project.solution}</p>
            </div>

            <div className="p-4 bg-[#FFF9FA] border border-[#F9D8DE] rounded-xl text-sm italic font-serif">
              "{project.overview}"
            </div>
          </div>
        )}

        {activeTab === 'palette' && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#34282C] mb-4">
              Curated Moodboard Swatches (Click to copy HEX)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.colorPalette.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => copyHex(color.hex)}
                  className="group p-3 rounded-xl border border-[#F4B8C5]/60 bg-[#FFFDFB] text-left shadow-2xs hover:shadow-paper transition-all cursor-pointer"
                >
                  <div
                    className="w-full h-16 rounded-lg mb-2 border border-black/5"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#34282C]">
                      {color.name}
                    </span>
                    {copiedHex === color.hex ? (
                      <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
                        <Check className="w-3 h-3" /> Copied
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-[#7A646A] group-hover:text-[#C47B89]">
                        {color.hex}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'deliverables' && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#34282C] mb-4">
              What was delivered for {project.client}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 p-3 bg-[#FFF9FA] border border-[#F9D8DE] rounded-xl text-sm text-[#44373B]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#C47B89]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modal Footer CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-8 border-t border-[#F9D8DE]">
          <div className="flex items-center gap-2 text-xs font-script text-[#B86B7B] text-base">
            <span>crafted with deliberate slowness & care ♡</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C47B89] bg-[#FFF9FA] text-xs font-semibold text-[#C47B89] hover:bg-[#FCECEF] transition-colors cursor-pointer"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
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
              <span>Build A Site Like This</span>
              <ArrowUpRight className="w-4 h-4 text-[#F9D8DE]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
