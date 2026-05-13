"use client";

import {
  FiMusic,
  FiHeadphones,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { useI18n } from "@/lib/i18n";
import { Card } from "@/components/ui/Card";
import { MUSIC_PLATFORM_LINKS } from "@/config/music";

export function MusicHero() {
  const { t } = useI18n();
  const primary = MUSIC_PLATFORM_LINKS.find((item) => item.primary);

  return (
    <Section
      id="music-hero"
      className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-12"
    >
      <Card
        variant="glass"
        cap
        className="rounded-4xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center">
          <div className="min-w-0">
            <span className="typo-eyebrow inline-flex items-center gap-2">
              <FiMusic size={15} aria-hidden />
              {t("music.hero.eyebrow")}
            </span>

            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl">
              {t("music.hero.title")}
            </h1>

            <p className="typo-body mt-5 max-w-2xl">
              {t("music.hero.subtitle")}
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {t("music.hero.description")}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {primary ? (
                <Link
                  href={primary.href}
                  blank
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-sm shadow-sky-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg dark:bg-sky-500 dark:hover:bg-sky-400"
                >
                  <primary.icon size={18} aria-hidden />
                  {t(`music.platforms.${primary.key}`)}
                  <FiArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              ) : null}

              <a
                href="#spotify-releases"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-400/20 bg-white/60 px-5 py-3 text-sm font-bold text-zinc-900 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 dark:bg-white/5.5 dark:text-zinc-100 dark:hover:bg-white/8.5"
              >
                <FiHeadphones size={17} aria-hidden />
                {t("music.hero.releasesCta")}
              </a>
            </div>
          </div>

          <div className="grid min-w-0 gap-3">
            {MUSIC_PLATFORM_LINKS.map((platform) => {
              const Icon = platform.icon;

              return (
                <Link
                  key={platform.key}
                  href={platform.href}
                  blank
                  className="group flex min-w-0 items-center justify-between gap-4 rounded-3xl border border-sky-500/15 bg-white/55 px-5 py-4 text-zinc-900 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/35 hover:bg-white/80 hover:shadow-lg hover:shadow-sky-950/5 dark:bg-white/4.5 dark:text-zinc-100 dark:hover:bg-white/7.5"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-500/10 text-sky-600 ring-1 ring-sky-500/15 dark:text-sky-300">
                      <Icon size={19} aria-hidden />
                    </span>

                    <span className="min-w-0">
                      <span className="block truncate font-black tracking-tight">
                        {t(`music.platforms.${platform.key}`)}
                      </span>
                      <span className="mt-0.5 block truncate text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {t(`music.platformDescriptions.${platform.key}`)}
                      </span>
                    </span>
                  </span>

                  <FiExternalLink
                    size={16}
                    className="shrink-0 text-sky-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-sky-300"
                    aria-hidden
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </Card>
    </Section>
  );
}
