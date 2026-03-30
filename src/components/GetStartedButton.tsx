import React, { useEffect } from 'react'
import { Experiment } from '@probat/react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  onClick?: () => void
}

// Control component - the original implementation
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Variant component - V1 implementation
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false, onClick }) => {
  useEffect(() => {
    // Fire experiment exposure event on mount
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'experiment_exposure', {
        experiment_id: 'exp_GetStartedButton_20260330_7c4f9a12',
        variant_id: 'V1'
      })
    }
  }, [])

  const handleClick = () => {
    // Fire get_started_button_click event with experiment context
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'get_started_button_click', {
        experiment_id: 'exp_GetStartedButton_20260330_7c4f9a12',
        variant_id: 'V1'
      })
    }
    
    // Call the passed onClick handler if provided
    if (onClick) {
      onClick()
    }
  }

  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`} onClick={handleClick}>
      {label}
    </button>
  )
}

// Wrapper component with Experiment integration
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_7c4f9a12"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V1: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
