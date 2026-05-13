"use client";

import { TopBar } from "./TopBar";
import { MainNav } from "./MainNav";

export function Navbar() {
  return (
    <header className="sm:sticky top-0 z-40 w-full">
      <TopBar />
      <MainNav />
    </header>
  );
}
