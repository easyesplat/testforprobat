import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  onClick?: () => void
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false, onClick }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260314_b3f7c9e2"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V1: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`} onClick={onClick}>
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
