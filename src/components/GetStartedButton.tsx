import React from 'react'
import { Experiment } from '@probat/react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

// Control version (original)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Variant version (V1)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Wrapper component with experiment logic
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_7c4f2a9b"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V1: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
