import Section from "./Section";
import { portfolioData } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, idx) => (
          <div key={idx}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
}
