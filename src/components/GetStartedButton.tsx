import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Now', large = true }) => {
  return (
    <button
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}
    >
      <span>{label}</span>
      <span style={{ fontSize: '0.7em', opacity: 0.85, fontWeight: 400 }}>Free forever · No credit card</span>
    </button>
  )
}

export default GetStartedButton
