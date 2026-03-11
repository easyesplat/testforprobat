import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  onClick?: () => void
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, onClick }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260311_f8a4d2e9"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                onClick={onClick}
                style={{ paddingLeft: '24px', paddingRight: '24px' }}
              >
                <span>{label}</span>
                <span style={{ marginLeft: '6px' }}>→</span>
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
