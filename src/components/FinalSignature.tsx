import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const FinalSignature = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-crimson/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full flex flex-col items-center justify-center mb-12"
        >
          <h2 className="text-[10vw] md:text-[8vw] leading-[0.85] font-display font-bold tracking-tighter text-white uppercase text-center w-full opacity-80">
            ADITYA UPADHYAY
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl font-light tracking-widest text-muted uppercase text-center max-w-3xl leading-relaxed"
        >
          Curious Mind. <span className="text-softwhite">Analytical Thinking.</span> Intelligent Solutions.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <button 
          onClick={scrollToTop}
          className="w-16 h-16 glass rounded-full flex flex-col items-center justify-center text-muted hover:text-crimson hover:border-crimson transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="mb-1" />
          <span className="text-[8px] uppercase tracking-widest font-bold">TOP</span>
        </button>
      </motion.div>
    </section>
  );
};

export default FinalSignature;
