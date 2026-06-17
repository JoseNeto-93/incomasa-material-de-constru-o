import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Layers, 
  Box, 
  Grid, 
  Shield, 
  Zap, 
  Droplet, 
  Hammer, 
  Award, 
  Sparkles, 
  Paintbrush, 
  ShoppingBag, 
  ArrowRight,
  X,
  Check
} from "lucide-react";
import { CATEGORIES } from "../data";

interface CategoriesProps {
  onAddProduct: (productName: string) => void;
  selectedProducts: string[];
}

const iconMap: Record<string, any> = {
  Layers,
  Box,
  Grid,
  Shield,
  Zap,
  Droplet,
  Hammer,
  Award,
  Sparkles,
  Paintbrush
};

export default function Categories({ onAddProduct, selectedProducts }: CategoriesProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[0] | null>(null);

  return (
    <section id="categorias" className="relative py-24 bg-[#F5F7FA] overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-[#0057B8]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0057B8]/10 text-[#0057B8] mb-4">
            <ShoppingBag className="h-3.5 w-3.5" />
            <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest">Nosso Portfólio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-neutral-900 tracking-tight leading-none mb-4">
            Navegue por Categorias
          </h2>
          <p className="font-sans text-sm sm:text-base text-neutral-600 max-w-lg mx-auto">
            Clique na área desejada para ver a lista de produtos disponíveis em nosso estoque e adicioná-los diretamente à sua cotação.
          </p>
        </div>

        {/* 3D-Interactive Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.icon] || Grid;
            const isHovered = hoveredId === category.id;

            return (
              <motion.div
                key={category.id}
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: -2
                }}
                className="relative cursor-pointer aspect-[3/4] rounded-2.5xl overflow-hidden group select-none transition-shadow duration-300 border border-neutral-200/60 bg-white"
                style={{
                  perspective: 1000,
                  boxShadow: isHovered 
                    ? "0 25px 35px -12px rgba(0, 87, 184, 0.25)" 
                    : "0 10px 20px -10px rgba(0, 0, 0, 0.04)"
                }}
              >
                {/* Background Image structure */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-[#111111]/75 to-neutral-950/20 z-10 transition-opacity duration-300" />
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Light reflection effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-15" 
                />

                {/* Glow border effect onhover */}
                <div 
                  className={`absolute inset-0 rounded-2.5xl border duration-300 z-15 pointer-events-none ${
                    isHovered ? "border-[#FFC107]/50" : "border-transparent"
                  }`} 
                />

                {/* Content Box */}
                <div className="absolute inset-0 z-20 p-5 flex flex-col justify-between text-white">
                  
                  {/* Floating Icon Frame with blue glowing backdrop */}
                  <div 
                    className={`h-11 w-11 rounded-1.5xl flex items-center justify-center transition-all duration-300 ${
                      isHovered 
                        ? "bg-[#FFC107] text-[#111111] scale-110 rotate-3" 
                        : "bg-white/10 text-white backdrop-blur-md"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Main Details */}
                  <div className="text-left mt-auto">
                    <p className="font-sans text-[9px] font-bold tracking-widest text-[#FFC107] uppercase mb-1">
                      {category.items.length} Itens Principais
                    </p>
                    <h3 className="font-display text-lg font-black tracking-tight leading-tight group-hover:text-[#FFC107] transition-colors duration-200">
                      {category.name}
                    </h3>
                    
                    {/* Collapsible arrow indicator */}
                    <div className="flex items-center gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest text-white">Ver catálogo</span>
                      <ArrowRight className="h-3 w-3 text-[#FFC107]" />
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Pop-up Catalog Detail Overlay (Glassmorphism & AnimatePresence) */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md"
            />

            {/* Core Card Structure */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)] border border-neutral-100 z-10 flex flex-col max-h-[90vh]"
            >
              
              {/* Header Image Cover */}
              <div className="relative h-44 sm:h-48 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10" />
                <img
                  src={selectedCategory.imageUrl}
                  alt={selectedCategory.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Floating Icon Indicator */}
                <div className="absolute bottom-4 left-6 z-25 flex items-center gap-3 text-white">
                  <div className="h-10 w-10 rounded-xl bg-[#0057B8] flex items-center justify-center text-[#FFC107]">
                    {(() => {
                      const Icon = iconMap[selectedCategory.icon] || Grid;
                      return <Icon className="h-5 w-5" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">{selectedCategory.name}</h3>
                    <p className="font-sans text-[10px] text-amber-400 font-semibold uppercase tracking-wider">Produtos Estocados</p>
                  </div>
                </div>

              </div>

              {/* Description & List Scroll area */}
              <div className="p-6 overflow-y-auto flex-1">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">Visão Geral</h4>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-6 bg-slate-50 p-3.5 rounded-xl border border-neutral-100">
                  {selectedCategory.description}
                </p>

                <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">Principais Materiais para Cotação</h4>
                
                <div className="space-y-2.5">
                  {selectedCategory.items.map((item, idx) => {
                    const isAdded = selectedProducts.includes(item);

                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 hover:border-blue-100 bg-white hover:bg-slate-50/50 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-[#0057B8]" />
                          <span className="font-sans text-sm font-bold text-neutral-800">{item}</span>
                        </div>

                        <button
                          onClick={() => onAddProduct(item)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                            isAdded
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-neutral-100 hover:bg-[#0057B8] hover:text-white text-neutral-700"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-600" />
                              <span>Adicionado</span>
                            </>
                          ) : (
                            <span>+ Orçar item</span>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer action buttons */}
              <div className="p-4 bg-slate-50 border-t border-neutral-100 flex items-center justify-between shrink-0">
                <span className="font-sans text-[11px] text-neutral-500">
                  *Valores sob consulta direta no comercial.
                </span>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-5 py-2 rounded-lg bg-[#0057B8] hover:bg-[#003B7A] text-xs font-bold uppercase text-white shadow-sm transition-colors cursor-pointer"
                >
                  Concluir
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
