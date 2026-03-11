import { Experiment } from '@probat/react';
import React, { useEffect } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  onClick?: () => void
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Free Trial', large = true, onClick }) => {
  useEffect(() => {
    // Track exposure event on component mount
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_cta_exposure', {
        variant: 'V3'
      })
    }
  }, [])

  const handleClick = () => {
    // Track click event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_cta_click', {
        variant: 'V3',
        label
      })
    }
    if (onClick) {
      onClick()
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
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                onClick={handleClick}
                style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
              >
                {label} →
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
