import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  onClick?: () => void
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false, onClick }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260310_8f4a2c1d"
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
                  boxShadow: '0 4px 14px rgba(102, 126, 234, 0.25)',
                  padding: large ? undefined : '14px 28px'
                }}
                onClick={onClick}
                data-testid="get-started-button"
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
