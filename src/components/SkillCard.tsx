import { motion } from "framer-motion";
import { SkillItem } from "./SkillItem";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
  description?: string;
  technologies?: string[];
}

export function SkillCard({
  title,
  description,
  technologies,
  icon,
  delay = 0,
  className = "",
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`p-6 rounded-xl hover:border-blue-500 
        transition-all hover:shadow-lg bg-white dark:bg-gray-800/50 backdrop-blur-lg shadow-xl 
        border border-gray-100 dark:border-gray-700 ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          {title}
        </h3>
        
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies?.map((skill, index) => (
          <SkillItem  skill={skill} delay = {delay + index * 0.1}/>
        ))}
      </div>
    </motion.div>
  );
}
