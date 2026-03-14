import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_7f4a8c1b"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>{label}</span>
                  <span>→</span>
                </span>
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
