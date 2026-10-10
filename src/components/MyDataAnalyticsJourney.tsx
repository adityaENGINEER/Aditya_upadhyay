import { motion } from 'framer-motion';

const MyDataAnalyticsJourney = () => {
  const tools = [
    { name: 'Python', role: 'Data Scripting' },
    { name: 'NumPy', role: 'Numerical Computing' },
    { name: 'pandas', role: 'Data Manipulation' },
    { name: 'SQL', role: 'Database Querying' },
    { name: 'Microsoft Excel', role: 'Spreadsheet Analysis' },
    { name: 'Power BI', role: 'Data Visualization' },
    { name: 'Matplotlib', role: 'Plotting' },
    { name: 'Seaborn', role: 'Statistical Visualization' }
  ];

  return (
    <section id="analytics" className="min-h-screen flex items-center bg-secondary relative py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="text-gold font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 10</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">TURNING DATA<br/>INTO INSIGHTS.</h2>
          <div className="w-24 h-[2px] bg-gold mx-auto mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-5%" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 border-l-2 border-l-transparent hover:border-l-gold transition-all duration-300 relative group"
            >
              <div className="absolute right-4 top-4 w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors"></div>
              <h3 className="text-2xl font-display font-semibold mb-2">{tool.name}</h3>
              <p className="text-sm text-muted uppercase tracking-widest">{tool.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyDataAnalyticsJourney;
