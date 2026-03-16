"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./Footer.original";
import ExperimentVariant from "./Footer.experiment";

export default function Footer(props: any) {
  return (
    <ProbatProviderClient userId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="b44d96f9-ae3d-46ef-8bb4-cb90cce59aea"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
