import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  className?: string
  onClick?: () => void
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ 
  label = 'Get Started Free', 
  large = false, 
  className = 'btn-primary',
  onClick 
}) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260311_f8a4d2e9"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button className={`btn ${className}${large ? ' btn-large' : ''}`} onClick={onClick}>
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
