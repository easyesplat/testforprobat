import { Experiment } from '@probat/react';
import React, { useEffect } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false }) => {
  useEffect(() => {
    // Track exposure event when component mounts
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_view', {
        variant: 'V3',
        experiment_id: 'exp_GetStartedButton_20260311_7c8f3a12'
      })
    }
  }, [])

  const handleClick = () => {
    // Track click event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_click', {
        variant: 'V3',
        experiment_id: 'exp_GetStartedButton_20260311_7c8f3a12'
      })
    }
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260311_7c8f3a12"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                onClick={handleClick}
                style={{
                  background: 'linear-gradient(135deg, #5568ea 0%, #6a3b92 100%)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.4)'
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.transform = ''
                }}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
