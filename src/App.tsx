import React from 'react';
import { Code2, Brain, Download, Server, Database } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { SkillCard } from './components/SkillCard';
import About from './components/About';
import Experience from './components/Experience';
// import Contact from './components/Contact';
import Header from './components/Header';
import { Contact } from './components/Contact';
import Skills from './components/Skills';



function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Header/>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact/>
    </div>
  );
}

export default App;