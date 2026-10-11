import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

const FifaDataAnalysis = () => {
  const project = projects[2]; // FIFA

  return (
    <section id="project-fifa" className="min-h-screen flex items-center bg-secondary relative py-32">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="w-full aspect-square md:aspect-video lg:aspect-square bg-[url('https://images.unsplash.com/photo-1518605368461-1e1e114e5b72?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-2xl relative overflow-hidden group border border-white/5"
          >
            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors duration-700"></div>
            <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               {/* Abstract circular representation resembling a football / global data */}
               <div className="w-32 h-32 rounded-full border-4 border-dashed border-crimson animate-spin-slow"></div>
               <div className="absolute w-20 h-20 rounded-full border-2 border-gold border-opacity-50"></div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="text-crimson font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 15.5</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase">
                {project.name}
              </h2>
              <p className="text-xl text-muted font-light leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-sm uppercase tracking-widest text-muted/50 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-3 mb-12">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 border border-white/10 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-6">
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-softwhite hover:text-crimson transition-colors">
                    <FiGithub size={24} />
                    <span className="uppercase tracking-widest text-sm font-medium">View on GitHub</span>
                  </a>
                ) : (
                  <span className="flex items-center space-x-3 text-muted/50 italic">
                    <FiGithub size={24} className="opacity-50" />
                    <span className="uppercase tracking-widest text-sm">Repository link coming soon</span>
                  </span>
                )}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FifaDataAnalysis;
