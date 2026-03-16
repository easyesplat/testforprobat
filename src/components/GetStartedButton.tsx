"use client";
import React from 'react';
import { ProbatProviderClient, Experiment } from "@probat/react";

interface GetStartedButtonProps {
  label?: string;
  large?: boolean;
}

// Control component (original implementation)
const GetStartedButtonControl: React.FC<GetStartedButtonProps> = ({ label = 'Start Building Now', large = false }) => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('get_started_button_click', {
        experiment_id: 'exp_GetStartedButton_20260316_8f4a9b2c',
        variant_id: 'control',
        label
      });
    }
  };

  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`} onClick={handleClick}>
      {label}
    </button>
  );
};

// Variant component (experiment implementation)
const GetStartedButtonVariant: React.FC<GetStartedButtonProps> = ({ label = 'Get Started Free', large = true }) => {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
};

// Wrapper component that maintains the original export
export default function GetStartedButton(props: GetStartedButtonProps) {
  return (
    <ProbatProviderClient customerId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="79d9bb74-0a05-47ee-8397-98d22cdfc961"
        control={<GetStartedButtonControl {...props} />}
        variants={{ V1: <GetStartedButtonVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
