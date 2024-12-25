import React from 'react';
import SkillCard from './skills/SkillCard';
import TechStack from './skills/TechStack';
import { skillsData } from '../data/skillsData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate Full Stack Developer with over 4 years of experience in building enterprise-level web applications. 
            Currently expanding my expertise into Data Science and AI, I combine traditional software development with modern 
            machine learning approaches to create innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        <TechStack />
      </div>
    </section>
  );
};

export default About;