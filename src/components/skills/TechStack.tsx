import React from 'react';
import { techStackData } from '../../data/techStackData';

const TechStack = () => (
  <div className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold mb-12 text-center">Tech Stack</h3>
      
      {Object.entries(techStackData).map(([category, technologies]) => (
        <div key={category} className="mb-12 last:mb-0">
          <h4 className="text-xl font-semibold mb-6 text-blue-400">{category}</h4>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;