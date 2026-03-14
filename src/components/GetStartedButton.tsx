import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_b3f7c9e2"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button 
                className={`btn btn-primary${large ? ' btn-large btn-primary-enhanced' : ''}`}
                style={large ? { boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)' } : undefined}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
