import { Experiment } from '@probat/react';
import React, { useEffect } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  useEffect(() => {
    // Track exposure event on mount
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_view')
    }
  }, [])

  const handleClick = () => {
    // Track click event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_button_click')
    }
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260311_7c8f3a12"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V2: (
          <>
                <style>{`
                  .btn-enhanced {
                    background: linear-gradient(135deg, #5568ea 0%, #6a3b92 100%);
                  }
                  .btn-enhanced:hover {
                    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.5);
                  }
                `}</style>
                <button 
                  className={`btn btn-primary btn-enhanced${large ? ' btn-large' : ''}`}
                  onClick={handleClick}
                >
                  {label}
                </button>
              </>
        ),
      }}
    />
  );
}

export default GetStartedButton
