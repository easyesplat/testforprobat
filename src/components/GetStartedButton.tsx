import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  variant?: 'default' | 'emphasized'
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, variant = 'default' }) => {
  const handleClick = () => {
    // Track click event
    if ((window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Button',
        event_label: 'GetStartedButton',
        variant: variant
      })
    }
  }

  React.useEffect(() => {
    // Track exposure event
    if ((window as any).gtag && variant === 'emphasized') {
      (window as any).gtag('event', 'exposure', {
        event_category: 'Experiment',
        event_label: 'GetStartedButton_emphasized',
        variant: variant
      })
    }
  }, [variant])

    return (
    <Experiment
      id="exp_GetStartedButton_20260310_7f8a2c3d"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}${variant === 'emphasized' ? ' btn-emphasized' : ''}`}
                onClick={handleClick}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
