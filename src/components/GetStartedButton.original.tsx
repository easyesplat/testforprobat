import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>
  }
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const handleClick = () => {
    // Fire get_started_button_click event with experiment metadata
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'get_started_button_click',
        experiment_id: 'exp_GetStartedButton_20260316_8f4a9b2c',
        variant_id: 'V3'
      })
    }
  }

  return (
    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      onClick={handleClick}
    >
      {label}
      <span style={{ marginLeft: '6px' }}>→</span>
    </button>
  )
}

export default GetStartedButton
