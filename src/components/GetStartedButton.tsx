import { Experiment } from '@probat/react';
import React from 'react'
import './GetStartedButton.css'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_7a3f9d2e"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button className={`btn btn-primary btn-get-started${large ? ' btn-large' : ''}`}>
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
