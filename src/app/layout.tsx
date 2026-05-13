import type { ReactNode } from "react";
import { Suspense } from "react";
import { GeistSans } from "geist/font/sans";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/config/site";
import { I18nProvider } from "@/lib/i18n";
import { getServerLang } from "@/lib/i18n/server";
import { ThemeProviderClient } from "@/providers/ThemeProvider";
import { ToasterClient } from "@/providers/ToasterProvider";
import Analytics from "@/providers/AnalyticsProvider";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

// @ts-ignore
import "@/styles/globals.css";

export const metadata = buildMetadata();
export const viewport = { themeColor: SITE.themeColor };

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const lang = await getServerLang();

  return (
    <html
      lang={lang}
      dir="ltr"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={GeistSans.variable}
      style={
        {
          "--font-geist": "var(--font-geist-sans)",
          "--font-inter": "var(--font-geist-sans)",
        } as React.CSSProperties
      }
    >
      <body className="bg-app relative">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div
            className="absolute -top-40 -left-20 w-160 h-160 rounded-full
                       bg-sky-400/15 dark:bg-sky-500/20 blur-3xl"
          />
          <div
            className="absolute top-1/3 -right-32 w-110 h-110 rounded-full
                       bg-cyan-400/10 dark:bg-cyan-500/15 blur-3xl"
          />
          <div
            className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-200 h-200 rounded-full
                       bg-blue-500/10 dark:bg-sky-400/10 blur-3xl"
          />
        </div>

        <ThemeProviderClient>
          <I18nProvider initialLang={lang}>
            <Navbar />
            <main className="relative">
              <div className="mx-auto max-w-4xl xl:max-w-7xl px-4 lg:px-0 min-h-[calc(100dvh-12rem)]">
                {children}
              </div>
            </main>
            <Footer />
            <MobileNav />
            <ToasterClient />
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
          </I18nProvider>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
