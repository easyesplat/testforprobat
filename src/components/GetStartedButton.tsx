import { Experiment } from '@probat/react';
import React, { useEffect } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false }) => {
  useEffect(() => {
    // Track exposure when component mounts
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('experiment_exposure', {
        experiment_id: 'exp_GetStartedButton_20260311_f8a2c4b1',
        variant_id: 'V1'
      })
    }
  }, [])

  const handleClick = () => {
    // Track CTA click event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_cta_click', {
        experiment_id: 'exp_GetStartedButton_20260311_f8a2c4b1',
        variant_id: 'V1',
        label
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
