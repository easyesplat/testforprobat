import { Experiment } from '@probat/react';
import React, { useEffect, useState } from 'react'

interface GetStartedButtonProps {
  label?: string
  large?: boolean
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = 'Try it Free - No Credit Card', large = false }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Fire exposure event on component mount
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('exposure_event', {
        experiment_id: 'exp_GetStartedButton_20260310_7f8a2c3d',
        variant_id: 'V1'
      })
    }
  }, [])

  const handleClick = () => {
    // Fire click event with experiment metadata
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_click', {
        experiment_id: 'exp_GetStartedButton_20260310_7f8a2c3d',
        variant_id: 'V1'
      })
    }
  }

  // V2 specific hooks
  useEffect(() => {
    // Fire exposure event for V2 on component mount
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('exposure_event', {
        experiment_id: 'exp_GetStartedButton_20260310_7f8a2c3d',
        variant_id: 'V2'
      })
    }
  }, [])

  useEffect(() => {
    // Check window width for responsive label
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleClickV2 = () => {
    // Fire click event with V2 experiment metadata
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('get_started_click', {
        experiment_id: 'exp_GetStartedButton_20260310_7f8a2c3d',
        variant_id: 'V2'
      })
    }
  }

  const getResponsiveLabel = (fullLabel: string) => {
    if (isMobile && fullLabel === 'Try it Free - No Credit Card') {
      return 'Try it Free'
    }
    return fullLabel
  }

        return (
      <Experiment
        id="exp_GetStartedButton_20260310_7f8a2c3d"
        control={
          <Experiment
                id="exp_GetStartedButton_20260310_7f8a2c3d"
                control={
                  <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
                        {label}
                      </button>
                }
                variants={{
                  V1: (
                    <button 
                          className={`btn btn-primary${large ? ' btn-large' : ''}`}
                          onClick={handleClick}
                          aria-label={label}
                          data-testid="get-started-button"
                        >
                          {label}
                        </button>
                  ),
                }}
              />
        }
        variants={{
          V2: (
            <Experiment
                  id="exp_GetStartedButton_20260310_7f8a2c3d"
                  control={
                    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
                          {label}
                        </button>
                  }
                  variants={{
                    V1: (
                      <button 
                            className={`btn btn-primary${large ? ' btn-large' : ''}`}
                            onClick={handleClick}
                            aria-label={label}
                            data-testid="get-started-button"
                          >
                            {label}
                          </button>
                    ),
                    V2: (
                      <button 
                            className={`btn btn-primary${large ? ' btn-large' : ''}`}
                            onClick={handleClickV2}
                            aria-label={label}
                            data-testid="get-started-button"
                          >
                            {getResponsiveLabel(label)}
                          </button>
                    ),
                  }}
                />
          ),
        }}
      />
    );
}

export default GetStartedButton
