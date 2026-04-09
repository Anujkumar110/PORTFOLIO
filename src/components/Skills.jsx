import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Si from 'react-icons/si';
import SectionHeading from './SectionHeading';
import { skillsData } from '../data/portfolioData';

const categories = ['All', ...Array.from(new Set(skillsData.map(s => s.category)))];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="section-container">
        <SectionHeading title="Skills & Technologies" subtitle="What I work with" />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              id={`skill-filter-${cat.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md shadow-primary-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filtered.map((skill) => {
            const Icon = Si[skill.icon];
            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ scale: 1.08, y: -6 }}
                className="skill-card glass-card rounded-2xl p-5 flex flex-col items-center gap-3
                           shadow-card dark:shadow-card-dark
                           hover:shadow-glow dark:hover:shadow-glow
                           cursor-default transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl
                              bg-slate-50 dark:bg-slate-700/50
                              group-hover:scale-110 transition-transform duration-300"
                  style={{ color: skill.color }}
                >
                  {Icon ? <Icon size={28} /> : (
                    <span className="text-lg font-bold gradient-text">{skill.name[0]}</span>
                  )}
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200 text-center">
                  {skill.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold
                                 text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700
                                 px-2 py-0.5 rounded-full">
                  {skill.category}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
