import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Free Today', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_a7b3f2d1"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                style={{
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.25)',
                  transition: 'transform 0.2s ease-in-out',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
