import React from 'react'
import { Experiment } from '@probat/react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260315_7f8a9c2d"
      control={
        <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
          {label}
        </button>
      }
      variants={{
        V2: (
          <button className={`btn btn-primary-enhanced${large ? ' btn-large' : ''}`}>
            {label}
          </button>
        )
      }}
    />
  )
}

export default GetStartedButton
