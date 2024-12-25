import { motion } from 'framer-motion';
import { HeroIcons } from './HeroIcons';
import { SocialLinks } from './SocialLinks';

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <HeroIcons />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Your Name
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light"
        >
          Full Stack Developer & AI Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
        >
          With 4+ years of experience in Java Full Stack Development, 
          specializing in Spring Boot, React, and Angular. Currently exploring 
          the fascinating world of Machine Learning and AI.
        </motion.p>

        <SocialLinks />
      </motion.div>
    </div>
  );
}