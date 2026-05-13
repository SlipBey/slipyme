import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3 max-w-2xl",
        align === "center" && "items-center text-center mx-auto",
        className,
      )}
    >
      {eyebrow ? <span className="typo-eyebrow">{eyebrow}</span> : null}
      <h2 className="typo-section-title">{title}</h2>
      {subtitle ? <p className="typo-body max-w-xl">{subtitle}</p> : null}
    </header>
  );
}
