import React from 'react';
import { Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Gaming
            </span>
            <br />
            <span className="text-white">Experience</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover the latest games, compete in esports tournaments, and connect with millions of gamers worldwide
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 px-4 sm:px-0">
            <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Start Gaming</span>
              </div>
            </button>

            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/25">
              <div className="flex items-center justify-center space-x-2">
                <Star className="h-5 w-5" />
                <span>Featured Games</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="hidden lg:block absolute top-1/4 left-10 w-20 h-20 bg-green-400/10 rounded-full animate-pulse"></div>
      <div className="hidden lg:block absolute top-1/3 right-10 w-16 h-16 bg-blue-400/10 rounded-full animate-pulse delay-1000"></div>
      <div className="hidden lg:block absolute bottom-1/4 left-1/4 w-12 h-12 bg-purple-400/10 rounded-full animate-pulse delay-2000"></div>
    </section>
  );
};

export default Hero;