
import React from 'react';
import { motion } from 'framer-motion';
import { SlideData } from '../types';
import { Zap, Target, Video, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

interface SlideProps {
  data: SlideData;
}

const Slide: React.FC<SlideProps> = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (data.type === 'hero') {
    return (
      <div className="text-center w-full px-4 flex flex-col items-center justify-center max-h-screen">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="relative"
        >
          {/* Subtle background glow for the logo area */}
          <div className="absolute inset-0 bg-red-600/10 blur-[80px] rounded-full scale-150" />
          
          <h1 
            className="relative text-[clamp(4rem,12vw,14rem)] font-black italic tracking-tighter leading-[0.9] select-none text-white whitespace-nowrap"
          >
            AUTO<span className="text-red-600">GENX</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 md:mt-6 max-w-4xl"
        >
          <h2 className="text-lg md:text-3xl lg:text-4xl font-light tracking-[0.15em] text-white/60 uppercase italic">
            {data.subtitle}
          </h2>
          <div className="h-px w-24 bg-red-600 mx-auto my-6 md:my-8 opacity-50" />
          <p className="text-xs md:text-sm lg:text-base text-white/30 tracking-[0.4em] font-bold uppercase">
            {data.content[0]}
          </p>
        </motion.div>
      </div>
    );
  }

  if (data.type === 'process') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {data.content.map((item, idx) => {
          const [title, desc] = item.split(': ');
          const icons = [<Video size={40} />, <Target size={40} />, <TrendingUp size={40} />];
          return (
            <motion.div 
              key={idx}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-white/[0.08] transition-all group"
              variants={itemVariants}
            >
              <div className="mb-6 text-red-600 group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-white/60 leading-relaxed">{desc}</p>
            </motion.div>
          );
        })}
      </div>
    );
  }

  if (data.type === 'comparison') {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-5xl font-black mb-4">{data.title}</h2>
        <p className="text-xl text-white/50 mb-12">{data.subtitle}</p>
        <div className="space-y-6">
          {data.content.map((item, idx) => {
            const [old, neu] = item.split(' vs. ');
            return (
              <motion.div 
                key={idx}
                className="flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden"
                variants={itemVariants}
              >
                <div className="w-1/2 pr-8 opacity-40">
                  <span className="block text-[10px] uppercase tracking-widest font-bold mb-2">Old Way</span>
                  <p className="text-xl font-medium line-through">{old}</p>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                   <ArrowRight className="text-red-600" />
                </div>
                <div className="w-1/2 pl-12 border-l border-white/10">
                  <span className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-red-600">The AutoGenX Way</span>
                  <p className="text-xl font-bold text-white">{neu}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  if (data.type === 'cta') {
    return (
      <div className="text-center w-full max-w-3xl">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 rounded-full bg-red-600 mx-auto flex items-center justify-center mb-12 shadow-2xl shadow-red-600/40"
        >
          <Zap size={40} />
        </motion.div>
        <h2 className="text-7xl font-black mb-6 tracking-tighter">{data.title}</h2>
        <p className="text-2xl text-white/60 mb-12">{data.subtitle}</p>
        <div className="flex flex-col space-y-4">
          {data.content.map((item, idx) => (
            <motion.div 
              key={idx}
              className="text-xl font-medium py-4 px-8 bg-white/5 rounded-xl border border-white/10"
              variants={itemVariants}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.h3 className="text-red-600 text-sm font-black tracking-[0.4em] uppercase mb-4">
          Pillar Insight
        </motion.h3>
        <motion.h2 variants={itemVariants} className="text-6xl font-black mb-6 leading-tight tracking-tight">
          {data.title}
        </motion.h2>
        <motion.p variants={itemVariants} className="text-2xl text-white/50 font-light mb-12 italic">
          {data.subtitle}
        </motion.p>
        
        <div className="space-y-8">
          {data.content.map((point, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex items-start space-x-4 group"
            >
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-red-600 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                <ShieldCheck size={14} />
              </div>
              <p className="text-xl font-medium text-white/80 group-hover:text-white transition-colors">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10"
      >
        <img 
          src={`https://picsum.photos/seed/${data.id}/1200/800?grayscale`} 
          alt="Visual concept" 
          className="w-full h-full object-cover mix-blend-overlay opacity-50 transition-transform duration-10000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-red-900/20" />
        
        {data.visionaryConcept && (
          <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 backdrop-blur-md bg-black/40 rounded-2xl border border-white/10 border-dashed max-w-sm"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-red-600 block mb-2 italic">Visionary Concept</span>
              <p className="text-lg font-light italic leading-relaxed text-white/90">
                "{data.visionaryConcept}"
              </p>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Slide;
