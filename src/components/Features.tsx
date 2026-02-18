"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./Features.original";
import ExperimentVariant from "./Features.experiment";

export default function Features(props: any) {
  return (
    <ProbatProviderClient userId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="d04b82d9-9f0a-4db2-a2de-67c34c5e7e14"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
