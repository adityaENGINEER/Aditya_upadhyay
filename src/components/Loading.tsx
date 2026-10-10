import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-softwhite">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-display font-bold tracking-widest text-gradient"
          initial={{ letterSpacing: "0.1em" }}
          animate={{ letterSpacing: "0.2em" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          ADITYA UPADHYAY
        </motion.h1>
        
        <motion.p
          className="mt-6 text-sm md:text-base text-muted uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Building my future, one project at a time.
        </motion.p>
        
        <motion.div 
          className="mt-12 h-[1px] w-0 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto"
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default Loading;
