import React, { useState } from 'react';
import { Menu, X, Gamepad2, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              GameVault
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            <a href="#" className="text-sm xl:text-base text-white hover:text-green-400 transition-colors duration-200">Games</a>
            <a href="#" className="text-sm xl:text-base text-white hover:text-green-400 transition-colors duration-200">Esports</a>
            <a href="#" className="text-sm xl:text-base text-white hover:text-green-400 transition-colors duration-200">News</a>
            <a href="#" className="text-sm xl:text-base text-white hover:text-green-400 transition-colors duration-200">Community</a>
            <a href="#" className="text-sm xl:text-base text-white hover:text-green-400 transition-colors duration-200">Store</a>
          </nav>

          {/* Search and User */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button className="p-1.5 lg:p-2 text-gray-400 hover:text-white transition-colors duration-200">
              <Search className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>
            <button className="p-1.5 lg:p-2 text-gray-400 hover:text-white transition-colors duration-200">
              <User className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="py-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200">Games</a>
                <a href="#" className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200">Esports</a>
                <a href="#" className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200">News</a>
                <a href="#" className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200">Community</a>
                <a href="#" className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200">Store</a>
                <div className="flex items-center justify-center space-x-4 pt-3 border-t border-gray-700 mt-3">
                  <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <Search className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <User className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;