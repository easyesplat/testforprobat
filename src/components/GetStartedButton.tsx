import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const handleClick = () => {
    // Track button click for experiment analytics
    console.log('GetStartedButton clicked - V2 Icon-Enhanced CTA');
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260307_e8f4a2b1"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`} onClick={handleClick}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {label}
                  <svg 
                    className="btn-icon" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M3 8H13M13 8L9 4M13 8L9 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
