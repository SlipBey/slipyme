"use client";

import { CsrHero } from "./components/CsrHero";
import { CsrPillars } from "./components/CsrPillars";
import { CsrInitiatives } from "./components/CsrInitiatives";
import { CsrAnnounce } from "./components/CsrAnnounce";
import { CsrSubscribe } from "./components/CsrSubscribe";
import { CsrTransparencyFaq } from "./components/CsrTransparencyFaq";

export default function CsrClient() {
  return (
    <>
      <CsrHero />
      <CsrPillars />
      <CsrInitiatives />
      <CsrAnnounce />
      <CsrSubscribe />
      <CsrTransparencyFaq />
    </>
  );
}
