import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techStack = {
  "GenAI & NLP": ["LLM Fine-Tuning (QLoRA/SFT)", "RAG", "Graph RAG", "NLU/NER", "Prompt Engineering"],
  "ML Frameworks": ["PyTorch", "Transformers (BERT/ModernBERT)", "LangGraph", "LangChain", "vLLM", "FAISS"],
  "Backend & DBs": ["FastAPI", "Node.js", "PostgreSQL", "Neo4j", "Redis", "MongoDB"],
  "Infra & Languages": ["AWS SageMaker", "Docker", "GitHub Actions", "Python", "TypeScript", "SQL"],
};

const stats = [
  { value: "97%", label: "NLU Accuracy" },
  { value: "3.5yr", label: "Experience" },
  { value: "78%", label: "Test Coverage" },
  { value: "12", label: "LangGraph Nodes" },
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
              I'm an AI/ML Engineer architecting{" "}
              <span className="text-primary">agentic conversational AI</span> at scale — and building physics-informed neural networks that most ML engineers can't.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At my current company I architect a 12-node LangGraph agentic platform, fine-tune LLMs (BERT, Qwen) on AWS SageMaker, and build Graph RAG pipelines for enterprise chatbot delivery. I also improved NLU accuracy from 87% to 97% and scaled automated test coverage from 7% to 78%.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Before ML, I spent 2.5 years as a full-stack engineer. My B.E. in Mechanical Engineering isn't a detour — it's a differentiator. My physics background lets me build{" "}
              <span className="text-foreground">physics-informed neural networks</span> for real scientific problems.
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
                Actively exploring roles in Scientific ML, Conversational AI, and LLM Engineering.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
