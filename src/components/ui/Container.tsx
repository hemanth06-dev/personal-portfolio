import { motion } from 'framer-motion';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={`max-w-6xl mx-auto px-6 ${className}`}
  >
    {children}
  </motion.div>
);