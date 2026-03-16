import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <>
      <style>
        {`
          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
            }
            50% {
              box-shadow: 0 0 30px rgba(102, 126, 234, 0.6);
            }
            100% {
              box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .btn-glow-animated {
              animation: none !important;
            }
          }
        `}
      </style>
      <button 
        className={`btn btn-primary${large ? ' btn-large' : ''} btn-glow-animated`}
        style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
      >
        {label}
      </button>
    </>
  )
}

export default GetStartedButton
