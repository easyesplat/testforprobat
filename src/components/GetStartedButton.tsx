"use client";
import React from 'react'
import { Experiment } from '@probat/react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

interface GetStartedButtonVariantProps {
  label?: string
  large?: boolean
  showSocialProof?: boolean
}

// Control: Original implementation
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

// Variant V3: With social proof
const GetStartedButtonVariant: React.FC<GetStartedButtonVariantProps> = ({ label = 'Get Started Free', large = false, showSocialProof = false }) => {
  return (
    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      style={showSocialProof ? { padding: '14px 32px' } : undefined}
    >
      {showSocialProof ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>{label}</span>
          <span style={{ fontSize: '12px', opacity: 0.7, marginTop: '4px', fontWeight: 600 }}>
            10K+ users trust us
          </span>
        </div>
      ) : (
        label
      )}
    </button>
  )
}

// Wrapper: Manages A/B experiment
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260317_3a8f42c1"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V3: <GetStartedButtonVariant {...props} showSocialProof={true} /> }}
    />
  )
}

export default GetStartedButton
