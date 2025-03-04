import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Bell, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">CyberGuard AI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link to="/" className="hover:text-blue-400 transition-colors">Dashboard</Link>
              <Link to="/threats" className="hover:text-blue-400 transition-colors">Threats</Link>
              <Link to="/network" className="hover:text-blue-400 transition-colors">Network</Link>
              <Link to="/analytics" className="hover:text-blue-400 transition-colors">Analytics</Link>
              <Link to="/settings" className="hover:text-blue-400 transition-colors">Settings</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="font-semibold">JD</span>
              </div>
            </div>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <nav className="flex flex-col space-y-3 px-4">
            <Link to="/" className="hover:text-blue-400 transition-colors py-2">Dashboard</Link>
            <Link to="/threats" className="hover:text-blue-400 transition-colors py-2">Threats</Link>
            <Link to="/network" className="hover:text-blue-400 transition-colors py-2">Network</Link>
            <Link to="/analytics" className="hover:text-blue-400 transition-colors py-2">Analytics</Link>
            <Link to="/settings" className="hover:text-blue-400 transition-colors py-2">Settings</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;