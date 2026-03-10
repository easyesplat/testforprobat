import { Experiment } from '@probat/react';
import React, { useEffect } from 'react'

declare global {
  interface Window {
    analytics?: {
      track: (event: string, properties?: Record<string, any>) => void
    }
  }
}

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  onClick?: () => void
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false, onClick }) => {
  useEffect(() => {
    // Emit experiment_exposure event on component mount
    if (window.analytics) {
      window.analytics.track('experiment_exposure', {
        experiment_id: 'exp_GetStartedButton_20260310_7f3a9c12',
        variant_id: 'V1'
      })
    }
  }, [])

  const handleClick = () => {
    // Emit get_started_button_click analytics event
    if (window.analytics) {
      window.analytics.track('get_started_button_click', {
        experiment_id: 'exp_GetStartedButton_20260310_7f3a9c12',
        variant_id: 'V1'
      })
    }
    
    // Call the provided onClick handler if it exists
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
