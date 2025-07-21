import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import News from './components/News';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <FeaturedGames />
      <News />
      <Community />
      <Footer />
    </div>
  );
}

export default App;