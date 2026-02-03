import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const colors = ["#22d3ee", "#a855f7", "#f97316", "#84cc16"];

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-card/50 border-border card-hover group h-full relative overflow-hidden">
        <CardHeader className="pb-4">
          <motion.div
            className="h-12 w-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
            style={{ backgroundColor: `${color}15` }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className="h-6 w-6" style={{ color }} />
          </motion.div>
          <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {service.description}
          </p>
        </CardContent>

        {/* Hover accent */}
        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
          style={{ backgroundColor: color }}
        />
      </Card>
    </motion.div>
  );
}
