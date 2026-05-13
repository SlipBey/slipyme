"use client";

import type {
  AnchorHTMLAttributes,
  CSSProperties,
  MouseEvent,
  ReactNode,
} from "react";
import NextLink from "next/link";
import { cn } from "@/lib/cn";

export interface LinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  href: string;
  className?: string;
  underline?: boolean;
  style?: CSSProperties;
  children: ReactNode;
  blank?: boolean;
  disabled?: boolean;
  prefetch?: boolean;
}

const isExternalHref = (href: string) =>
  /^(https?:)?\/\//i.test(href) || /^(mailto:|tel:|ftp:)/i.test(href);

export function Link({
  href,
  children,
  className,
  underline,
  style,
  blank,
  disabled,
  rel,
  target,
  onClick,
  prefetch = false,
  ...rest
}: LinkProps) {
  const external = isExternalHref(href);
  const willOpenNewTab = blank || (external && target !== "_self");
  const finalTarget = willOpenNewTab ? "_blank" : target;
  const finalRel = willOpenNewTab
    ? ["noopener", "noreferrer", rel].filter(Boolean).join(" ")
    : rel;

  const classes = cn(
    underline && "hover:underline",
    disabled && "pointer-events-none opacity-60",
    className,
  );

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  if (external || blank) {
    return (
      <a
        href={href}
        className={classes}
        style={style}
        target={finalTarget}
        rel={finalRel}
        onClick={handleClick}
        aria-disabled={disabled || undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={classes}
      style={style}
      prefetch={prefetch}
      target={finalTarget}
      rel={finalRel}
      onClick={handleClick}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {children}
    </NextLink>
  );
}
