import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { Separator } from "@/components/ui/separator";
import { Clock, Globe, MessageSquare } from "lucide-react";

const workStyle = [
  {
    icon: MessageSquare,
    title: "Async-first",
    description: "Clear communication, no unnecessary meetings",
  },
  {
    icon: Clock,
    title: "Weekly updates",
    description: "Regular progress reports, no surprises",
  },
  {
    icon: Globe,
    title: "Maintainable code",
    description: "Code you can maintain after I'm done",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 scroll-mt-16 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm">03</span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight mt-2">
            Services
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-4" />
          <p className="text-muted-foreground mt-6 max-w-2xl">
            Core expertise areas — from agentic AI pipelines and LLM fine-tuning to knowledge graphs and physics-informed neural networks.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <Separator className="bg-border/50 my-16" />

        {/* How I work */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="font-display text-2xl mb-8">How I Work</h3>
            <div className="space-y-6">
              {workStyle.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 rounded-xl bg-card border border-border"
          >
            <h3 className="font-display text-2xl mb-6">Availability</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground font-mono text-sm">
                  Base
                </span>
                <span className="font-medium">Hyderabad, India</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground font-mono text-sm">
                  Timezone
                </span>
                <span className="font-medium">IST (UTC+5:30)</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground font-mono text-sm">
                  Remote
                </span>
                <span className="font-medium">Open — US/Europe overlap flexible</span>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-400 font-mono">
                  Actively exploring new full-time roles
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
