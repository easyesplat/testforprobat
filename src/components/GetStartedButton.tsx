"use client"
import React from 'react'
import { Experiment } from '@probat/react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  variant?: 'default' | 'high-contrast'
}

// Control: Original simple button
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ 
  label = 'Get Started Free', 
  large = false 
}) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Variant V3: High-contrast button with hover effects
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ 
  label = 'Get Started Free', 
  large = false,
  variant = 'default'
}) => {
  const [isHovered, setIsHovered] = React.useState(false)

  const highContrastStyles: React.CSSProperties = variant === 'high-contrast' ? {
    boxShadow: isHovered 
      ? '0 6px 20px rgba(102, 126, 234, 0.5)' 
      : '0 4px 15px rgba(102, 126, 234, 0.4)',
    fontWeight: 700
  } : {}

  return (
    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      style={highContrastStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  )
}

// Wrapper: A/B experiment using Probat
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_7c4f2a9b"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V3: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
