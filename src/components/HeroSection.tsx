import { motion } from "framer-motion";
import { Rocket, Mail } from "lucide-react";
import profileImg from "@/assets/profile-silhouette.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center cyber-grid overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            {"// Cybersecurity Enthusiast • Developer • Builder"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient glow-text">Yashwant</span> —<br />
            I build secure, scalable systems.
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
            Passionate about cybersecurity, backend systems, and real-world
            problem solving. Currently exploring advanced security concepts, CTF
            challenges, and system-level engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              <Rocket size={18} /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px]" />
            <img
              src={profileImg}
              alt="Yashwant G. - Cybersecurity Developer"
              className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full border-2 border-primary/30 animate-float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
