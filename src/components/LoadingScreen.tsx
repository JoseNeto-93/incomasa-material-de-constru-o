import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600); // Wait for fade out animation
          }, 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111111] text-white"
        >
          {/* Subtle glowing abstract grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,87,184,0.15),transparent_65%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 flex flex-col items-center px-4 max-w-sm text-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0057B8] to-[#003B7A] shadow-[0_0_40px_rgba(0,87,184,0.4)]"
            >
              <Hammer className="h-10 w-10 text-[#FFC107] animate-pulse" />
              <div className="absolute -inset-1 rounded-2xl bg-[#0057B8] opacity-30 blur-md -z-10" />
            </motion.div>

            {/* Incomasa Brand */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display text-4xl font-extrabold tracking-tight text-white mb-2"
            >
              INCOMASA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="font-sans text-xs tracking-[0.3em] text-[#F5F7FA] uppercase mb-8"
            >
              Construindo Histórias
            </motion.p>

            {/* Progress Bar Container */}
            <div className="relative w-64 h-1.5 bg-neutral-800 rounded-full overflow-hidden shadow-inner mb-3">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FFC107] via-[#0057B8] to-[#003B7A] rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.span
              key={progress}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-mono text-sm font-semibold text-[#FFC107] tracking-wider"
            >
              {progress}%
            </motion.span>

            <p className="text-[10px] text-neutral-500 font-sans tracking-wide mt-2">
              Verificando estoque e atualizando preços...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
