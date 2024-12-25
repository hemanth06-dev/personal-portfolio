import {
  Database, Server, Code2, GitForkIcon, ContainerIcon, Cloud,
  Brain, BarChart, Network, Binary, Cpu, LineChart, 
  BarChart3, Bot, Workflow
} from 'lucide-react';

const skillIconMap: Record<string, any> = {
  // Development
  'React': Code2,
  'Node.js': Server,
  'TypeScript': Code2,
  'JavaScript': Code2,
  'PostgreSQL': Database,
  'MongoDB': Database,
  'Git': GitForkIcon,
  'Docker': ContainerIcon,
  'AWS': Cloud,
  
  // AI/ML
  'TensorFlow': Brain,
  'PyTorch': Brain,
  'Scikit-learn': BarChart,
  'Keras': Network,
  'Neural Networks': Binary,
  'Computer Vision': Cpu,
  'NLP': Bot,
  'Data Visualization': LineChart,
  'Statistical Analysis': BarChart3,
  'ML Pipelines': Workflow,
};

export const getSkillIcon = (skillName: string) => {
  return skillIconMap[skillName] || null;
};