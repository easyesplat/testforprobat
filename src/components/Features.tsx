"use client";
import React from "react";
import { Experiment } from "@probat/react";
import './Features.css';

interface Feature {
  icon: string
  title: string
  description: string
}

// Control: Original implementation
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

// Variant: V1 implementation
const FeaturesVariant: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Ship Features Faster',
      description: 'Deploy updates in minutes, not days, with streamlined workflows and instant previews.'
    },
    {
      icon: '🔒',
      title: 'Built for Compliance',
      description: 'Meet SOC 2, GDPR, and HIPAA requirements out of the box with automated audits.'
    },
    {
      icon: '📱',
      title: 'Works Everywhere',
      description: 'Deliver seamless experiences on desktop, mobile, and tablet without extra effort.'
    },
    {
      icon: '🎨',
      title: 'Match Your Brand',
      description: 'Customize colors, fonts, and layouts to perfectly align with your brand identity.'
    },
    {
      icon: '🚀',
      title: 'Grows with You',
      description: 'Handle 100 or 100,000 users with the same performance and reliability.'
    },
    {
      icon: '💬',
      title: 'Never Be Blocked',
      description: 'Get immediate help from experts who know your product and your challenges.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything You Need to Scale Fast</h2>
          <p className="section-description">
            The complete platform to build, launch, and grow your product with confidence.
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

// Wrapper: Experiment configuration
const Features: React.FC = () => {
  return (
    <Experiment
      id="exp_Features_20260315_a1f2e9c4"
      control={<FeaturesControl />}
      variants={{ V1: <FeaturesVariant /> }}
    />
  );
}

export default Features;
