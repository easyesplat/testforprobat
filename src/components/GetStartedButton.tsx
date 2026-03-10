import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  showSocialProof?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, showSocialProof = false }) => {
  const handleClick = () => {
    // Analytics event instrumentation
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_clicked', {
        label,
        variant: showSocialProof ? 'with_social_proof' : 'default'
      })
    }
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260310_7f3a9c12"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button 
                  className={`btn btn-primary${large ? ' btn-large' : ''}`}
                  onClick={handleClick}
                >
                  {label}
                </button>
                {showSocialProof && (
                  <span style={{ 
                    marginTop: '8px', 
                    fontSize: '14px', 
                    color: '#6b7280',
                    textAlign: 'center'
                  }}>
                    Join 10,000+ developers already using our platform
                  </span>
                )}
              </div>
        ),
      }}
    />
  );
}

export default GetStartedButton
