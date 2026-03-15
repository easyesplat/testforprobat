"use client";
import React from "react";
import { Experiment } from "@probat/react";
import './Features.css';

interface Feature {
  icon: string
  title: string
  description: string
}

// Control component (original version)
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

// Variant component (V1 version)
const FeaturesVariant: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Deploy in Seconds',
      description: 'Ship your projects faster with instant deployment and optimized performance that keeps your users engaged.'
    },
    {
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'Protect your data with enterprise-grade encryption that meets the highest compliance standards your business requires.'
    },
    {
      icon: '📱',
      title: 'Work Anywhere',
      description: 'Access your workspace seamlessly from any device, giving your team the flexibility to stay productive on the go.'
    },
    {
      icon: '🎨',
      title: 'Match Your Brand',
      description: 'Create a consistent experience with fully customizable themes that reflect your unique brand identity.'
    },
    {
      icon: '🚀',
      title: 'Scale Without Limits',
      description: 'Start small and expand confidently as our platform grows with your business from day one to enterprise level.'
    },
    {
      icon: '💬',
      title: 'Get Help Anytime',
      description: 'Reach our dedicated support team 24/7 and work with success managers who understand your goals.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Built for Modern Teams</h2>
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

// Wrapper component that maintains the original export signature
const Features: React.FC = () => {
  return (
    <Experiment
      id="exp_Features_20260315_8f9a1b2c"
      control={<FeaturesControl />}
      variants={{ V1: <FeaturesVariant /> }}
    />
  )
}

export default Features;
