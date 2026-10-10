import { motion } from 'framer-motion';

const MyDevelopmentToolkit = () => {
  const tools = [
    "Jupyter Notebook",
    "PyCharm",
    "MySQL Workbench",
    "Git",
    "GitHub",
    "Excel",
    "Power BI"
  ];

  return (
    <section id="toolkit" className="min-h-screen flex items-center bg-secondary relative py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-muted font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 12</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">TOOLS I WORK WITH.</h2>
          <div className="w-24 h-[2px] bg-white/20 mx-auto mt-8"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="px-8 py-5 border border-white/10 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300 cursor-default"
            >
              <span className="text-xl font-medium tracking-wide">{tool}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyDevelopmentToolkit;
