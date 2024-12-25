import React from 'react';
import { Container } from '../../ui/Container';
import { SkillCard } from './SkillCard';
import { SKILL_CATEGORIES, skillsConfig } from './constants';

export const Skills = () => {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <Container>
        <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
        
        {/* Development Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">{SKILL_CATEGORIES.DEVELOPMENT}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsConfig[SKILL_CATEGORIES.DEVELOPMENT].map((category) => (
              <SkillCard key={category.title} {...category} />
            ))}
          </div>
        </div>

        {/* AI/ML Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">{SKILL_CATEGORIES.AI_ML}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillsConfig[SKILL_CATEGORIES.AI_ML].map((category) => (
              <SkillCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};