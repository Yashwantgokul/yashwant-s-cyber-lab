import { motion } from "framer-motion";
import { Lock, FlaskConical, Bot, Globe } from "lucide-react";

const projects = [
  {
    icon: Lock,
    title: "Password Manager System",
    desc: "Secure credential storage system using MySQL backend with user-based tables, email-based login, and encryption concepts.",
    tech: ["Python", "MySQL", "Encryption"],
    color: "primary" as const,
  },
  {
    icon: FlaskConical,
    title: "CTF Platform (Docker-Based)",
    desc: "Custom cybersecurity challenges with real-world attack scenarios including SSTI exploitation, RSA challenges, and AI exploitation simulation.",
    tech: ["Docker", "Python", "Web Backend"],
    color: "secondary" as const,
  },
  {
    icon: Bot,
    title: "AI Simulation Challenge",
    desc: "Simulated AI system for exploitation-based CTF — bypass logic to retrieve hidden flags through a chat interface.",
    tech: ["Python", "Backend Logic"],
    color: "primary" as const,
  },
  {
    icon: Globe,
    title: "Distributed Laptop Server",
    desc: "Concept of using multiple laptops as a distributed server cluster for cost-efficient infrastructure.",
    tech: ["Networking", "Linux", "Architecture"],
    color: "secondary" as const,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/40 transition-all group"
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${p.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}>
                <p.icon className={p.color === "primary" ? "text-primary" : "text-secondary"} size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
