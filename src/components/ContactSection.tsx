import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Let's build something secure and impactful together.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:yashwant.dev@example.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              <Mail size={18} /> Email Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <FileDown size={18} /> Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
