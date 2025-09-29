import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDemoHovered, setIsDemoHovered] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "Visual collaboration reimagined";

  // Typing animation effect
  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypingText(fullText.slice(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isTypingComplete) {
      setIsTypingComplete(true);
    }
  }, [typingIndex, fullText, isTypingComplete]);

  const handleStartTrial = () => {
    console.log('Starting free trial...');
    // Add actual signup logic here
  };

  const handleWatchDemo = () => {
    // Scroll to features section
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            {/* New Badge */}
            <div className="new-badge">
              <span className="badge-icon">ℹ️</span>
              <span>New: Real-time AI collaboration</span>
            </div>

            {/* Typing Animation Title */}
            <h1 className="hero-title typing-container">
              {typingText}
              <span className={`typing-cursor ${isTypingComplete ? 'typing-complete' : ''}`}>|</span>
            </h1>

            <p className="hero-description">
              FlowBoard brings teams together on an infinite canvas where ideas flow freely. 
              Draw, plan, prototype, and collaborate in real-time from anywhere in the world.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button className="btn-primary" onClick={handleStartTrial}>
                <span className="btn-icon">🚀</span>
                Start Free Trial
              </button>
              <button className="btn-secondary" onClick={handleWatchDemo}>
                <span className="btn-icon">▶️</span>
                Watch Demo
              </button>
            </div>

            {/* Feature Points */}
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>14-day free trial</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Demo */}
          <div className="hero-visual">
            <div 
              className={`demo-container bouncing ${isDemoHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsDemoHovered(true)}
              onMouseLeave={() => setIsDemoHovered(false)}
            >
              {/* Collaboration Header */}
              <div className="demo-header">
                <div className="collaborators">
                  <div className="avatar avatar-1"></div>
                  <div className="avatar avatar-2"></div>
                  <div className="avatar avatar-3"></div>
                  <span className="collaborator-count">+5</span>
                </div>
                <div className="collaboration-status">
                  <span className="status-dot"></span>
                  <span>5 collaborating</span>
                </div>
                <div className="demo-actions">
                  <button className="demo-btn">⚙️</button>
                  <button className="demo-btn">⋯</button>
                </div>
              </div>

              {/* Workflow Cards */}
              <div className="workflow-cards">
                <div className="workflow-card ideas">
                  <div className="card-icon">💡</div>
                  <div className="card-title">Ideas</div>
                </div>
                <div className="workflow-card process">
                  <div className="card-icon">⚙️</div>
                  <div className="card-title">Process</div>
                </div>
                <div className="workflow-card done">
                  <div className="card-icon">✅</div>
                  <div className="card-title">Done</div>
                </div>
              </div>

              {/* Tools Bar */}
              <div className="tools-bar">
                <div className="tool-group">
                  <button className="tool-btn active">
                    <span className="tool-icon">👆</span>
                    <span>Select</span>
                  </button>
                  <button className="tool-btn">
                    <span className="tool-icon">✏️</span>
                    <span>Draw</span>
                  </button>
                  <button className="tool-btn">
                    <span className="tool-icon">📝</span>
                    <span>Note</span>
                  </button>
                </div>
                <div className="progress-indicator">
                  <span>100%</span>
                </div>
              </div>

              {/* Background Elements for Flying Animation */}
              <div className="background-elements">
                <div className="bg-element bg-element-1"></div>
                <div className="bg-element bg-element-2"></div>
                <div className="bg-element bg-element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
