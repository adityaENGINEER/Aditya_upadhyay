import { motion } from 'framer-motion';

const MyStory = () => {
  return (
    <section id="mystory" className="min-h-screen flex items-center bg-background relative py-32">
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-crimson/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:text-right"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 03</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">MY JOURNEY,<br />MY GROWTH.</h2>
          <div className="w-24 h-[2px] bg-white/20 mt-8 md:ml-auto"></div>
        </motion.div>

        <div className="max-w-3xl ml-auto space-y-12 md:text-right">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-softwhite font-light leading-relaxed"
          >
            I am steadily developing my technical foundation through formal education, hands-on personal projects, and collaborative hackathons.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted font-light leading-relaxed"
          >
            Every step of my journey is driven by a desire to bridge the gap between theoretical knowledge and real-world application. I believe in learning by doing, continuously exploring new tools, and collaborating with others to build better solutions.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
