import React from 'react';
import { Star, Users, Zap } from 'lucide-react';

const FeaturedGames = () => {
  const games = [
    {
      id: 1,
      title: "Cyber Nexus",
      genre: "Action RPG",
      rating: 4.8,
      players: "2.1M",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Storm Raiders",
      genre: "Battle Royale",
      rating: 4.6,
      players: "5.3M",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 3,
      title: "Galaxy Wars",
      genre: "Strategy",
      rating: 4.9,
      players: "1.8M",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 4,
      title: "Racing Thunder",
      genre: "Racing",
      rating: 4.7,
      players: "3.2M",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 5,
      title: "Mystic Realms",
      genre: "Fantasy MMORPG",
      rating: 4.8,
      players: "4.5M",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 6,
      title: "Urban Combat",
      genre: "FPS",
      rating: 4.5,
      players: "6.1M",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Featured Games
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the hottest games trending in our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
            >
              {game.featured && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold rounded-full">
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
                    <p className="text-green-400 text-sm font-medium">{game.genre}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-semibold">{game.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{game.players} players</span>
                  </div>
                  <Zap className="h-4 w-4 text-blue-400" />
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-lg hover:shadow-green-500/25">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;