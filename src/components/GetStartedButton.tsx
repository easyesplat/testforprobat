import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false }) => {
        return (
      <Experiment
        id="exp_GetStartedButton_20260310_f8a3c1d2"
        control={
          <Experiment
                id="exp_GetStartedButton_20260310_f8a3c1d2"
                control={
                  <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
                        {label}
                      </button>
                }
                variants={{
                  V1: (
                    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
                          {label}
                        </button>
                  ),
                }}
              />
        }
        variants={{
          V2: (
            <Experiment
                  id="exp_GetStartedButton_20260310_f8a3c1d2"
                  control={
                    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
                          {label}
                        </button>
                  }
                  variants={{
                    V1: (
                      <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
                            {label}
                          </button>
                    ),
                    V2: (
                      <button 
                        className={`btn btn-primary btn-enhanced${large ? ' btn-large' : ''}`}
                        aria-label={`${label} - Click to get started with our platform`}
                      >
                            {label}
                          </button>
                    ),
                  }}
                />
          ),
        }}
      />
    );
}

export default GetStartedButton
