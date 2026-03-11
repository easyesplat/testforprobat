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
      id="exp_GetStartedButton_20260311_f8a1c2d9"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                onClick={onClick}
                style={{
                  border: '2px solid white',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.15)',
                  transition: 'box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.15)'
                }}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
