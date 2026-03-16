"use client";
import React from 'react';
import { Experiment } from "@probat/react";

interface GetStartedButtonProps {
  label?: string;
  large?: boolean;
}

// Control component (original implementation)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <>
      <style>
        {`
          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
            }
            50% {
              box-shadow: 0 0 30px rgba(102, 126, 234, 0.6);
            }
            100% {
              box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .btn-glow-animated {
              animation: none !important;
            }
          }
        `}
      </style>
      <button 
        className={`btn btn-primary${large ? ' btn-large' : ''} btn-glow-animated`}
        style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
      >
        {label}
      </button>
    </>
  );
};

// Variant component (V4 implementation)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = true }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
};

// Wrapper component with Experiment integration
export default function GetStartedButton(props: GetStartedButtonProps) {
  return (
    <Experiment
      id="exp_GetStartedButton_20260316_a3f8c2d1"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V4: <GetStartedButtonVariant {...props} /> }}
    />
  );
}
