'use client'
import React from 'react'
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
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Wrapper component that serves both via A/B experiment
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_7f8a9b2c"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V3: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
