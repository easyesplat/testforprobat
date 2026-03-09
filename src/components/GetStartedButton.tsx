import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const handleClick = () => {
    // Track CTA click event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('CTA Clicked', {
        variant: 'V3',
        label: label
      })
    }
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
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
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
