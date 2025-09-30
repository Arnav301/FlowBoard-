import React from 'react';

const TemplatesSection = () => {
  return (
    <section className="templates-section" id="templates">
      <div className="templates-container">
        <div className="templates-header">
          <h2 className="templates-title">Start with proven templates</h2>
          <p className="templates-description">
            Save time with our library of professionally designed templates. Customize them to fit your specific needs.
          </p>
        </div>
        
        <div className="templates-grid">
          {/* User Story Mapping Template */}
          <div className="template-card">
            <div className="template-icon-wrapper blue">
              <svg className="template-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="template-content">
              <h3 className="template-name">User Story Mapping</h3>
              <p className="template-description">Map user journeys and prioritize features</p>
              <div className="template-footer">
                <span className="template-category">Product Management</span>
                <button className="use-template-btn">Use Template</button>
              </div>
            </div>
          </div>

          {/* Brainstorming Session Template */}
          <div className="template-card">
            <div className="template-icon-wrapper green">
              <svg className="template-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.59 10.76C10.21 11.13 10 11.62 10 12.14V16L8 18V22H10V19L12 17V12.5L13.5 14L16 13V9H21Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="template-content">
              <h3 className="template-name">Brainstorming Session</h3>
              <p className="template-description">Generate and organize creative ideas</p>
              <div className="template-footer">
                <span className="template-category">Ideation</span>
                <button className="use-template-btn">Use Template</button>
              </div>
            </div>
          </div>

          {/* Sprint Planning Template */}
          <div className="template-card">
            <div className="template-icon-wrapper purple">
              <svg className="template-icon" viewBox="0 0 24 24" fill="none">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM19 6H5V5H19V6Z" fill="currentColor"/>
                <path d="M7 10H9V12H7V10ZM11 10H17V11H11V10ZM7 14H9V16H7V14ZM11 14H17V15H11V14Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="template-content">
              <h3 className="template-name">Sprint Planning</h3>
              <p className="template-description">Plan and estimate sprint work</p>
              <div className="template-footer">
                <span className="template-category">Agile</span>
                <button className="use-template-btn">Use Template</button>
              </div>
            </div>
          </div>

          {/* Workshop Facilitation Template */}
          <div className="template-card">
            <div className="template-icon-wrapper orange">
              <svg className="template-icon" viewBox="0 0 24 24" fill="none">
                <path d="M16 4C16.55 4 17 4.45 17 5S16.55 6 16 6 15 5.55 15 5 15.45 4 16 4M13 2C13.55 2 14 2.45 14 3S13.55 4 13 4 12 3.55 12 3 12.45 2 13 2M10 4C10.55 4 11 4.45 11 5S10.55 6 10 6 9 5.55 9 5 9.45 4 10 4M16.5 9C18.43 9 20 10.57 20 12.5S18.43 16 16.5 16 13 14.43 13 12.5 14.57 9 16.5 9M16.5 11C15.67 11 15 11.67 15 12.5S15.67 14 16.5 14 18 13.33 18 12.5 17.33 11 16.5 11M7.5 9C9.43 9 11 10.57 11 12.5S9.43 16 7.5 16 4 14.43 4 12.5 5.57 9 7.5 9M7.5 11C6.67 11 6 11.67 6 12.5S6.67 14 7.5 14 9 13.33 9 12.5 8.33 11 7.5 11M12 18.5C12.83 18.5 13.5 19.17 13.5 20S12.83 21.5 12 21.5 10.5 20.83 10.5 20 11.17 18.5 12 18.5Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="template-content">
              <h3 className="template-name">Workshop Facilitation</h3>
              <p className="template-description">Structure engaging team workshops</p>
              <div className="template-footer">
                <span className="template-category">Facilitation</span>
                <button className="use-template-btn">Use Template</button>
              </div>
            </div>
          </div>
        </div>

        <div className="templates-cta">
          <button className="browse-all-btn">Browse All Templates</button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
