import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const handleClick = () => {
    // Track button click
    console.log('GetStartedButton clicked - V2 variant')
  }

  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`} onClick={handleClick}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span>{label}</span>
        <svg 
          className="btn-icon" 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: 'transform 0.3s ease' }}
        >
          <path 
            d="M6 3L11 8L6 13" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  )
}

export default GetStartedButton
