import { ReactNode } from 'react';

export interface SkillData {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
  technologies: string[];
}