import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Try It Free — No Credit Card Needed', large = true }) => {
  return (
    <button
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      style={{ boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)', transition: 'box-shadow 0.2s ease, transform 0.2s ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {label}
    </button>
  )
}

export default GetStartedButton
