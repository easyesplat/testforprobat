import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  showSocialProof?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
const GetStartedButton: React.FC<GetStartedButtonProps> = ({ 
  label = 'Get Started Free', 
  large = false,
  showSocialProof = true 
}) => {
}
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
        {label}
      </button>
      {showSocialProof && (
        <span style={{ 
          fontSize: '12px', 
          color: '#718096', 
          textAlign: 'center',
          marginTop: '6px'
        }}>
          10K+ developers trust us
        </span>
      )}
    </div>