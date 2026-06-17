import { motion } from "motion/react";
import { ArrowRight, Phone, Sparkles, HandMetal } from "lucide-react";

interface CtaFinalProps {
  onQuoteClick: () => void;
}

export default function CtaFinal({ onQuoteClick }: CtaFinalProps) {
  return (
    <section className="relative py-28 bg-[#003B7A] overflow-hidden text-white">
      {/* Heavy Glowing Blue Accents */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#003B7A] via-[#0057B8]/40 to-[#111111]/15" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-tr from-[#0057B8] to-blue-600/30 rounded-full blur-[110px] pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Glowing badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur mb-6"
        >
          <Sparkles className="h-4.5 w-4.5 text-[#FFC107] animate-pulse" />
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white">
            Planeje sua obra com economia
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5.5xl font-extrabold tracking-tight text-white mb-5 max-w-3xl mx-auto leading-tight"
        >
          Vai construir ou reformar?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-sans text-sm sm:text-lg text-neutral-200 ml-auto mr-auto max-w-xl mb-11 leading-normal"
        >
          Solicite seu orçamento online agora mesmo e conte com o atendimento, estoque e transporte de quem mais entende do assunto em Itapetininga.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md mx-auto"
        >
          {/* Quote builder button */}
          <button
            onClick={onQuoteClick}
            className="group relative flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-xl bg-white text-[#111111] hover:bg-neutral-100 font-bold uppercase tracking-wider text-xs shadow-xl transition-all duration-200 cursor-pointer"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="h-4.5 w-4.5 text-[#0057B8] transition-transform group-hover:translate-x-1" />
          </button>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/5515998364546?text=Olá! Vim pelo site da Incomasa. Gostaria de solicitar um orçamento para materiais de construção."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold uppercase tracking-wider text-white text-xs shadow-xl transition-all duration-200"
          >
            <svg
              className="h-4.5 w-4.5 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.661.988 3.298 1.488 4.814 1.489 5.518-.002 10.003-4.485 10.006-10.004.002-2.673-1.036-5.185-2.922-7.073-1.886-1.888-4.394-2.925-7.066-2.926-5.523 0-10.008 4.482-10.01 10.001-.001 1.748.462 3.456 1.341 4.965l-.973 3.551 3.64-.954zm10.941-6.84c-.267-.134-1.58-.78-1.822-.867-.243-.088-.419-.133-.596.133-.176.265-.682.866-.837 1.042-.154.177-.308.2-.575.066-.267-.134-1.13-.417-2.152-1.328-.793-.707-1.33-1.582-1.486-1.847-.156-.265-.017-.408.117-.541.12-.12.267-.31.4-.464.135-.155.18-.265.27-.442.09-.176.044-.332-.022-.464-.066-.134-.596-1.436-.816-1.966-.215-.518-.432-.447-.597-.456-.154-.008-.33-.01-.507-.01-.176 0-.464.066-.706.31-.242.243-.925.905-.925 2.21 0 1.305.949 2.564 1.08 2.741.133.177 1.868 2.853 4.525 4 .632.274 1.125.437 1.512.56.635.202 1.212.174 1.669.106.509-.076 1.58-.645 1.802-1.238.22-.593.22-1.102.154-1.208-.066-.106-.242-.176-.51-.31z" />
            </svg>
            <span>Chamar no WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
