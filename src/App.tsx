import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills/Skills';
import { Experience } from './components/sections/Experience';
import Projects from './components/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
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
  );
}

export default App;