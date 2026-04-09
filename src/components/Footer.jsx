import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 pt-12 pb-6">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-slate-800">

          {/* Brand */}
          <div>
            <div className="text-xl font-bold gradient-text mb-1">
              {personalInfo.name.split(' ')[0]}<span className="text-primary-500">.</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">{personalInfo.tagline}</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-sm hover:text-primary-400 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { icon: FiGithub, url: personalInfo.socialLinks.github, label: 'GitHub' },
              { icon: FiLinkedin, url: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
              { icon: FiTwitter, url: personalInfo.socialLinks.twitter, label: 'Twitter' },
            ].map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-primary-600 text-slate-400 hover:text-white transition-all duration-200"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {year} {personalInfo.name}.
          </p>
          <motion.button
            id="back-to-top-btn"
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-primary-400 transition-colors duration-200"
          >
            <FiArrowUp size={14} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
