import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills/Skills';
import { Experience } from './components/sections/Experience';
import Projects from './components/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
        <ThemeToggle />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;