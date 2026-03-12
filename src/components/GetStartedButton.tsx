import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  showArrow?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, showArrow = true }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260312_a7d3f8b9"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
                {label}
                {showArrow && <span className="btn-arrow" style={{ marginLeft: '8px' }}>→</span>}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
