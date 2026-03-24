import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="text-emerald-400 font-mono mb-4 tracking-widest uppercase text-sm md:text-base">
          Frontend Developer Portfolio
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter">
          사용자 경험을 <span className="text-emerald-400">최적화</span>하는<br/>
          프론트엔드 엔지니어
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Next.js App Router와 TanStack Query를 활용한 고성능 웹 애플리케이션 개발에 능숙하며,
          실제 협업 환경에서의 문제 해결과 성능 최적화에 집중합니다.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-full hover:bg-emerald-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-slate-700 text-white font-bold rounded-full hover:bg-slate-900 transition-colors"
          >
            About Me
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
