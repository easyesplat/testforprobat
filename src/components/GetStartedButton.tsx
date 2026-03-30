"use client";
import React, { useEffect } from 'react'
import { Experiment } from '@probat/react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

// Control: Original component
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Variant: V2 component (current implementation)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  useEffect(() => {
    // Track impression event on mount
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
      style={{ boxShadow: '0 4px 14px rgba(102, 126, 234, 0.25)' }}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

// Wrapper: Experiment component that serves both control and variant
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_a1f8d3c2"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V2: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
