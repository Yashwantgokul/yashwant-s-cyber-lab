import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming",
    skills: ["Python", "C++", "SQL (MySQL)"],
  },
  {
    title: "Cybersecurity",
    skills: ["Web Vulnerabilities (SSTI, RSA)", "CTF Design & Exploitation", "Penetration Testing Concepts"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Linux", "Docker", "MySQL", "Git", "Networking (CCNA)"],
  },
  {
    title: "Concepts",
    skills: ["Secure Authentication", "Encryption & Tokens", "Backend Logic Design"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          Skills & <span className="text-gradient">Tools</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
