"use client";

import HomeHeroSlider from "./components/HomeHeroSlider";
import AboutSection from "./components/AboutSection";
import CsrSection from "./components/CsrSection";
import ProjectsBlock from "./components/ProjectsBlock";
import SocialBlock from "./components/SocialBlock";
import ContactCta from "./components/ContactCta";

export default function HomeClient() {
  return (
    <>
      <HomeHeroSlider />
      <AboutSection />
      <CsrSection />
      <ProjectsBlock />
      <SocialBlock />
      <ContactCta />
    </>
  );
}
