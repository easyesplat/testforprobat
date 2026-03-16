import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false }) => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('get_started_button_click', {
        experiment_id: 'exp_GetStartedButton_20260316_8f4a9b2c',
        variant_id: 'V1',
        label
      })
    }
  }

  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`} onClick={handleClick}>
      {label}
    </button>
  )
}

export default GetStartedButton
