import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-12">
        {Object.entries(portfolioData.skills).map(([category, skills], idx) => (
          <div key={category}>
            <h3 className="text-lg font-mono text-slate-500 uppercase tracking-widest mb-6">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {(skills as any[]).map((skill, sIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIdx * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white hover:border-emerald-400 transition-all cursor-default group"
                >
                  <div className="w-5 h-5 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                    {skill.img ? (
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-emerald-400">
                        {skill.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
