import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      <span>{label}</span>
      <span style={{ marginLeft: '8px' }} aria-hidden="true">→</span>
  )
}

export default GetStartedButton
