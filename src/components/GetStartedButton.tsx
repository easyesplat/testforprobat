"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./GetStartedButton.original";
import { GetStartedButton as ExperimentVariant } from "./GetStartedButton.experiment";

export default function GetStartedButton(props: any) {
  return (
    <ProbatProviderClient userId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="a779816c-2250-4cb2-b197-afffc0f0ccd2"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
