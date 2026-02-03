import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, AlertCircle, Zap } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <DialogTitle className="font-display text-3xl text-foreground">
                {project.title}
              </DialogTitle>
              <p className="text-sm font-mono text-muted-foreground mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-mono text-xs"
              style={{ borderColor: `${project.color}40` }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Separator className="bg-border" />

        <div className="space-y-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5" style={{ color: project.color }} />
              <h3 className="font-display text-lg">The Problem</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-7">
              {project.problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5" style={{ color: project.color }} />
              <h3 className="font-display text-lg">The Solution</h3>
            </div>
            <ul className="space-y-3 pl-7">
              {project.solution.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-3 text-muted-foreground"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: project.color }}
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {project.results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5" style={{ color: project.color }} />
                <h3 className="font-display text-lg">The Results</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 pl-7">
                {project.results.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-4 rounded-lg bg-secondary/50 border border-border text-center"
                  >
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {project.status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm font-mono px-4 py-3 rounded-lg border border-primary/20 bg-primary/5"
              style={{ borderColor: `${project.color}30` }}
            >
              <span style={{ color: project.color }}>Status:</span>{" "}
              <span className="text-muted-foreground">{project.status}</span>
            </motion.p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
