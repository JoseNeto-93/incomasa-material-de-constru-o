import { motion } from "motion/react";

export default function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/5515998364546?text=Olá! Vim pelo site da Incomasa. Gostaria de solicitar um orçamento para materiais."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-35 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_25px_rgba(16,185,129,0.4)] cursor-pointer group"
      title="Falar no WhatsApp"
    >
      {/* Outer pulsing water rings */}
      <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25 group-hover:animate-none group-hover:scale-125" />

      {/* Floating Spark tag */}
      <span className="absolute -top-1.5 -right-1 z-10 px-1.5 py-0.5 rounded-full bg-amber-400 text-[#111111] text-[7.5px] font-black uppercase tracking-wider shadow-sm animate-bounce group-hover:animate-none">
        Online
      </span>

      <svg
        className="h-7 w-7 fill-current text-white relative z-10"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.661.988 3.298 1.488 4.814 1.489 5.518-.002 10.003-4.485 10.006-10.004.002-2.673-1.036-5.185-2.922-7.073-1.886-1.888-4.394-2.925-7.066-2.926-5.523 0-10.008 4.482-10.01 10.001-.001 1.748.462 3.456 1.341 4.965l-.973 3.551 3.64-.954zm10.941-6.84c-.267-.134-1.58-.78-1.822-.867-.243-.088-.419-.133-.596.133-.176.265-.682.866-.837 1.042-.154.177-.308.2-.575.066-.267-.134-1.13-.417-2.152-1.328-.793-.707-1.33-1.582-1.486-1.847-.156-.265-.017-.408.117-.541.12-.12.267-.31.4-.464.135-.155.18-.265.27-.442.09-.176.044-.332-.022-.464-.066-.134-.596-1.436-.816-1.966-.215-.518-.432-.447-.597-.456-.154-.008-.33-.01-.507-.01-.176 0-.464.066-.706.31-.242.243-.925.905-.925 2.21 0 1.305.949 2.564 1.08 2.741.133.177 1.868 2.853 4.525 4 .632.274 1.125.437 1.512.56.635.202 1.212.174 1.669.106.509-.076 1.58-.645 1.802-1.238.22-.593.22-1.102.154-1.208-.066-.106-.242-.176-.51-.31z" />
      </svg>
    </motion.a>
  );
}
