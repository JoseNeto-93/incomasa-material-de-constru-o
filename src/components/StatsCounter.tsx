import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ThumbsUp, Star, Users, Briefcase, Award, Sparkles } from "lucide-react";
import { STATS } from "../data";

// Sub-component to animate single stat count
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1600; // 1.6 seconds animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Quartic out easing function
      const easeOutQuart = 1 - Math.pow(1 - progressRatio, 4);
      const currentVal = easeOutQuart * target;
      
      setCount(currentVal);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  // Handle floats vs integers, e.g. 4.5 vs 1000
  const renderedCount = target % 1 === 0 
    ? Math.floor(count).toLocaleString("pt-BR")
    : count.toFixed(1);

  return (
    <span ref={elementRef} className="font-display font-black tracking-tight text-white">
      {renderedCount}
      {suffix}
    </span>
  );
}

const iconMap: Record<string, any> = {
  ThumbsUp: ThumbsUp,
  Star: Star,
  UsersRound: Users,
  Boxes: Briefcase
};

export default function StatsCounter() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#003B7A] to-[#0057B8] text-white overflow-hidden shadow-inner">
      {/* Decorative vector meshes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => {
            const Icon = iconMap[stat.icon] || ThumbsUp;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: stat.id * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2.5xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-colors duration-300"
              >
                {/* Floating Circle Icon */}
                <div className="h-12 w-12 rounded-xl bg-white/10 text-[#FFC107] flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md">
                  <Icon className="h-5 w-5 text-[#FFC107]" />
                </div>

                {/* Big Number Title */}
                <span className="text-3xl sm:text-4.5xl block font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-200">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>

                {/* Label tag */}
                <span className="text-xs sm:text-sm font-sans font-medium text-neutral-200 tracking-wide mt-2 block group-hover:text-white transition-colors">
                  {stat.label}
                </span>

                {/* Aesthetic status sub-bullet */}
                <div className="w-6 h-[2px] bg-[#FFC107] rounded-full mt-3 opacity-60 group-hover:w-12 transition-all duration-300" />

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
