import React from 'react';
import { motion } from 'framer-motion';
import { SkillTag } from './SkillTag';
import type { SkillCategory } from './types';

export const SkillCard = ({ title, skills, icon: Icon, description }: SkillCategory) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md 
        transition-shadow dark:shadow-gray-900/10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-black dark:bg-gray-700 text-white rounded-lg">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </motion.div>
  );
};