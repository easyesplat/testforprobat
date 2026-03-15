"use client";
import React from "react";
import { Experiment } from "@probat/react";
import './Features.css';

interface Feature {
  icon: string
  title: string
  description: string
}

// Control component (original)
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

// Variant V3 component
const FeaturesVariant: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Ship features faster with zero-config performance optimization that keeps your users engaged.'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Protect your data with enterprise-grade encryption and automated compliance monitoring.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Deploy once and deliver flawless experiences across every device and screen size.'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Customize every element to match your brand identity with our flexible theming system.'
    },
    {
      icon: '🚀',
      title: 'Scalable',
      description: 'Scale effortlessly from your first users to millions without infrastructure headaches.'
    },
    {
      icon: '💬',
      title: 'Support',
      description: 'Connect with expert support 24/7 and get dedicated success managers for your team.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything You Need to Succeed</h2>
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

// Wrapper component with experiment logic
const Features: React.FC = () => {
  return (
    <Experiment
      id="exp_Features_20260315_c8f4a1b2"
      control={<FeaturesControl />}
      variants={{ V3: <FeaturesVariant /> }}
    />
  )
}

export default Features;
