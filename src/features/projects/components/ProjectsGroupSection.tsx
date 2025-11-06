"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import type { Project } from "@/libs/config/projects";
import ProjectsGrid from "@/components/Projects/Grid";

export default function ProjectsGroupSection({
  id,
  title,
  projects,
  hideIfEmpty = false,
}: {
  id: string;
  title: string;
  projects: Project[];
  hideIfEmpty?: boolean;
}) {
  if (hideIfEmpty && projects.length === 0) return null;

  return (
    <AnimatedSection id={id} className="py-6 sm:py-10">
      <motion.div className="max-w-7xl mx-auto" variants={fadeIn}>
        <motion.h2
          className="typo-section-title mb-2 text-center sm:text-left"
          variants={fadeInUp}
        >
          {title}
        </motion.h2>

        <div className="h-1 w-20 mx-auto sm:mx-0 bg-linear-to-r from-sky-600 to-blue-400 rounded-full mb-6" />

        <ProjectsGrid projects={projects} />
      </motion.div>
    </AnimatedSection>
  );
}
