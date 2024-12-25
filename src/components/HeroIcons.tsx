import { Terminal, Code2, Database, Cloud } from 'lucide-react';

export function HeroIcons() {
  return (
    <div className="flex items-center justify-center space-x-3 mb-6">
      <Terminal className="w-8 h-8 text-blue-500" />
      <Code2 className="w-8 h-8 text-green-500" />
      <Database className="w-8 h-8 text-purple-500" />
      <Cloud className="w-8 h-8 text-orange-500" />
    </div>
  );
}