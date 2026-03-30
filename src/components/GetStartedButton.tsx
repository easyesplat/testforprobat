import React, { useEffect } from 'react'
import { Experiment } from '@probat/react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

// Control component (original implementation)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Variant component (V1 implementation)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false }) => {
  useEffect(() => {
    // Track impression on mount
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_impression')
    }
  }, [])

  const handleClick = () => {
    // Track click event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_click')
    }
  }

  return (
    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

// Wrapper component with Experiment
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_a1f8d3c2"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V1: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
