import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const handleClick = () => {
    // Fire analytics event with experiment context
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'get_started_button_click', {
        experiment_id: 'exp_GetStartedButton_20260310_a4f9c2e1',
        variant_id: 'V3',
        variant_label: 'High-contrast with pulsing attention indicator'
      })
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
