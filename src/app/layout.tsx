// eslint-disable-next-line @typescript-eslint/no-explicit-any

import type { ReactNode } from "react";
import { Suspense } from "react";
import { buildMetadata, CONFIG } from "@/lib/seo";
import "@/styles/index.scss";
import "@/styles/tailwind.css";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { ThemeButton } from "@/components/Layout/ThemeButton";
import { I18nProvider } from "@/lib/i18n";
import Analytics from "@/shared/providers/Analytics";
import { ThemeProviderClient } from "@/shared/providers/ThemeProvider";
import { ToasterClient } from "@/shared/providers/Toaster";
import FootNav from "@/components/Layout/FootNav";
import { Inter } from "next/font/google";

export const metadata = buildMetadata();
export const viewport = { themeColor: CONFIG.SEO.themeColor };

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="tr"
      dir="ltr"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={inter.variable}
    >
      <body className="bg-app relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-32 left-0 w-160 h-160 rounded-full bg-sky-500/30 dark:bg-sky-500/50 blur-3xl" />
          <div className="absolute top-1/3 -right-20 w-180 h-180 rounded-full bg-cyan-500/30 dark:bg-sky-500/50 blur-3xl" />
          <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-360 h-360 rounded-full bg-sky-600/20 dark:bg-sky-400/30 blur-3xl" />
        </div>
        <ThemeProviderClient>
          <I18nProvider>
            <main className="select-none">
              <section>
                <Navbar />
                <ThemeButton />
                <div className="min-h-screen mx-auto max-w-4xl xl:max-w-7xl px-4 lg:px-0">
                  {children}
                </div>
                <FootNav />
                <Footer />
              </section>

              <ToasterClient />
              <Suspense fallback={null}>
                <Analytics />
              </Suspense>
            </main>
          </I18nProvider>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
