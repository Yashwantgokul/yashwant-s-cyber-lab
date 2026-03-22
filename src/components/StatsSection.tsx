import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const StatsSection = () => {
  return (
    <section id="stats" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          Platform <span className="text-gradient">Stats</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">LeetCode</h3>
              <a
                href="https://leetcode.com/u/yashwantgokul1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-primary">76</p>
              <p className="text-sm text-muted-foreground">Problems Solved</p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-lg font-bold text-emerald-400">46</p>
                <p className="text-xs text-muted-foreground">Easy</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <p className="text-lg font-bold text-amber-400">28</p>
                <p className="text-xs text-muted-foreground">Medium</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-lg font-bold text-red-400">2</p>
                <p className="text-xs text-muted-foreground">Hard</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contest Rating</span>
                <span className="text-foreground font-mono">1,578</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Top</span>
                <span className="text-foreground font-mono">26.68%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Max Streak</span>
                <span className="text-foreground font-mono">9 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Languages</span>
                <span className="text-foreground font-mono">C, Python, C++</span>
              </div>
            </div>
          </motion.div>

          {/* TryHackMe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">TryHackMe</h3>
              <a
                href="https://tryhackme.com/p/yashwantgokul1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="flex justify-center mb-6">
              <img
                src="https://tryhackme-badges.s3.amazonaws.com/yashwantgokul1.png"
                alt="TryHackMe Badge"
                className="h-auto max-w-full rounded-lg"
              />
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Active on TryHackMe — completing rooms in cybersecurity, networking, and penetration testing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
