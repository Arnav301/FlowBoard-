// ==========================================
// IMPORTS SECTION
// ==========================================
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import TemplatesSection from './TemplatesSection';
import ResourcesSection from './ResourcesSection';
import EnterpriseSection from './EnterpriseSection';
// import ExperienceFlowBoard from './ExperienceFlowBoard';
import Footer from './Footer';

// ==========================================
// HOME COMPONENT
// ==========================================
const Home = () => {
  return (
    <div className="home-container">
      {/* ==========================================
          NAVIGATION SECTION
          ========================================== */}
      <Navbar />
      
      {/* ==========================================
          MAIN CONTENT SECTION
          ========================================== */}
      <main className="main-content">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Experience FlowBoard Section (Currently Disabled) */}
        {/* <ExperienceFlowBoard /> */}
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Templates Section */}
        <TemplatesSection />
        
        {/* Resources Section */}
        <ResourcesSection />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* Enterprise Section */}
        <EnterpriseSection />
      </main>
      
      {/* ==========================================
          FOOTER SECTION
          ========================================== */}
      <Footer />
    </div>
  );
};

// ==========================================
// EXPORT SECTION
// ==========================================
export default Home;
