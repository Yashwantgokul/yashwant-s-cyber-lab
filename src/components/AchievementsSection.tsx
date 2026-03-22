import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  "Finalist — Sastra CTF (IITM)",
  "Finalist — Yukthi 2.0 CTF (Tamil Nadu Police)",
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Achievements</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 flex items-center gap-4"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 shrink-0">
                <Trophy className="text-primary" size={24} />
              </div>
              <p className="text-foreground font-medium">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
