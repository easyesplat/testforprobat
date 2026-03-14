import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const gradientBorderStyle: React.CSSProperties = {
    border: '2px solid transparent',
    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)'
    e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.2), 0 10px 25px rgba(118, 75, 162, 0.2)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = ''
    e.currentTarget.style.boxShadow = ''
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260314_7a8f9c1d"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button 
                className={`btn btn-primary btn-gradient-border${large ? ' btn-large' : ''}`}
                style={gradientBorderStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
