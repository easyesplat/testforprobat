import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now - Free', large = false }) => {
  const handleClick = () => {
    // Track button click event
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'click', {
        event_category: 'engagement',
        event_label: 'get_started_button'
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
