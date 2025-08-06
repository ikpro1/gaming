import React, { useState } from 'react';
import { Menu, X, Gamepad2, Search, User, Bell, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onAuthClick: () => void;
  onSearchFocus: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick, onSearchFocus }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`relative sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-black/80 backdrop-blur-sm border-b border-gray-800/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent group-hover:from-green-300 group-hover:to-blue-300 transition-all duration-300">
              GameVault
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            <a href="#" className="relative text-sm xl:text-base text-white hover:text-green-400 transition-all duration-300 group">
              Games
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#games-library" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('games-library')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative text-sm xl:text-base text-white hover:text-green-400 transition-all duration-300 group"
            >
              Library
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative text-sm xl:text-base text-white hover:text-green-400 transition-all duration-300 group">
              Esports
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative text-sm xl:text-base text-white hover:text-green-400 transition-all duration-300 group">
              News
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative text-sm xl:text-base text-white hover:text-green-400 transition-all duration-300 group">
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative text-sm xl:text-base text-white hover:text-green-400 transition-all duration-300 group">
              Store
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Search, Notifications, Cart, and User */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button 
              onClick={onSearchFocus}
              className="p-1.5 lg:p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:scale-110"
            >
              <Search className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>
            <button className="relative p-1.5 lg:p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:scale-110">
              <Bell className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              </span>
            </button>
            <button className="relative p-1.5 lg:p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:scale-110">
              <ShoppingCart className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full text-xs text-white flex items-center justify-center font-bold">
                3
              </span>
            </button>
            <button 
              onClick={onAuthClick}
              className="p-1.5 lg:p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:scale-110"
            >
              <User className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg p-2 transition-all duration-200 transform hover:scale-110"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl animate-in slide-in-from-top-2 duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="py-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:translate-x-2">Games</a>
                <a 
                  href="#games-library"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('games-library')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                >
                  Library
                </a>
                <a href="#" className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:translate-x-2">Esports</a>
                <a href="#" className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:translate-x-2">News</a>
                <a href="#" className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:translate-x-2">Community</a>
                <a href="#" className="block px-3 py-2 text-white hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:translate-x-2">Store</a>
                <div className="flex items-center justify-center space-x-4 pt-3 border-t border-gray-700 mt-3">
                  <button 
                    onClick={onSearchFocus}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:scale-110"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <Search className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={onAuthClick}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:scale-110"
                  >
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