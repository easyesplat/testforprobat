import { Experiment } from '@probat/react';
import React, { useEffect } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean  // Kept for backward compatibility, always treated as true
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free' }) => {
  useEffect(() => {
    // Track exposure on component mount
    if (typeof window !== 'undefined' && (window as any).analytics?.track) {
      (window as any).analytics.track('get_started_button_exposure', {
        variant: 'V2'
      })
    }
  }, [])

  const handleClick = () => {
    // Track CTA click event
    if (typeof window !== 'undefined' && (window as any).analytics?.track) {
      (window as any).analytics.track('get_started_cta_click', {
        variant: 'V2'
      })
    }
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260311_f8a2c4b1"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button 
                className="btn btn-primary btn-large"
                style={{
                  boxShadow: '0 4px 14px rgba(102, 126, 234, 0.25)'
                }}
                onClick={handleClick}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
