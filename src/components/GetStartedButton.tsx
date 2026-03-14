import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_7a3b9c2f"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                style={{
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.25)',
                  transition: 'all 0.3s ease'
                }}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
