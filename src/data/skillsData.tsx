import { Brain, Code2, Database, Server, LineChart, Cloud } from 'lucide-react';

export const skillsData = [
  {
    icon: <Code2 className="text-blue-600 w-6 h-6"  />,
    iconBg: 'bg-blue-100',
    title: 'Frontend Development',
    description: 'Expert in modern frontend frameworks, creating responsive and interactive UIs',
    technologies: ['React', 'Angular', 'TypeScript','JavaScript','RxJs','NgRx','Redux', 'Tailwind CSS', 'Bootstrap']
  },
  {
    icon: <Server className="text-green-600 w-6 h-6"  />,
    iconBg: 'bg-green-100',
    title: 'Backend Development',
    description: 'Building robust server-side applications with Java and Spring Boot',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'RESTful APIs', 'Microservices', 'Spring Cloud','Spring Security','Spring Data JPA','Spring Batch']
  },
  {
    icon: <Cloud className="text-green-600 w-6 h-6"  />,
    iconBg: 'bg-green-100',
    title: 'Cloud & DevOps',
    description: 'Building and deploying cloud solutions with AWS and DevOps tools.',
    technologies: ['AWS','S3','Elastic Beanstalk','EC2','RDS','Lambda','API Gateway','CloudFront' , 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub']
  },
  {
    icon: <Database className="text-purple-600 w-6 h-6"  />,
    iconBg: 'bg-purple-100',
    title: 'Database Management',
    description: 'Designing and optimizing database structures for scalable applications',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    icon: <LineChart className="text-amber-600 w-6 h-6"  />,
    iconBg: 'bg-amber-100',
    title: 'Data Analysis',
    description: 'Analyzing and visualizing data to derive meaningful insights',
    technologies: ['Python','Pandas', 'NumPy', 'Matplotlib', 'Jupyter']
  },
  {
    icon: <Brain className="text-rose-600 w-6 h-6"  />,
    iconBg: 'bg-rose-100',
    title: 'Data Science & AI',
    description: 'Learning and implementing machine learning and AI solutions',
    technologies: [ 'TensorFlow', 'scikit-learn', 'Neural Networks']
  }
];