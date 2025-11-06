"use client";

import CsrAnnounce from "./components/CsrAnnounce";
import CsrHero from "./components/CsrHero";
import CsrInitiatives from "./components/CsrInitiatives";
import CsrPillars from "./components/CsrPillars";
import CsrSubscribe from "./components/CsrSubscribe";
import CsrTransparencyFaq from "./components/CsrTransparencyFaq";

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
