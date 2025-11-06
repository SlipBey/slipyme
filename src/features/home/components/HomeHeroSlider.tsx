"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import Slider from "@/components/Globals/Slider";
import { HOME_SLIDES } from "@/features/home/libs/slides";

export default function HomeHeroSlider() {
  return (
    <AnimatedSection id="home-slider" className="py-5 sm:py-12" mode="both">
      <Slider slides={HOME_SLIDES} />
    </AnimatedSection>
  );
}
