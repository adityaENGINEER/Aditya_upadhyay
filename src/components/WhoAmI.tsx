import { motion } from 'framer-motion';

const WhoAmI = () => {
  return (
    <section id="whoami" className="min-h-screen flex items-center bg-secondary relative py-32">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 02</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">WHO AM I?</h2>
          <div className="w-24 h-[2px] bg-white/20 mt-8"></div>
        </motion.div>

        <div className="max-w-3xl space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-softwhite font-light leading-relaxed"
          >
            I am <span className="text-white font-medium">Aditya Upadhyay</span>, a B.Tech student pursuing Computer Science and Engineering with a specialization in Artificial Intelligence.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted font-light leading-relaxed"
          >
            I am deeply interested in programming, data analytics, and the mechanics of intelligent systems. My focus is on understanding how data becomes useful information and how algorithms can solve practical problems.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
