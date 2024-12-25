import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold"
        >
          YourName
        </motion.div>
        <nav className="flex items-center gap-6">
          <SocialLink href="https://github.com" icon={<Github size={20} />} />
          <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
          <SocialLink href="mailto:your@email.com" icon={<Mail size={20} />} />
        </nav>
      </div>
    </motion.header>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="text-gray-600 hover:text-black transition-colors"
  >
    {icon}
  </motion.a>
);

export default Header;