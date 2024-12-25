import React from 'react';
import {
  Code2,
  Server,
  Database,
  Layout,
  Globe,
  Git,
  Terminal,
  Cpu,
  Container,
  AppWindow
} from 'lucide-react';

export const FrontendIcon = () => (
  <div className="p-2 bg-blue-100 rounded-lg">
    <AppWindow size={24} className="text-blue-600" />
  </div>
);

export const BackendIcon = () => (
  <div className="p-2 bg-green-100 rounded-lg">
    <Server size={24} className="text-green-600" />
  </div>
);

export const DatabaseIcon = () => (
  <div className="p-2 bg-purple-100 rounded-lg">
    <Database size={24} className="text-purple-600" />
  </div>
);

export const DevOpsIcon = () => (
  <div className="p-2 bg-orange-100 rounded-lg">
    <Container size={24} className="text-orange-600" />
  </div>
);