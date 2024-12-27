import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Task Management System',
      description: 'Enterprise task management application with real-time updates',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'WebSocket'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Healthcare Portal',
      description: 'Patient management system with appointment scheduling',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Java', 'MongoDB', 'Docker'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 to-gray-50 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.liveLink}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;