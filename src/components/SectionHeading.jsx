import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionHeading({ title, subtitle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center mb-14"
    >
      {subtitle && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-500 dark:text-primary-400 mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-0.5 w-12 rounded-full bg-primary-500/40" />
        <div className="h-1 w-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
        <div className="h-0.5 w-12 rounded-full bg-secondary-500/40" />
      </div>
    </motion.div>
  );
}
