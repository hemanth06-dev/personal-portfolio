import { Brain, Code2, Database, Server, LineChart } from 'lucide-react';

export const skillsData = [
  {
    icon: <Code2 className="text-blue-600" size={24} />,
    iconBg: 'bg-blue-100',
    title: 'Frontend Development',
    description: 'Expert in modern frontend frameworks, creating responsive and interactive UIs',
    technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: <Server className="text-green-600" size={24} />,
    iconBg: 'bg-green-100',
    title: 'Backend Development',
    description: 'Building robust server-side applications with Java and Spring Boot',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'RESTful APIs']
  },
  {
    icon: <Database className="text-purple-600" size={24} />,
    iconBg: 'bg-purple-100',
    title: 'Database Management',
    description: 'Designing and optimizing database structures for scalable applications',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    icon: <Brain className="text-rose-600" size={24} />,
    iconBg: 'bg-rose-100',
    title: 'Data Science & AI',
    description: 'Learning and implementing machine learning and AI solutions',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Neural Networks']
  },
  {
    icon: <LineChart className="text-amber-600" size={24} />,
    iconBg: 'bg-amber-100',
    title: 'Data Analysis',
    description: 'Analyzing and visualizing data to derive meaningful insights',
    technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter']
  }
];