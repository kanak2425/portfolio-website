/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutScrapbook } from './components/AboutScrapbook';
import { SelectedWork } from './components/SelectedWork';
import { ProjectModal } from './components/ProjectModal';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { ContactModal } from './components/ContactModal';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';
import { AestheticMusicPlayer } from './components/AestheticMusicPlayer';
import { CinematicPaperIntro } from './components/CinematicPaperIntro';
import { Project, Service } from './types';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [bgTheme, setBgTheme] = useState<'gingham' | 'crumpled'>('gingham');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [quizBrief, setQuizBrief] = useState<{
    scope: string;
    timeline: string;
    aesthetic: string;
    estimatedPrice: string;
  } | null>(null);

  const handleOpenContact = () => {
    setQuizBrief(null);
    setIsContactOpen(true);
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuiz = () => {
    setIsContactOpen(true);
  };

  const handleSelectService = (service: Service) => {
    setQuizBrief({
      scope: service.title,
      timeline: service.duration,
      aesthetic: 'Editorial & Bespoke Stationery',
      estimatedPrice: service.priceStarting,
    });
    setIsContactOpen(true);
  };

  return (
    <div className={`min-h-screen flex flex-col ${bgTheme === 'gingham' ? 'bg-gingham-hearts' : 'bg-crumpled-hearts'} text-[#34282C] relative transition-all duration-500`}>
      {/* Cinematic Opening Animation with user's background */}
      {showIntro && (
        <CinematicPaperIntro
          onComplete={() => setShowIntro(false)}
          bgTheme={bgTheme}
        />
      )}

      {/* Top 3-Zone Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenQuiz={handleOpenQuiz}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenContact={handleOpenContact}
          onScrollToWork={handleScrollToWork}
        />

        {/* 2. About / Scrapbook Intro Section */}
        <AboutScrapbook
          onOpenAboutModal={() => setIsAboutOpen(true)}
        />

        {/* 3. Selected Work (Main visual section) */}
        <SelectedWork
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4. Services Stationery Grid */}
        <Services
          onOpenQuiz={handleOpenQuiz}
          onSelectService={handleSelectService}
        />

        {/* 5. 4-Step Process Timeline */}
        <Process />

        {/* 6. Why Work With Me */}
        <WhyWorkWithMe
          onOpenContact={handleOpenContact}
        />

        {/* 7. Testimonials / Love Notes */}
        <Testimonials />

        {/* 8. Final CTA */}
        <FinalCTA
          onOpenContact={handleOpenContact}
          onScrollToWork={handleScrollToWork}
        />
      </main>

      {/* 10. Minimal Aesthetic Footer */}
      <Footer />

      {/* Ambient Lo-Fi Studio Sound Player */}
      <AestheticMusicPlayer />

      {/* Floating Moodboard Wallpaper Switcher */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setBgTheme(bgTheme === 'gingham' ? 'crumpled' : 'gingham')}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-[#F4B8C5] bg-[#FFFDFB]/95 hover:bg-[#FCECEF] text-[#34282C] shadow-paper hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95"
          title="Switch between the two uploaded moodboard backgrounds"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#C47B89] animate-pulse" />
          <span className="text-xs font-semibold tracking-wide">
            {bgTheme === 'gingham' ? 'Pattern: Gingham Hearts 🌸' : 'Pattern: Crumpled Linen 📄'}
          </span>
          <span className="text-xs font-script text-[#B86B7B]">switch ♡</span>
        </button>
      </div>

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setQuizBrief(null);
        }}
        initialBrief={quizBrief}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenContact={() => {
          setIsAboutOpen(false);
          setIsContactOpen(true);
        }}
      />
    </div>
  );
}
