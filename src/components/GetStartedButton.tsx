import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now - Free', large = false }) => {
  const handleClick = () => {
    // Track button click event
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('cta_click', { variant: 'V1' })
    }
  }

  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`} onClick={handleClick}>
      {label}
    </button>
  )
}

export default GetStartedButton
