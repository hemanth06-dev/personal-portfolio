import React from 'react';
import { Code2, Brain, Download, Server, Database } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { SkillCard } from './components/SkillCard';

const fullStackSkills = [
  'Java & Spring Boot',
  'React.js & Angular',
  'Microservices Architecture',
  'RESTful API Design',
  'SQL & NoSQL Databases',
  'AWS Cloud Services'
];

const aiMlSkills = [
  'Machine Learning',
  'Python for Data Science',
  'Data Analysis & Visualization',
  'Statistical Modeling',
  'TensorFlow & PyTorch',
  'Natural Language Processing'
];

const backendSkills = [
  'Spring Framework',
  'JPA/Hibernate',
  'MySQL/PostgreSQL',
  'MongoDB',
  'Docker & Kubernetes',
  'CI/CD Pipelines'
];

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Full Stack Development"
            skills={fullStackSkills}
            icon={<Code2 className="w-6 h-6 text-blue-500" />}
            delay={0.2}
          />
          <SkillCard
            title="Backend & DevOps"
            skills={backendSkills}
            icon={<Server className="w-6 h-6 text-purple-500" />}
            delay={0.3}
          />
          <SkillCard
            title="AI/ML & Data Science"
            skills={aiMlSkills}
            icon={<Brain className="w-6 h-6 text-green-500" />}
            delay={0.4}
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <a
            href="/path-to-your-resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg
              hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;