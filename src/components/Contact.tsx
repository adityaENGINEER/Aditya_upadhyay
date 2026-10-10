import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2 } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Have an Idea?<br/><span className="text-crimson">Let's Connect.</span></h2>
            <p className="text-xl text-muted font-light mb-12">
              I'm always interested in learning, collaborating, and exploring meaningful technology projects.
            </p>

            <div className="space-y-6">
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="flex items-center space-x-4 p-4 glass hover:bg-white/5 transition-colors group rounded-xl">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-crimson group-hover:text-white transition-colors">
                  <FiGithub size={24} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted">GitHub</h3>
                  <p className="text-softwhite font-medium">github.com/adityaENGINEER</p>
                </div>
              </a>
              
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center space-x-4 p-4 glass hover:bg-white/5 transition-colors group rounded-xl">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FiLinkedin size={24} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted">LinkedIn</h3>
                  <p className="text-softwhite font-medium">linkedin.com/in/adityaupadhyaycse</p>
                </div>
              </a>
              
              {profile.social.email && (
                <a href={`mailto:${profile.social.email}`} className="flex items-center space-x-4 p-4 glass hover:bg-white/5 transition-colors group rounded-xl">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-muted">Email</h3>
                    <p className="text-softwhite font-medium">{profile.social.email}</p>
                  </div>
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-10 rounded-2xl relative"
          >
            <h3 className="text-2xl font-display font-semibold mb-8 text-softwhite">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite focus:outline-none focus:border-crimson transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite focus:outline-none focus:border-crimson transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite focus:outline-none focus:border-crimson transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite focus:outline-none focus:border-crimson transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-crimson hover:bg-deepred text-white font-medium tracking-wide py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : status === 'success' ? (
                  <span>Message Sent Successfully</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
              {status === 'success' && <p className="text-green-500 text-sm mt-2 text-center">Form integration placeholder. Currently no backend configured.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
