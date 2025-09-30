import React from 'react';

const PricingSection = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title interactive-title">
            <span className="title-word ">Simple,</span> 
            <span className="title-word highlight">  Transparent</span>
            <span className="title-word"> Pricing</span>
          </h2>
          <p className="pricing-description ">
            Start free and scale as you grow. No hidden fees, no surprises. Cancel anytime.
          </p>
        </div>
        
        <div className="pricing-cards">
          {/* Free Plan */}
          <div className="pricing-card">
            <div className="card-header">
              <h3 className="plan-name">Free</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">0</span>
              </div>
              <p className="plan-description">Perfect for personal use</p>
            </div>
            
            <div className="features-list">
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>3 boards</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Unlimited personal boards</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Basic templates</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Mobile apps</span>
              </div>
            </div>
            
            <button className="cta-button secondary">Get Started</button>
          </div>

          {/* Team Plan - Most Popular */}
          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <div className="card-header">
              <h3 className="plan-name">Team</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">8</span>
                <span className="period">/month</span>
              </div>
              <p className="plan-description">Per user, billed annually</p>
            </div>
            
            <div className="features-list">
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Unlimited boards</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Unlimited team members</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Advanced templates</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Integrations</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Priority support</span>
              </div>
            </div>
            
            <button className="cta-button primary">Start Free Trial</button>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card">
            <div className="card-header">
              <h3 className="plan-name">Enterprise</h3>
              <div className="price">
                <span className="amount">Custom</span>
              </div>
              <p className="plan-description">For large organizations</p>
            </div>
            
            <div className="features-list">
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Everything in Team</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>SSO & Advanced security</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Admin controls</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Dedicated support</span>
              </div>
              <div className="feature">
                <span className="check-icon">✓</span>
                <span>Custom integrations</span>
              </div>
            </div>
            
            <button className="cta-button secondary">Contact Sales</button>
          </div>
        </div>

        <div className="pricing-footer">
          <p className="footer-text">All plans include our core collaboration features</p>
          <div className="core-features">
            <span className="core-feature">
              <span className="check-icon">✓</span>
              Real-time collaboration
            </span>
            <span className="core-feature">
              <span className="check-icon">✓</span>
              Infinite canvas
            </span>
            <span className="core-feature">
              <span className="check-icon">✓</span>
              Rich media tools
            </span>
            <span className="core-feature">
              <span className="check-icon">✓</span>
              Mobile & desktop apps
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
