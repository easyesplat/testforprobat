import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now - Free', large = false }) => {
  const handleClick = () => {
    // Track button click event
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('cta_click', { variant: 'V1', label })
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
        V1: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`} onClick={handleClick}>
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
