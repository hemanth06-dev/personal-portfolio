import { motion } from 'framer-motion';

interface SkillItemProps {
  skill: string;
  delay: number;
}

export function SkillItem({ skill, delay }: SkillItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      {skill}
    </motion.li>
  );
}