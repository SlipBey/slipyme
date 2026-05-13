"use client";

import Script from "next/script";
import { ANALYTICS } from "@/config/analytics";

export default function Analytics() {
  if (!ANALYTICS.GA_TRACKING_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ANALYTICS.GA_TRACKING_ID}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}
