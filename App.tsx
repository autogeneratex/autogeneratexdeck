
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Settings, 
  Layers,
  Zap,
  Play
} from 'lucide-react';
import { INITIAL_SLIDES } from './constants';
import { SlideData } from './types';
import Slide from './components/Slide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState<SlideData[]>(INITIAL_SLIDES);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = window.setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col overflow-hidden relative font-['Inter']">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
      </div>

      {/* Header / Logo */}
      <header className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-black tracking-tighter">
            <span className="text-white italic">AUTO</span>
            <span className="text-red-600 italic">GENX</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-white/50 hover:text-white transition-colors">
            <Maximize size={20} />
          </button>
          <button className="p-2 text-white/50 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Slide Content Area */}
      <main className="flex-1 relative z-10 flex items-center justify-center p-12 mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-6xl h-full flex items-center justify-center"
          >
            <Slide data={slides[currentSlide]} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 w-full p-12 z-50 flex justify-between items-end pointer-events-none">
        <div className="flex flex-col space-y-4 pointer-events-auto">
          <div className="flex items-center space-x-2 text-xs font-bold tracking-[0.2em] uppercase text-white/30">
            <span>{String(currentSlide + 1).padStart(2, '0')}</span>
            <div className="w-12 h-px bg-white/10" />
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all group"
            >
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all group"
            >
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6 pointer-events-auto">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-600 mb-1">Current Focus</span>
            <span className="text-sm font-medium text-white/60">{slides[currentSlide].title}</span>
          </div>
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-5 rounded-full border transition-all ${isAutoPlaying ? 'bg-red-600 border-red-600 shadow-lg shadow-red-900/40' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
          >
            {isAutoPlaying ? <Layers size={24} className="animate-spin-slow" /> : <Play size={24} fill="white" />}
          </button>
        </div>
      </footer>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 z-[60]">
        <motion.div 
          className="h-full bg-red-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
