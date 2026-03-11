import { Experiment } from '@probat/react';
import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isActive, setIsActive] = React.useState(false)

  const buttonStyle: React.CSSProperties = {
    boxShadow: '0 4px 14px rgba(102, 126, 234, 0.4)',
    transform: isActive ? 'scale(0.98)' : isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.2s ease-in-out'
  }

    return (
    <Experiment
      id="exp_GetStartedButton_20260311_8f4a2b1c"
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
                onMouseDown={() => setIsActive(true)}
                onMouseUp={() => setIsActive(false)}
              >
                {label}
              </button>
        ),
      }}
    />
  );
}

export default GetStartedButton
