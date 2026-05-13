"use client";

import { motion, type Variants } from "framer-motion";
import { useState, type ReactNode } from "react";
import { fadeInUp, defaultViewport } from "@/lib/motion";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  variants?: Variants;
  animate?: boolean;
};

export function Section({
  id,
  className,
  children,
  variants = fadeInUp,
  animate = true,
}: SectionProps) {
  const [isRevealAnimating, setIsRevealAnimating] = useState(false);

  if (!animate) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={cn(className)}
      data-motion-reveal="true"
      data-motion-lock={isRevealAnimating ? "true" : undefined}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={variants}
      onViewportEnter={() => setIsRevealAnimating(true)}
      onAnimationComplete={() => setIsRevealAnimating(false)}
    >
      {children}
    </motion.section>
  );
}
