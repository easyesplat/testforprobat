import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  variant?: 'primary' | 'primary-solid'
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, variant = 'primary' }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260312_a7d3f8b9"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button className={`btn btn-${variant}${large ? ' btn-large' : ''}`}>
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
