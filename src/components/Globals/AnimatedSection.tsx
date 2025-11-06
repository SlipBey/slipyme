"use client";

import type { JSX } from "react";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type TriggerMode = "view" | "mount" | "both";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  mode?: TriggerMode;
  revealIfHashMatches?: boolean;
  viewportAmount?: number;
  rootMargin?: string;
};

export function AnimatedSection({
  id,
  className,
  children,
  as: Tag = "section",
  mode = "view",
  revealIfHashMatches = true,
  viewportAmount = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: Props) {
  const pathname = usePathname();
  const ref = useRef<HTMLElement | null>(null);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const startShown = mode === "mount" || mode === "both";
  const [shown, setShown] = useState<boolean>(startShown);

  useEffect(() => {
    if (!revealIfHashMatches) return;
    const check = () => {
      if (!isClient) return;
      const hash = window.location.hash.replace("#", "");
      if (hash && id && hash === id) setShown(true);
    };
    check();
    if (isClient) {
      window.addEventListener("hashchange", check);
      window.addEventListener("popstate", check);
      return () => {
        window.removeEventListener("hashchange", check);
        window.removeEventListener("popstate", check);
      };
    }
  }, [id, revealIfHashMatches, pathname, isClient]);

  useEffect(() => {
    if (!isClient) return;
    if (mode === "mount") return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (mode === "view") io.unobserve(el);
          } else if (mode === "both") {
            setShown(false);
          }
        }
      },
      {
        root: null,
        rootMargin,
        threshold: viewportAmount,
      },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [isClient, mode, viewportAmount, rootMargin]);

  const style: React.CSSProperties = !isClient
    ? { opacity: 1, transform: "none" }
    : shown
      ? {
          opacity: 1,
          transform: "none",
          transition: "opacity .45s ease, transform .45s ease",
        }
      : {
          opacity: 0,
          transform: "translateY(14px)",
          transition: "opacity .45s ease, transform .45s ease",
        };

  const Comp: any = Tag;

  return (
    <Comp id={id} ref={ref as any} className={className} style={style}>
      {children}
    </Comp>
  );
}

export default AnimatedSection;
