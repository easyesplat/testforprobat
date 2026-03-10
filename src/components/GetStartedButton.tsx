import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  onClick?: () => void
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  
    return (
    <Experiment
      id="exp_GetStartedButton_20260310_7a8c9f2d"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`} 
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{label}</span>
                  <span 
                    style={{ 
                      transition: 'transform 0.2s ease',
                      display: 'inline-block',
                      transform: isHovered ? 'translateX(3px)' : 'translateX(0)'
                    }}
                  >
                    →
                  </span>
                </span>
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
