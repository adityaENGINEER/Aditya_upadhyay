import { motion } from 'framer-motion';

const MyEducationalFoundation = () => {
  return (
    <section id="foundation" className="min-h-[80vh] flex items-center bg-secondary relative py-32 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 06</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold">THE FOUNDATION OF MY JOURNEY.</h2>
          <div className="w-24 h-[2px] bg-white/20 mt-8 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-3xl text-muted font-light leading-relaxed">
            My early education laid the groundwork for my analytical thinking and curiosity about how complex systems work, paving the way for my transition into engineering and technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyEducationalFoundation;
