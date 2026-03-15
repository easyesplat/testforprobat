import React, { useState } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const defaultStyle: React.CSSProperties = {
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)'
  }

  const hoverStyle: React.CSSProperties = {
    transform: isActive ? 'translateY(-3px) scale(0.98)' : 'translateY(-3px)',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
  }

  const activeStyle: React.CSSProperties = {
    transform: 'translateY(-3px) scale(0.98)',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
  }

  const combinedStyle = isActive ? activeStyle : isHovered ? hoverStyle : defaultStyle

  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  )
}

export default GetStartedButton

    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      style={combinedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsActive(false)
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >