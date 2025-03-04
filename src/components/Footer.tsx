import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold text-white">CyberGuard AI</span>
          </div>
          
          <div className="text-sm">
            <p>© {new Date().getFullYear()} CyberGuard AI. All rights reserved.</p>
            <p className="mt-1"> Research Project</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm">Version 1.0 (Beta)</p>
            <p className="text-xs mt-1">Powered by TensorFlow & FastAPI</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;