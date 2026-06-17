import { motion } from "motion/react";
import { UserCheck, Calendar, Percent, Heart, Warehouse, Users, Compass } from "lucide-react";
import { DIFFERENTIALS } from "../data";

const iconMap: Record<string, any> = {
  UserCheck,
  Calendar,
  Percent,
  Heart,
  Warehouse,
  Users
};

export default function Diferenciais() {
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="diferenciais" className="relative py-24 bg-neutral-900 text-white overflow-hidden">
      
      {/* Neo tech grid background layout */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,87,184,0.18),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 mb-4"
          >
            <Compass className="h-3.5 w-3.5" />
            <span className="font-sans text-[10px] font-bold tracking-widest uppercase">Nossos Valores</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-3xl sm:text-4.5xl font-extrabold tracking-tight text-white mb-4"
          >
            Por que escolher a Incomasa?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="font-sans text-sm text-neutral-300 max-w-xl mx-auto"
          >
            Unimos a robustez operacional de uma grande distribuidora com a agilidade e o toque humano indispensáveis para dar ritmo à sua construção.
          </motion.p>
        </div>

        {/* Futuristic Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {DIFFERENTIALS.map((diff) => {
            const Icon = iconMap[diff.icon] || Warehouse;

            return (
              <motion.div
                key={diff.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  boxShadow: "0 25px 50px -12px rgba(0,87,184,0.3)"
                }}
                className="relative p-8 rounded-3xl bg-[#111111]/70 border border-neutral-800 backdrop-blur-md transition-shadow duration-300 group overflow-hidden"
              >
                
                {/* Thin dynamic card outline light helper */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0057B8]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-amber-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-5">
                  
                  {/* Icon space containing custom neon shadow */}
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0057B8]/10 to-[#0057B8]/30 border border-blue-500/20 text-blue-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
                    <Icon className="h-6 w-6 text-blue-400" />
                    
                    {/* Shadow pulse */}
                    <div className="absolute inset-0 rounded-2xl bg-[#0057B8]/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Text details */}
                  <div className="text-left">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FFC107] transition-colors duration-200 mb-2.5">
                      {diff.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>

                </div>

                {/* Corner futuristic tech sub-glow item */}
                <div className="absolute bottom-3 right-4 flex items-center gap-1.5 opacity-10 group-hover:opacity-40 transition-opacity">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FFC107]" />
                  <span className="font-mono text-[9px] tracking-widest uppercase">INCO_MEMBER</span>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic bottom message box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 p-6 rounded-2.5xl bg-gradient-to-r from-[#0057B8]/10 via-[#003B7A]/5 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-[#FFC107] text-[#111111] flex items-center justify-center font-bold">
              ★
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-white">Precisa de um carregamento imediato?</h4>
              <p className="font-sans text-xs text-neutral-400 mt-0.5">Temos empilhadeiras e caminhões munck prontos para expedição imediata com equipe especializada.</p>
            </div>
          </div>
          
          <a
            href="https://wa.me/5515998364546?text=Olá! Preciso de uma entrega urgente de cimento/tijolos. Vocês conseguem enviar hoje?"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0057B8] to-indigo-700 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:from-blue-600 hover:to-indigo-600 transition-colors shrink-0"
          >
            Chamar Plantão Comercial
          </a>
        </motion.div>

      </div>
    </section>
  );
}
