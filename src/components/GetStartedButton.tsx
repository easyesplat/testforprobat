"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";

interface GetStartedButtonProps {
  label?: string;
  large?: boolean;
}

// Control component - original implementation
function GetStartedButtonControl({ label = 'Join 10K+ Users Free', large = false }: GetStartedButtonProps) {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
}

// Variant component - V4 implementation
function GetStartedButtonVariant({ label = 'Get Started Free', large = true }: GetStartedButtonProps) {
  return (
    <button className={`btn btn-primary${large ? ' btn-large' : ''}`}>
      {label}
    </button>
  );
}

// Wrapper component - maintains original export
export default function GetStartedButton(props: GetStartedButtonProps) {
  return (
    <ProbatProviderClient customerId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="exp_GetStartedButton_20260316_a7c3e8f2"
        control={<GetStartedButtonControl {...props} />}
        variants={{ V4: <GetStartedButtonVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
