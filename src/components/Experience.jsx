import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiBook } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="section-container">
        <SectionHeading title="Experience & Education" subtitle="My journey" />

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5
                          bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500
                          md:-translate-x-px opacity-30" />

          {experienceData.map((entry, i) => {
            const isLeft = i % 2 === 0;
            const Icon = entry.type === 'work' ? FiBriefcase : FiBook;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                className={`relative flex gap-6 mb-10 md:mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500
                                  flex items-center justify-center shadow-lg shadow-primary-500/30">
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="glass-card rounded-2xl p-6 shadow-card dark:shadow-card-dark
                                  hover:shadow-glow dark:hover:shadow-glow transition-shadow duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {entry.title}
                        </h3>
                        <p className="text-sm font-semibold gradient-text">{entry.organization}</p>
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full
                                       bg-primary-50 dark:bg-primary-900/40
                                       text-primary-600 dark:text-primary-400
                                       border border-primary-100 dark:border-primary-800/50 whitespace-nowrap">
                        {entry.duration}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                      {entry.description}
                    </p>
                    <ul className="space-y-1">
                      {entry.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
