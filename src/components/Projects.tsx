import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React, Node.js, and PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tech: ['Next.js', 'Prisma', 'Stripe', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.article 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
  >
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech: string) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
        >
          <Github size={20} />
          Code
        </a>
        <a 
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
        >
          <ExternalLink size={20} />
          Live Demo
        </a>
      </div>
    </div>
  </motion.article>
);

export default Projects;