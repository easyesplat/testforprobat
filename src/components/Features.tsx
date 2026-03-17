"use client";
import React from "react";
import { Experiment } from "@probat/react";
import './Features.css';

interface Feature {
  icon: string
  title: string
  description: string
  social_proof?: string
}

// Control component (original version without social_proof)
const FeaturesControl: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built for speed with optimized performance and minimal loading times.'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Enterprise-grade security with end-to-end encryption and compliance.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Perfect experience across all devices and screen sizes.'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Fully customizable themes and components to match your brand.'
    },
    {
      icon: '🚀',
      title: 'Scalable',
      description: 'Grows with your business from startup to enterprise scale.'
    },
    {
      icon: '💬',
      title: 'Support',
      description: '24/7 customer support with dedicated success managers.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-description">
            Discover the features that make our platform the best choice for your needs.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Variant component (version with social_proof)
const FeaturesVariant: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built for speed with optimized performance and minimal loading times.',
      social_proof: '10,000+ active users'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Enterprise-grade security with end-to-end encryption and compliance.',
      social_proof: '99.9% uptime reliability'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Perfect experience across all devices and screen sizes.',
      social_proof: '5,000+ happy customers'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Fully customizable themes and components to match your brand.',
      social_proof: 'Trusted by 500+ companies'
    },
    {
      icon: '🚀',
      title: 'Scalable',
      description: 'Grows with your business from startup to enterprise scale.',
      social_proof: '1M+ requests daily'
    },
    {
      icon: '💬',
      title: 'Support',
      description: '24/7 customer support with dedicated success managers.',
      social_proof: '<5 min response time'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-description">
            Discover the features that make our platform the best choice for your needs.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              {feature.social_proof && (
                <div className="feature-social-proof">
                  ✓ {feature.social_proof}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Wrapper component that uses Probat Experiment
const Features: React.FC = () => {
  return (
    <Experiment
      id="exp_Features_20260317_8f4a7b1c"
      control={<FeaturesControl />}
      variants={{ V3: <FeaturesVariant /> }}
    />
  )
}

export default Features;
