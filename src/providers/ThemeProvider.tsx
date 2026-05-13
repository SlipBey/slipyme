"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProviderClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
