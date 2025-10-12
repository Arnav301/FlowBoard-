import React from 'react';
import { useApp } from '../context/AppContext';
import Login from './Login';
import './AuthPage.css';

const AuthPage = () => {
  const { navigateToHome, authMode } = useApp();

  return (
    <div className="auth-page">
      {/* Header with back button */}
      <header className="auth-header">
        <div className="auth-header-container">
          <button 
            className="back-button"
            onClick={navigateToHome}
            aria-label="Go back to home"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path 
                d="M19 12H5M12 19l-7-7 7-7" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </button>
          
          <div className="auth-logo">
            <div className="logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="4" fill="#3b82f6"/>
                <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="logo-text">FlowBoard</span>
          </div>
        </div>
      </header>

      {/* Main auth content with split layout */}
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-content">
            {/* Left Section - Promotional Content */}
            <div className="promotional-section">
              <div className="promo-header">
                <div className="promo-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="promo-title">Welcome to FlowBoard</h2>
              </div>
              
              <h1 className="main-title">
                Visual collaboration reimagined for your{' '}
                <span className="highlight">Digital</span> workspace
              </h1>
              
              <p className="promo-description">
                Experience the next generation of collaboration with advanced visual tools, 
                seamless integration, and enterprise-grade security for your creative teams.
              </p>
              
              {/* Feature Cards */}
              <div className="feature-cards">
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Bank-Level Security</h3>
                    <p className="feature-desc">256-bit encryption with multi-factor authentication</p>
                  </div>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Lightning Fast</h3>
                    <p className="feature-desc">Sub-second collaboration with global CDN</p>
                  </div>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="stats-section">
                <div className="stat-item">
                  <div className="stat-number">10M+</div>
                  <div className="stat-label">Active Users</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Countries</div>
                </div>
              </div>
            </div>
            
            {/* Right Section - Login Form */}
            <div className="form-section">
              <Login />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
