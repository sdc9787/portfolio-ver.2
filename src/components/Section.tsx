import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6 md:px-12 lg:px-24", className)}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-emerald-400 border-l-4 border-emerald-400 pl-4"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
