import { Experiment } from '@probat/react';
import React, { useEffect } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false }) => {
  useEffect(() => {
    // Track button view and experiment exposure on mount
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_view')
      (window as any).analytics.track('experiment_exposure', {
        experiment_id: 'exp_GetStartedButton_20260313_7a3f9c21',
        variant_id: 'V1'
      })
    }
  }, [])

  const handleClick = () => {
    // Track button click
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_click', {
        label: label
      })
    }
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260313_7a3f9c21"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V1: (
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
