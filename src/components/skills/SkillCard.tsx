import React from 'react';
import { SkillData } from '../../types/skills';

const SkillCard = ({ skill }: { skill: SkillData }) => (
  <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 rounded-lg ${skill.iconBg}`}>
        {skill.icon}
      </div>
      <h3 className="text-xl font-semibold">{skill.title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{skill.description}</p>
    <div className="flex flex-wrap gap-2">
      {skill.technologies.map((tech, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;