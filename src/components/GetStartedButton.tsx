import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260310_2f8c9a1b"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
                {label}<span style={{marginLeft: '8px'}}>→</span>
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
