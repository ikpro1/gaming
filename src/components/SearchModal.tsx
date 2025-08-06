import React, { useState, useEffect } from 'react';
import { Search, X, Clock, TrendingUp, Star } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches] = useState([
    'Cyberpunk 2077',
    'Call of Duty',
    'Minecraft',
    'Fortnite'
  ]);

  const [trendingGames] = useState([
    { name: 'Baldur\'s Gate 3', category: 'RPG', rating: 4.9 },
    { name: 'Spider-Man 2', category: 'Action', rating: 4.8 },
    { name: 'FIFA 24', category: 'Sports', rating: 4.6 },
    { name: 'Hogwarts Legacy', category: 'Adventure', rating: 4.7 },
    { name: 'Starfield', category: 'RPG', rating: 4.5 }
  ]);

  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      // Simulate search suggestions
      const mockSuggestions = [
        'Call of Duty: Modern Warfare',
        'Cyberpunk 2077',
        'Counter-Strike 2',
        'Minecraft',
        'Fortnite',
        'Grand Theft Auto V',
        'The Witcher 3',
        'Red Dead Redemption 2'
      ].filter(game => 
        game.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5);
      
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl transform transition-all duration-300 animate-in zoom-in-95">
        {/* Search Input */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for games, genres, or developers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 text-lg"
              autoFocus
            />
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchTerm.length > 0 ? (
            <div className="p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Search className="h-4 w-4 mr-2 text-green-400" />
                Search Results
              </h3>
              {suggestions.length > 0 ? (
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 flex items-center space-x-3"
                      onClick={() => {
                        setSearchTerm(suggestion);
                        onClose();
                      }}
                    >
                      <Search className="h-4 w-4 text-gray-500" />
                      <span>{suggestion}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">No results found for "{searchTerm}"</p>
              )}
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {/* Recent Searches */}
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-400" />
                  Recent Searches
                </h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 flex items-center space-x-3"
                      onClick={() => {
                        setSearchTerm(search);
                      }}
                    >
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{search}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Games */}
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-purple-400" />
                  Trending Games
                </h3>
                <div className="space-y-2">
                  {trendingGames.map((game, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 flex items-center justify-between"
                      onClick={() => {
                        setSearchTerm(game.name);
                        onClose();
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-4 w-4 text-gray-500" />
                        <div>
                          <div className="font-medium">{game.name}</div>
                          <div className="text-sm text-gray-500">{game.category}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-400">{game.rating}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;