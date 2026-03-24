import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import Section from "./Section";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
        {portfolioData.education.map((item, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-emerald-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <GraduationCap size={18} />
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/50 border border-slate-700"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <time className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                  {item.period}
                </time>
              </div>
              <h4 className="text-slate-400 font-medium mb-4">{item.subtitle}</h4>
              <ul className="space-y-2">
                {item.content.map((c, i) => (
                  <li key={i} className="text-sm text-slate-500 flex gap-2">
                    <span className="text-emerald-500">•</span> {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}
