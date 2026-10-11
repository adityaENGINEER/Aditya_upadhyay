import { motion } from 'framer-motion';

const WhyIChoseCS = () => {
  return (
    <section id="whyai" className="min-h-screen flex items-center bg-secondary relative py-32">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 08</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">EXPLORING INTELLIGENCE<br/>THROUGH TECHNOLOGY.</h2>
          <div className="w-24 h-[2px] bg-white/20 mt-8 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-softwhite font-light leading-relaxed tracking-tight"
          >
            My fascination with computer science stems from its power to model reality and solve complex problems.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted font-light leading-relaxed"
          >
            I am actively exploring artificial intelligence and data analytics because I believe the future of software lies not just in writing instructions, but in building systems that can learn, adapt, and generate insights from raw information.
          </motion.p>
        </div>
      </div>

      {/* Abstract geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] border border-crimson/30 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] border border-white/5 rounded-full"
        />
      </div>
    </section>
  );
};

export default WhyIChoseCS;
