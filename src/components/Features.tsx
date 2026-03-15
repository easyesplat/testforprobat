"use client";
import React from "react";
import { Experiment } from "@probat/react";
import './Features.css';

interface Feature {
  icon: string
  title: string
  description: string
}

// Control version (original)
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

// Variant version (V5)
const FeaturesVariant: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: '3x faster builds on average. Deploy in seconds, not minutes.'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Trusted by Fortune 500 companies. SOC 2 Type II certified.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Works perfectly on 2,000+ device types. Zero configuration needed.'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Fully customizable themes and components to match your brand.'
    },
    {
      icon: '🚀',
      title: 'Scalable',
      description: 'From 10 to 10M users. Auto-scaling infrastructure included.'
    },
    {
      icon: '💬',
      title: 'Support',
      description: '< 2 min average response time. 98% customer satisfaction rating.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Join 10,000+ Teams Building Faster</h2>
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

// Wrapper component with experiment
const Features: React.FC = () => {
  return (
    <Experiment
      id="exp_Features_20260315_a8c3f7d2"
      control={<FeaturesControl />}
      variants={{ V5: <FeaturesVariant /> }}
    />
  );
}

export default Features;
