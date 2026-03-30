import React, { useState } from 'react'
import { Experiment } from '@probat/react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

// Control (original implementation)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Variant V2 (hover effects implementation)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const [isHovered, setIsHovered] = useState(false)

  const buttonStyle: React.CSSProperties = {
    boxShadow: isHovered 
      ? '0 10px 25px rgba(102, 126, 234, 0.3)' 
      : '0 4px 15px rgba(102, 126, 234, 0.15)',
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
    transition: 'all 0.2s ease-out'
  }

  return (
    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      style={buttonStyle}
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
      variants={{ V2: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
