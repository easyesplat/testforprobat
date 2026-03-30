import React, { useEffect } from 'react'
import { Experiment } from '@probat/react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

// Control component (original)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Variant component (V3)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false }) => {
  useEffect(() => {
    // Track impression event on mount
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('get_started_impression', { variant_id: 'V3' })
    }
  }, [])

  const handleClick = () => {
    // Track click event
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('get_started_click', { variant_id: 'V3' })
    }
  }

  return (
    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      style={{ 
        boxShadow: '0 4px 14px rgba(102, 126, 234, 0.25)',
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

// Wrapper component that exports the experiment
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_a1f8d3c2"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V3: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
