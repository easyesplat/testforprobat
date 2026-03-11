import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false }) => {
  const largeStyles = large ? {
    boxShadow: '0 12px 30px rgba(102, 126, 234, 0.35)',
    padding: '18px 40px'
  } : {}

    return (
    <Experiment
      id="exp_GetStartedButton_20260311_a1f238db"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                style={largeStyles}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
