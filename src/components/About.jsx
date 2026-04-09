import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaBriefcase, FaGithub, FaSmile } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { aboutData, personalInfo } from '../data/portfolioData';

const iconMap = { FaCode, FaBriefcase, FaGithub, FaSmile };

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="section-container">
        <SectionHeading title={aboutData.title} subtitle={aboutData.subtitle} />

        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Background decoration */}
              <div className="absolute inset-0 rounded-2xl rotate-6 bg-gradient-to-br from-primary-400 to-secondary-400 opacity-20" />
              <div className="absolute inset-0 rounded-2xl -rotate-3 bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-900/30 dark:to-secondary-900/30 border border-primary-200 dark:border-primary-800/50" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&size=400&background=6366f1&color=fff&bold=true`;
                  }}
                />
              </div>
              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass-card shadow-lg border border-white/20 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                📍 {personalInfo.location}
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 whitespace-pre-line">
              {aboutData.description}
            </p>

            {/* Stat highlights */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.highlights.map((h, i) => {
                const Icon = iconMap[h.icon] || FaCode;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass-card rounded-2xl p-4 shadow-card dark:shadow-card-dark
                               hover:shadow-glow dark:hover:shadow-glow transition-shadow duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/40 flex items-center justify-center mb-3
                                    group-hover:bg-primary-100 dark:group-hover:bg-primary-900/60 transition-colors">
                      <Icon className="text-primary-500 dark:text-primary-400" size={20} />
                    </div>
                    <div className="text-2xl font-bold gradient-text">{h.value}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{h.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
