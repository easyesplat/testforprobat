import React from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
  extraLarge?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false, extraLarge = false }) => {
  let sizeClass = ''
  if (extraLarge) {
    sizeClass = ' btn-xl'
  } else if (large) {
    sizeClass = ' btn-large'
  }
  
  return (
    <button className={`btn btn-primary${sizeClass}`}>
      {label}
    </button>
  )
}

export default GetStartedButton