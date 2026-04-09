import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const ROLES = personalInfo.roles;

// Floating particle component
function Particle({ style }) {
  return <div className="absolute rounded-full opacity-20 animate-pulse-slow" style={style} />;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const particles = [
    { width: 80, height: 80, top: '10%', left: '8%',  background: 'rgba(99,102,241,0.6)',  animationDelay: '0s' },
    { width: 50, height: 50, top: '70%', left: '5%',  background: 'rgba(236,72,153,0.5)', animationDelay: '1s' },
    { width: 120,height: 120,top: '15%', right: '6%', background: 'rgba(139,92,246,0.4)', animationDelay: '2s' },
    { width: 60, height: 60, top: '60%', right: '8%', background: 'rgba(6,182,212,0.5)',  animationDelay: '0.5s' },
    { width: 40, height: 40, top: '40%', left: '2%',  background: 'rgba(99,102,241,0.4)', animationDelay: '1.5s' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
                 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-pink-50/30
                 dark:from-slate-900 dark:via-indigo-950/50 dark:to-slate-900"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-400/20 dark:bg-secondary-600/10 rounded-full blur-3xl animate-float-delay-1" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-3xl animate-float-delay-2" />
        {particles.map((p, i) => (
          <Particle key={i} style={{ ...p, position: 'absolute', borderRadius: '50%', animation: `float 6s ease-in-out ${p.animationDelay} infinite` }} />
        ))}
      </div>

      <div className="section-container relative z-10 py-28 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400
                         text-sm font-medium mb-6 border border-primary-100 dark:border-primary-800"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Available for new opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Typing Role */}
            <div className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-6 h-8">
              <span className="gradient-text">{displayed}</span>
              <span className="inline-block w-0.5 h-6 bg-primary-500 ml-0.5 animate-pulse" />
            </div>

            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <motion.a
                id="hero-resume-btn"
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                           bg-gradient-to-r from-primary-500 to-secondary-500
                           text-white shadow-lg shadow-primary-500/30
                           hover:shadow-primary-500/50 transition-shadow duration-300"
              >
                <FiDownload size={18} />
                Download Resume
              </motion.a>
              <motion.button
                id="hero-contact-btn"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                           border-2 border-primary-500 text-primary-600 dark:text-primary-400
                           hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-200"
              >
                <FiMail size={18} />
                Contact Me
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              {[
                { icon: FiGithub,   url: personalInfo.socialLinks.github,   label: 'GitHub' },
                { icon: FiLinkedin, url: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
                { icon: FiTwitter,  url: personalInfo.socialLinks.twitter,  label: 'Twitter' },
              ].map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full
                             bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400
                             hover:text-primary-600 dark:hover:text-primary-400
                             hover:bg-primary-50 dark:hover:bg-slate-700
                             transition-colors duration-200 shadow-sm"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full animated-gradient opacity-20 blur-2xl scale-110" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1 animated-gradient">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 glow-ring">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&size=300&background=6366f1&color=fff&bold=true`;
                    }}
                  />
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-2 px-3 py-2 rounded-xl glass-card shadow-lg border border-white/20 text-xs font-semibold text-slate-700 dark:text-slate-200"
              >
                💻 Open to Work
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
