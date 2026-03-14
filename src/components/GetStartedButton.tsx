"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./GetStartedButton.original";
import ExperimentVariant from "./GetStartedButton.experiment";

export default function GetStartedButton(props: any) {
  return (
    <ProbatProviderClient userId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="ac3110fb-d398-4031-91cd-9ed3166d434b"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
