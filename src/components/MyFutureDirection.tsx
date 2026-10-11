import { motion } from 'framer-motion';

const MyFutureDirection = () => {
  const directions = [
    "AI Engineering",
    "Data Analytics",
    "Data Science",
    "Machine Learning",
    "Generative AI",
    "Cloud Technologies"
  ];

  return (
    <section id="future" className="min-h-screen flex items-center bg-secondary relative py-32">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 18</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">WHERE I WANT TO GO.</h2>
          <div className="w-24 h-[2px] bg-white/20 mx-auto mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {directions.map((dir, idx) => (
            <motion.div
              key={dir}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-10 hover:border-crimson/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-display font-semibold text-softwhite">{dir}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyFutureDirection;
