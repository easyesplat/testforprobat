import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  variant?: 'default' | 'prominent'
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, variant = 'default' }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260311_f8a2c9e1"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}${variant === 'prominent' ? ' btn-primary-prominent' : ''}`}>
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
