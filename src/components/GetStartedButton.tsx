import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  
  const buttonStyle: React.CSSProperties = {
    boxShadow: isHovered ? '0 6px 16px rgba(102, 126, 234, 0.35)' : '0 4px 12px rgba(102, 126, 234, 0.25)',
    transition: 'box-shadow 0.3s ease'
  }
  
    return (
    <Experiment
      id="exp_GetStartedButton_20260310_7f8e9a1b"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button 
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
