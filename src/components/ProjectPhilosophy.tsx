import { motion } from 'framer-motion';

const ProjectPhilosophy = () => {
  return (
    <section id="philosophy" className="min-h-[80vh] flex items-center bg-background relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 13</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">LEARNING BY BUILDING.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-3xl text-muted font-light leading-relaxed">
            Theory provides the map, but projects are the journey. Personal and academic projects allow me to apply abstract concepts to concrete challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPhilosophy;
