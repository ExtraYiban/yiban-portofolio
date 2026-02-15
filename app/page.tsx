'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [dots, setDots] = useState('.');
  const [word, setWord] = useState('AKBAR');
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '.' : prev + '.'));
    }, 500);


    const wordList = ['AKBAR', 'NUGRAH', 'PIRLO', 'YOGA', 'HEIZA', 'RADJA', 'HARITS', 'ATTOL'];
    const wordInterval = setInterval(() => {
      setWord(wordList[Math.floor(Math.random() * wordList.length)]);
    }, 2000);

    const rotateInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(wordInterval);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size[50px_50px]" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/10 rounded-lg animate-wobble" />
        <div className="absolute top-1/4 right-20 w-24 h-24 border-4 border-white/10 rounded-full animate-bounce-crazy" />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-white/10 rotate-45 animate-spin-wobble" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border-4 border-white/10 rounded-full animate-pulse-crazy" />
        <div className="absolute bottom-1/4 right-10 w-28 h-28 border-4 border-white/10 rounded-lg animate-float-crazy" />
      </div>

      <main className="relative z-10 flex h-screen flex-col items-center justify-center px-6">
        
        <div 
          className="text-5xl md:text-7xl mb-6 font-black text-white animate-bounce-slow border-4 border-white px-6 py-3"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {word}
        </div>

        <div className="text-center space-y-4 mb-8">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter animate-glitch">
            WORK IN
          </h1>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter animate-glitch-delayed">
            PROGRESS
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl text-gray-400 font-mono animate-fade-in">
            <span className="animate-blink">{'>'}</span>
            <span>Yiban</span>
            <span>Lagi ngerjain{dots}</span>
          </div>
        </div>

        <div className="font-mono text-white/80 text-xs md:text-sm space-y-1 mb-8 animate-slide-up-delayed">
          <div className="animate-typewriter-1">[ ] Mikir konsep dulu le</div>
          <div className="animate-typewriter-2">[#] Bikin desain kece</div>
          <div className="animate-typewriter-3">[###] Ngoding malas malasan</div>
          <div className="animate-typewriter-4">[...] Testing sambil minum</div>
          <div className="animate-typewriter-5">[ ] Siap diluncurkan!</div>
        </div>

        <div className="w-full max-w-md space-y-3 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-white/60 font-mono text-xs md:text-sm w-24">Semangat</span>
            <div className="flex-1 h-4 bg-white/10 rounded overflow-hidden">
              <div className="h-full bg-white animate-loading-bar-1" style={{ width: '85%' }} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60 font-mono text-xs md:text-sm w-24">Matcha</span>
            <div className="flex-1 h-4 bg-white/10 rounded overflow-hidden">
              <div className="h-full bg-white animate-loading-bar-2" style={{ width: '95%' }} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60 font-mono text-xs md:text-sm w-24">Tidur</span>
            <div className="flex-1 h-4 bg-white/10 rounded overflow-hidden">
              <div className="h-full bg-white animate-loading-bar-3" style={{ width: '20%' }} />
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-500 font-mono text-xs md:text-sm animate-fade-sequence-1">
            Rusak dulu baru bagus
          </p>
          <p className="text-gray-500 font-mono text-xs md:text-sm animate-fade-sequence-2">
            Bentar lagi kelar... mungkin
          </p>
          <p className="text-gray-500 font-mono text-xs md:text-sm animate-fade-sequence-3">
            Sabar ya gaes, lagi otw mantap
          </p>
        </div>

        <div className="mt-6 text-3xl text-white animate-blink">_</div>
      </main>

      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-white/20 animate-corner-pulse" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-white/20 animate-corner-pulse-delayed" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-white/20 animate-corner-pulse" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-white/20 animate-corner-pulse-delayed" />
    </div>
  );
}
