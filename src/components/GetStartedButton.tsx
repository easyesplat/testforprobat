"use client";
import React from 'react';
import { Experiment } from "@probat/react";

interface GetStartedButtonProps {
  label?: string;
  large?: boolean;
}

// Control component (original)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ 
  label = 'Get Started Free', 
  large = false 
}) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
      <span style={{ marginLeft: '0.5rem' }}>→</span>
    </button>
  );
};

// Variant component (experiment)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ 
  label = 'Get Started Free', 
  large = true 
}) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
};

// Wrapper component (maintains original export)
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260316_a3f8c2d1"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V3: <GetStartedButtonVariant {...props} /> }}
    />
  );
};

export default GetStartedButton;
