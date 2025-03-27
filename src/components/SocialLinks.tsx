import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex justify-center gap-6"
    >
      <a 
        href="https://github.com/hemanth06-dev" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <Github className="w-7 h-7" />
      </a>
      <a 
        href="https://in.linkedin.com/in/hemanthkumar-ch-077373137" 
        target="_blank" 
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <Linkedin className="w-7 h-7" />
      </a>
      <a 
        href="mailto:hemanthkumarchereddy@gmail.com"
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <Mail className="w-7 h-7" />
      </a>
    </motion.div>
  );
}