import { Experiment } from '@probat/react';
import React, { useEffect } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  useEffect(() => {
    // Track button view and experiment exposure
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_view');
      (window as any).analytics.track('experiment_exposure', {
        experiment_id: 'exp_GetStartedButton_20260313_7a3f9c21',
        variant_id: 'V2'
      });
    }
  }, []);

  const handleClick = () => {
    // Track button click
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_click');
    }
  };

    return (
    <Experiment
      id="exp_GetStartedButton_20260313_7a3f9c21"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button 
                className={`btn btn-primary${large ? ' btn-large btn-primary-enhanced' : ''}`}
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
