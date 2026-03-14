import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  showIcon?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, showIcon = true }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_b3f7c9e2"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`} style={{ minWidth: showIcon ? '160px' : 'auto' }}>
                {label}
                {showIcon && (
                  <span style={{ display: 'inline-flex', marginLeft: '8px', alignItems: 'center' }}>
                    <svg viewBox='0 0 16 16' width='16' height='16'>
                      <path d='M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z' fill='currentColor'/>
                    </svg>
                  </span>
                )}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
