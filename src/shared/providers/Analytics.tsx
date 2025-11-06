"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // @ts-ignore
    const gtag = (window as any).gtag;
    if (typeof gtag === "function") {
      gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
        page_path:
          pathname + (search?.toString() ? `?${search.toString()}` : ""),
      });
    }
  }, [pathname, search]);

  return null;
}
