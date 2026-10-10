import { motion } from 'framer-motion';

const MyMindset = () => {
  return (
    <section id="mindset" className="min-h-[90vh] flex items-center bg-secondary relative py-32 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-thread-light.png')] opacity-[0.05]"></div>
      
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 04</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">ALWAYS LEARNING.</h2>
          <div className="w-24 h-[2px] bg-white/20 mt-8 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-5xl text-softwhite font-light leading-tight tracking-tight">
            Practical experimentation and thoughtful problem-solving are essential to becoming a better engineer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyMindset;
