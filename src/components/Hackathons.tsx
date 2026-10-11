import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const Hackathons = () => {
  return (
    <section id="hackathons" className="min-h-screen flex items-center bg-secondary relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 16</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">BUILDING WITH OTHERS.</h2>
          <div className="w-24 h-[2px] bg-crimson mx-auto mt-8"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* SIH 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl w-full mx-auto glass p-10 md:p-16 text-center border-t-2 border-t-crimson/50 relative group"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Smart India Hackathon (SIH) 2026</h3>
            <p className="text-gold uppercase tracking-widest text-sm mb-8">National Hackathon</p>
            
            <p className="text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto mb-10">
              A collaborative national-level project focusing on building scalable, impactful solutions to real-world problems. Worked closely with a team to rapidly prototype, integrate systems, and deliver a comprehensive technical solution.
            </p>

            <div className="flex justify-center">
              <a 
                href="https://github.com/adityaENGINEER/SIH2026" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 group-hover:text-white text-softwhite transition-colors border border-white/10 px-6 py-3 rounded-full hover:bg-white/5"
              >
                <FiGithub size={20} />
                <span className="uppercase tracking-widest text-sm font-medium">View on GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* ORBIX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl w-full mx-auto glass p-10 md:p-16 text-center border-t-2 border-t-crimson/50"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">ORBIX Hackathon</h3>
            <p className="text-gold uppercase tracking-widest text-sm mb-8">IIIT Delhi</p>
            
            <p className="text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto">
              Participated with a collaborative team. Gained practical experience in exploring AI-based solutions, pitching ideas, and working rapidly alongside other developers in a competitive environment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
