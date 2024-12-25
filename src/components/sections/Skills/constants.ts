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
        { name: 'React/Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Redux' },
        { name: 'HTML/CSS' },
        { name: 'JavaScript' }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      description: 'Server-side development and API design',
      skills: [
        { name: 'Node.js' },
        { name: 'Python' },
        { name: 'REST APIs' },
        { name: 'PostgreSQL' },
        { name: 'Express.js' },
        { name: 'MongoDB' }
      ]
    },
    {
      title: 'DevOps',
      icon: GitBranch,
      description: 'Development operations and deployment',
      skills: [
        { name: 'Git/GitHub' },
        { name: 'Docker' },
        { name: 'CI/CD' },
        { name: 'AWS' },
        { name: 'Linux' },
        { name: 'Kubernetes' }
      ]
    }
  ],
  [SKILL_CATEGORIES.AI_ML]: [
    {
      title: 'Machine Learning',
      icon: Brain,
      description: 'Building and training ML models',
      skills: [
        { name: 'TensorFlow' },
        { name: 'Scikit-learn' },
        { name: 'PyTorch' },
        { name: 'Keras' },
        { name: 'Model Training' },
        { name: 'Feature Engineering' }
      ]
    },
    {
      title: 'Data Science',
      icon: BarChart,
      description: 'Data analysis and visualization',
      skills: [
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'Data Visualization' },
        { name: 'Statistical Analysis' },
        { name: 'Matplotlib' },
        { name: 'Seaborn' }
      ]
    },
    {
      title: 'Deep Learning',
      icon: Network,
      description: 'Neural networks and deep learning',
      skills: [
        { name: 'Neural Networks' },
        { name: 'Computer Vision' },
        { name: 'NLP' },
        { name: 'Transfer Learning' },
        { name: 'CNN' },
        { name: 'RNN' }
      ]
    },
    {
      title: 'MLOps',
      icon: Database,
      description: 'ML operations and deployment',
      skills: [
        { name: 'ML Pipelines' },
        { name: 'Model Deployment' },
        { name: 'Model Monitoring' },
        { name: 'Model Optimization' },
        { name: 'MLflow' },
        { name: 'DVC' }
      ]
    }
  ]
} as const;