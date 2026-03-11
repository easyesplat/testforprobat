import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const enhancedStyle = large ? {
    padding: '18px 40px',
    boxShadow: '0 12px 30px rgba(102, 126, 234, 0.35)'
  } : undefined

    return (
    <Experiment
      id="exp_GetStartedButton_20260311_a1f238db"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                style={enhancedStyle}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
