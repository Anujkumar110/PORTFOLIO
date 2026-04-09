import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projectsData : projectsData.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="section-container">
        <SectionHeading title="Featured Projects" subtitle="Things I've built" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayed.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {!showAll && projectsData.length > displayed.length && (
          <div className="flex justify-center">
            <motion.button
              id="show-all-projects-btn"
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl font-semibold border-2 border-primary-500
                         text-primary-600 dark:text-primary-400
                         hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-200"
            >
              Show All Projects →
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
