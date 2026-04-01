import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Calendar, ArrowUpRight } from "lucide-react";
import { trackContactClick, trackSocialClick } from "@/lib/analytics";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/adityadasika21",
    icon: Linkedin,
    color: "#0077b5",
  },
  {
    label: "GitHub",
    href: "https://github.com/adityadasika21",
    icon: Github,
    color: "#ffffff",
  },
  {
    label: "Twitter",
    href: "https://x.com/dasika47",
    icon: Twitter,
    color: "#1da1f2",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 scroll-mt-16 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">04</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-2">
            Let's Build
            <br />
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-md mx-auto">
            Have a project in mind? Let's discuss how I can help bring your AI
            vision to life.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <motion.a
            href="https://calendly.com/akhil-dasika47/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactClick("calendly")}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-8 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl mb-2">Book a Call</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Schedule a 30-min intro call to discuss your project
            </p>
            <span className="inline-flex items-center gap-1 text-primary font-mono text-sm group-hover:gap-2 transition-all">
              Schedule now
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </motion.a>

          <motion.a
            href="mailto:akhil.dasika47@gmail.com"
            onClick={() => trackContactClick("email")}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="font-display text-xl mb-2">Send an Email</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Drop me a line with your project details
            </p>
            <span className="inline-flex items-center gap-1 text-muted-foreground font-mono text-sm group-hover:text-primary group-hover:gap-2 transition-all">
              akhil.dasika47@gmail.com
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </motion.a>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick(link.label)}
                className="group h-12 w-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={link.label}
              >
                <Icon
                  className="w-5 h-5 group-hover:text-primary transition-colors"
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
