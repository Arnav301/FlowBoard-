import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import TemplatesSection from './TemplatesSection';
import ResourcesSection from './ResourcesSection';
import EnterpriseSection from './EnterpriseSection';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TemplatesSection />
        <ResourcesSection />
        <EnterpriseSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
