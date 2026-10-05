import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Heart } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Hospitality',
    'Interior & Design',
    'Beauty & Salon',
    'Automotive & Craft',
    'Food & Beverage',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 md:py-36 relative bg-[#FFFDFB]/75 backdrop-blur-[2px]">
      {/* Decorative background paper patches */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-gingham-soft opacity-40 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#FCECEF] opacity-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47B89]">
                Portfolio Showcase
              </span>
              <span className="text-xs font-script text-[#B86B7B] text-base">✦ 5 live websites</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-[#34282C] tracking-tight">
              Selected Work
            </h2>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF6F3] border border-[#F4B8C5]/70 rounded-full shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#34282C] text-[#FFFDF9] shadow-sm font-semibold'
                    : 'text-[#59464C] hover:text-[#34282C] hover:bg-[#FCECEF]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest-Inspired Editorial Asymmetrical Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => {
            // Asymmetrical layout:
            // 0: Oversized featured (col-span-12 or col-span-7)
            // 1: Editorial portrait/medium (col-span-5)
            // 2: Medium (col-span-5)
            // 3: Wide (col-span-7)
            // 4: Full-width or centered
            const spanClass =
              index === 0
                ? 'lg:col-span-7'
                : index === 1
                ? 'lg:col-span-5'
                : index === 2
                ? 'lg:col-span-5'
                : index === 3
                ? 'lg:col-span-7'
                : 'lg:col-span-12';

            const rotationClass =
              index % 4 === 0
                ? 'rotate-[-0.75deg]'
                : index % 4 === 1
                ? 'rotate-[0.9deg]'
                : index % 4 === 2
                ? 'rotate-[-0.6deg]'
                : 'rotate-[0.8deg]';

            const cleanDomain = project.liveUrl
              .replace('https://', '')
              .replace('/', '');

            return (
              <div
                key={project.id}
                className={`${spanClass} ${rotationClass} hover:rotate-0 transition-transform duration-500`}
              >
                <div className="group relative bg-[#FFFDFB] p-5 sm:p-7 rounded-3xl border border-[#F4B8C5]/70 shadow-paper hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-full">
                  {/* Decorative washi tape on selected cards */}
                  {index % 2 === 0 && (
                    <div className="absolute -top-3.5 left-12 w-20 h-5 bg-[#F9D8DE]/80 backdrop-blur-2xs rotate-[-2deg] border-l border-r border-[#C47B89]/30 shadow-2xs z-10 pointer-events-none" />
                  )}

                  {/* Browser Mockup Window */}
                  <div>
                    <div className="flex items-center justify-between px-3 py-2 border-b border-[#F9D8DE] bg-[#FFF9FA] rounded-t-xl mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F4B8C5]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F9D8DE]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5D2D6]" />
                      </div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-sans text-[#87636D] hover:text-[#C47B89] truncate max-w-[240px] bg-[#FFFDFB] px-3 py-0.5 rounded-full border border-[#F9D8DE]/70 flex items-center gap-1 transition-colors"
                        title={`Open live site: ${project.liveUrl}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{cleanDomain}</span>
                        <ExternalLink className="w-3 h-3 text-[#C47B89] shrink-0" />
                      </a>
                      <span className="text-[11px] font-mono text-[#C47B89]">{project.year}</span>
                    </div>

                    {/* Project Image Frame with zoom on hover */}
                    <div
                      onClick={() => onSelectProject(project)}
                      className="relative overflow-hidden rounded-2xl bg-[#FAF8F5] aspect-[16/10] mb-5 cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#34282C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFFDFB]/95 text-[#34282C] text-xs font-semibold uppercase tracking-wider shadow-md">
                          Explore Case Study <ArrowUpRight className="w-3.5 h-3.5 text-[#C47B89]" />
                        </span>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#34282C] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-[#44373B] transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#F9D8DE]" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Details Footer */}
                  <div>
                    {/* Unboxed category metadata with typographic separator */}
                    <div className="flex items-center gap-2 text-xs text-[#7A646A] mb-2 font-medium">
                      <span className="text-[#C47B89] font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span>·</span>
                      <span>{project.industry}</span>
                    </div>

                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-2xl sm:text-3xl font-serif font-medium text-[#34282C] group-hover:text-[#C47B89] transition-colors cursor-pointer"
                      >
                        {project.name}
                      </h3>
                      <span className="hidden sm:inline-block text-xs font-sans font-bold text-[#C47B89] bg-[#FFF9FA] border border-[#F9D8DE] px-3 py-1 rounded-full tabular-nums shrink-0">
                        {project.metrics.value}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#59464C] leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-[#F9D8DE]/70 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#34282C] hover:text-[#C47B89] transition-colors cursor-pointer"
                        >
                          CASE STUDY
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#C47B89] hover:underline"
                        >
                          VISIT LIVE
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <span className="text-xs font-script text-[#B86B7B] text-sm">
                        {project.deliverables[0]} ♡
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout Note */}
        <div className="mt-16 text-center">
          <p className="font-script text-2xl text-[#87636D]">
            click any card to view the case study or explore the live websites directly ♡
          </p>
        </div>
      </div>
    </section>
  );
};
