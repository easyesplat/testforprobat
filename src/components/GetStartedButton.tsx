import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  subtext?: string
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, subtext = 'No credit card required' }) => {
    return (
    <Experiment
      id="exp_GetStartedButton_20260311_7a3f8c21"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button className={`btn btn-primary${large ? ' btn-large' : ''}`} style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 600 }}>{label}</span>
                  {subtext && <span style={{ fontSize: '12px', opacity: 0.7, fontWeight: 400 }}>{subtext}</span>}
                </span>
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
