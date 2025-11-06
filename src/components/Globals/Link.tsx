"use client";

import type { CSSProperties, FC, ReactNode, MouseEvent } from "react";
import classnames from "classnames";
import NextLink from "next/link";

export interface ILinkProps {
  href: string;
  className?: string;
  underline?: boolean;
  id?: string;
  style?: CSSProperties;
  children: ReactNode;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  blank?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  download?: boolean;
  rel?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  [key: string]: any;
}

const isExternalHref = (href: string) => {
  return /^(https?:)?\/\//i.test(href) || /^(mailto:|tel:|ftp:)/i.test(href);
};

export const Link: FC<ILinkProps> = ({
  href,
  children,
  id,
  className,
  underline,
  style,
  onMouseOver,
  onMouseOut,
  blank,
  disabled,
  onClick,
  download,
  rel,
  target,
  ...rest
}) => {
  const external = isExternalHref(href);

  const willOpenNewTab = blank || (external && !download && target !== "_self");
  const finalTarget = willOpenNewTab ? "_blank" : target;
  const finalRel = willOpenNewTab
    ? ["noopener", "noreferrer", rel].filter(Boolean).join(" ")
    : rel;

  const commonClass = classnames(
    { "hover:underline": underline },
    { "pointer-events-none opacity-60": disabled },
    className,
  );

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement | HTMLAnchorElement>,
  ) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.();
  };

  if (external || blank || download) {
    return (
      <a
        href={href}
        id={id}
        style={style}
        className={commonClass}
        target={finalTarget}
        rel={finalRel}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={handleClick}
        aria-disabled={disabled || undefined}
        {...(download ? { download: true } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      id={id}
      style={style}
      className={commonClass}
      onMouseOver={onMouseOver as any}
      onMouseOut={onMouseOut as any}
      onClick={handleClick as any}
      prefetch={false}
      target={finalTarget}
      rel={finalRel}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
