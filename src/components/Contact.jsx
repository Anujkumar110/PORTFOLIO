import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { personalInfo, contactData } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        contactData.emailjsServiceId,
        contactData.emailjsTemplateId,
        formRef.current,
        contactData.emailjsPublicKey,
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const socials = [
    { icon: FiGithub,   label: 'GitHub',   url: personalInfo.socialLinks.github   },
    { icon: FiLinkedin, label: 'LinkedIn', url: personalInfo.socialLinks.linkedin },
    { icon: FiTwitter,  label: 'Twitter',  url: personalInfo.socialLinks.twitter  },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="section-container">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Let's build something great together
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              I'm always open to exciting projects, freelance opportunities, or just a friendly chat.
              Drop me a message — I'll get back to you within 24 hours!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/40 flex items-center justify-center">
                  <FiMail className="text-primary-500" size={18} />
                </div>
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/40 flex items-center justify-center">
                  <FiMapPin className="text-primary-500" size={18} />
                </div>
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, url }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl
                             bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300
                             hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500
                             hover:text-white transition-all duration-200 shadow-sm"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 shadow-card dark:shadow-card-dark space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Name <span className="text-secondary-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl text-sm
                               bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700
                               text-slate-900 dark:text-white placeholder-slate-400
                               focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                               transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email <span className="text-secondary-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl text-sm
                               bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700
                               text-slate-900 dark:text-white placeholder-slate-400
                               focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                               transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl text-sm
                             bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700
                             text-slate-900 dark:text-white placeholder-slate-400
                             focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                             transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message <span className="text-secondary-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-xl text-sm resize-none
                             bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700
                             text-slate-900 dark:text-white placeholder-slate-400
                             focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                             transition-all duration-200"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2.5 rounded-xl">
                  <FiCheckCircle /> Message sent! I'll be in touch soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-4 py-2.5 rounded-xl">
                  <FiXCircle /> Something went wrong. Please try again.
                </motion.div>
              )}

              <motion.button
                id="contact-submit-btn"
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl
                           font-semibold text-white
                           bg-gradient-to-r from-primary-500 to-secondary-500
                           hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed
                           shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50
                           transition-all duration-300"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
