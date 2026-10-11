import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Info } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Have an Idea?<br />
              <span className="text-crimson">Let's Connect.</span>
            </h2>
            <p className="text-xl text-muted font-light mb-12">
              I'm always interested in learning, collaborating, and exploring meaningful technology projects.
            </p>

            <div className="space-y-6">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 glass hover:bg-white/5 transition-colors group rounded-xl"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-crimson group-hover:text-white transition-colors">
                  <FiGithub size={24} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted">GitHub</h3>
                  <p className="text-softwhite font-medium">github.com/adityaENGINEER</p>
                </div>
              </a>
              
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 glass hover:bg-white/5 transition-colors group rounded-xl"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FiLinkedin size={24} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted">LinkedIn</h3>
                  <p className="text-softwhite font-medium">linkedin.com/in/adityaupadhyaycse</p>
                </div>
              </a>
              
              {profile.social.email && (
                <a
                  href={`mailto:${profile.social.email}`}
                  className="flex items-center space-x-4 p-4 glass hover:bg-white/5 transition-colors group rounded-xl"
                >
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
                  <label htmlFor="name" className="text-sm font-medium text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Aditya Upadhyay"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite placeholder:text-muted/40 focus:outline-none focus:border-crimson transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite placeholder:text-muted/40 focus:outline-none focus:border-crimson transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted">
                  Subject <span className="text-muted/50 text-xs font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Collaboration / Inquiries"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite placeholder:text-muted/40 focus:outline-none focus:border-crimson transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your idea, proposal, or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite placeholder:text-muted/40 focus:outline-none focus:border-crimson transition-colors resize-none"
                ></textarea>
              </div>

              {submitted && (
                <div className="flex items-start space-x-3 p-4 bg-white/5 border border-white/10 rounded-lg text-muted text-sm">
                  <Info size={18} className="shrink-0 mt-0.5 text-crimson" />
                  <div>
                    <p className="font-medium text-softwhite">Direct form submission is currently inactive</p>
                    <p className="text-xs text-muted mt-1 leading-relaxed">
                      Message delivery via this form is currently unavailable. Please connect with me directly using the LinkedIn, GitHub, or Email options on the left.
                    </p>
                  </div>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-crimson hover:bg-deepred text-white font-medium tracking-wide py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

