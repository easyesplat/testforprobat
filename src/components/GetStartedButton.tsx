import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_f8a7c2d1"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V4: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
                <span style={{ marginRight: '0.25rem' }}>{label}</span>→
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
