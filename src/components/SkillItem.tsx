import { motion } from "framer-motion";

interface SkillItemProps {
  skill: string;
  delay: number;
}

export function SkillItem({ skill, delay }: SkillItemProps) {
  return (
    <motion.span
      key={skill}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="text-gray-600 dark:text-gray-300 flex items-center gap-2 p-[1px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
    >
      <span className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full">
        {skill}
      </span>
    </motion.span>
  );
}
