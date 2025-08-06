import React, { useState, useMemo } from 'react';
import { Download, Play, Star, Clock, Users, Filter, Search, Grid, List, Heart, Share2, Eye } from 'lucide-react';

const GamesLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const gamesPerPage = 20;

  const categories = ['All', 'Action', 'Adventure', 'RPG', 'Strategy', 'Racing', 'Puzzle', 'Indie', 'Sports', 'Simulation', 'Horror', 'Platformer', 'Fighting', 'Shooter', 'MMORPG', 'Casual'];

  // Game generation function
  const generateGames = () => {
    const gameTypes = {
      Action: ['Combat', 'Warrior', 'Battle', 'Strike', 'Assault', 'Fury', 'Rage', 'Storm', 'Thunder', 'Lightning'],
      Adventure: ['Quest', 'Journey', 'Explorer', 'Discovery', 'Treasure', 'Mystery', 'Legend', 'Epic', 'Saga', 'Chronicle'],
      RPG: ['Realm', 'Kingdom', 'Empire', 'Dynasty', 'Chronicles', 'Legends', 'Heroes', 'Magic', 'Fantasy', 'Mystic'],
      Strategy: ['Command', 'Conquest', 'Empire', 'Civilization', 'War', 'Tactics', 'Alliance', 'Dominion', 'Supreme', 'Elite'],
      Racing: ['Speed', 'Turbo', 'Racing', 'Drive', 'Rush', 'Fast', 'Velocity', 'Drift', 'Circuit', 'Grand Prix'],
      Puzzle: ['Mind', 'Brain', 'Logic', 'Puzzle', 'Think', 'Smart', 'Genius', 'IQ', 'Challenge', 'Riddle'],
      Indie: ['Pixel', 'Retro', 'Neon', 'Dream', 'Art', 'Creative', 'Unique', 'Special', 'Original', 'Craft'],
      Sports: ['Champion', 'League', 'Tournament', 'Victory', 'Pro', 'Elite', 'Master', 'Ultimate', 'Super', 'Mega'],
      Simulation: ['Life', 'City', 'Farm', 'Build', 'Create', 'Manage', 'Control', 'Design', 'Construct', 'Develop'],
      Horror: ['Dark', 'Shadow', 'Fear', 'Terror', 'Nightmare', 'Haunted', 'Ghost', 'Zombie', 'Dead', 'Evil'],
      Platformer: ['Jump', 'Run', 'Hop', 'Leap', 'Bounce', 'Climb', 'Adventure', 'Quest', 'Journey', 'Explorer'],
      Fighting: ['Fighter', 'Combat', 'Brawl', 'Battle', 'Arena', 'Tournament', 'Champion', 'Warrior', 'Martial', 'Strike'],
      Shooter: ['Sniper', 'Target', 'Aim', 'Shot', 'Bullet', 'Gun', 'Weapon', 'Fire', 'Blast', 'Boom'],
      MMORPG: ['Online', 'World', 'Universe', 'Realm', 'Server', 'Guild', 'Clan', 'Alliance', 'Community', 'Social'],
      Casual: ['Fun', 'Easy', 'Simple', 'Quick', 'Relax', 'Chill', 'Zen', 'Peaceful', 'Calm', 'Smooth']
    };

    const adjectives = ['Ultimate', 'Super', 'Mega', 'Epic', 'Legendary', 'Extreme', 'Advanced', 'Pro', 'Elite', 'Master', 'Supreme', 'Prime', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Omega', 'Turbo', 'Hyper', 'Ultra'];
    const suffixes = ['X', 'Pro', '2024', 'HD', 'Remastered', 'Deluxe', 'Premium', 'Gold', 'Platinum', 'Diamond', 'Special Edition', 'Director\'s Cut', 'Enhanced', 'Ultimate', 'Complete', 'Definitive', 'Anniversary', 'Legacy', 'Origins', 'Revolution'];

    const images = [
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=800"
    ];

    const games = [];
    
    for (let i = 1; i <= 10000; i++) {
      const category = categories[Math.floor(Math.random() * (categories.length - 1)) + 1]; // Exclude 'All'
      const gameWords = gameTypes[category] || gameTypes.Action;
      const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const gameWord = gameWords[Math.floor(Math.random() * gameWords.length)];
      const suffix = Math.random() > 0.7 ? ` ${suffixes[Math.floor(Math.random() * suffixes.length)]}` : '';
      
      const title = `${adjective} ${gameWord}${suffix}`;
      const rating = (3.5 + Math.random() * 1.5).toFixed(1);
      const players = `${(Math.random() * 10 + 0.1).toFixed(1)}M`;
      const size = `${(Math.random() * 8 + 0.5).toFixed(1)} GB`;
      const playTime = `${Math.floor(Math.random() * 80 + 10)}-${Math.floor(Math.random() * 40 + 60)}h`;
      const price = Math.random() > 0.4 ? "Free" : `$${(Math.random() * 50 + 5).toFixed(2)}`;
      const featured = Math.random() > 0.85;
      
      const tagOptions = {
        Action: ['Combat', 'Fast-paced', 'Intense', 'Multiplayer', 'PvP', 'Competitive'],
        Adventure: ['Story Rich', 'Exploration', 'Open World', 'Quests', 'Discovery', 'Journey'],
        RPG: ['Character Building', 'Fantasy', 'Magic', 'Leveling', 'Classes', 'Skills'],
        Strategy: ['Tactical', 'Planning', 'Resource Management', 'Turn-based', 'Real-time', 'Strategic'],
        Racing: ['High Speed', 'Cars', 'Tracks', 'Customization', 'Arcade', 'Simulation'],
        Puzzle: ['Logic', 'Brain Training', 'Problem Solving', 'Mind Bending', 'Creative', 'Challenging'],
        Indie: ['Artistic', 'Unique', 'Creative', 'Atmospheric', 'Experimental', 'Original'],
        Sports: ['Athletic', 'Competition', 'Teams', 'Championship', 'Realistic', 'Arcade'],
        Simulation: ['Realistic', 'Management', 'Building', 'Life Sim', 'Economic', 'Sandbox'],
        Horror: ['Scary', 'Atmospheric', 'Survival', 'Psychological', 'Thriller', 'Dark'],
        Platformer: ['Jumping', '2D', 'Collectibles', 'Precision', 'Adventure', 'Retro'],
        Fighting: ['Martial Arts', 'Combos', 'Tournament', 'Characters', 'Competitive', 'Arcade'],
        Shooter: ['FPS', 'Weapons', 'Tactical', 'Multiplayer', 'Action', 'Combat'],
        MMORPG: ['Massive', 'Online', 'Guilds', 'Social', 'Persistent World', 'Character Progression'],
        Casual: ['Relaxing', 'Easy to Learn', 'Quick Play', 'Family Friendly', 'Accessible', 'Fun']
      };

      const categoryTags = tagOptions[category] || tagOptions.Action;
      const tags = categoryTags.slice(0, 3).concat(['Sponsored by THE IK.PRO']);

      const descriptions = [
        `Experience the ultimate ${category.toLowerCase()} adventure with stunning graphics and immersive gameplay.`,
        `Dive into a world of ${category.toLowerCase()} excitement with cutting-edge mechanics and endless fun.`,
        `Master the art of ${category.toLowerCase()} gaming with this revolutionary title that redefines the genre.`,
        `Embark on an epic ${category.toLowerCase()} journey filled with challenges, rewards, and unforgettable moments.`,
        `Discover the next generation of ${category.toLowerCase()} gaming with innovative features and stunning visuals.`
      ];

      games.push({
        id: i,
        title,
        category,
        size,
        rating: parseFloat(rating),
        players,
        playTime,
        image: images[Math.floor(Math.random() * images.length)],
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        tags,
        price,
        featured
      });
    }
    
    return games;
  };

  const games = useMemo(() => generateGames(), []);

  const filteredGames = useMemo(() => {
    return games.filter(game => {
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [games, selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const currentGames = filteredGames.slice(
    (currentPage - 1) * gamesPerPage,
    currentPage * gamesPerPage
  );

  const handleDownload = (gameTitle: string) => {
    alert(`Starting download for ${gameTitle}...`);
  };

  const handlePlayNow = (gameTitle: string) => {
    alert(`Launching ${gameTitle}...`);
  };

  const toggleFavorite = (gameId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(gameId)) {
        newFavorites.delete(gameId);
      } else {
        newFavorites.add(gameId);
      }
      return newFavorites;
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('games-library')?.scrollIntoView({ behavior: 'smooth' });
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
          <p className="text-sm text-green-400 mt-2">
            {filteredGames.length.toLocaleString()} games available
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
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-200"
            />
          </div>

          <div className="flex items-center space-x-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
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
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 mb-8" 
          : "space-y-4 mb-8"
        }>
          {currentGames.map((game) => (
            <div
              key={game.id}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
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
                
                {/* Hover Overlay */}
                {hoveredGame === game.id && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-3 animate-in fade-in-0 duration-200">
                    <button
                      onClick={() => handlePlayNow(game.title)}
                      className="p-3 bg-green-500 text-white rounded-full hover:bg-green-400 transition-all duration-200 transform hover:scale-110"
                    >
                      <Play className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => toggleFavorite(game.id)}
                      className={`p-3 rounded-full transition-all duration-200 transform hover:scale-110 ${
                        favorites.has(game.id) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-gray-700 text-gray-300 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${favorites.has(game.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-all duration-200 transform hover:scale-110">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                )}
                
                {/* Game Stats Overlay */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <div className="flex items-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
                    <Eye className="h-3 w-3 text-gray-300" />
                    <span className="text-xs text-gray-300">{Math.floor(Math.random() * 1000)}K</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-2 group-hover:text-green-400 transition-colors duration-300">{game.title}</h3>
                    <p className="text-green-400 text-xs sm:text-sm font-medium">{game.category}</p>
                  </div>
                  <div className="flex items-center space-x-1 flex-shrink-0">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-xs sm:text-sm font-semibold">{game.rating}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{game.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {game.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-2 py-1 text-xs rounded-full ${
                        tag === 'Sponsored by THE IK.PRO' 
                          ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold' 
                          : 'bg-gray-700/50 text-gray-300'
                      }`}
                    >
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
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => handlePlayNow(game.title)}
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-transparent border border-gray-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/25 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Play className="h-4 w-4" />
                    <span>Play Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mb-8">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors duration-200"
            >
              Previous
            </button>
            
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                      currentPage === pageNum
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors duration-200"
            >
              Next
            </button>
          </div>
        )}

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No games found matching your criteria.</p>
          </div>
        )}

        {/* Stats */}
        <div className="text-center text-gray-400 text-sm">
          Showing {((currentPage - 1) * gamesPerPage) + 1} - {Math.min(currentPage * gamesPerPage, filteredGames.length)} of {filteredGames.length.toLocaleString()} games
        </div>
      </div>
    </section>
  );
};

export default GamesLibrary;