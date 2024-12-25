import { motion } from 'framer-motion';
import { SkillItem } from './SkillItem';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

export function SkillCard({ title, skills, icon, delay = 0, className = '' }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`p-6 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700 ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          {title}
        </h3>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <SkillItem 
            key={skill} 
            skill={skill} 
            delay={delay + (index * 0.1)} 
          />
        ))}
      </ul>
    </motion.div>
  );
}