import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: ReactNode;
};

const sizeMap = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-4xl xl:max-w-7xl",
} as const;

export function Container({
  as: Tag = "div",
  size = "xl",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-4 lg:px-0", sizeMap[size], className)}
    >
      {children}
    </Tag>
  );
}
