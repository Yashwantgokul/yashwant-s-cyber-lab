import { motion } from "framer-motion";
import { Lock, FlaskConical, Globe, Flame, FileSearch, Brain, Shield, Construction } from "lucide-react";

const projects = [
  {
    icon: Globe,
    title: "CiviTrack — SIH Project",
    desc: "Government issue complaint system with RAG-based data retrieval for admin access, AI-based task assignment, and workflow automation using n8n.",
    tech: ["RAG", "AI", "n8n", "Full-Stack"],
    color: "primary" as const,
  },
  {
    icon: Flame,
    title: "SmartG — Gas Leak & Fire Detection",
    desc: "IoT-based gas leak and fire detection using ESP32 & MQ-2 sensor. Real-time monitoring, emergency alerts via Telegram & Twilio, PDF incident reports with SHA-256 integrity.",
    tech: ["ESP32", "Flask", "MySQL", "Twilio", "Telegram Bot"],
    color: "secondary" as const,
  },
  {
    icon: Lock,
    title: "Enigma Password Manager",
    desc: "Secure credential storage system with OTP-based authentication using Python and MySQL backend.",
    tech: ["Python", "MySQL", "OTP Auth"],
    color: "primary" as const,
  },
  {
    icon: Brain,
    title: "CryptoTaxPro",
    desc: "AI-powered crypto tax tool with automation-focused system for simplified tax calculations.",
    tech: ["AI", "Automation"],
    color: "secondary" as const,
  },
  {
    icon: Shield,
    title: "VulnShield",
    desc: "Security-focused Python project designed for vulnerability handling and detection.",
    tech: ["Python", "Security"],
    color: "primary" as const,
  },
  {
    icon: FileSearch,
    title: "CTF Challenges",
    desc: "Custom challenges: Cathedral Collapse (Forensics), Hymn of the Handshake (Packet Analysis), Reconfiguration Terminal (Web Exploitation).",
    tech: ["Forensics", "Packet Analysis", "Web Exploitation"],
    color: "secondary" as const,
  },
  {
    icon: FlaskConical,
    title: "CTF Platform (Docker-Based)",
    desc: "Custom cybersecurity challenges with real-world attack scenarios including SSTI exploitation, RSA challenges, and AI exploitation simulation.",
    tech: ["Docker", "Python", "Web Backend"],
    color: "primary" as const,
    wip: true,
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
              className="glass-card rounded-xl p-6 hover:border-primary/40 transition-all group relative"
            >
              {p.wip && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-full border border-secondary text-secondary">
                  <Construction size={12} /> In Progress
                </span>
              )}
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
