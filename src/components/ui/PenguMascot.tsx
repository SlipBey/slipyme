"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/cn";

type PenguPose = "standing" | "waving" | "thinking" | "swimming";

type PenguMascotProps = {
  pose?: PenguPose;
  size?: number;
  className?: string;
  alt?: string;
  animated?: boolean;
  priority?: boolean;
};

export function PenguMascot({
  pose = "standing",
  size = 144,
  className,
  alt = "Pengu",
  animated = true,
  priority = false,
}: PenguMascotProps) {
  const src = "/resimler/penguen.png";

  return (
    <motion.div
      className={cn(
        "relative inline-flex items-center justify-center select-none",
        className,
      )}
      style={{ width: size, height: size }}
      animate={animated ? { y: [0, -6, 0] } : undefined}
      transition={
        animated
          ? { duration: 4, ease: "easeInOut", repeat: Infinity }
          : undefined
      }
      whileHover={{ scale: 1.05, rotate: -3 }}
      data-pose={pose}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full
                   bg-linear-to-br from-sky-400/20 via-cyan-400/15 to-blue-500/20
                   blur-2xl scale-125"
      />
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        priority={priority}
        sizes={`${size}px`}
        className="relative z-10 object-contain drop-shadow-lg"
      />
    </motion.div>
  );
}
