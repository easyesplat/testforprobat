import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_7a3b9c2f"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                style={{ boxShadow: '0 4px 15px rgba(102, 126, 234, 0.25)' }}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
