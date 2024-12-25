import { FrontendIcon, BackendIcon, DatabaseIcon, DevOpsIcon } from '../components/icons/SkillIcons';

export const skillsData = [
  {
    icon: <FrontendIcon />,
    title: 'Frontend Development',
    description: 'Expert in React.js and Angular, creating responsive and interactive user interfaces',
    technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: <BackendIcon />,
    title: 'Backend Development',
    description: 'Building robust server-side applications with Java and Spring Boot',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'RESTful APIs']
  },
  {
    icon: <DatabaseIcon />,
    title: 'Database Management',
    description: 'Designing and optimizing database structures for scalable applications',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    icon: <DevOpsIcon />,
    title: 'DevOps & Tools',
    description: 'Implementing CI/CD pipelines and containerization solutions',
    technologies: ['Docker', 'Jenkins', 'Git', 'AWS']
  }
];