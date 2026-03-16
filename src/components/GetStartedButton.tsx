"use client";
import React from 'react';
import { ProbatProviderClient, Experiment } from "@probat/react";

interface GetStartedButtonProps {
  label?: string;
  large?: boolean;
}

// Control version (original)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ 
  label = 'Get Started Free', 
  large = false 
}) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
};

// Variant version (experiment)
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
export default function GetStartedButton(props: GetStartedButtonProps) {
  return (
    <ProbatProviderClient customerId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="exp_GetStartedButton_20260316_a7c3e8f2"
        control={<GetStartedButtonControl {...props} />}
        variants={{ V2: <GetStartedButtonVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
