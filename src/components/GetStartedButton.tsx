"use client";
import React from 'react';
import { Experiment } from "@probat/react";

interface GetStartedButtonProps {
  label?: string;
  large?: boolean;
}

// Control component (original)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = false }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
};

// Variant component (experiment)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = true }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
};

// Wrapper component with original export name
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <Experiment
      id="exp_GetStartedButton_20260316_a7c3e8f2"
      control={<GetStartedButtonControl {...props} />}
      variants={{ V5: <GetStartedButtonVariant {...props} /> }}
    />
  );
};

export default GetStartedButton;
