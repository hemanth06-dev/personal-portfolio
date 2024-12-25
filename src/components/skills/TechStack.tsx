import React from 'react';
import { techStackData } from '../../data/techStackData';

const TechStack = () => (
  <div className="py-12 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {techStackData.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-all">
              {tech.icon}
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TechStack;