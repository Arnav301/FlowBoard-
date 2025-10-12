import React from 'react';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const { isMenuOpen, toggleMenu, setActiveSection, navigateToAuth } = useApp();

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Templates', href: '#templates' },
    { name: 'Resources', href: '#resources' },
    { name: 'Enterprise', href: '#enterprise' },
  ];

  const handleNavClick = (item) => {
    setActiveSection(item.name.toLowerCase());
    if (isMenuOpen) toggleMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="4" fill="#3b82f6"/>
              <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="logo-text">FlowBoard</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-item"
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="navbar-actions">
          <button 
            className="btn-signin"
            onClick={() => navigateToAuth('login')}
          >
            Sign In
          </button>
          <button 
            className="btn-trial"
            onClick={() => navigateToAuth('signup')}
          >
            Start Free Trial
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mobile-nav-item"
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </a>
          ))}
          <div className="mobile-actions">
            <button 
              className="btn-signin mobile"
              onClick={() => navigateToAuth('login')}
            >
              Sign In
            </button>
            <button 
              className="btn-trial mobile"
              onClick={() => navigateToAuth('signup')}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
