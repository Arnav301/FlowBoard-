import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const FeaturesSection = () => {
  const { setHoveredCard } = useApp();
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: '🎨',
      title: 'Infinite Canvas',
      description: 'Unlimited space for your biggest ideas with smooth zoom and pan.',
      color: '#8b5cf6'
    },
    {
      id: 2,
      icon: '👥',
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time from anywhere in the world.',
      color: '#3b82f6'
    },
    {
      id: 3,
      icon: '🤖',
      title: 'AI-Powered Tools',
      description: 'Smart suggestions and automation to enhance your creativity.',
      color: '#10b981'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Cross-Platform',
      description: 'Seamlessly switch between desktop, tablet, and mobile devices.',
      color: '#f59e0b'
    }
  ];

  const handleFeatureHover = (featureId) => {
    setHoveredCard(featureId);
    setActiveFeature(featureId);
  };

  const handleFeatureClick = (featureId) => {
    setActiveFeature(featureId === activeFeature ? null : featureId);
  };

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Powerful Features for <span className="title-highlight">Modern Teams</span>
          </h2>
          <p className="features-description">
            Everything you need to collaborate, create, and bring your ideas to life in one intuitive platform.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card ${activeFeature === feature.id ? 'active' : ''}`}
              style={{ 
                '--feature-color': feature.color,
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => handleFeatureHover(feature.id)}
              onMouseLeave={() => handleFeatureHover(null)}
              onClick={() => handleFeatureClick(feature.id)}
            >
              <div className="feature-icon">
                <div 
                  className="feature-icon-wrapper"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  {feature.icon}
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              
              {/* Expandable content */}
              <div className={`feature-expand ${activeFeature === feature.id ? 'expanded' : ''}`}>
                <div className="feature-details">
                  <button className="feature-learn-more">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;