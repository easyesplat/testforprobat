import React, { useState } from 'react'
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
  const [isHovered, setIsHovered] = useState(false)

  const inlineStyles: React.CSSProperties = {
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.15)',
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
    transition: '0.2s ease-out',
  }

  return (
    <button
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      style={inlineStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  )
}

// Wrapper component with Experiment
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_a7f381f2"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V3: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
