"use client";

import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeButton: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-12 md:bottom-4 right-0 md:right-4 z-50">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 shadow-xl"
        aria-label={theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"}
      >
        <span className="text-xl md:text-3xl">
          {theme === "dark" ? (
            <FiSun aria-hidden="true" focusable="false" />
          ) : (
            <FiMoon aria-hidden="true" focusable="false" />
          )}
        </span>
      </button>
    </div>
  );
};
