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
        id="exp_GetStartedButton_20260310_7a8c9f2d"
        control={
          <Experiment
                id="exp_GetStartedButton_20260310_7a8c9f2d"
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
        }
        variants={{
          V2: (
            <Experiment
                  id="exp_GetStartedButton_20260310_7a8c9f2d"
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
                    V2: (
                      <button 
                        className={`btn btn-primary${large ? ' btn-large' : ''}`}
                        onClick={onClick}
                        style={{
                          boxShadow: '0 0 0 2px #fff, 0 0 0 4px transparent',
                          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          backgroundOrigin: 'border-box',
                          backgroundClip: 'padding-box, border-box',
                          border: '2px solid transparent',
                          transition: 'transform 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
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
