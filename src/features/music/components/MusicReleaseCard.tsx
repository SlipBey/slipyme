"use client";

import Image from "next/image";
import { FiMusic, FiPlay } from "react-icons/fi";
import type { SpotifyRelease } from "../types/music";
import { useI18n } from "@/lib/i18n";

export function MusicReleaseCard({ release }: { release: SpotifyRelease }) {
  const { t } = useI18n();
  const year = release.releaseDate
    ? new Date(release.releaseDate).getFullYear()
    : "";

  return (
    <a
      href={release.spotifyUrl ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-sky-500/15 bg-white/65 p-3 shadow-xl shadow-sky-950/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:bg-white/85 hover:shadow-2xl hover:shadow-sky-950/10 dark:bg-white/4.5 dark:hover:bg-white/7.5"
    >
      <div className="relative aspect-square overflow-hidden rounded-[1.35rem] bg-sky-950/10 shadow-lg shadow-sky-950/10 ring-1 ring-black/5 dark:bg-sky-950/30 dark:ring-white/10">
        {release.image ? (
          <Image
            src={release.image}
            alt={release.name}
            fill
            unoptimized
            sizes="(min-width:1280px) 280px, (min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-sky-500/10 text-sky-600 dark:text-sky-300">
            <FiMusic size={40} aria-hidden />
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-sky-950/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <div className="grid h-14 w-14 translate-y-3 place-items-center rounded-full bg-sky-500 text-white shadow-xl shadow-sky-950/25 transition-transform duration-300 group-hover:translate-y-0">
            <FiPlay
              size={26}
              fill="currentColor"
              className="ml-1"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2 py-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
            {release.type}
          </span>

          {year ? (
            <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
              {year}
            </span>
          ) : null}
        </div>

        <h3 className="mt-2 line-clamp-1 text-base font-black tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-300">
          {release.name}
        </h3>

        <div className="mt-1 flex items-center gap-2">
          <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {release.totalTracks > 1
              ? t("music.releases.tracks", { count: release.totalTracks })
              : t("music.releases.single")}
          </p>
          <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-500">
            Spotify
          </span>
        </div>
      </div>
    </a>
  );
}
