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

// Variant component (V2)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <>
      <style>{`
        .btn-enhanced {
          animation: pulse-glow 2.5s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 8px rgba(102, 126, 234, 0.4), 0 0 16px rgba(118, 75, 162, 0.2);
          }
          50% {
            box-shadow: 0 0 12px rgba(102, 126, 234, 0.6), 0 0 24px rgba(118, 75, 162, 0.3);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .btn-enhanced {
            animation: none;
          }
        }
      `}</style>
      <button 
        className={`btn btn-primary${large ? ' btn-large' : ''} btn-enhanced`}
      >
        {label}
      </button>
    </>
  )
}

// Wrapper component with experiment
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_7c4f9a12"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V2: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
