import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  onClick?: () => void
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false, onClick }) => {
  const handleClick = () => {
    // Fire experiment tracking event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_click', {
        experiment_id: 'exp_GetStartedButton_20260310_a4f9c2e1',
        variant_id: 'V1',
        label
      })
    }
    
    // Call custom onClick if provided
    if (onClick) {
      onClick()
    }
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260310_a4f9c2e1"
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
