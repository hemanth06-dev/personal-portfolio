import React from 'react';
import { motion } from 'framer-motion';
import { SkillBar } from './SkillBar';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  icon: React.ReactNode;
}

export const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-sm"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-black text-white rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </motion.div>
  );
};