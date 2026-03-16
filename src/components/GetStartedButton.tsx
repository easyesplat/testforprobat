"use client";
import React from 'react';
import { Experiment } from "@probat/react";

interface GetStartedButtonProps {
  label?: string;
  large?: boolean;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>;
  }
}

// Control component (original)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  const handleClick = () => {
    // Fire get_started_button_click event with experiment metadata
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'get_started_button_click',
        experiment_id: 'exp_GetStartedButton_20260316_8f4a9b2c',
        variant_id: 'V3'
      });
    }
  };

  return (
    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      onClick={handleClick}
    >
      {label}
      <span style={{ marginLeft: '6px' }}>→</span>
    </button>
  );
};

// Variant component (V3)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = true }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
};

// Wrapper component (keeps original export name)
export default function GetStartedButton(props: GetStartedButtonProps) {
  return (
    <Experiment
      id="exp_GetStartedButton_20260316_8f4a9b2c"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V3: <GetStartedButtonVariant {...props} /> }}
    />
  );
}
