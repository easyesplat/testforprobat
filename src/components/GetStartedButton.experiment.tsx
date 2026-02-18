import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Your Free Trial', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label} <span 
        aria-hidden="true" 
        style={{ 
          marginLeft: '4px',
          display: 'inline-block',
          animation: 'slideRight 1.5s ease-in-out infinite'
        }}
      >
        →
      </span>
      <style jsx>{`
        @keyframes slideRight {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(3px); }
        }
      `}</style>
    </button>
  )
}

export default GetStartedButton