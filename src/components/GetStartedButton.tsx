import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free' }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260311_a1b2c3d4"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button className="btn btn-primary btn-large">
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
