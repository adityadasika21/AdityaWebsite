import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techStack = {
  "LLM Frameworks": ["LangChain", "LangGraph", "Hugging Face"],
  "Vector DBs": ["FAISS", "ChromaDB", "FalkorDB"],
  Backend: ["Python", "FastAPI", "Node.js"],
  Infra: ["AWS SageMaker", "GCP", "Docker"],
};

const stats = [
  { value: "97%", label: "NLU Accuracy" },
  { value: "12+", label: "Languages" },
  { value: "<200ms", label: "Latency" },
  { value: "M+", label: "Interactions" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 scroll-mt-16 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm">01</span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight mt-2">
            About Me
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl leading-relaxed">
              I'm an AI/ML Engineer who turns messy LLM requirements into{" "}
              <span className="text-primary">production-ready systems</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At my current company, I replaced a legacy NLU system with a modern
              multilingual pipeline using mBERT, improving accuracy from 87% to
              97% across 12+ languages. I've built agentic chatbots with
              LangGraph, RAG pipelines with vector databases, and ML training
              pipelines on AWS SageMaker.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I care about{" "}
              <span className="text-foreground">systems that ship</span>, not
              just demos that impress.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-card/50 border border-border"
                >
                  <div className="font-display text-2xl text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-mono text-sm text-muted-foreground mb-6">
              // Tech Stack
            </h3>
            <div className="space-y-6">
              {Object.entries(techStack).map(([category, items], catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + catIndex * 0.1 }}
                >
                  <p className="text-sm text-muted-foreground mb-3 font-mono">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="font-mono text-xs bg-card hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 p-4 rounded-lg border border-primary/20 bg-primary/5"
            >
              <span className="text-primary font-mono text-sm">→</span>{" "}
              <span className="text-muted-foreground">
                Available for contract projects in AI/LLM development.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
