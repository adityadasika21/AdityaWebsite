import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl bg-card border border-border card-hover">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-60"
            style={{
              background: `linear-gradient(135deg, ${project.color}20 0%, transparent 100%)`,
            }}
          />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-display text-xl group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-muted-foreground mt-1">
                {project.subtitle}
              </p>
            </div>
            <ArrowUpRight
              className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              style={{ color: project.color }}
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="font-mono text-xs bg-secondary/50"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="secondary" className="font-mono text-xs bg-secondary/50">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.brief}
          </p>
        </div>

        {/* Accent line */}
        <div
          className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
          style={{ backgroundColor: project.color }}
        />
      </div>
    </motion.div>
  );
}
