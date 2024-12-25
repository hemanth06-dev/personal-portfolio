import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Code2, Palette, Cpu } from 'lucide-react';

const skills = [
  {
    icon: <Code2 size={24} />,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    icon: <Cpu size={24} />,
    title: 'Backend Development',
    description: 'Building scalable APIs and server-side applications.',
    tech: ['Node.js', 'PostgreSQL', 'Express', 'Python']
  },
  {
    icon: <Palette size={24} />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences.',
    tech: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
  }
];

export const About = () => {
  return (
    <section className="py-20" id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a full-stack developer with a passion for creating beautiful, functional web applications. 
              With over 5 years of experience, I specialize in building modern web applications using React, 
              Node.js, and TypeScript.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me contributing to open-source projects, writing technical 
              articles, or exploring new technologies.
            </p>
          </div>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-black text-white rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};