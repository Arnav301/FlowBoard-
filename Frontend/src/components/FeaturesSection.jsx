import React, { useState } from 'react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Infinite Canvas',
      description: 'Never run out of space. Our infinite canvas grows with your ideas and scales to any project size.',
      color: '#3b82f6',
      features: [
        'Unlimited workspace',
        'Smooth zooming',
        'Pan anywhere'
      ]
    },
    {
      id: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8C12 5.79086 13.7909 4 16 4ZM8 12C10.2091 12 12 13.7909 12 16C12 18.2091 10.2091 20 8 20C5.79086 20 4 18.2091 4 16C4 13.7909 5.79086 12 8 12ZM16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Real-time Collaboration',
      description: 'See changes instantly as your team works together. No more version conflicts or outdated files.',
      color: '#8b5cf6',
      features: [
        'Live cursors',
        'Instant sync',
        'Conflict resolution'
      ]
    },
    {
      id: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.59 10.76C10.21 11.13 10 11.62 10 12.14V16L8 18V22H10V19L12 17V12.5L13.5 14L16 13V9H21Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Rich Media Tools',
      description: 'Express ideas with drawings, shapes, images, videos, and interactive elements.',
      color: '#10b981',
      features: [
        'Drawing tools',
        'Media embedding',
        'Interactive widgets'
      ]
    },
    {
      id: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM19 6H5V5H19V6Z" fill="currentColor"/>
          <path d="M7 10H9V12H7V10ZM11 10H17V11H11V10ZM7 14H9V16H7V14ZM11 14H17V15H11V14Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Smart Templates',
      description: 'Jump-start your projects with professionally designed templates for every use case.',
      color: '#f59e0b',
      features: [
        '100+ templates',
        'Custom templates',
        'Team library'
      ]
    },
    {
      id: 5,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12L5.41 10.59L9 14.17L18.59 4.59L20 6Z" fill="currentColor"/>
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Contextual Comments',
      description: 'Leave feedback exactly where it matters with threaded comments and mentions.',
      color: '#ef4444',
      features: [
        'Threaded discussions',
        '@mentions',
        'Resolve & archive'
      ]
    },
    {
      id: 6,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7ZM18 15H6V13.5C6 11.56 8.69 10.5 12 10.5C15.31 10.5 18 11.56 18 13.5V15Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Enterprise Security',
      description: 'Bank-level security with SSO, advanced permissions, and compliance certifications.',
      color: '#6366f1',
      features: [
        'SSO Integration',
        'SOC 2 compliant',
        'Advanced permissions'
      ]
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Everything you need for visual collaboration
          </h2>
          <p className="features-description">
            From brainstorming to final presentation, FlowBoard provides all the tools your team needs to work together seamlessly.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card"
              style={{ 
                '--feature-color': feature.color,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="feature-icon-wrapper" style={{ backgroundColor: `${feature.color}15` }}>
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <ul className="feature-list">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="feature-list-item">
                      <svg className="feature-check" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" fill="currentColor"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;