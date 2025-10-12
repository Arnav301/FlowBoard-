import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTool, setActiveTool] = useState('select');
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [authMode, setAuthMode] = useState('signup');

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsAnimating(true);
          setTimeout(() => setProgress(0), 1000);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const startProgressAnimation = () => {
    setIsAnimating(true);
    setProgress(0);
    const animate = () => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsAnimating(false);
          return 100;
        }
        return prev + 1;
      });
    };
    const interval = setInterval(animate, 20);
    setTimeout(() => clearInterval(interval), 2000);
  };

  const navigateToAuth = (mode = 'signup') => {
    setAuthMode(mode);
    setCurrentPage('auth');
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setIsMenuOpen(false);
  };

  const value = {
    isMenuOpen,
    toggleMenu,
    activeSection,
    setActiveSection,
    isScrolled,
    hoveredCard,
    setHoveredCard,
    activeTool,
    setActiveTool,
    progress,
    setProgress,
    isAnimating,
    startProgressAnimation,
    currentPage,
    authMode,
    navigateToAuth,
    navigateToHome
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};