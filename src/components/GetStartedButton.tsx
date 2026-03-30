import React from 'react'
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

// Variant component (V2 implementation with arrow icon)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      style={{ paddingLeft: '32px', paddingRight: '32px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
    >
      {label}
      <span aria-hidden="true">→</span>
    </button>
  )
}

// Wrapper component (maintains original export signature)
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_7a4f2e91"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V2: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
