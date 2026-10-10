import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Cinematic subtle background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/microial-squares.png')] opacity-[0.02] pointer-events-none"></div>
      
      {/* Red ambient lighting */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-crimson rounded-full blur-[150px] pointer-events-none"
      ></motion.div>

      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-[15vw] leading-[0.85] font-display font-bold tracking-tighter text-white uppercase text-center w-full">
            <span className="block hover:text-crimson transition-colors duration-700">ADITYA</span>
            <span className="block hover:text-crimson transition-colors duration-700">UPADHYAY</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-12 md:mt-16 flex flex-col items-center"
        >
          <p className="text-sm md:text-xl font-light tracking-widest text-muted uppercase mb-4">
            Computer Science & Artificial Intelligence Student
          </p>
          <div className="flex items-center space-x-3 text-xs tracking-[0.3em] text-crimson">
            <span>AI</span>
            <span className="text-white/20">•</span>
            <span>DATA</span>
            <span className="text-white/20">•</span>
            <span>TECHNOLOGY</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted/50 mb-6">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-crimson/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
