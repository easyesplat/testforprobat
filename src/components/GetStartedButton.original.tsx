import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Try Free - No Credit Card', large = false }) => {
  const handleClick = () => {
    // Fire get_started_button_click event with experiment metadata
    const event = new CustomEvent('get_started_button_click', {
      detail: {
        experiment_id: 'exp_GetStartedButton_20260316_8f4a9b2c',
        variant_id: 'V2',
        variant_label: 'Benefit-Focused Copy',
        timestamp: new Date().toISOString()
      }
    })
    window.dispatchEvent(event)
  }

  return (
    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default GetStartedButton
