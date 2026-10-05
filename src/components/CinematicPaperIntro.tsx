import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, FastForward, RotateCcw } from 'lucide-react';

interface CinematicPaperIntroProps {
  onComplete: () => void;
  bgTheme?: 'gingham' | 'crumpled';
}

export const CinematicPaperIntro: React.FC<CinematicPaperIntroProps> = ({ onComplete, bgTheme = 'gingham' }) => {
  // Stage:
  // 0: Initial clean space (0 - 200ms)
  // 1: Rolling & falling in (200 - 1200ms)
  // 2: Gentle bounce & settle pause (1200 - 1600ms)
  // 3: Unfolding process (1600 - 3200ms)
  // 4: Typography reveal (3200 - 4600ms)
  // 5: Hold composition (4600 - 5800ms)
  // 6: Final transition zoom/fade (5800 - 6600ms)
  const [stage, setStage] = useState<number>(0);
  const [textStep, setTextStep] = useState<number>(0); // 1: Welcome To, 2: AI ADDA, 3: AGENCY + heart
  const [isSkipped, setIsSkipped] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play realistic tactile paper sounds using Web Audio API
  const playPaperSound = (type: 'drop' | 'rustle' | 'chime') => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (type === 'drop') {
        // Soft paper ball impact tap
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(120, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.12);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.14);
      } else if (type === 'rustle') {
        // Filtered noise simulating paper fiber rustling as folds open
        const bufferSize = ctx.sampleRate * 0.4;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.5));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1400, ctx.currentTime);
        filter.Q.setValueAtTime(1.8, ctx.currentTime);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.035, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.38);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
      } else if (type === 'chime') {
        // Delicate soft harmonic chime on typography completion
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.3);
      }
    } catch {
      // Audio autoplay restrictions or unsupported
    }
  };

  useEffect(() => {
    // Stage 1: Ball starts falling & rolling in
    const t1 = setTimeout(() => {
      setStage(1);
    }, 200);

    // Ball hits ground with bounce
    const tImpact = setTimeout(() => {
      playPaperSound('drop');
    }, 850);

    // Ball settles into pause
    const t2 = setTimeout(() => {
      setStage(2);
    }, 1200);

    // Stage 3: Crumpled ball begins to unfold
    const t3 = setTimeout(() => {
      setStage(3);
      playPaperSound('rustle');
    }, 1600);

    // Unfolding flap sound
    const tRustle2 = setTimeout(() => {
      playPaperSound('rustle');
    }, 2400);

    // Stage 4: Typography sequence
    const t4 = setTimeout(() => {
      setStage(4);
    }, 3200);

    const tText1 = setTimeout(() => {
      setTextStep(1); // "WELCOME TO"
    }, 3350);

    const tText2 = setTimeout(() => {
      setTextStep(2); // "AI ADDA"
    }, 3750);

    const tText3 = setTimeout(() => {
      setTextStep(3); // "AGENCY" + heart
      playPaperSound('chime');
    }, 4200);

    // Stage 5: Hold composition
    const t5 = setTimeout(() => {
      setStage(5);
    }, 4700);

    // Stage 6: Smooth exit transition
    const t6 = setTimeout(() => {
      setStage(6);
    }, 6000);

    // Finish
    const tEnd = setTimeout(() => {
      onComplete();
    }, 6700);

    return () => {
      clearTimeout(t1);
      clearTimeout(tImpact);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tRustle2);
      clearTimeout(t4);
      clearTimeout(tText1);
      clearTimeout(tText2);
      clearTimeout(tText3);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(tEnd);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#FFFDFB] select-none transition-opacity duration-700 ${
        isSkipped || stage === 6 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Soft Pastel Pink + Ivory Canvas with user uploaded wallpaper */}
      <div className={`absolute inset-0 ${bgTheme === 'crumpled' ? 'bg-crumpled-hearts' : 'bg-gingham-hearts'} pointer-events-none opacity-85`} />
      
      {/* Delicate pink & white gingham subtle spotlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#FCECEF]/80 via-[#FAF6F3]/50 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Skip Button in the corner */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={handleSkip}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDFB]/90 hover:bg-[#FCECEF] text-xs font-semibold tracking-wider uppercase text-[#7A646A] hover:text-[#34282C] border border-[#F4B8C5] shadow-xs transition-all cursor-pointer"
        >
          <span>Skip Intro</span>
          <FastForward className="w-3.5 h-3.5 text-[#C47B89] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Atmospheric small note in bottom corner */}
      <div className="absolute bottom-6 left-6 text-xs font-script text-[#B86B7B] flex items-center gap-1.5 opacity-70">
        <span>tactile paper opening</span>
        <Heart className="w-3 h-3 fill-[#F9D8DE] text-[#C47B89]" />
      </div>

      {/* MAIN CINEMATIC STAGE */}
      <div className="relative flex items-center justify-center w-full h-full max-w-4xl max-h-[800px] perspective-[1200px]">

        {/* -------------------------------------------------------------
            PHASE 1 & 2: THE CRUMPLED PAPER BALL (Visible until Stage 3)
           ------------------------------------------------------------- */}
        <div
          className={`absolute transition-all duration-700 ease-out z-30 ${
            stage === 0
              ? '-translate-y-[450px] -translate-x-[280px] rotate-[-240deg] scale-50 opacity-0'
              : stage === 1
              ? 'translate-y-0 translate-x-0 rotate-[-12deg] scale-100 opacity-100'
              : stage === 2
              ? 'translate-y-0 translate-x-0 rotate-[-4deg] scale-100 opacity-100'
              : 'scale-[2.2] rotate-6 opacity-0 pointer-events-none blur-sm'
          }`}
          style={{
            transitionTimingFunction:
              stage === 1
                ? 'cubic-bezier(0.25, 1.4, 0.4, 1)' // gentle organic bounce on land
                : 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Crumpled Paper Ball Visual Structure */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-[0_22px_45px_-8px_rgba(52,40,44,0.32),0_8px_18px_-4px_rgba(196,123,137,0.28)] flex items-center justify-center">
            
            {/* The hyper-realistic photographed crumpled paper ball texture */}
            <img
              src="/src/assets/images/paper_crumpled_ball_1791062148668.jpg"
              alt="Crumpled paper ball"
              className="w-full h-full object-cover rounded-full mix-blend-multiply filter contrast-110 drop-shadow-md"
            />

            {/* Realistic wrinkled paper creases and paper shadows overlay */}
            <div className="absolute inset-0 rounded-full border border-[#D5C2C6]/60 pointer-events-none" />

            {/* Organic paper edges fluff & crevices */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-color-burn"
              viewBox="0 0 100 100"
            >
              <path
                d="M 20,30 Q 35,50 65,35 T 85,70 Q 55,80 30,65 Z"
                fill="none"
                stroke="#6B4E55"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M 40,15 Q 50,45 80,40"
                fill="none"
                stroke="#8A636D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Subtle paper ball shadow underneath */}
            <div
              className={`absolute -bottom-6 left-1/2 -translate-x-1/2 h-5 bg-[#34282C]/25 rounded-full blur-md transition-all duration-500 ${
                stage === 0
                  ? 'w-6 opacity-0'
                  : stage === 1
                  ? 'w-24 opacity-80'
                  : 'w-28 opacity-90'
              }`}
            />
          </div>
        </div>

        {/* -------------------------------------------------------------
            PHASE 3, 4, 5: THE UNFOLDED FLOATING STATIONERY SHEET
           ------------------------------------------------------------- */}
        <div
          className={`relative transition-all duration-1000 ease-out flex items-center justify-center ${
            stage < 3
              ? 'scale-25 opacity-0 rotate-12 pointer-events-none'
              : stage === 3
              ? 'scale-90 opacity-90 rotate-[-1.5deg]'
              : stage === 4 || stage === 5
              ? 'scale-100 opacity-100 rotate-0'
              : 'scale-110 opacity-0 blur-xs' // smooth exit
          }`}
          style={{
            transitionDuration: stage === 3 ? '1200ms' : stage >= 4 ? '900ms' : '600ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Main Rectangular Paper Sheet Card */}
          <div className="relative w-[90vw] max-w-[640px] min-h-[380px] sm:min-h-[420px] bg-[#FFFDFB] rounded-3xl p-8 sm:p-14 border border-[#F4B8C5] shadow-[0_24px_55px_-12px_rgba(52,40,44,0.18),0_12px_28px_-6px_rgba(184,107,123,0.15)] flex flex-col items-center justify-center text-center overflow-hidden">
            
            {/* Real Unfolded Creased Paper Texture Backdrop */}
            <div className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none">
              <img
                src="/src/assets/images/paper_unfolding_creases_1791062161844.jpg"
                alt="Unfolded paper texture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Subtle origami fold crease lines that gradually smooth out */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
                stage === 3 ? 'opacity-85' : 'opacity-20'
              }`}
            >
              {/* Horizontal crease line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B86B7B]/40 to-transparent shadow-[0_1px_2px_rgba(0,0,0,0.08)]" />
              {/* Vertical crease line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#B86B7B]/40 to-transparent shadow-[1px_0_2px_rgba(0,0,0,0.08)]" />
              {/* Diagonal crease lines */}
              <div className="absolute top-0 left-0 w-full h-full border-t border-l border-[#C47B89]/25 rotate-3 scale-95" />
            </div>

            {/* Realistic washi tape on top of paper card */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#F9D8DE]/90 backdrop-blur-2xs rotate-[-1deg] border-l-2 border-r-2 border-dashed border-[#C47B89]/30 shadow-2xs z-20 pointer-events-none" />

            {/* Tiny aesthetic corner stamps & hand-painted hearts */}
            <div className="absolute top-6 left-6 text-xs font-mono text-[#C47B89] tracking-widest uppercase flex items-center gap-1.5 opacity-80">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EST. 2026</span>
            </div>

            <div className="absolute top-6 right-6 font-script text-xl text-[#B86B7B] rotate-6 flex items-center gap-1 opacity-80">
              <span>bespoke code</span>
              <Heart className="w-3.5 h-3.5 fill-[#F9D8DE] text-[#C47B89]" />
            </div>

            {/* -------------------------------------------------------------
                TYPOGRAPHY REVEAL SEQUENCE
               ------------------------------------------------------------- */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4">

              {/* Line 1: "WELCOME TO" */}
              <div
                className={`transition-all duration-700 ease-out mb-3 sm:mb-4 ${
                  textStep >= 1
                    ? 'opacity-100 translate-y-0 tracking-[0.35em]'
                    : 'opacity-0 translate-y-3 tracking-[0.1em]'
                }`}
              >
                <span className="text-xs sm:text-sm font-semibold uppercase text-[#7A646A] tracking-[0.35em]">
                  WELCOME TO
                </span>
              </div>

              {/* Line 2: "AI ADDA" (Large Bold Editorial Serif) */}
              <div
                className={`relative transition-all duration-800 ease-out mb-2 sm:mb-3 ${
                  textStep >= 2
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-6 scale-95'
                }`}
              >
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-medium text-[#34282C] tracking-tight leading-none">
                  AI ADDA
                </h1>

                {/* Delicate floral / heart underline */}
                <div
                  className={`mt-1 sm:mt-2 h-0.5 bg-gradient-to-r from-transparent via-[#C47B89] to-transparent mx-auto transition-all duration-1000 ${
                    textStep >= 2 ? 'w-full opacity-60' : 'w-0 opacity-0'
                  }`}
                />
              </div>

              {/* Line 3: "AGENCY" (Underneath in Spaced-Out Uppercase + Heart) */}
              <div
                className={`flex items-center justify-center gap-2 transition-all duration-800 ease-out mt-1 sm:mt-2 ${
                  textStep >= 3
                    ? 'opacity-100 translate-y-0 tracking-[0.45em] sm:tracking-[0.6em]'
                    : 'opacity-0 translate-y-4 tracking-[0.2em]'
                }`}
              >
                <span className="text-xs sm:text-base font-bold uppercase text-[#C47B89] font-sans">
                  AGENCY
                </span>
                
                {/* Tiny handwritten heart beside text */}
                <span className="inline-block transform rotate-12 transition-transform duration-500 scale-110">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#C47B89] fill-[#F9D8DE]" />
                </span>
              </div>

              {/* Sub-tagline note */}
              <div
                className={`mt-6 font-script text-lg sm:text-2xl text-[#87636D] transition-all duration-700 ${
                  textStep >= 3 ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                “designed with intention & poetic code” ♡
              </div>
            </div>

            {/* Bottom Paper Card Footer Bar */}
            <div className="w-full pt-4 border-t border-[#F9D8DE]/80 flex items-center justify-between text-[11px] text-[#A68F95] font-mono">
              <span>CURATED PINTEREST MOODBOARDS</span>
              <span className="font-script text-base text-[#C47B89]">paris · tokyo · nyc</span>
              <span>100% BESPOKE WEBSITES</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
