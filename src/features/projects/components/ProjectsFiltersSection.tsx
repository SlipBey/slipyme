"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/animations";
import { TypeFilter } from "../ProjectClient";
import ProjectsFilters from "./Filters";

export default function ProjectsFiltersSection({
  active,
  setActive,
  onSoon,
}: {
  active: TypeFilter;
  setActive: (v: TypeFilter) => void;
  onSoon: () => void;
}) {
  return (
    <AnimatedSection id="filters" className="py-4 sm:py-6">
      <motion.div className="max-w-7xl mx-auto" variants={fadeIn}>
        <ProjectsFilters
          active={active}
          setActive={setActive}
          onSoon={onSoon}
        />
      </motion.div>
    </AnimatedSection>
  );
}
