import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = true }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_8f3a2c1b"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''} pulse`} data-variant="V2">
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
