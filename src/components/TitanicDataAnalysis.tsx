import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

const TitanicDataAnalysis = () => {
  const project = projects[1]; // Titanic

  return (
    <section id="project-titanic" className="min-h-screen flex items-center bg-background relative py-32 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-white/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square bg-[url('https://images.unsplash.com/photo-1572005953530-01d0c41031c5?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-2xl relative overflow-hidden group border border-white/5"
          >
            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors duration-700"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               {/* Abstract representation of data metrics/charts */}
               <div className="flex items-end space-x-2">
                 <div className="w-4 h-16 bg-crimson"></div>
                 <div className="w-4 h-24 bg-white/50"></div>
                 <div className="w-4 h-10 bg-gold"></div>
                 <div className="w-4 h-32 bg-crimson"></div>
               </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="text-white/40 font-accent text-sm tracking-[0.3em] uppercase mb-4 block">Section 15</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight uppercase">
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
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-softwhite hover:text-white transition-colors">
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

export default TitanicDataAnalysis;
