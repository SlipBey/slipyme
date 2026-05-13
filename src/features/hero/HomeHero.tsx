"use client";

import { Section } from "@/components/ui/Section";
import { HeroSlider } from "@/components/ui/HeroSlider";
import { HOME_SLIDES } from "./slides";
import { fadeIn } from "@/lib/motion";

export function HomeHero() {
  return (
    <Section id="home-hero" className="py-6 sm:py-12" variants={fadeIn}>
      <HeroSlider slides={HOME_SLIDES} />
    </Section>
  );
}
