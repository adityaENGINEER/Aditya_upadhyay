import { motion } from 'framer-motion';

const MyInterestInGenerativeAI = () => {
  return (
    <section id="genai" className="min-h-screen flex items-center bg-background relative py-32 overflow-hidden">
      {/* Network / AI abstract bg */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 md:text-right">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-gold font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 17</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-l from-gold to-yellow-600">
            EXPLORING THE NEXT<br/>WAVE OF AI.
          </h2>
          <div className="w-24 h-[2px] bg-gold mt-8 md:ml-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl ml-auto"
        >
          <p className="text-xl md:text-2xl text-muted font-light leading-relaxed mb-12">
            I am fascinated by how rapidly technology is evolving. I am actively interested in understanding how Generative AI, Large Language Models, locally hosted AI systems, and document intelligence can transform problem-solving.
          </p>

          <div className="flex flex-wrap justify-end gap-3">
            {["Generative AI", "Large Language Models", "AI-Powered Applications", "Locally Hosted AI", "Document Intelligence"].map((item, idx) => (
              <span key={idx} className="px-5 py-2 border border-white/10 rounded-full text-sm text-softwhite/70">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyInterestInGenerativeAI;
