import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';

export const AestheticMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Synthesize gentle warm ambient wind chime / music box notes using Web Audio API
  const playGentleChime = (ctx: AudioContext) => {
    // Pentatonic scale frequencies in warm soft register (C5, D5, E5, G5, A5, C6)
    const notes = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
    const freq = notes[Math.floor(Math.random() * notes.length)];

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Warm soft bell envelope
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 3.0);
  };

  const toggleSound = () => {
    if (!isPlaying) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioCtx();
      audioCtxRef.current = ctx;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      playGentleChime(ctx);
      intervalRef.current = window.setInterval(() => {
        playGentleChime(ctx);
      }, 3200);

      setIsPlaying(true);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleSound}
        className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-300 shadow-paper cursor-pointer ${
          isPlaying
            ? 'bg-[#FCECEF] border-[#C47B89] text-[#34282C]'
            : 'bg-[#FFFDFB]/95 hover:bg-[#FCECEF]/80 border-[#F4B8C5] text-[#59464C]'
        }`}
        title="Toggle relaxing studio chimes"
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-1 bg-[#C47B89] h-2.5 animate-bounce rounded-full" />
              <span className="w-1 bg-[#C47B89] h-3 animate-pulse rounded-full" />
              <span className="w-1 bg-[#C47B89] h-1.5 animate-bounce rounded-full" />
            </div>
            <span className="text-[11px] font-medium tracking-wide">Studio Chimes Playing</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[#C47B89]" />
            <span className="text-[11px] font-medium tracking-wide">Studio Ambience</span>
          </>
        )}
        <span className="text-xs font-script text-[#B86B7B]">♡</span>
      </button>
    </div>
  );
};
