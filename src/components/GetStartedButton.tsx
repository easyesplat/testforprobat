import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = true }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_a7f381b9"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                aria-label="Start building your project now"
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
