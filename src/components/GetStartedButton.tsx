import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260313_a1f2d8b3"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <span>{label}</span>
                <span>→</span>
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
