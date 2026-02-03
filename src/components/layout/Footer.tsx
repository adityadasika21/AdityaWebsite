import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="font-display text-xl">
              <span className="text-primary">AD</span>
              <span className="text-foreground">.</span>
            </span>
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2025 Aditya Dasika. Built with coffee and curiosity.
            </p>
          </div>

          <motion.div whileHover={{ y: -2 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-border hover:border-primary/50 hover:text-primary group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to top
            </Button>
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 pt-8 border-t border-border/50 flex justify-center">
          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
            <span>React</span>
            <span className="text-primary">•</span>
            <span>TypeScript</span>
            <span className="text-primary">•</span>
            <span>Tailwind</span>
            <span className="text-primary">•</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
