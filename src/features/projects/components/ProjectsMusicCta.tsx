"use client";

import { FiArrowRight, FiMusic } from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { useI18n } from "@/lib/i18n";
import { MUSIC_PLATFORM_LINKS } from "@/config/music";

export function ProjectsMusicCta() {
  const { t } = useI18n();
  const primary = MUSIC_PLATFORM_LINKS.find((item) => item.primary);

  return (
    <Section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-4xl border border-sky-500/15 bg-white/70 p-6 shadow-xl shadow-sky-950/5 backdrop-blur-2xl dark:bg-white/4.5 sm:p-8 lg:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(14,165,233,0.18),transparent_32%),radial-gradient(circle_at_92%_20%,rgba(34,211,238,0.13),transparent_30%)]"
        />

        <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="typo-eyebrow inline-flex items-center gap-2">
              <FiMusic size={13} aria-hidden />
              {t("music.hero.eyebrow")}
            </div>

            <h2 className="typo-section-title mt-4">
              {t("music.projects.title")}
            </h2>

            <p className="typo-body mt-3 max-w-2xl">
              {t("music.projects.subtitle")}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {primary ? (
              <Link
                href={primary.href}
                blank
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-400/20 bg-white/70 px-5 py-3 text-sm font-bold text-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white dark:bg-white/5.5 dark:text-zinc-100 dark:hover:bg-white/8.5"
              >
                <primary.icon size={17} aria-hidden />
                {t(`music.platforms.${primary.key}`)}
              </Link>
            ) : null}

            <Link
              href="/music"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              {t("music.home.cta")}
              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>
    </Section>
  );
}
