export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: any; // LucideIcon type
  description: string;
}