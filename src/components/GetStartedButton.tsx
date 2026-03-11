import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Free Now 🚀', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260311_a1f8e9d2"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`} data-testid="get-started-button">
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
