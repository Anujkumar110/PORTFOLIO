import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group relative glass-card rounded-2xl overflow-hidden
                 shadow-card dark:shadow-card-dark
                 hover:shadow-2xl dark:hover:shadow-black/40
                 transition-all duration-400 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
          }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        flex items-end justify-center pb-6 gap-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm
                         text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
            >
              <FiGithub size={16} /> Code
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-gradient-to-r from-primary-500 to-secondary-500
                         text-white text-sm font-medium shadow-lg hover:opacity-90 transition-opacity"
            >
              <FiExternalLink size={16} /> Live Demo
            </motion.a>
          )}
        </div>
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-xs font-semibold
                          bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-sm">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs font-medium
                         bg-primary-50 dark:bg-primary-900/40
                         text-primary-600 dark:text-primary-400
                         border border-primary-100 dark:border-primary-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
