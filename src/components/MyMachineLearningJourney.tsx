import { motion } from 'framer-motion';

const MyMachineLearningJourney = () => {
  const concepts = [
    "Data Preprocessing",
    "Exploratory Data Analysis",
    "Feature Encoding",
    "Introductory Predictive Modeling"
  ];

  return (
    <section id="machinelearning" className="min-h-screen flex items-center bg-background relative py-32">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:text-right"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 11</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold">LEARNING TO BUILD<br/>INTELLIGENT SYSTEMS.</h2>
          <div className="w-24 h-[2px] bg-white/20 mt-8 md:ml-auto"></div>
        </motion.div>

        <div className="relative pt-10">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-crimson/50 via-white/10 to-transparent"></div>
          
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-4">
            {concepts.map((concept, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative lg:w-1/4"
              >
                <div className="absolute -top-[45px] left-0 w-2 h-2 bg-crimson rounded-full ring-4 ring-background"></div>
                <h3 className="text-xl font-display font-medium text-softwhite">{concept}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 glass p-6 inline-block"
        >
          <p className="text-muted font-light text-sm tracking-widest uppercase">
            * Currently exploring foundational machine learning concepts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyMachineLearningJourney;
