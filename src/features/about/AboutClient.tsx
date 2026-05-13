"use client";

import { AboutHero } from "./components/AboutHero";
import { AboutValues } from "./components/AboutValues";
import { AboutTimeline } from "./components/AboutTimeline";
import { AboutExpertise } from "./components/AboutExpertise";
import { AboutWhatWeDo } from "./components/AboutWhatWeDo";
import { AboutTeamStats } from "./components/AboutTeamStats";
import { AboutTeamMembers } from "./components/AboutTeamMembers";
import { AboutContactCta } from "./components/AboutContactCta";

export default function AboutClient() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutTimeline />
      <AboutExpertise />
      <AboutWhatWeDo />
      <AboutTeamStats />
      <AboutTeamMembers />
      <AboutContactCta />
    </>
  );
}
