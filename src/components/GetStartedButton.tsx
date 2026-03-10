import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  onClick?: () => void
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, onClick }) => {
  const handleClick = () => {
    // Emit experiment_exposure event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('experiment_exposure', {
        experiment_id: 'exp_GetStartedButton_20260310_7f3a9c12',
        variant_id: 'V2'
      })
    }
    
    // Emit get_started_button_click event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_click', {
        variant_id: 'V2'
      })
    }
    
    // Call the provided onClick handler if exists
    if (onClick) {
      onClick()
    }
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260310_7f3a9c12"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`} onClick={handleClick}>
                {label}
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: '8px' }}
                >
                  <path 
                    d="M6 3L11 8L6 13" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
