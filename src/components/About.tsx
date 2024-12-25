import React from 'react';
import { Code2, Server, Layout, Database } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 size={24} />,
      title: 'Frontend Development',
      description: 'Expert in React.js and Angular, creating responsive and interactive user interfaces',
      technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Java and Spring Boot',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'RESTful APIs']
    },
    {
      icon: <Database size={24} />,
      title: 'Database Management',
      description: 'Designing and optimizing database structures for scalable applications',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      icon: <Layout size={24} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and user-friendly interfaces with modern design principles',
      technologies: ['Figma', 'Material UI', 'Bootstrap', 'Responsive Design']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate Full Stack Developer with over 4 years of experience in building enterprise-level web applications. 
            My journey in software development has equipped me with a strong foundation in both frontend and backend technologies, 
            allowing me to create seamless, scalable solutions that drive business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-600">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;