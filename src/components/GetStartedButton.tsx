import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now - Free', large = false }) => {
  const handleClick = () => {
    // Track click event before navigation
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('cta_click', { button: 'get_started', variant: 'V1' })
    }
  }

  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`} onClick={handleClick}>
      {label}
    </button>
  )
}

export default GetStartedButton
