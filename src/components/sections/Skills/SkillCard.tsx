import React from 'react';
import { motion } from 'framer-motion';
import { SkillBar } from './SkillBar';
import type { SkillCategory } from './types';

export const SkillCard = ({ title, skills, icon: Icon, description }: SkillCategory) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-black text-white rounded-lg">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};