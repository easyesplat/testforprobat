"use client";
import React from 'react';
import { ProbatProviderClient, Experiment } from "@probat/react";

interface GetStartedButtonProps {
  label?: string;
  large?: boolean;
}

// Control component (original implementation)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ 
  label = 'Try Free - No Card Required', 
  large = false 
}) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
};

// Variant component (experiment implementation)
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

// Wrapper component with experiment
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <ProbatProviderClient userId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="exp_GetStartedButton_20260316_a3f8c2d1"
        control={<GetStartedButtonControl {...props} />}
        variants={{ V2: <GetStartedButtonVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
};

export default GetStartedButton;
