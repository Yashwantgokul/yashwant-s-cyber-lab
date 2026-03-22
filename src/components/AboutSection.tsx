import { motion } from "framer-motion";
import { Shield, Code, Server, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Cybersecurity", desc: "CTF, Web Exploitation, Forensics" },
  { icon: Code, label: "Development", desc: "C, Python, TypeScript" },
  { icon: Server, label: "Systems", desc: "Linux, MySQL, Networking" },
  { icon: GraduationCap, label: "B.Tech CS", desc: "VIT Chennai (2025–2029)" },
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
            Cybersecurity enthusiast and developer focused on building secure
            systems and solving real-world problems. Actively participates in
            CTF challenges and develops practical applications.
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
            <GraduationCap className="text-primary" size={22} /> Education
          </h3>
          <div className="space-y-3 mb-6">
            <div>
              <p className="text-foreground font-medium">B.Tech Computer Science</p>
              <p className="text-sm text-muted-foreground">VIT Chennai — 2025–2029</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Higher Secondary</p>
              <p className="text-sm text-muted-foreground">DAV Chennai</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
