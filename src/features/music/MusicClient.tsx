"use client";

import {
  FiArrowRight,
  FiExternalLink,
  FiHeadphones,
  FiMusic,
} from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/lib/i18n";
import { MUSIC_API_LIMIT, MUSIC_PLATFORM_LINKS } from "@/config/music";
import { useSpotifyReleases } from "./hooks/useSpotifyReleases";
import { MusicReleaseCard } from "./components/MusicReleaseCard";
import { MusicHero } from "./components/MusicHero";

function formatUpdatedAt(value: string | null) {
  if (!value) return null;

  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return null;

  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default function MusicClient() {
  const { t } = useI18n();

  const { loading, error, updatedAt, items } =
    useSpotifyReleases(MUSIC_API_LIMIT);

  return (
    <main className="relative">
      <MusicHero />

      <Section
        id="spotify-releases"
        animate={false}
        className="mx-auto w-full max-w-7xl px-4 py-24"
      >
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <SectionHeading
            eyebrow={t("music.releases.eyebrow")}
            title={t("music.releases.title")}
            className="text-left"
          />
          {updatedAt && (
            <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-500 md:mt-0">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Son Güncelleme: {formatUpdatedAt(updatedAt)}
            </div>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="aspect-3/4 animate-pulse rounded-4xl bg-zinc-900/50"
              />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-500/10 bg-red-500/5 p-12 text-center">
            <p className="text-red-400 font-medium">
              {t("music.releases.error")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {items.map((release) => (
              <MusicReleaseCard key={release.id} release={release} />
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}
