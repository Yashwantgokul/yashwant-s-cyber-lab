import { motion } from "framer-motion";
import { Shield, Code, Server, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Cybersecurity", desc: "CTF design & exploitation" },
  { icon: Code, label: "Development", desc: "Python, C++, SQL" },
  { icon: Server, label: "Systems", desc: "Docker, Linux, Networking" },
  { icon: GraduationCap, label: "Self-Taught", desc: "Beyond curriculum" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-12">
            I'm a highly motivated student and aspiring cybersecurity
            professional with hands-on experience building applications,
            experimenting with system security, and designing real-world
            inspired projects. I enjoy breaking systems to understand them
            better — and rebuilding them stronger.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-6 hover:border-primary/40 transition-colors group"
            >
              <h.icon className="text-primary mb-3 group-hover:drop-shadow-[0_0_8px_hsl(160,100%,50%,0.5)] transition-all" size={28} />
              <h3 className="font-semibold text-foreground mb-1">{h.label}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass-card rounded-xl p-8"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="text-primary" size={22} /> Education & Learning
          </h3>
          <p className="text-muted-foreground mb-3">
            Currently pursuing higher secondary education — while self-learning advanced topics:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Cybersecurity Fundamentals", "Networking (CCNA-level)", "Operating Systems", "Python", "C++", "CTF Challenges", "Online Courses"].map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
