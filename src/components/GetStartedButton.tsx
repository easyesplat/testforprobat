import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260310_8f4a3c91"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button className={`btn btn-primary-solid${large ? ' btn-large' : ''}`}>
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
