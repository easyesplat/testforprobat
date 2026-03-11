import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  onClick?: (event: React.MouseEvent) => void
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false, onClick }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260311_f4a91e3e"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V1: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
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
