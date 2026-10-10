import { motion } from 'framer-motion';

const MyProgrammingJourney = () => {
  const languages = ['Python', 'C', 'HTML', 'CSS', 'JavaScript', 'Java'];

  return (
    <section id="programming" className="min-h-screen flex items-center bg-background relative py-32">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:text-right"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 09</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">FROM CODE TO<br/>CREATION.</h2>
          <div className="w-24 h-[2px] bg-white/20 mt-8 md:ml-auto"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {languages.map((lang, idx) => (
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-12 text-center group hover:border-crimson/50 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-crimson/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-softwhite/80 group-hover:text-white transition-colors relative z-10">
                {lang}
              </h3>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center text-muted font-light max-w-2xl mx-auto"
        >
          These languages form the foundation of my technical ability, allowing me to build algorithms, script solutions, and structure web elements as I continue to deepen my knowledge.
        </motion.p>
      </div>
    </section>
  );
};

export default MyProgrammingJourney;
