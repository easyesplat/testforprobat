import { Experiment } from '@probat/react';
import React, { useState } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Free', large = false }) => {
  const [isHovered, setIsHovered] = useState(false)

    return (
    <Experiment
      id="exp_GetStartedButton_20260314_a1f3b7c9"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
              {label}
            </button>
      }
      variants={{
        V3: (
          <button
                className={`btn btn-primary${large ? ' btn-large' : ''}`}
                style={{
                  boxShadow: '0 4px 14px rgba(102, 126, 234, 0.25)',
                  transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                }}
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
