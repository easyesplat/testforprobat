"use client";
import React from 'react';
import { Experiment } from "@probat/react";

interface GetStartedButtonProps {
  label?: string;
  large?: boolean;
}

// Control component (original)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Try Free - No Credit Card', large = false }) => {
  const handleClick = () => {
    // Fire get_started_button_click event with experiment metadata
    const event = new CustomEvent('get_started_button_click', {
      detail: {
        experiment_id: 'exp_GetStartedButton_20260316_8f4a9b2c',
        variant_id: 'control',
        variant_label: 'Original Copy',
        timestamp: new Date().toISOString()
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <button 
      className={`btn btn-primary${large ? ' btn-large' : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

// Variant component (V2)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = true }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
};

// Wrapper component with original export name
export default function GetStartedButton(props: GetStartedButtonProps) {
  return (
    <Experiment
      id="exp_GetStartedButton_20260316_8f4a9b2c"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V2: <GetStartedButtonVariant {...props} /> }}
    />
  );
}
