"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./GetStartedButton.original";
import ExperimentVariant from "./GetStartedButton.experiment";

export default function GetStartedButton(props: any) {
  return (
    <ProbatProviderClient customerId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="79d9bb74-0a05-47ee-8397-98d22cdfc961"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
