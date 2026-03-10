import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260310_7f3a8c12"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                style={{ boxShadow: '0 4px 14px rgba(102, 126, 234, 0.4)' }}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
