"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ProjectsGrid } from "./ProjectsGrid";
import type { Project } from "@/config/projects";
import { fadeInUp } from "@/lib/motion";

type ProjectsGroupSectionProps = {
  id: string;
  title: string;
  projects: Project[];
  hideIfEmpty?: boolean;
};

export function ProjectsGroupSection({
  id,
  title,
  projects,
  hideIfEmpty = false,
}: ProjectsGroupSectionProps) {
  if (hideIfEmpty && projects.length === 0) return null;

  return (
    <Section id={id} className="py-8 md:py-12">
      <motion.h2
        variants={fadeInUp}
        className="typo-section-title mb-2 text-center sm:text-left"
      >
        {title}
      </motion.h2>
      <div className="h-1 w-20 mx-auto sm:mx-0 rounded-full bg-linear-to-r from-sky-600 to-cyan-400 mb-8" />
      <ProjectsGrid projects={projects} />
    </Section>
  );
}
