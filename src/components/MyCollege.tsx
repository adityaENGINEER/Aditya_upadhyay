import { motion } from 'framer-motion';

const MyCollege = () => {
  return (
    <section id="college" className="min-h-screen flex items-center bg-background relative py-32 overflow-hidden">
      <div className="absolute left-[-20%] top-1/4 w-3/4 h-3/4 bg-crimson/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 07</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">MY ENGINEERING<br/>JOURNEY.</h2>
          <div className="w-24 h-[2px] bg-crimson mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-4xl md:text-5xl font-display font-bold text-softwhite mb-4 leading-tight">
              IIMT College of Engineering
            </h3>
            <p className="text-xl text-muted font-light uppercase tracking-widest mb-16">
              Greater Noida, Uttar Pradesh, India
            </p>
          </motion.div>

          <div className="space-y-12 border-l border-white/10 pl-8 relative">
            {/* Timeline highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-crimson via-crimson/20 to-transparent"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -left-[37px] top-2 w-2 h-2 bg-crimson rounded-full ring-4 ring-background"></div>
              <h4 className="text-sm text-crimson uppercase tracking-widest mb-2 font-semibold">Degree</h4>
              <p className="text-2xl md:text-3xl text-softwhite font-light">Bachelor of Technology (B.Tech)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-[37px] top-2 w-2 h-2 bg-crimson rounded-full ring-4 ring-background"></div>
              <h4 className="text-sm text-crimson uppercase tracking-widest mb-2 font-semibold">Branch</h4>
              <p className="text-2xl md:text-3xl text-softwhite font-light">Computer Science and Engineering (Artificial Intelligence)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-[37px] top-2 w-2 h-2 bg-crimson rounded-full ring-4 ring-background animate-pulse"></div>
              <h4 className="text-sm text-crimson uppercase tracking-widest mb-2 font-semibold">Current Academic Stage</h4>
              <p className="text-2xl md:text-3xl text-white font-medium">Third Year — Fifth Semester</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCollege;
