import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { profile } from '../data/profile';

const MyDigitalPresence = () => {
  return (
    <section id="digital" className="min-h-[80vh] flex items-center bg-background relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-3xl bg-crimson/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-muted font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 19</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold">FIND ME ONLINE.</h2>
          <div className="w-24 h-[2px] bg-white/20 mx-auto mt-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
          <motion.a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 glass p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors duration-300 group rounded-2xl"
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-softwhite group-hover:text-black transition-colors duration-300">
              <FiGithub size={32} />
            </div>
            <h3 className="text-xl font-medium tracking-wide">GitHub</h3>
            <p className="text-sm text-muted mt-2 font-light">@adityaENGINEER</p>
          </motion.a>

          <motion.a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 glass p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors duration-300 group rounded-2xl"
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300">
              <FiLinkedin size={32} />
            </div>
            <h3 className="text-xl font-medium tracking-wide">LinkedIn</h3>
            <p className="text-sm text-muted mt-2 font-light">adityaupadhyaycse</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 glass p-8 flex flex-col items-center justify-center border border-white/5 opacity-50 cursor-not-allowed rounded-2xl"
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <FiInstagram size={32} />
            </div>
            <h3 className="text-xl font-medium tracking-wide">Instagram</h3>
            <p className="text-sm text-muted mt-2 font-light">Coming soon</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyDigitalPresence;
