"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { MUSIC_API_LIMIT } from "@/config/music";
import type { SpotifyRelease } from "../types/music";

type State = {
  loading: boolean;
  error: string | null;
  updatedAt: string | null;
  items: SpotifyRelease[];
};

type AnyRecord = Record<string, unknown>;

function isRecord(value: unknown): value is AnyRecord {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function stringOrNull(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value : null;
}

function numberOrZero(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function getImage(item: AnyRecord): string | null {
  const direct =
    stringOrNull(item.image) ??
    stringOrNull(item.imageUrl) ??
    stringOrNull(item.cover) ??
    stringOrNull(item.coverUrl) ??
    stringOrNull(item.albumImage);

  if (direct) return direct;

  const images = item.images;
  if (Array.isArray(images)) {
    const first = images.find(isRecord);
    if (first) return stringOrNull(first.url);
  }

  return null;
}

function getSpotifyUrl(item: AnyRecord): string | null {
  const direct =
    stringOrNull(item.spotifyUrl) ??
    stringOrNull(item.url) ??
    stringOrNull(item.href) ??
    stringOrNull(item.externalUrl);

  if (direct) return direct;

  const externalUrls = item.external_urls;
  if (isRecord(externalUrls)) {
    return stringOrNull(externalUrls.spotify);
  }

  const external = item.external;
  if (isRecord(external)) {
    return stringOrNull(external.spotify);
  }

  return null;
}

function normalizeRelease(item: unknown, index: number): SpotifyRelease | null {
  if (!isRecord(item)) return null;

  const name = stringOrNull(item.name) ?? stringOrNull(item.title);
  if (!name) return null;

  return {
    id:
      stringOrNull(item.id) ??
      stringOrNull(item.spotifyId) ??
      stringOrNull(item.uri) ??
      `${name}-${index}`,
    name,
    type:
      stringOrNull(item.type) ??
      stringOrNull(item.album_type) ??
      stringOrNull(item.releaseType) ??
      "release",
    releaseDate:
      stringOrNull(item.releaseDate) ??
      stringOrNull(item.release_date) ??
      stringOrNull(item.date),
    totalTracks:
      numberOrZero(item.totalTracks) ||
      numberOrZero(item.total_tracks) ||
      numberOrZero(item.trackCount),
    image: getImage(item),
    spotifyUrl: getSpotifyUrl(item),
  };
}

function findItems(payload: unknown): unknown[] {
  if (Array.isArray(payload)) return payload;

  if (!isRecord(payload)) return [];

  if (Array.isArray(payload.items)) return payload.items;
  if (Array.isArray(payload.releases)) return payload.releases;
  if (Array.isArray(payload.albums)) return payload.albums;
  if (Array.isArray(payload.data)) return payload.data;

  if (isRecord(payload.data)) {
    if (Array.isArray(payload.data.items)) return payload.data.items;
    if (Array.isArray(payload.data.releases)) return payload.data.releases;
    if (Array.isArray(payload.data.albums)) return payload.data.albums;
  }

  return [];
}

function findUpdatedAt(payload: unknown): string | null {
  if (!isRecord(payload)) return null;

  const direct =
    stringOrNull(payload.updatedAt) ??
    stringOrNull(payload.lastUpdatedAt) ??
    stringOrNull(payload.syncedAt);

  if (direct) return direct;

  if (isRecord(payload.data)) {
    return (
      stringOrNull(payload.data.updatedAt) ??
      stringOrNull(payload.data.lastUpdatedAt) ??
      stringOrNull(payload.data.syncedAt)
    );
  }

  return null;
}

export function useSpotifyReleases(limit = MUSIC_API_LIMIT) {
  const [state, setState] = useState<State>({
    loading: true,
    error: null,
    updatedAt: null,
    items: [],
  });

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        const res = await api.get("/api/music/spotify", {
          params: { limit },
        });

        if (!active) return;

        const rawItems = findItems(res.data);
        const items = rawItems
          .map((item, index) => normalizeRelease(item, index))
          .filter((item): item is SpotifyRelease => Boolean(item));

        setState({
          loading: false,
          error: null,
          updatedAt: findUpdatedAt(res.data),
          items,
        });
      } catch (error) {
        if (!active) return;

        setState({
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "Spotify releases could not be loaded",
          updatedAt: null,
          items: [],
        });
      }
    }

    load();

    return () => {
      active = false;
    };
  }, [limit]);

  return state;
}
