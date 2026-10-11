import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { profile } from '../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-spam bot trap
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const lastSubmitTime = useRef<number>(0);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-spam honeypot check
    if (formData.honeypot) {
      console.warn('Bot detected via honeypot.');
      setStatus('error');
      setErrorMessage('Submission rejected.');
      return;
    }

    // 2. Prevent rapid consecutive submissions (5-second throttle)
    const now = Date.now();
    if (now - lastSubmitTime.current < 5000) {
      setStatus('error');
      setErrorMessage('Please wait a few seconds before sending another message.');
      return;
    }

    // 3. Field validations
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setStatus('error');
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!trimmedEmail || !validateEmail(trimmedEmail)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a message of at least 10 characters.');
      return;
    }

    if (trimmedMessage.length > 2500) {
      setStatus('error');
      setErrorMessage('Message exceeds the maximum limit of 2500 characters.');
      return;
    }

    // 4. Check for EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage(
        'Email service is not yet configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your environment.'
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    lastSubmitTime.current = now;

    try {
      const templateParams = {
        from_name: trimmedName,
        from_email: trimmedEmail,
        subject: trimmedSubject || 'New Portfolio Contact Submission',
        message: trimmedMessage,
        sent_at: new Date().toLocaleString(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });

      // Automatically reset status back to idle after 6 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 6000);
    } catch (err: unknown) {
      console.error('Email delivery error:', err);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later or reach out directly via LinkedIn/GitHub.');
    }
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
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot field hidden from users for bot spam protection */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted">
                    Full Name <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    placeholder="Aditya Upadhyay"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite placeholder:text-muted/40 focus:outline-none focus:border-crimson transition-colors disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted">
                    Email Address <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={120}
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite placeholder:text-muted/40 focus:outline-none focus:border-crimson transition-colors disabled:opacity-50"
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
                  maxLength={150}
                  placeholder="Project Collaboration / Inquiries"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite placeholder:text-muted/40 focus:outline-none focus:border-crimson transition-colors disabled:opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="message" className="text-sm font-medium text-muted">
                    Message <span className="text-crimson">*</span>
                  </label>
                  <span className="text-xs text-muted/60">
                    {formData.message.length}/2500
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={2500}
                  placeholder="Tell me about your idea, proposal, or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-softwhite placeholder:text-muted/40 focus:outline-none focus:border-crimson transition-colors resize-none disabled:opacity-50"
                ></textarea>
              </div>

              {/* Status alerts */}
              {status === 'success' && (
                <div className="flex items-start space-x-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  <CheckCircle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-xs text-green-400/80 mt-0.5">
                      Thank you for reaching out. Your message has been delivered to my inbox and I will get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && errorMessage && (
                <div className="flex items-start space-x-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Unable to send message</p>
                    <p className="text-xs text-red-400/80 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}
              
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-crimson hover:bg-deepred text-white font-medium tracking-wide py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

