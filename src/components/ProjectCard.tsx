import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, X, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { cn, resolvePath } from "@/lib/utils";

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layoutId={`project-${project.title}`}
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all"
      >
        <div className="aspect-video bg-slate-700 relative overflow-hidden">
          {project.imgUrl && project.img ? (
            <img
              src={resolvePath(`/project-img/${project.imgUrl}/${project.img}.webp`)}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          ) : null}
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold text-2xl uppercase tracking-tighter opacity-20 group-hover:scale-110 transition-transform">
            {project.imgUrl}
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/20 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400 uppercase">
            {project.period}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.content}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.Frontend?.slice(0, 3).map((s: any) => (
              <span key={s.name} className="flex items-center gap-1.5 text-[10px] px-2 py-1 bg-slate-700 text-slate-300 rounded">
                {s.img && (
                  <img src={resolvePath(s.img)} alt="" className="w-3 h-3 object-contain" referrerPolicy="no-referrer" />
                )}
                {s.name}
              </span>
            ))}
            {project.skills.Frontend?.length > 3 && (
              <span className="text-[10px] px-2 py-1 text-slate-500">
                +{project.skills.Frontend.length - 3}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1 text-[11px] text-slate-500 font-medium border-t border-slate-700 pt-4">
            <span>{project.team}</span>
            <span className="text-emerald-500/70">{project.role}</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`project-${project.title}`}
              className="relative w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header - Sticky-like */}
              <div className="shrink-0 p-8 md:p-12 pb-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md relative z-20">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 p-2.5 bg-slate-800 text-slate-400 rounded-full hover:text-white hover:bg-slate-700 transition-all z-30 shadow-lg"
                >
                  <X size={20} />
                </button>

                <div className="max-w-4xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{project.title}</h2>
                  
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Period</span>
                      <span className="text-sm text-slate-300 font-medium">{project.period}</span>
                    </div>
                    <div className="w-px h-8 bg-slate-800 hidden sm:block" />
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Team</span>
                      <span className="text-sm text-slate-300 font-medium">{project.team}</span>
                    </div>
                    <div className="w-px h-8 bg-slate-800 hidden sm:block" />
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Role</span>
                      <span className="text-sm text-slate-300 font-medium">{project.role}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {project.link && (
                      <a href={project.link} target="_blank" className="flex items-center gap-2.5 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-500/20">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" className="flex items-center gap-2.5 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-sm border border-slate-700 transition-all">
                        <Github size={18} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-10 custom-scrollbar">
                <div className="max-w-4xl mx-auto space-y-16">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                      <section>
                        <h4 className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-6">
                          <div className="w-8 h-px bg-emerald-500/30" />
                          Overview
                        </h4>
                        <p className="text-lg text-slate-300 leading-relaxed font-light">{project.projectOverview}</p>
                      </section>

                      <section>
                        <h4 className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-6">
                          <div className="w-8 h-px bg-emerald-500/30" />
                          Goal
                        </h4>
                        <p className="text-slate-300 leading-relaxed">{project.projectGoal}</p>
                      </section>
                    </div>

                    <div className="space-y-8">
                      <section>
                        <h4 className="text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-6">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {Object.values(project.skills).flat().map((skill: any, i: number) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-200 text-xs hover:border-emerald-500/30 transition-colors">
                              {skill.img && (
                                <img src={resolvePath(skill.img)} alt="" className="w-4 h-4 object-contain opacity-80" referrerPolicy="no-referrer" />
                              )}
                              <span>{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>

                  <section>
                    <h4 className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-8">
                      <div className="w-8 h-px bg-emerald-500/30" />
                      Key Features & Implementation
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.detailContent.map((detail: any, i: number) => (
                        <div key={i} className="group p-8 bg-slate-800/20 rounded-[2rem] border border-slate-800 hover:border-slate-700 transition-all">
                          <h5 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                              <Lightbulb size={20} className="text-emerald-400" />
                            </div>
                            {detail.title}
                          </h5>
                          <ul className="space-y-4">
                            {detail.content.map((c: string, ci: number) => (
                              <li key={ci} className="text-sm text-slate-400 flex gap-3 leading-relaxed">
                                <span className="text-emerald-500 mt-1.5 shrink-0">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                                </span>
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-8">
                      <div className="w-8 h-px bg-emerald-500/30" />
                      Troubleshooting
                    </h4>
                    <div className="space-y-8">
                      {project.troubleshooting.map((t: any, i: number) => (
                        <div key={i} className="relative overflow-hidden p-8 md:p-10 bg-slate-800/10 rounded-[2.5rem] border border-slate-800/50">
                          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/20" />
                          <h5 className="text-2xl font-bold text-white mb-8">{t.title}</h5>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-[10px] font-bold text-red-400 uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                Problem
                              </div>
                              <p className="text-sm text-slate-400 leading-relaxed">{t.problem}</p>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                Cause
                              </div>
                              <p className="text-sm text-slate-400 leading-relaxed">{t.cause}</p>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Solution
                              </div>
                              <p className="text-sm text-slate-400 leading-relaxed">{t.solution}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {project.images && project.images.length > 0 && (
                    <section className="pb-12">
                      <h4 className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-8">
                        <div className="w-8 h-px bg-emerald-500/30" />
                        Gallery
                      </h4>
                      <div className={cn(
                        "grid gap-6",
                        project.isVertical ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-2"
                      )}>
                        {project.images.map((imgNum: number) => (
                          <div key={imgNum} className={cn(
                            "group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700/50 shadow-xl transition-all hover:border-emerald-500/30",
                            project.isVertical ? "aspect-[9/16]" : "aspect-video"
                          )}>
                            <img
                              src={resolvePath(`/project-img/${project.imgUrl}/${imgNum}.webp`)}
                              alt={`${project.title} screenshot ${imgNum}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
