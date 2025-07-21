import React from 'react';
import { MessageCircle, Trophy, Users2, Gamepad2 } from 'lucide-react';

const Community = () => {
  const stats = [
    {
      icon: Users2,
      value: "2.5M+",
      label: "Active Gamers",
      color: "text-green-400"
    },
    {
      icon: Gamepad2,
      value: "10K+",
      label: "Games Available",
      color: "text-blue-400"
    },
    {
      icon: Trophy,
      value: "500+",
      label: "Tournaments",
      color: "text-purple-400"
    },
    {
      icon: MessageCircle,
      value: "1M+",
      label: "Messages Daily",
      color: "text-yellow-400"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Join Our Community
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Connect with millions of gamers worldwide and be part of something bigger
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/50 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color}`} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 text-center border border-gray-600">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Level Up?
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Join our community today and get access to exclusive games, tournaments, and rewards
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">Join Community</div>
            </button>
            
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover:border-purple-400 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-400/25">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;