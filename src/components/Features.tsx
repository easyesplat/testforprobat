"use client";
import React from "react";
import { Experiment } from "@probat/react";
import './Features.css';

interface Feature {
  icon: string
  title: string
  description: string
}

// Original control component
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

// V3 variant component
const FeaturesVariant: React.FC = () => {
  const handleFeatureClick = (featureTitle: string) => {
    // Track feature card engagement
    console.log('Feature card clicked:', featureTitle);
  };

  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Ship Lightning Fast',
      description: 'Reduce deployment time by 10x with optimized performance and minimal loading times.'
    },
    {
      icon: '🔒',
      title: 'Deploy Securely',
      description: 'Protect your users with enterprise-grade encryption and 99.9% compliance coverage.'
    },
    {
      icon: '📱',
      title: 'Scale Everywhere',
      description: 'Reach 100% of your users with perfect experience across all devices and screen sizes.'
    },
    {
      icon: '🎨',
      title: 'Customize Freely',
      description: 'Save 50+ hours with fully customizable themes and components that match your brand.'
    },
    {
      icon: '🚀',
      title: 'Grow Infinitely',
      description: 'Handle 10x traffic spikes effortlessly as your business grows from startup to enterprise.'
    },
    {
      icon: '💬',
      title: 'Get Support 24/7',
      description: 'Resolve issues 3x faster with round-the-clock support and dedicated success managers.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Accelerate Your Development</h2>
          <p className="section-description">
            Everything you need to ship faster, scale confidently, and delight your users.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              onClick={() => handleFeatureClick(feature.title)}
            >
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

// Wrapper component with Experiment
const Features: React.FC = () => {
  return (
    <Experiment
      id="exp_Features_20260315_8f3a2c1d"
      control={<FeaturesControl />}
      variants={{ V3: <FeaturesVariant /> }}
    />
  );
}

export default Features;
