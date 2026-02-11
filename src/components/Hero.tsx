"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./Hero.original";
import ExperimentVariant from "./Hero.experiment";

export default function Hero(props: any) {
  return (
    <ProbatProviderClient userId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <Experiment
        id="356923ec-5947-40ac-90b0-1dbd4f82a80c"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
