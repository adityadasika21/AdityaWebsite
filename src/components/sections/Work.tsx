import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import type { Project } from "@/data/projects";
import { trackProjectView } from "@/lib/analytics";

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 scroll-mt-16 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm">02</span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight mt-2">
            Selected Work
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-4" />
          <p className="text-muted-foreground mt-6 max-w-2xl">
            Production AI systems that deliver real business value. Click to see
            the full case study.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => { trackProjectView(project.id, project.title); setSelectedProject(project); }}
              index={index}
            />
          ))}
        </div>

        {/* Project modal */}
        <ProjectModal
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
