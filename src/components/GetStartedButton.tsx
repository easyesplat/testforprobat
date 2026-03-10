import { Experiment } from '@probat/react';
import React, { useEffect } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false }) => {
  useEffect(() => {
    // Fire view and exposure events on mount
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_view', { variant_id: 'V1' })
      (window as any).analytics.track('experiment_exposure', { 
        experiment_id: 'exp_GetStartedButton_20260310_c4e9f2a1',
        variant_id: 'V1' 
      })
    }
  }, [])

  const handleClick = () => {
    // Capture click event with variant_id
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_click', { variant_id: 'V1' })
    }
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260310_c4e9f2a1"
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
