import Image from "next/image";
import type { ReactNode } from "react";
import { Link } from "@/components/ui/Link";
import { cn } from "@/lib/cn";
import { FiArrowRight } from "react-icons/fi";

type CtaPanelProps = {
  title: string;
  body: string;
  href: string;
  ctaLabel: string;
  imgSrc: string;
  imgAlt?: string;
  rightDecor?: ReactNode;
  variant?: "primary" | "violet" | "emerald";
  className?: string;
};

const variantStyles = {
  primary: "from-sky-700 via-sky-600 to-cyan-500",
  violet: "from-violet-700 via-violet-600 to-fuchsia-500",
  emerald: "from-emerald-700 via-emerald-600 to-teal-500",
} as const;

export function CtaPanel({
  title,
  body,
  href,
  ctaLabel,
  imgSrc,
  imgAlt = "",
  rightDecor,
  variant = "primary",
  className,
}: CtaPanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl ring-1 ring-white/15",
        "bg-linear-to-br shadow-xl",
        variantStyles[variant],
        "px-6 sm:px-10 py-10 grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-6 items-center",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full
                   bg-white/15 blur-3xl"
      />

      <div className="relative">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-2 text-white/85 text-sm md:text-base max-w-md">
          {body}
        </p>
        <Link
          href={href}
          className="group mt-5 inline-flex items-center gap-2 rounded-xl
                     bg-white text-sky-700 px-5 py-2.5 font-semibold
                     ring-1 ring-white/70 hover:bg-white/95 transition-all"
        >
          {ctaLabel}
          <FiArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>

      <div className="relative flex items-center justify-center md:justify-end">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={140}
          height={140}
          loading="lazy"
          sizes="(min-width:768px) 140px, 110px"
          className="w-28 md:w-36 drop-shadow-2xl"
        />
        {rightDecor}
      </div>
    </div>
  );
}
