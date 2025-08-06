import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import AuthModal from './components/AuthModal';
import SearchModal from './components/SearchModal';
import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import GamesLibrary from './components/GamesLibrary';
import News from './components/News';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        onAuthClick={() => setIsAuthModalOpen(true)}
        onSearchFocus={() => setIsSearchModalOpen(true)}
      />
      <Hero />
      <FeaturedGames />
      <GamesLibrary />
      <News />
      <Community />
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
      
      <SearchModal 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)} 
      />
    </div>
  );
}

export default App;