import { Sun, Moon } from 'lucide-react';
import type { Theme } from '../types/theme';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 
        hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors z-[100]"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
}