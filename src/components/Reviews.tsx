import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, MessageSquare, Heart } from "lucide-react";
import { GOOGLE_REVIEWS, CUSTOMER_RATING_INFO } from "../data";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = GOOGLE_REVIEWS.length;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const cleanAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const setupAutoPlay = () => {
    cleanAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
    }, 4000);
  };

  useEffect(() => {
    setupAutoPlay();
    return () => cleanAutoPlay();
  }, [activeIndex]);

  const handleReviewClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="avaliacoes" className="relative py-24 bg-white overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0057B8]/10 text-[#0057B8] mb-4">
              <MessageSquare className="h-3.5 w-3.5" />
              <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest">Prova Social</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-neutral-900 tracking-tight leading-none mb-4">
              O que dizem nossos clientes
            </h2>

            <p className="font-sans text-sm sm:text-base text-neutral-600 max-w-lg mt-3">
              Prezamos pela transparência. Nossos clientes deixam testemunhos permanentes no Google Search avaliando as facilidades de pagamento e a entrega rápida.
            </p>
          </div>

          {/* Google Ratings Sticker Column */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end">
            <div className="flex items-center gap-5 p-6 rounded-2.5xl bg-neutral-50 border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.02)]">
              <div className="text-center shrink-0 pr-5 border-r border-neutral-200">
                <span className="block font-display text-4.5xl font-black text-neutral-900 leading-none mb-1">
                  {CUSTOMER_RATING_INFO.averageRating}
                </span>
                
                {/* Visual Stars */}
                <div className="flex items-center gap-0.5 justify-center">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4.5 w-4.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="block font-sans text-[10px] uppercase font-bold tracking-wider text-neutral-500 mt-2">
                  Nota no Google
                </span>
              </div>

              <div>
                <p className="font-display font-black text-base text-[#0057B8] uppercase tracking-wide leading-tight">
                  {CUSTOMER_RATING_INFO.totalReviews}+ Avaliações
                </p>
                <p className="font-sans text-xs text-neutral-500 mt-1 leading-snug">
                  Nossa matriz Incomasa é classificada como uma das melhores lojas em Itapetininga/SP.
                </p>
                
                {/* Meta location */}
                <div className="flex items-center gap-1.5 mt-3 text-[#FFC107] text-[10px] font-bold">
                  <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
                  <span>Aprovados por 98% dos Engenheiros locais</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Reviews Testimonial Slider Container */}
        <div className="relative max-w-4xl mx-auto min-h-[280px] sm:min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {GOOGLE_REVIEWS.map((review, idx) => {
              if (idx !== activeIndex) return null;

              return (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full bg-[#111111] text-white p-8 sm:p-12 rounded-3xl border border-neutral-800 shadow-[0_20px_45px_rgba(0,0,0,0.15)] relative flex flex-col md:flex-row gap-8 items-center"
                >
                  {/* Decorative Big Double Quotes icon inside card */}
                  <div className="absolute right-8 top-6 opacity-5 z-0 pointer-events-none">
                    <Quote className="h-28 w-28 text-white rotate-180" />
                  </div>

                  {/* Customer Avatar & Role Column */}
                  <div className="flex flex-col items-center text-center shrink-0 w-full md:w-44 z-10">
                    <div className="relative h-20 w-20 rounded-full border-2 border-[#0057B8] overflow-hidden p-0.5 shadow-md">
                      <img
                        src={review.avatarUrl}
                        alt={review.name}
                        className="w-full h-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <h3 className="font-display text-base font-bold text-white mt-4 tracking-tight leading-snug">
                      {review.name}
                    </h3>

                    <p className="font-sans text-[11px] font-semibold text-[#0057B8] uppercase tracking-wider mt-1">
                      {review.role}
                    </p>

                    <p className="font-sans text-[10px] text-neutral-500 mt-0.5">
                      {review.date}
                    </p>
                  </div>

                  {/* Customer Testimonial bubble */}
                  <div className="flex-1 text-center md:text-left z-10">
                    
                    {/* Glowing golden stars */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <Star key={s} className="h-4.5 w-4.5 fill-[#FFC107] text-[#FFC107] animate-pulse" />
                      ))}
                    </div>

                    <p className="font-sans text-sm sm:text-base text-neutral-300 italic leading-relaxed">
                      "{review.text}"
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-2 mt-6 text-[#FFC107] text-xs font-semibold uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 bg-[#FFC107] rounded-full" />
                      <span>Verificado Original via Google Maps</span>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel slide indicators */}
        <div className="flex items-center gap-2.5 justify-center mt-8">
          {GOOGLE_REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleReviewClick(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? "w-8 bg-[#0057B8]"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Avaliação ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
