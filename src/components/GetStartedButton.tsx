import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const handleClick = () => {
    // Fire get_started_button_click event with experiment context
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'get_started_button_click',
        experiment_id: 'exp_GetStartedButton_20260310_a4f9c2e1',
        variant_id: 'V2'
      })
    }
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260310_a4f9c2e1"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <button 
                className={`btn btn-primary btn-primary-v2${large ? ' btn-large' : ''}`}
                onClick={handleClick}
              >
                <span className="btn-text">{label}</span>
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
