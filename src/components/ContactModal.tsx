import React, { useState, useEffect } from 'react';
import { X, Send, Heart, Check, Sparkles, Calendar } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBrief?: {
    scope: string;
    timeline: string;
    aesthetic: string;
    estimatedPrice: string;
  } | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialBrief,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandName: '',
    projectScope: 'Complete Brand Website',
    budget: '$5,000 – $8,000',
    timeline: 'Within 4-6 weeks',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialBrief) {
      setFormData((prev) => ({
        ...prev,
        projectScope: initialBrief.scope,
        timeline: initialBrief.timeline,
        message: `Estimated investment calculated: ${initialBrief.estimatedPrice}. Desired aesthetic vibe: ${initialBrief.aesthetic}.`,
      }));
    }
  }, [initialBrief]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate realistic swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#2B2326]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#FFFDFB] rounded-3xl shadow-2xl border border-[#F4B8C5] p-6 sm:p-10 text-[#34282C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Washi tape visual on top */}
        <div className="w-28 h-5 bg-[#F9D8DE]/90 mx-auto -mt-3 mb-6 rotate-[-1deg] border-l border-r border-[#C47B89]/30 shadow-2xs" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#FFF9FA] hover:bg-[#FCECEF] text-[#59464C] hover:text-[#34282C] border border-[#F9D8DE] transition-colors cursor-pointer"
          aria-label="Close inquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Stationery State */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#FCECEF] border border-[#F4B8C5] mx-auto flex items-center justify-center mb-6 shadow-sm">
              <Heart className="w-8 h-8 text-[#C47B89] fill-[#C47B89]" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-[#C47B89] block mb-2">
              Note Received With Love
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-medium text-[#34282C] mb-4">
              Thank you, {formData.name || 'friend'}!
            </h3>

            <p className="text-base text-[#59464C] max-w-md mx-auto mb-6 leading-relaxed">
              Your inquiry has landed gently in my studio inbox. I personally review every brief and will reply with thoughtful initial ideas within 24 business hours.
            </p>

            <div className="p-4 bg-[#FFF9FA] rounded-2xl border border-[#F9D8DE] text-xs text-[#7A646A] max-w-sm mx-auto mb-8 font-script text-base">
              “great websites begin with a quiet, genuine conversation” ♡
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-[#34282C] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#44373B] transition-colors cursor-pointer"
            >
              Return To Portfolio
            </button>
          </div>
        ) : (
          /* Inquiry Form */
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47B89]">
                  Start A Project
                </span>
                <span className="text-xs font-script text-[#B86B7B] text-base">✦ bespoke inquiry</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#34282C]">
                Let’s Work Together
              </h2>
              <p className="text-sm text-[#59464C] mt-2">
                Tell me a little about your brand and what you’re dreaming of building.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44373B] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Camille Delacroix"
                    className="w-full px-4 py-3 rounded-xl border border-[#F9D8DE] bg-[#FFF9FA] focus:bg-[#FFFDFB] focus:border-[#C47B89] outline-none text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44373B] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="camille@brand.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#F9D8DE] bg-[#FFF9FA] focus:bg-[#FFFDFB] focus:border-[#C47B89] outline-none text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44373B] mb-1.5">
                    Brand / Company / Instagram
                  </label>
                  <input
                    type="text"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    placeholder="e.g. Maison Aveline (@maisonaveline)"
                    className="w-full px-4 py-3 rounded-xl border border-[#F9D8DE] bg-[#FFF9FA] focus:bg-[#FFFDFB] focus:border-[#C47B89] outline-none text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44373B] mb-1.5">
                    Project Scope
                  </label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F9D8DE] bg-[#FFF9FA] focus:bg-[#FFFDFB] focus:border-[#C47B89] outline-none text-sm transition-colors cursor-pointer"
                  >
                    <option value="Landing Page">High-Converting Landing Page</option>
                    <option value="Complete Brand Website">Complete Brand Website (5-8 Pages)</option>
                    <option value="Shopify E-Commerce">Shopify / Boutique E-Commerce</option>
                    <option value="Website Redesign">Editorial Website Redesign</option>
                    <option value="AI-Powered Micro-Tool">AI-Powered Website / Micro-Tool</option>
                    <option value="Art Direction Retainer">Monthly Creative Direction Retainer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44373B] mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F9D8DE] bg-[#FFF9FA] focus:bg-[#FFFDFB] focus:border-[#C47B89] outline-none text-sm transition-colors cursor-pointer"
                  >
                    <option value="$3,000 – $5,000">$3,000 – $5,000</option>
                    <option value="$5,000 – $8,000">$5,000 – $8,000</option>
                    <option value="$8,000 – $15,000">$8,000 – $15,000</option>
                    <option value="$15,000+">$15,000+ (Multi-phase flagship)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44373B] mb-1.5">
                    Target Launch
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F9D8DE] bg-[#FFF9FA] focus:bg-[#FFFDFB] focus:border-[#C47B89] outline-none text-sm transition-colors cursor-pointer"
                  >
                    <option value="Within 2-3 weeks (Express)">Within 2-3 weeks (Express)</option>
                    <option value="Within 4-6 weeks">Within 4-6 weeks (Standard)</option>
                    <option value="Next Quarter">Next Quarter</option>
                    <option value="Flexible">Flexible / Ongoing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#44373B] mb-1.5">
                  Project Details & Dream Aesthetic *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your brand, what makes you unique, and any dream aesthetic references (Pinterest boards, favorite sites, etc.)..."
                  className="w-full px-4 py-3 rounded-xl border border-[#F9D8DE] bg-[#FFF9FA] focus:bg-[#FFFDFB] focus:border-[#C47B89] outline-none text-sm transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#34282C] hover:bg-[#44373B] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-full shadow-paper transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Sending your note...</span>
                  ) : (
                    <>
                      <span>Send Project Note ↗</span>
                      <Send className="w-3.5 h-3.5 text-[#F9D8DE]" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs text-[#87636D] font-script text-base">
                  no spam ever · strictly confidential creative collaboration ♡
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
