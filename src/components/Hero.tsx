import React from 'react';
import { ArrowRight, FileDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            With 4+ years of experience crafting robust web applications using Java, Angular, and React
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a 
              href="/path-to-your-resume.pdf"
              download
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              Download Resume
              <FileDown size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;