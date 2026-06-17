import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ArrowLeft, ArrowRight, Grid, Camera } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

export default function Gallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  const categories = ["Todos", "Estoque", "Loja", "Produtos", "Logística"];

  const filteredItems = selectedFilter === "Todos" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedFilter);

  const handleNextPhoto = (e: MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1));
  };

  const handlePrevPhoto = (e: MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
  };

  return (
    <section id="galeria" className="relative py-24 bg-white overflow-hidden">
      {/* Background visual helpers */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[125px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0057B8]/10 text-[#0057B8] mb-4">
            <Camera className="h-3.5 w-3.5" />
            <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest">Nosso Espaço</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-neutral-900 tracking-tight leading-none mb-4">
            Galeria da Loja & Equipe
          </h2>
          <p className="font-sans text-sm sm:text-base text-neutral-600 max-w-lg mx-auto">
            Conheça nossa infraestrutura, frota e showroom repleto de acabamentos sofisticados para a sua construção ou reforma.
          </p>
        </div>

        {/* Content Filters row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedFilter === cat
                  ? "bg-[#0057B8] text-white shadow-md shadow-blue-500/10"
                  : "bg-slate-100 hover:bg-slate-200 text-neutral-600 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staggered Masonry Grid Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((photo, index) => {
              // Find index in overall list for lightbox tracking
              const globalIndex = GALLERY_ITEMS.findIndex(item => item.id === photo.id);

              return (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setActivePhotoIndex(globalIndex)}
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden rounded-2.5xl cursor-pointer group shadow-sm hover:shadow-[0_20px_35px_rgba(0,0,0,0.06)] border border-neutral-100 bg-neutral-100 aspect-[4/3] select-none"
                >
                  
                  {/* Photo content with zoom */}
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover transform duration-1000 group-hover:scale-108 transition-transform group-hover:blur-[1px]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Glassmorphism gradient background on hover */}
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/50 transition-colors duration-300 z-10" />

                  {/* Shiny Sheen Light reflection effect overlay */}
                  <div className="absolute inset-0 z-15 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1000ms] ease-out pointer-events-none" />

                  {/* Floating Action Details */}
                  <div className="absolute inset-x-0 bottom-0 p-5 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between text-white">
                    <div className="text-left">
                      <span className="px-2.5 py-0.5 rounded bg-[#FFC107] text-[#111111] text-[9px] font-black tracking-widest uppercase mb-1.5 inline-block">
                        {photo.category}
                      </span>
                      <h4 className="font-display font-bold text-sm text-white drop-shadow-md">
                        {photo.title}
                      </h4>
                    </div>
                    
                    <div className="h-9.5 w-9.5 shrink-0 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Eye className="h-4.5 w-4.5" />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox full-screen modal overlays */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            
            {/* Backdrop filter blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIndex(null)}
              className="absolute inset-0 bg-neutral-950/95 backdrop-blur-md"
            />

            {/* Inner frame component */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[85vh] px-4 z-10 flex flex-col items-center select-none"
            >
              
              {/* Media element with no-referrer */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[70vh]">
                <img
                  src={GALLERY_ITEMS[activePhotoIndex].imageUrl}
                  alt={GALLERY_ITEMS[activePhotoIndex].title}
                  className="w-auto max-h-[70vh] object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Info Bar inside frame */}
                <div className="absolute bottom-0 inset-x-0 bg-neutral-950/70 p-4 text-white text-left flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-black text-[#FFC107] tracking-wider leading-none block mb-1">
                      {GALLERY_ITEMS[activePhotoIndex].category}
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold leading-none">
                      {GALLERY_ITEMS[activePhotoIndex].title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    {activePhotoIndex + 1} / {GALLERY_ITEMS.length}
                  </span>
                </div>
              </div>

              {/* Close Button top-right */}
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="absolute top-[-45px] right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur transition-colors border border-white/10 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Selector Arrow */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-[-25px] sm:left-[-60px] top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Anterior"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              {/* Right Selector Arrow */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-[-25px] sm:right-[-60px] top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Próxima"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
