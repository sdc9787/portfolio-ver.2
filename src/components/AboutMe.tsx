import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import Section from "./Section";

export default function AboutMe() {
  const highlightText = (text: string, highlights: string[]) => {
    let parts = [text];
    highlights.forEach((highlight) => {
      const newParts: string[] = [];
      parts.forEach((part) => {
        if (typeof part !== "string") {
          newParts.push(part);
          return;
        }
        const split = part.split(new RegExp(`(${highlight})`, "gi"));
        newParts.push(...split);
      });
      parts = newParts;
    });

    return parts.map((part, i) =>
      highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
        <span key={i} className="font-bold text-emerald-400">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Section id="about" title="About Me" className="bg-slate-900/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioData.aboutMe.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              {item.title}
            </h3>
            <ul className="space-y-4">
              {item.content.map((text, cIdx) => (
                <li key={cIdx} className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {highlightText(text, item.bold)}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
