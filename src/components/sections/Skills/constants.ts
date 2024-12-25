import { Code2, Server, Brain, Database, Network, BarChart, GitBranch } from 'lucide-react';

export const SKILL_CATEGORIES = {
  DEVELOPMENT: 'Development',
  AI_ML: 'AI & Machine Learning'
} as const;

export const skillsConfig = {
  [SKILL_CATEGORIES.DEVELOPMENT]: [
    {
      title: 'Frontend',
      icon: Code2,
      description: 'Building responsive and interactive user interfaces',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Redux/State Management', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      description: 'Server-side development and API design',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      title: 'DevOps',
      icon: GitBranch,
      description: 'Development operations and deployment',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Cloud Services', level: 75 }
      ]
    }
  ],
  [SKILL_CATEGORIES.AI_ML]: [
    {
      title: 'Machine Learning',
      icon: Brain,
      description: 'Building and training ML models',
      skills: [
        { name: 'TensorFlow', level: 80 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'PyTorch', level: 75 },
        { name: 'Model Training', level: 80 }
      ]
    },
    {
      title: 'Data Science',
      icon: BarChart,
      description: 'Data analysis and visualization',
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 80 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Statistical Analysis', level: 75 }
      ]
    },
    {
      title: 'Deep Learning',
      icon: Network,
      description: 'Neural networks and deep learning',
      skills: [
        { name: 'Neural Networks', level: 80 },
        { name: 'Computer Vision', level: 75 },
        { name: 'NLP', level: 75 },
        { name: 'Transfer Learning', level: 70 }
      ]
    },
    {
      title: 'MLOps',
      icon: Database,
      description: 'ML operations and deployment',
      skills: [
        { name: 'ML Pipelines', level: 75 },
        { name: 'Model Deployment', level: 70 },
        { name: 'Model Monitoring', level: 70 },
        { name: 'Model Optimization', level: 75 }
      ]
    }
  ]
} as const;