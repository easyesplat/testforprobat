"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./Footer.original";
import ExperimentVariant from "./Footer.experiment";

export default function Footer(props: any) {
  return (
    <ProbatProviderClient userId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="c5530aa8-1cdf-4cee-9444-2d7209811f37"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
