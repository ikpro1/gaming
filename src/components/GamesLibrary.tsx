import React, { useState } from 'react';
import { Download, Play, Star, Clock, Users, Filter, Search, Grid, List } from 'lucide-react';

const GamesLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Action', 'Adventure', 'RPG', 'Strategy', 'Racing', 'Puzzle', 'Indie'];

  const games = [
    {
      id: 1,
      title: "Cyber Nexus",
      category: "Action",
      size: "2.4 GB",
      rating: 4.8,
      players: "2.1M",
      playTime: "45-60h",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Immerse yourself in a cyberpunk world filled with action and adventure.",
      tags: ["Cyberpunk", "Open World", "Multiplayer"],
      price: "Free",
      featured: true
    },
    {
      id: 2,
      title: "Storm Raiders",
      category: "Action",
      size: "1.8 GB",
      rating: 4.6,
      players: "5.3M",
      playTime: "30-45h",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Battle royale game with intense combat and strategic gameplay.",
      tags: ["Battle Royale", "PvP", "Tactical"],
      price: "Free",
      featured: false
    },
    {
      id: 3,
      title: "Galaxy Wars",
      category: "Strategy",
      size: "3.2 GB",
      rating: 4.9,
      players: "1.8M",
      playTime: "60-100h",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Command fleets in epic space battles across the galaxy.",
      tags: ["Space", "RTS", "Sci-Fi"],
      price: "$19.99",
      featured: true
    },
    {
      id: 4,
      title: "Racing Thunder",
      category: "Racing",
      size: "4.1 GB",
      rating: 4.7,
      players: "3.2M",
      playTime: "20-35h",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "High-speed racing with customizable cars and dynamic tracks.",
      tags: ["Racing", "Customization", "Arcade"],
      price: "$14.99",
      featured: false
    },
    {
      id: 5,
      title: "Mystic Realms",
      category: "RPG",
      size: "5.6 GB",
      rating: 4.8,
      players: "4.5M",
      playTime: "80-120h",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Fantasy MMORPG with vast worlds and epic quests.",
      tags: ["Fantasy", "MMORPG", "Quests"],
      price: "Free",
      featured: true
    },
    {
      id: 6,
      title: "Urban Combat",
      category: "Action",
      size: "2.9 GB",
      rating: 4.5,
      players: "6.1M",
      playTime: "25-40h",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Tactical FPS with realistic combat mechanics.",
      tags: ["FPS", "Tactical", "Competitive"],
      price: "$24.99",
      featured: false
    },
    {
      id: 7,
      title: "Puzzle Master",
      category: "Puzzle",
      size: "0.8 GB",
      rating: 4.4,
      players: "2.8M",
      playTime: "15-25h",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Mind-bending puzzles that challenge your logic and creativity.",
      tags: ["Logic", "Casual", "Brain Training"],
      price: "$9.99",
      featured: false
    },
    {
      id: 8,
      title: "Indie Adventure",
      category: "Indie",
      size: "1.2 GB",
      rating: 4.6,
      players: "890K",
      playTime: "12-18h",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A heartwarming indie adventure with beautiful art and storytelling.",
      tags: ["Indie", "Story Rich", "Atmospheric"],
      price: "$12.99",
      featured: false
    }
  ];

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (gameTitle: string) => {
    // Simulate download process
    alert(`Starting download for ${gameTitle}...`);
  };

  const handlePlayNow = (gameTitle: string) => {
    // Simulate instant play
    alert(`Launching ${gameTitle}...`);
  };

  return (
    <section id="games-library" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Games Library
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Download and play instantly - Your ultimate gaming collection awaits
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-200"
            />
          </div>

          <div className="flex items-center space-x-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-400 transition-colors duration-200"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-1 bg-gray-800/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'} transition-colors duration-200`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'} transition-colors duration-200`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Games Grid/List */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
          : "space-y-4"
        }>
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10 ${
                viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
              }`}
            >
              {game.featured && (
                <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold rounded-full">
                  Featured
                </div>
              )}

              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'sm:w-48 sm:flex-shrink-0' : ''}`}>
                <img
                  src={game.image}
                  alt={game.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                    viewMode === 'list' ? 'h-32 sm:h-full' : 'h-40 sm:h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-4 sm:p-6 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{game.title}</h3>
                    <p className="text-green-400 text-xs sm:text-sm font-medium">{game.category}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-xs sm:text-sm font-semibold">{game.rating}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{game.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {game.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{game.playTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-3 w-3" />
                    <span>{game.size}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 font-bold text-lg">{game.price}</span>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDownload(game.title)}
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => handlePlayNow(game.title)}
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-transparent border border-gray-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/25"
                  >
                    <Play className="h-4 w-4" />
                    <span>Play Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No games found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GamesLibrary;