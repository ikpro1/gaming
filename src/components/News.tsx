import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const News = () => {
  const articles = [
    {
      id: 1,
      title: "Major Gaming Tournament Announced for 2024",
      excerpt: "The biggest gaming event of the year is coming with a $10M prize pool and top players from around the world.",
      author: "Gaming News",
      date: "2024-01-15",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Esports"
    },
    {
      id: 2,
      title: "New VR Gaming Technology Breakthrough",
      excerpt: "Revolutionary haptic feedback system promises to transform virtual reality gaming forever.",
      author: "Tech Reporter",
      date: "2024-01-12",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technology"
    },
    {
      id: 3,
      title: "Indie Game Showcase: Hidden Gems",
      excerpt: "Discover amazing independent games that are pushing creative boundaries and redefining gaming.",
      author: "Indie Spotlight",
      date: "2024-01-10",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Reviews"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest News
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest gaming news, reviews, and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600/90 text-white text-xs font-semibold rounded-full">
                  {article.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <button className="group/btn w-full flex items-center justify-center space-x-2 py-3 bg-transparent border border-gray-600 text-white rounded-lg transition-all duration-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/25">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;