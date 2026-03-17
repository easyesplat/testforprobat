"use client"
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
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = true }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Wrapper component with original export name
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260317_f8a2c1d9"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V3: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
