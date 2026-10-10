import { motion } from 'framer-motion';

const MySchool = () => {
  return (
    <section id="school" className="min-h-screen flex items-center bg-background relative py-32">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-gold font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 05</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">WHERE IT STARTED.</h2>
          <div className="w-24 h-[2px] bg-gold mt-8"></div>
        </motion.div>

        <div className="max-w-4xl border-l border-white/10 pl-8 md:pl-16 relative">
          {/* Timeline dots */}
          <div className="absolute left-[-5px] top-4 w-2.5 h-2.5 bg-gold rounded-full"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-3xl md:text-5xl font-display font-semibold text-softwhite mb-2">Jawahar Navodaya Vidyalaya</h3>
            <p className="text-xl text-muted font-light uppercase tracking-widest">Agra, Uttar Pradesh, India</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass p-8 border-t-2 border-t-gold/50"
            >
              <h4 className="text-lg text-muted uppercase tracking-widest mb-4">Class 10</h4>
              <p className="text-3xl font-display font-bold text-softwhite">Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass p-8 border-t-2 border-t-gold/50"
            >
              <h4 className="text-lg text-muted uppercase tracking-widest mb-4">Class 12</h4>
              <p className="text-3xl font-display font-bold text-softwhite">Completed</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySchool;
