import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  xlarge?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, xlarge = false }) => {
  return (
    <button className={`btn btn-primary${xlarge ? ' btn-xlarge' : large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

export default GetStartedButton
