"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./GetStartedButton.original";
import ExperimentVariant from "./GetStartedButton.experiment";

export default function GetStartedButton(props: any) {
  return (
    <ProbatProviderClient userId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="2f6f2e59-ef64-45d3-8b6f-72a51c9f376b"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
