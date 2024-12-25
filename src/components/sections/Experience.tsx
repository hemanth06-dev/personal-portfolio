import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2021 - Present',
    description: 'Leading the frontend development team, implementing new features, and improving performance.',
    achievements: [
      'Reduced load time by 40%',
      'Implemented new design system',
      'Mentored junior developers'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    period: '2019 - 2021',
    description: 'Developed and maintained full-stack applications using React and Node.js.',
    achievements: [
      'Built core product features',
      'Improved API response time',
      'Implemented CI/CD pipeline'
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Work Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-black text-white rounded-lg">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-gray-600 mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};