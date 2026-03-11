import { Experiment } from '@probat/react';
import React, { useEffect } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false }) => {
  useEffect(() => {
    // Track exposure event on component mount
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_view', {
        experiment_id: 'exp_GetStartedButton_20260311_7c8f3a12',
        variant_id: 'V1',
        component_id: large ? 'hero' : 'header'
      })
    }
  }, [large])

  const handleClick = () => {
    // Track click event with experiment context
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_click', {
        experiment_id: 'exp_GetStartedButton_20260311_7c8f3a12',
        variant_id: 'V1',
        component_id: large ? 'hero' : 'header'
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
