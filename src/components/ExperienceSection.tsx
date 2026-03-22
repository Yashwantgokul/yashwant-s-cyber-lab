import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Technical Lead",
    org: "V-Vortex",
    points: [
      "Led cybersecurity and technical operations",
      "Managed hackathons and project evaluations",
      "Worked on ideathon structures and technical planning",
    ],
  },
  {
    role: "Technical Team Member",
    org: "Cyscom VIT Chennai",
    points: [
      "Worked on Python and CTF challenges",
      "Contributed to cybersecurity initiatives",
      "Delivered a session on middleware and integration security issues",
    ],
  },
  {
    role: "Graphic Designer",
    org: "VITSION",
    points: ["Designed creative assets and visuals"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 shrink-0">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary text-sm font-mono mb-3">{exp.org}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
