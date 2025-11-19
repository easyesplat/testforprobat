import React from 'react'
import '../../src/components/Features.css'

interface Feature {
  icon: string
  title: string
  description: string
}

const Features: React.FC = () => {
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
            <div
              key={index}
              className="feature-card"
              style={{
                borderRadius: '4px',
                border: '1px solid rgba(74, 85, 104, 0.2)', /* Using Secondary color with transparency */
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
                padding: '20px'
              }}
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

export default Features