import React from 'react';
import { motion } from 'framer-motion';
import { getSkillIcon } from './skillIcons';

interface SkillTagProps {
  name: string;
}

export const SkillTag = ({ name }: SkillTagProps) => {
  const Icon = getSkillIcon(name);
  
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 
        text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-gray-200 
        dark:hover:bg-gray-700 transition-colors"
    >
      {Icon && <Icon size={14} className="flex-shrink-0" />}
      {name}
    </motion.span>
  );
};