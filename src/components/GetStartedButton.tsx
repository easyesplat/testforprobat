import React, { useEffect } from 'react'
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

// Variant component (V3 implementation)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false }) => {
  const dataVariant = 'V3'

  useEffect(() => {
    // Track experiment exposure on mount
    if (typeof window !== 'undefined' && (window as any).analytics?.track) {
      (window as any).analytics.track('experiment_exposure', {
        experiment_id: 'exp_GetStartedButton_20260330_7c4f9a12',
        variant_id: dataVariant
      })
    }
  }, [])

  const handleClick = () => {
    // Track button click
    if (typeof window !== 'undefined' && (window as any).analytics?.track) {
      (window as any).analytics.track('get_started_button_click', {
        experiment_id: 'exp_GetStartedButton_20260330_7c4f9a12',
        variant_id: dataVariant
      })
    }
  }

  const className = `btn btn-primary${large ? ' btn-large' : ''} btn-enhanced`

  return (
    <>
      <button className={className} onClick={handleClick} data-variant={dataVariant}>
        {label}
      </button>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .btn-enhanced {
          animation: pulse 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .btn-enhanced {
            animation: none;
          }
        }
      `}</style>
    </>
  )
}

// Wrapper component with original export
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260330_7c4f9a12"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V3: <GetStartedButtonVariant {...props} /> }}
    />
  )
}

export default GetStartedButton
