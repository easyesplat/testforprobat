"use client";
import React from 'react';
import { ProbatProviderClient, Experiment } from "@probat/react";

interface GetStartedButtonProps {
  label?: string;
  large?: boolean;
  xlarge?: boolean;
}

// Control component (original)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ 
  label = 'Get Started Free', 
  large = false, 
  xlarge = false 
}) => {
  return (
    <button className={`btn btn-primary${xlarge ? ' btn-xlarge' : large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
};

// Variant component (experiment V3)
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

// Wrapper component with original export name
const GetStartedButton: React.FC<GetStartedButtonProps> = (props) => {
  return (
    <ProbatProviderClient customerId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="exp_GetStartedButton_20260316_a7c3e8f2"
        control={<GetStartedButtonControl {...props} />}
        variants={{ V3: <GetStartedButtonVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
};

export default GetStartedButton;
