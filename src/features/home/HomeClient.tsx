"use client";

import { HomeHero } from "@/features/home/components/HomeHero";
import { AboutTeaser } from "./components/AboutTeaser";
import { CsrTeaser } from "./components/CsrTeaser";
import { ProjectsTeaser } from "./components/ProjectsTeaser";
import { SocialTeaser } from "./components/SocialTeaser";
import { ContactCtaSection } from "./components/ContactCtaSection";
import { MusicTeaser } from "./components/MusicTeaser";

export default function HomeClient() {
  return (
    <>
      <HomeHero />
      <AboutTeaser />
      <CsrTeaser />
      <ProjectsTeaser />
      <MusicTeaser />
      <SocialTeaser />
      <ContactCtaSection />
    </>
  );
}
