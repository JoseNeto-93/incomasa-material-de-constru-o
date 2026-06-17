import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";
import { HIGHLIGHT_SLIDES } from "../data";

export default function SliderDestaques() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideCount = HIGHLIGHT_SLIDES.length;

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 4500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      id="destaques"
      className="relative py-24 bg-gradient-to-b from-white to-[#F5F7FA] overflow-hidden"
    >
      {/* Structural background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0057B8]/10 text-[#0057B8] mb-4">
            <Compass className="h-3.5 w-3.5" />
            <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest">Slider Especial</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
            Soluções de Ponta para Cada Etapa
          </h2>
          <p className="font-sans text-sm text-neutral-600 max-w-xl mx-auto">
            Explore nossa curadoria de faturamento. Mantemos linhas completas de materiais com faturamento facilitado, garantindo agilidade no canteiro.
          </p>
        </div>

        {/* Master Slider Layout */}
        <div className="relative flex flex-col items-center">
          
          {/* Active Highlight Frame */}
          <div className="w-full max-w-4xl h-[420px] sm:h-[480px] relative flex justify-center items-center">
            
            <AnimatePresence initial={false} mode="wait">
              {HIGHLIGHT_SLIDES.map((slide, idx) => {
                const isActive = idx === activeIndex;
                if (!isActive) return null;

                return (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, x: direction * 80, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -direction * 80, scale: 0.95 }}
                    transition={{
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_45px_-8px_rgba(0,10,40,0.08)] bg-white border border-neutral-100 flex flex-col md:flex-row"
                  >
                    {/* Left: Image with absolute tag */}
                    <div className="md:w-1/2 h-44 md:h-full relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-full object-cover transform duration-700 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 z-25 bg-[#FFC107] text-[#111111] text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-md">
                        {slide.badge}
                      </div>
                    </div>

                    {/* Right: Glassmorphism Information Content */}
                    <div className="md:w-1/2 p-7 sm:p-10 flex flex-col justify-center bg-gradient-to-br from-white via-white to-slate-50/50">
                      
                      {/* Interactive slide number bar */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <span className="font-mono text-xs font-bold text-[#0057B8]">
                          {String(slide.id).padStart(2, "0")}
                        </span>
                        <div className="w-8 h-[2px] bg-neutral-200" />
                        <span className="font-mono text-[10px] text-neutral-400">
                          {String(slideCount).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-2 leading-snug">
                        {slide.title}
                      </h3>
                      
                      <h4 className="font-sans text-xs sm:text-sm font-semibold text-[#0057B8] mb-4">
                        {slide.subtitle}
                      </h4>

                      <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                        {slide.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                        <a
                          href={`https://wa.me/5515998364546?text=Olá! Gostaria de fazer uma cotação sobre ${slide.title} para minha obra.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-xs font-bold uppercase tracking-wider text-[#003B7A] hover:text-[#0057B8] flex items-center gap-1 group/btn"
                        >
                          Fazer Cotação
                          <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                        </a>
                        
                        <span className="text-[10px] uppercase font-bold text-emerald-600 font-sans tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md">
                          Estoque Disponível
                        </span>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Float Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-35 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200/60 bg-white/95 text-neutral-800 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-[#0057B8] hover:text-white transition-all duration-200 cursor-pointer scale-90 sm:scale-100"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-35 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200/60 bg-white/95 text-neutral-800 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-[#0057B8] hover:text-white transition-all duration-200 cursor-pointer scale-90 sm:scale-100"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

          {/* Dots Carousel Indicator */}
          <div className="flex items-center gap-2 mt-8">
            {HIGHLIGHT_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex
                    ? "w-8 bg-[#0057B8]"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
